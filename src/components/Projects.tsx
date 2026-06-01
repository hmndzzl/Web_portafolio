import React, { useEffect, useRef } from 'react';
// @ts-ignore
import anime from 'animejs';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  systemCode: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  side: 'left' | 'right';
  stats: { label: string; value: string }[];
}

export const Projects: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 'software-proyecto',
      title: 'Sistema de Gestión Parroquia San Pedro Nolasco',
      systemCode: 'SYS-PARISH.v1.0',
      description: 'A comprehensive full-stack management system for parish administration. Handles space reservations, task assignments, ministry coordination, and role-based access control with a robust MariaDB backend.',
      features: [
        'Advanced RBAC (Admin, Priest, Coordinator, Minister)',
        'Real-time global and targeted notification system',
        'Database seeding and Dockerized multi-container setup',
      ],
      tech: ['React', 'Node.js', 'MariaDB', 'TypeScript', 'Docker'],
      githubUrl: 'https://github.com/hmndzzl/Software_Proyecto',
      liveUrl: 'http://158.23.60.1/login',
      side: 'left',
      stats: [
        { label: 'DB', value: 'MariaDB' },
        { label: 'Role Tiers', value: '4 Levels' },
        { label: 'Deploy', value: 'Azure VM' },
      ],
    },
    {
      id: 'db-proyecto2',
      title: 'Sistema de Gestión Tienda',
      systemCode: 'SYS-POS.v2.0',
      description: 'A full-stack Point of Sale and Inventory management portal. Features explicit database transactions to guarantee data integrity during concurrent sales and advanced SQL reporting using CTEs.',
      features: [
        'Strict 3NF PostgreSQL database architecture',
        'Explicit SQL transactions with rollback safety',
        'Advanced financial reporting (Subqueries & Views)',
      ],
      tech: ['React', 'PostgreSQL', 'Node.js', 'Express', 'JWT'],
      githubUrl: 'https://github.com/hmndzzl/DB_Proyecto2',
      liveUrl: 'http://35.255.29.219:5173/login',
      side: 'right',
      stats: [
        { label: 'DB Norm', value: '3NF' },
        { label: 'Auth', value: 'JWT' },
        { label: 'Stack', value: 'PERN' },
      ],
    },
    {
      id: 'metal-tracker',
      title: 'Metal Tracker Vault',
      systemCode: 'SYS-METAL.v4.0',
      description: 'A brutalist-styled music catalog management system built with a strict Zero-Framework architecture using pure Vanilla JS. Features custom DOM manipulation and JWT-based session handling.',
      features: [
        'Zero-Dependency Vanilla JS architecture',
        'Advanced Event Delegation and DOM rendering',
        'Role-Based Access Control (Admin vs Standard)',
      ],
      tech: ['Vanilla JS', 'HTML5', 'CSS3', 'Node.js', 'Nginx'],
      githubUrl: 'https://github.com/hmndzzl/Metal_Tracker_Frontend',
      liveUrl: 'http://35.255.29.219:8080/',
      side: 'left',
      stats: [
        { label: 'Framework', value: 'None' },
        { label: 'UI', value: 'Brutalist' },
        { label: 'Backend', value: 'Node.js' },
      ],
    },
    {
      id: 'snake-game',
      title: 'Retro Nokia Snake',
      systemCode: 'SYS-SNAKE.v1.0',
      description: 'A faithful recreation of the classic Nokia Snake game. Built modularly using React and Vite, implementing complex state management and an optimized game loop without global variables.',
      features: [
        'Optimized React game loop and collision detection',
        'Multiple difficulty tiers adjusting tick rates',
        'Fully Dockerized static frontend deployment',
      ],
      tech: ['React', 'Vite', 'CSS3', 'Docker'],
      githubUrl: 'https://github.com/hmndzzl/Web_Lab6_Snake',
      liveUrl: 'http://35.255.29.219:3003/',
      side: 'right',
      stats: [
        { label: 'Type', value: 'Web Game' },
        { label: 'State', value: 'React Hooks' },
        { label: 'Theme', value: 'Retro Nokia' },
      ],
    },
    {
      id: 'r6-data-app',
      title: 'Rainbow Six Siege Data App',
      systemCode: 'SYS-R6.v1.0',
      description: 'A frontend application that consumes an external REST API to display operator data. Features dynamic routing and a custom Nginx reverse proxy within Docker to bypass strict CORS policies.',
      features: [
        'Dynamic routing with React Router DOM v6',
        'Custom Nginx proxy for CORS circumvention',
        'Reusable components with strict PropTypes',
      ],
      tech: ['React', 'Vite', 'Nginx', 'Docker', 'React Router'],
      githubUrl: 'https://github.com/hmndzzl/WEB_Ejercicio4',
      liveUrl: 'http://35.255.29.219:8083/',
      side: 'left',
      stats: [
        { label: 'Role', value: 'Frontend' },
        { label: 'Network', value: 'REST API' },
        { label: 'Level', value: 'Senior' },
      ],
    },
    {
      id: 'web-calculator',
      title: 'Casio ClassWiz Emulator',
      systemCode: 'SYS-CALC.v1.0',
      description: 'A robust web calculator engineered under strict architectural constraints (files under 20 lines). Features isolated business logic, rigorous unit testing, and component documentation via Storybook.',
      features: [
        'Isolated mathematical state via custom hooks',
        'Storybook component driven development',
        'Automated test suites with Vitest',
      ],
      tech: ['React 19', 'TypeScript', 'Bun', 'Vitest', 'Storybook'],
      githubUrl: 'https://github.com/hmndzzl/WEB_LAB7',
      liveUrl: 'http://35.255.29.219:5174/',
      side: 'right',
      stats: [
        { label: 'Engine', value: 'Bun Runtime' },
        { label: 'Design', value: 'Retro' },
        { label: 'Tests', value: 'Vitest' },
      ],
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
    };

    const animateCard = (element: HTMLElement, side: 'left' | 'right') => {
      anime({
        targets: element,
        translateX: side === 'left' ? [-100, 0] : [100, 0],
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 1200,
        easing: 'easeOutElastic(1, .75)',
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const side = el.dataset.side as 'left' | 'right';
          animateCard(el, side);
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>SEC-04</span>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.glowLine}></div>
        </div>

        <div className={styles.list}>
          {projects.map((proj, index) => {
            return (
              <div
                key={proj.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-side={proj.side}
                className={`${styles.card} glass-panel`}
                style={{ opacity: 0 }}
              >
                <div className={styles.cornerFrameTopLeft}></div>
                <div className={styles.cornerFrameBottomRight}></div>

                <div className={styles.cardHeader}>
                  <div className={styles.headerTitle}>
                    <span className={styles.systemCodeText}>{proj.systemCode}</span>
                    <h3 className={styles.projectTitle}>{proj.title}</h3>
                  </div>

                  <div className={styles.links}>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label="Live Demo Link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.hudStatsGrid}>
                    {proj.stats.map((stat, i) => (
                      <div key={i} className={styles.hudStat}>
                        <span className={styles.statLabel}>{stat.label}</span>
                        <span className={styles.statVal}>{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <p className={styles.desc}>{proj.description}</p>

                  <div className={styles.highlightsSection}>
                    <h4 className={styles.highlightsHeader}>SYS CORE CAPABILITIES:</h4>
                    <div className={styles.highlightsList}>
                      {proj.features.map((feat, i) => (
                        <div key={i} className={styles.highlightRow}>
                          <span className={styles.highlightIndicator}></span>
                          <span className={styles.highlightText}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.techStrip}>
                    {proj.tech.map((t, i) => (
                      <span key={i} className={styles.techBadge}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
