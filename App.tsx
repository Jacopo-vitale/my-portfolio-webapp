import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'next-themes';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { PROFILE } from './constants';
import { Github, Linkedin, BookOpen, Instagram, Rss } from './components/Icons'; // Import custom icons
import { Orcid } from './components/Icons'; 
import { Download } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-screen bg-primary dark:bg-primary-dark text-dark dark:text-text-dark font-sans selection:bg-accent selection:text-white dark:selection:bg-accent-dark dark:selection:text-black relative transition-colors duration-300">
          
          <Helmet>
              <title>{PROFILE.name} | Medical AI Engineer</title>
              <meta name="description" content={PROFILE.summary} />
              <meta name="keywords" content="Medical AI, Bioengineering, Deep Learning, PhD, Healthcare Technology" />
              <meta property="og:title" content={`${PROFILE.name} | Medical AI Engineer`} />
              <meta property="og:description" content={PROFILE.summary} />
              <meta property="og:type" content="website" />
              <meta name="theme-color" content="#ffffff" />
          </Helmet>

          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-accent dark:bg-accent-dark origin-left z-[60]"
            style={{ scaleX }}
          />

          {/* Navigation - Fixed with Glassmorphism */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-primary-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-6 h-16 grid grid-cols-3 items-center">
              {/* Left: Logo */}
              <div className="flex justify-start">
                  <motion.a 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    href="#home" 
                    className="text-lg font-bold tracking-tight text-dark dark:text-white hover:text-accent dark:hover:text-accent-dark transition-colors flex items-center gap-1 font-serif"
                  >
                    {PROFILE.name}<span className="text-accent dark:text-accent-dark">.</span>
                  </motion.a>
              </div>
              
              {/* Center: Navigation Links */}
              <div className="hidden md:flex justify-center gap-8 text-sm font-medium text-muted dark:text-muted-dark uppercase tracking-wider font-sans">
                {['Experience', 'Work', 'Skills', 'Gallery', 'Contact'].map((item, i) => (
                  <motion.a 
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    {item === 'Gallery' ? 'Life' : item}
                  </motion.a>
                ))}
              </div>

              {/* Right: Theme Toggle & Resume */}
              <div className="flex justify-end items-center gap-3">
                  <ThemeToggle />
                  <motion.a 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    href="/resume.pdf" 
                    target="_blank" 
                    className="hidden sm:flex items-center gap-2 bg-dark dark:bg-slate-800 hover:bg-accent dark:hover:bg-accent-dark text-white text-[10px] font-bold px-4 py-2 rounded-full transition-all uppercase tracking-widest shadow-md hover:shadow-lg border border-transparent dark:border-slate-700"
                  >
                    <Download className="w-3 h-3" /> CV / Resume
                  </motion.a>
              </div>
            </div>
          </nav>

          {/* Sections */}
          <main className="relative z-10 pt-16">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Gallery />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="relative z-10 py-12 bg-secondary dark:bg-secondary-dark text-center text-muted dark:text-muted-dark text-sm border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
              <div className="flex justify-center gap-6 mb-8">
                  <a href={`https://github.com/${PROFILE.github}`} target="_blank" rel="noreferrer" className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors" aria-label="GitHub">
                      <Github className="w-5 h-5" />
                  </a>
                  <a href={`https://linkedin.com/in/${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors" aria-label="Google Scholar">
                      <BookOpen className="w-5 h-5" />
                  </a>
                  <a href={PROFILE.orcid} target="_blank" rel="noreferrer" className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors" aria-label="ORCID">
                      <Orcid className="w-5 h-5" />
                  </a>
                  <a href={`https://instagram.com/${PROFILE.instagram}`} target="_blank" rel="noreferrer" className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                  </a>
                  <a href={PROFILE.rss} target="_blank" rel="noreferrer" className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors" aria-label="RSS Feed">
                      <Rss className="w-5 h-5" />
                  </a>
              </div>
            <p className="font-serif">© {new Date().getFullYear()} Jacopo Vitale. All rights reserved.</p>
            <p className="text-xs text-muted dark:text-muted-dark mt-2 font-sans tracking-widest uppercase">Computer Science Engineer</p>
          </footer>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;