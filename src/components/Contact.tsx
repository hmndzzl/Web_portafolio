import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, Terminal, Check, Copy } from 'lucide-react';
import styles from './Contact.module.css';

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

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface TerminalLine {
  type: 'input' | 'output';
  text: string;
}

export const Contact: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', text: 'Neural Comm Link [Version 1.0.4]' },
    { type: 'output', text: '(c) 2026 Hugo Méndez. All synaptic nodes operational.' },
    { type: 'output', text: 'Type "help" to view list of valid signals or click the interfaces below.' },
  ]);

  const emailAddress = 'men241265@uvg.edu.gt';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [{ type: 'input', text: cmd }];

    if (cleanCmd === '') {
      setHistory((prev) => [...prev, ...newLines]);
      return;
    }

    switch (cleanCmd) {
      case 'help':
        newLines.push({
          type: 'output',
          text: 'Available signals: about | skills | projects | email | github | linkedin | clear',
        });
        break;
      case 'about':
        newLines.push({
          type: 'output',
          text: 'Hugo Méndez - Full-Stack Software Engineer. Focusing on high-performance backends, BCNF databases, and high-fidelity frontends.',
        });
        break;
      case 'skills':
        newLines.push({
          type: 'output',
          text: 'Core Skills: React, Node.js, Express, PostgreSQL (BCNF), Docker, GCP.',
        });
        break;
      case 'projects':
        newLines.push({
          type: 'output',
          text: 'Active Neural Pathways: Metal Tracker Vault | Sistema de Gestión Parroquia San Pedro Nolasco. Scroll up to inspect node connectivity.',
        });
        break;
      case 'email':
        navigator.clipboard.writeText(emailAddress);
        newLines.push({
          type: 'output',
          text: `Clipboard: System copied "${emailAddress}". Launching mail client...`,
        });
        window.open(`mailto:${emailAddress}`);
        break;
      case 'github':
        newLines.push({ type: 'output', text: 'Establishing secure bridge to GitHub...' });
        window.open('https://github.com/hmndzzl', '_blank');
        break;
      case 'linkedin':
        newLines.push({ type: 'output', text: 'Establishing secure bridge to LinkedIn...' });
        window.open('https://www.linkedin.com/in/hugo-méndez-bb6741413/', '_blank');
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newLines.push({
          type: 'output',
          text: `Unknown signal: "${cmd}". Type "help" for a list of valid transponders.`,
        });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  // Scroll to bottom of terminal output whenever history changes
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Section title HUD header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>SEC-05</span>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.glowLine}></div>
        </div>

        <div className={styles.grid}>
          {/* Left panel: Info & Fast-action buttons */}
          <div className={styles.infoPanel}>
            <h3 className={styles.infoTitle}>Establish Connection</h3>
            <p className={styles.infoDesc}>
              Ready to collaborate on high-performance systems or custom applications? Send a signal through the interactive neural terminal console or use one of the direct action channels below.
            </p>

            <div className={styles.actionGrid}>
              {/* Clipboard copy action */}
              <button onClick={copyEmail} className={`${styles.actionCard} glass-panel`}>
                <div className={styles.actionIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.actionDetails}>
                  <span className={styles.actionLabel}>Direct Email</span>
                  <span className={styles.actionVal}>{emailAddress}</span>
                </div>
                <div className={styles.copyBadge}>
                  {copied ? <Check size={16} className={styles.checkIcon} /> : <Copy size={16} />}
                </div>
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/hmndzzl"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionCard} glass-panel`}
              >
                <div className={styles.actionIcon}>
                  <GithubIcon size={20} />
                </div>
                <div className={styles.actionDetails}>
                  <span className={styles.actionLabel}>Source Hub</span>
                  <span className={styles.actionVal}>github.com/hmndzzl</span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/hugo-m%C3%A9ndez-bb6741413/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionCard} glass-panel`}
              >
                <div className={styles.actionIcon}>
                  <LinkedinIcon size={20} />
                </div>
                <div className={styles.actionDetails}>
                  <span className={styles.actionLabel}>Professional Mesh</span>
                  <span className={styles.actionVal}>linkedin.com/in/hugo</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right panel: Terminal Simulator */}
          <div className={`${styles.terminalPanel} glass-panel`}>
            <div className={styles.terminalHeader}>
              <div className={styles.dots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.title}>
                <Terminal size={14} />
                <span>terminal@hugo-mendez: ~</span>
              </div>
            </div>

            <div className={styles.terminalBody}>
              <div className={styles.terminalLog}>
                {history.map((line, i) => (
                  <div key={i} className={line.type === 'input' ? styles.logInputRow : styles.logOutputRow}>
                    {line.type === 'input' && <span className={styles.prompt}>$</span>}
                    <span className={line.type === 'input' ? styles.inputText : styles.outputText}>
                      {line.text}
                    </span>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              <form onSubmit={handleFormSubmit} className={styles.terminalForm}>
                <span className={styles.formPrompt}>$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type command (e.g. help, email)..."
                  className={styles.formInput}
                  aria-label="Terminal command prompt input"
                />
                <button type="submit" className={styles.formSubmitBtn} aria-label="Submit command">
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Hugo Méndez. Built with high-throughput React & Anime.js. Multi-stage containerized.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
