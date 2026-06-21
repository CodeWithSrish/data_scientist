'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CinematicLayer from './CinematicLayer';
import styles from './VideoIntro.module.css';

const VIDEO_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/srishti-intro.mp4`;

export default function VideoIntro() {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);

  const videoBgRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // ---- GSAP entrance sequence ----
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.set(heroRef.current, { opacity: 0 })
        .to(heroRef.current, { opacity: 1, duration: 1.1, ease: 'power2.out' })
        .from(
          videoBgRef.current,
          { opacity: 0, scale: 1.02, duration: 1.2, ease: 'power2.out' },
          '-=0.9'
        )
        .from(
          nameRef.current ? nameRef.current.querySelectorAll(`.${styles.nameLine}`) : [],
          { opacity: 0, y: 46, duration: 0.95, stagger: 0.12 },
          '-=0.65'
        )
        .from(
          controlsRef.current,
          { opacity: 0, y: 10, duration: 0.6 },
          '-=0.45'
        )
        .from(
          scrollRef.current,
          { opacity: 0, y: -10, duration: 0.6 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  function togglePlay() {
    const video = videoBgRef.current;
    if (!video) return;
    if (isPlaying) { video.pause(); } else { video.play(); }
    setIsPlaying(!isPlaying);
  }

  function toggleMute() {
    const video = videoBgRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  function scrollToNext() {
    const next = document.getElementById('projects');
    next?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Immersive Background Video */}
      <div className={styles.bgLayer} aria-hidden="true">
        <video
          ref={videoBgRef}
          className={styles.bgVideo}
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className={styles.gradientOverlay} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <CinematicLayer />

      {/* Screen Presentation Wrapper */}
      <div className={styles.stage}>
        <div className={styles.content}>
          <h1 className={styles.name} ref={nameRef}>
            <span className={styles.nameLine}>Srishti</span>
            <span className={styles.nameLine}>
              <em>Rajput</em>
            </span>
          </h1>
        </div>
      </div>

      {/* Media Playback Controls */}
      <div className={styles.controls} ref={controlsRef}>
        <button
          className={styles.glassBtn}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          className={styles.glassBtn}
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <MuteIcon /> : <UnmuteIcon />}
        </button>
      </div>

      {/* Footer Navigation Trigger */}
      <button
        className={styles.scrollIndicator}
        ref={scrollRef}
        onClick={scrollToNext}
        aria-label="Scroll to projects"
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollLine}>
          <span className={styles.scrollPulse} />
        </span>
      </button>
    </section>
  );
}

function PlayIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5L13.5 8L4 13.5V2.5Z"/></svg>; }
function PauseIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><rect x="3.5" y="2.5" width="3" height="11" rx="0.8"/><rect x="9.5" y="2.5" width="3" height="11" rx="0.8"/></svg>; }
function MuteIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 6h2.6L9 2.8v10.4L4.6 10H2V6Z"/></svg>; }
function UnmuteIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 6h2.6L9 2.8v10.4L4.6 10H2V6Z" fill="currentColor"/><path d="M11.5 5.5l3 5M14.5 5.5l-3 5"/></svg>; }
