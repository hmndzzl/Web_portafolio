import React from 'react';
import NeuralNetworkSequence from './components/NeuralNetworkSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styles from './App.module.css';

export const App: React.FC = () => {
  return (
    <div className={styles.appWrapper}>
      {/* Background Starfield Layer */}
      <NeuralNetworkSequence />

      {/* Navigation Layer */}
      <Navbar />

      {/* Foreground Sections Layer */}
      <main className={styles.mainContent}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
