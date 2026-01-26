import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { BookOpen } from 'lucide-react';
import { PROFILE } from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-dark text-slate-200 font-sans selection:bg-accent selection:text-white relative overflow-x-hidden">
        
        <Helmet>
            <title>{PROFILE.name} | Medical AI Engineer</title>
            <meta name="description" content={PROFILE.summary} />
            <meta name="keywords" content="Medical AI, Bioengineering, Deep Learning, PhD, Healthcare Technology" />
            <meta property="og:title" content={`${PROFILE.name} | Medical AI Engineer`} />
            <meta property="og:description" content={PROFILE.summary} />
            <meta property="og:type" content="website" />
        </Helmet>

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
          style={{ scaleX }}
        />

        {/* Global Background Pattern - Medical Tech Grid */}
        <div className="fixed inset-0 z-0 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)',
               backgroundSize: '50px 50px',
               maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
             }}
        ></div>

        {/* Navigation - Sticky with Glassmorphism */}
        <nav className="sticky top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10">
          <div className="container mx-auto px-6 h-16 flex justify-between items-center">
            <motion.a 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              href="#home" 
              className="text-xl font-bold tracking-tighter text-white hover:text-accent transition-colors flex items-center gap-1"
            >
              JV<span className="text-accent">.</span>
            </motion.a>
            
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 uppercase tracking-wider">
              {['Experience', 'Work', 'Skills', 'Gallery', 'Contact'].map((item, i) => (
                 <motion.a 
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-accent transition-colors"
                 >
                   {item === 'Gallery' ? 'Life' : item}
                 </motion.a>
              ))}
            </div>

            <motion.a 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              href={PROFILE.scholar} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-900/50 text-[10px] font-bold px-3 py-1.5 rounded-full transition-all uppercase tracking-widest hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
            >
              <BookOpen className="w-3 h-3" /> Scholar
            </motion.a>
          </div>
        </nav>

        {/* Sections */}
        <main className="relative z-10">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Gallery />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-12 bg-dark text-center text-slate-600 text-sm border-t border-slate-900">
          <p>© {new Date().getFullYear()} Jacopo Vitale. Bioengineering & Intelligent Systems.</p>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default App;