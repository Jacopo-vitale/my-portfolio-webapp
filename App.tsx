import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { BookOpen } from './components/Icons';
import { PROFILE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-slate-200 font-sans selection:bg-accent selection:text-white">
      {/* Navigation - Separated and Sticky */}
      <nav className="sticky top-0 z-50 bg-dark border-b border-zinc-900 shadow-xl shadow-black/20">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-tighter text-white hover:text-accent transition-colors">
            JV<span className="text-accent">.</span>
          </a>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400 uppercase tracking-wider">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>

          <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 text-[10px] font-bold px-3 py-1.5 rounded-sm transition-colors uppercase tracking-widest">
            <BookOpen className="w-3 h-3" /> Scholar
          </a>
        </div>
      </nav>

      {/* Sections */}
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Jacopo Vitale. Bioengineering & Intelligent Systems.</p>
      </footer>
    </div>
  );
};

export default App;