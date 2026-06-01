import React, { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs';
import styles from './About.module.css';

export const About: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Zero-gravity floating animation on the single Biography card
    const floatAnim = anime({
      targets: cardRef.current,
      translateY: [-6, 6],
      rotate: [-0.5, 0.5],
      duration: 5000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });

    return () => {
      floatAnim.pause();
    };
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Section title HUD header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>SEC-02</span>
          <h2 className={styles.sectionTitle}>About</h2>
          <div className={styles.glowLine}></div>
        </div>

        <div className={styles.centeredLayout}>
          {/* Bio Console Card */}
          <div className={`${styles.card} glass-panel`} ref={cardRef}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>SYSTEMS LOG // BIOGRAPHY</span>
              <span className={styles.cardStatus}>DECRYPTED</span>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.bioParagraph}>
                I am a passionate <span className={styles.highlightCyan}>Full-Stack Software Engineer</span> dedicated to engineering secure, highly scalable, and structurally optimized systems. With a solid foundation in software architecture and database normalization, I specialize in building systems that solve complex, real-world problems.
              </p>

              <p className={styles.bioParagraph}>
                My engineering philosophy is simple: write maintainable, self-documenting code, design normalized database schemas that prevent redundancy, and automate deployment environments to secure seamless scalability.
              </p>

              <p className={styles.bioParagraph}>
                Currently studying Computer Science at Universidad Del Valle de Guatemala.
              </p>

              <div className={styles.techTags}>
                <span className={styles.tag}>PostgreSQL / BCNF</span>
                <span className={styles.tag}>Node.js / Express</span>
                <span className={styles.tag}>React / TypeScript</span>
                <span className={styles.tag}>Docker Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
