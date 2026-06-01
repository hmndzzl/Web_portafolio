import React, { useRef } from 'react';
// @ts-ignore
import anime from 'animejs';
import { Layers, Server, Database, GitBranch } from 'lucide-react';
import styles from './Skills.module.css';

interface TechItem {
  name: string;
  glowColor: 'cyan' | 'purple' | 'pink';
}

interface SkillSection {
  title: string;
  quadrant: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: TechItem[];
}

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const sections: SkillSection[] = [
    {
      title: 'Frontend Constellation',
      quadrant: 'SYS-ALPHA // FRONTEND',
      icon: Layers,
      skills: [
        { name: 'React 18', glowColor: 'cyan' },
        { name: 'Vite', glowColor: 'purple' },
        { name: 'React Router', glowColor: 'cyan' },
        { name: 'Vanilla JS', glowColor: 'pink' },
        { name: 'TypeScript', glowColor: 'cyan' },
        { name: 'Storybook', glowColor: 'pink' },
        { name: 'ESLint', glowColor: 'purple' },
        { name: 'HTML5', glowColor: 'cyan' },
        { name: 'CSS', glowColor: 'pink' },
        { name: 'Tailwind', glowColor: 'purple' },
      ],
    },
    {
      title: 'Backend Operations',
      quadrant: 'SYS-BETA // BACKEND',
      icon: Server,
      skills: [
        { name: 'Node.js', glowColor: 'purple' },
        { name: 'Bun', glowColor: 'pink' },
        { name: 'Python', glowColor: 'cyan' },
        { name: 'Go', glowColor: 'purple' },
        { name: 'Express.js', glowColor: 'cyan' },
        { name: 'JWT Security', glowColor: 'pink' },
        { name: 'Swagger / OpenAPI', glowColor: 'purple' },
      ],
    },
    {
      title: 'Database Architecture',
      quadrant: 'SYS-GAMMA // DATABASES',
      icon: Database,
      skills: [
        { name: 'PostgreSQL 15', glowColor: 'purple' },
        { name: 'MariaDB', glowColor: 'cyan' },
        { name: 'SQLite', glowColor: 'pink' },
        { name: 'SQL Transactions', glowColor: 'pink' },
        { name: 'BCNF Normalization', glowColor: 'purple' },
      ],
    },
    {
      title: 'DevOps & Extras',
      quadrant: 'SYS-DELTA // DEVOPS & EXTRAS',
      icon: GitBranch,
      skills: [
        { name: 'Docker & Compose', glowColor: 'pink' },
        { name: 'Nginx', glowColor: 'cyan' },
        { name: 'GitHub Actions (CI/CD)', glowColor: 'purple' },
        { name: 'Vitest / Testing', glowColor: 'pink' },
        { name: 'Postman', glowColor: 'cyan' },
        { name: 'Linux / CLI', glowColor: 'purple' },
      ],
    },
  ];

  const handleMouseEnterBadge = (e: React.MouseEvent<HTMLDivElement>) => {
    const badge = e.currentTarget;
    anime({
      targets: badge,
      scale: 1.08,
      translateY: -3,
      duration: 250,
      easing: 'easeOutQuad',
    });
  };

  const handleMouseLeaveBadge = (e: React.MouseEvent<HTMLDivElement>) => {
    const badge = e.currentTarget;
    anime({
      targets: badge,
      scale: 1,
      translateY: 0,
      duration: 250,
      easing: 'easeOutQuad',
    });
  };

  return (
    <section id="skills" className={styles.skills} ref={containerRef}>
      <div className={styles.container}>
        {/* Section title HUD header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>SEC-03</span>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.glowLine}></div>
        </div>

        <div className={`${styles.stackInfo} glass-panel`}>
          <h3 className={styles.stackTitle}>Architecture Overview</h3>
          <p className={styles.stackDesc}>
            I specialize in the <span className={styles.highlight}>PERN stack</span> (PostgreSQL, Express, React, Node.js), heavily augmented by <span className={styles.highlight}>Docker</span> and <span className={styles.highlight}>Vite</span>. I chose this ecosystem because it provides an unyielding relational data foundation—allowing for strict BCNF normalization and explicit transactions—while delivering a high-performance, component-driven user experience. I have applied this architecture across various environments, engineering complex role-based management portals and robust point-of-sale systems with secure, containerized deployments.
          </p>
        </div>

        {/* Section categories list */}
        <div className={styles.sectionsList}>
          {sections.map((sect, sectIndex) => {
            const Icon = sect.icon;
            return (
              <div key={sectIndex} className={`${styles.sectionRow} glass-panel`}>
                {/* Visual grid boundary framing for high-tech HUD feel */}
                <div className={styles.sectMeta}>
                  <div className={styles.sectIcon}>
                    <Icon size={18} />
                  </div>
                  <div className={styles.sectText}>
                    <span className={styles.sectQuadrant}>{sect.quadrant}</span>
                    <h3 className={styles.sectTitle}>{sect.title}</h3>
                  </div>
                </div>

                {/* Horizontal badges list */}
                <div className={styles.badgeRow}>
                  {sect.skills.map((tech, techIndex) => {
                    const glowClass = 
                      tech.glowColor === 'cyan' ? styles.glowCyan :
                      tech.glowColor === 'pink' ? styles.glowPink : styles.glowPurple;

                    return (
                      <div
                        key={techIndex}
                        className={`${styles.techBadge} ${glowClass}`}
                        onMouseEnter={handleMouseEnterBadge}
                        onMouseLeave={handleMouseLeaveBadge}
                      >
                        <span className={styles.sparkleDot}></span>
                        <span className={styles.techName}>{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
