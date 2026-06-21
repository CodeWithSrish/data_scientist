import VideoIntro from '@/components/VideoIntro';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';

export default function Home() {
  return (
    <main>
      <VideoIntro />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certificates />
      <footer
        style={{
          padding: '32px clamp(20px, 5vw, 72px) 48px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: 'var(--ink-faint)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          borderTop: '1px solid var(--panel-line)',
        }}
      >
        <span>© {new Date().getFullYear()} Srishti Rajput</span>
        <span>Built with Next.js · Three.js · GSAP</span>
      </footer>
    </main>
  );
}
