'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * CinematicLayer
 * A transparent, full-bleed canvas of slow-floating warm bokeh particles
 * (additive blending, soft circular sprites) with subtle mouse-parallax
 * camera movement. Pure Three.js — no scene complexity beyond what's
 * needed to feel like ambient depth behind the hero video.
 */
export default function CinematicLayer() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    // ---- Scene / camera / renderer ----
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'low-power',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    mount.appendChild(renderer.domElement);

    // ---- Soft circular sprite texture, generated on a canvas ----
    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width = 128;
    spriteCanvas.height = 128;
    const ctx = spriteCanvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.25, 'rgba(255,210,170,0.7)');
    gradient.addColorStop(1, 'rgba(255,150,80,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    const spriteTexture = new THREE.CanvasTexture(spriteCanvas);

    // ---- Particle field ----
    const COUNT = 90;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT); // per-particle phase offset
    const speeds = new Float32Array(COUNT);
    const scales = new Float32Array(COUNT);
    const warmth = new Float32Array(COUNT); // 0 = white, 1 = ember

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      seeds[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.15 + Math.random() * 0.25;
      scales[i] = 0.4 + Math.random() * 1.6;
      warmth[i] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const colorOrange = new THREE.Color('#ff7a3d');
    const colorWhite = new THREE.Color('#fff3e6');
    const colors = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const c = colorWhite.clone().lerp(colorOrange, warmth[i] * 0.8);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.1,
      map: spriteTexture,
      transparent: true,
      opacity: 0.55,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ---- Mouse parallax target ----
    const mouse = { x: 0, y: 0 };
    const targetCam = { x: 0, y: 0 };

    function handlePointerMove(e: PointerEvent) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // ---- Resize handling ----
    function handleResize() {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    // ---- Animation loop ----
    const clock = new THREE.Clock();
    let rafId = 0;
    let isVisible = true;

    const visHandler = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', visHandler);

    function animate() {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const t = clock.getElapsedTime();
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;

      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        const baseX = positions[ix];
        const baseY = positions[ix + 1];
        posAttr.array[ix] = baseX + Math.sin(t * speeds[i] + seeds[i]) * 0.8;
        posAttr.array[ix + 1] =
          baseY + Math.cos(t * speeds[i] * 0.8 + seeds[i]) * 0.6 + t * 0.02 * speeds[i];
      }
      // gentle vertical drift wrap
      for (let i = 0; i < COUNT; i++) {
        const iy = i * 3 + 1;
        if (posAttr.array[iy] > 9) {
          positions[i * 3 + 1] -= 18;
        }
      }
      posAttr.needsUpdate = true;

      // smooth parallax camera ease
      targetCam.x += (mouse.x * 1.2 - targetCam.x) * 0.03;
      targetCam.y += (-mouse.y * 0.8 - targetCam.y) * 0.03;
      camera.position.x = targetCam.x;
      camera.position.y = targetCam.y;
      camera.lookAt(0, 0, 0);

      points.rotation.y = t * 0.01;

      renderer.render(scene, camera);
    }
    animate();

    // ---- Cleanup ----
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', visHandler);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      spriteTexture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 3,
        pointerEvents: 'none',
      }}
    />
  );
}
