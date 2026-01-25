import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { BookOpen } from './components/Icons';
import { PROFILE } from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-dark text-slate-200 font-sans selection:bg-accent selection:text-white relative overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Global Background Pattern - Subtle Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
           }}
      ></div>

      {/* Navigation - Separated and Sticky */}
      <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-zinc-900 shadow-xl shadow-black/20">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="#home" 
            className="text-xl font-bold tracking-tighter text-white hover:text-accent transition-colors"
          >
            JV<span className="text-accent">.</span>
          </motion.a>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400 uppercase tracking-wider">
            {['Experience', 'Work', 'Skills'].map((item, i) => (
               <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-white transition-colors"
               >
                 {item}
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
            className="flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 text-[10px] font-bold px-3 py-1.5 rounded-sm transition-colors uppercase tracking-widest"
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
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-black text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Jacopo Vitale. Bioengineering & Intelligent Systems.</p>
      </footer>
    </div>
  );
};

export default App;