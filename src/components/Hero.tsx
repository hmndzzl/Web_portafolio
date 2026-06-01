import React, { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Staggered letters reveal
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
    });

    timeline
      .add({
        targets: `.${styles.letter}`,
        translateY: [80, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(45),
        duration: 1200,
      })
      .add({
        targets: `.${styles.subTitle}`,
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=600')
      .add({
        targets: `.${styles.tagline}`,
        translateY: [25, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=600')
      .add({
        targets: `.${styles.ctaContainer}`,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=600')
      .add({
        targets: `.${styles.terminalConsole}`,
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 1000,
      }, '-=800');
  }, []);

  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const nameChars = 'Hugo Méndez'.split('');

  return (
    <section id="home" className={styles.hero} ref={containerRef}>
      <div className={styles.content}>
        {/* Futuristic System Coordinates HUD badge */}
        <div className={styles.hudBadge}>
          <span className={styles.pulseDot}></span>
          <span className={styles.hudText}>SYSTEM STATUS: NEURAL SYNC ESTABLISHED</span>
        </div>

        {/* Title Staggered Characters */}
        <h1 className={styles.title}>
          {nameChars.map((char, index) => (
            <span
              key={index}
              className={`${styles.letter} ${char === ' ' ? styles.space : ''}`}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <h2 className={styles.subTitle}>
          <span style={{ color: 'var(--color-primary)', marginRight: '0.6rem' }}>{'>'}</span>
          Full Stack Developer
          <span style={{ display: 'inline-block', width: '0.6rem', height: '1.2rem', backgroundColor: 'var(--color-primary)', marginLeft: '0.5rem', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }}></span>
        </h2>

        {/* Tagline */}
        <p className={styles.tagline}>
          Location: Guatemala City, Guatemala 🇬🇹
        </p>

        {/* CTA Button and secondary links */}
        <div className={styles.ctaContainer}>
          <button
            onClick={handleExploreClick}
            className={`${styles.ctaButton} star-pulse-button`}
          >
            <span>Initialize Neural Mesh</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Miniature Holographic Command Line */}
        <div className={styles.terminalConsole}>
          <div className={styles.terminalHeader}>
            <span className={styles.terminalDot}></span>
            <span className={styles.terminalDot}></span>
            <span className={styles.terminalDot}></span>
            <span className={styles.terminalTitle}>neural_core.sh</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>$</span>
              <span>init --synaptic-mesh</span>
            </div>
            <div className={styles.terminalOutput}>
              Synaptic nodes initialized at 0x7FF... Real-time routing active.
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>$</span>
              <span>status --latency</span>
            </div>
            <div className={styles.terminalOutput}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>OPTIMIZED:</span> Zero-latency pathways confirmed.
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>$</span>
              <span className={styles.cursorAnimation}>sudo deploy_intelligence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles or neon backdrop grids */}
      <div className={styles.neonBackdropGrid}></div>
    </section>
  );
};

export default Hero;
