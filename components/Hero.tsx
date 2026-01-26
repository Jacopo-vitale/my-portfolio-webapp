import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail, MapPin, BookOpen, Download } from 'lucide-react';
import { Orcid } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full py-32 md:py-48 flex flex-col justify-center items-center overflow-hidden bg-primary dark:bg-primary-dark text-dark dark:text-text-dark transition-colors duration-300">
      
      {/* Background - Minimalist Paper Texture or Subtle Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50 to-primary dark:from-slate-950 dark:to-primary-dark pointer-events-none transition-colors duration-300"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block"
        >
            <span className="text-accent dark:text-accent-dark font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-bold bg-accent/10 dark:bg-accent-dark/10 px-3 py-1 rounded-sm">
                Medical AI Engineer
            </span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-dark dark:text-text-dark mb-6 tracking-tight"
        >
          {PROFILE.name}
        </motion.h1>
        
        <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted dark:text-muted-dark font-sans font-light mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {PROFILE.title}
        </motion.h2>
        
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative mb-12"
        >
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-sans text-center">
            {PROFILE.summary}
            </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
        >
            <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-2 text-sm font-medium text-dark dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-all bg-white dark:bg-slate-800 shadow-sm hover:shadow-md px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700">
                <Mail className="w-4 h-4 text-accent dark:text-accent-dark" /> 
                <span>Email</span>
            </a>
            <a href={`https://github.com/${PROFILE.github}`} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-dark dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-all bg-white dark:bg-slate-800 shadow-sm hover:shadow-md px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700">
                <Github className="w-4 h-4 text-accent dark:text-accent-dark" /> 
                <span>GitHub</span>
            </a>
            <a href={`https://linkedin.com/in/${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-dark dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-all bg-white dark:bg-slate-800 shadow-sm hover:shadow-md px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700">
                <Linkedin className="w-4 h-4 text-accent dark:text-accent-dark" /> 
                <span>LinkedIn</span>
            </a>
            <a href={PROFILE.orcid} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-dark dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-all bg-white dark:bg-slate-800 shadow-sm hover:shadow-md px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700">
                <Orcid className="w-4 h-4 text-accent dark:text-accent-dark" /> 
                <span>ORCID</span>
            </a>
            <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-dark dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-all bg-white dark:bg-slate-800 shadow-sm hover:shadow-md px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700">
                <BookOpen className="w-4 h-4 text-accent dark:text-accent-dark" /> 
                <span>Scholar</span>
            </a>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted dark:text-muted-dark text-xs uppercase tracking-widest font-mono"
        >
             <a 
                href={PROFILE.locationLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-accent dark:hover:text-accent-dark transition-colors group"
             >
                <MapPin className="w-3 h-3 group-hover:animate-bounce" /> 
                <span>Current: {PROFILE.location}</span>
             </a>
             <div className="hidden md:block w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
             <a 
                href={PROFILE.hometownLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-accent dark:hover:text-accent-dark transition-colors"
             >
                <span className="opacity-50 text-[10px]">Hometown:</span>
                <span>{PROFILE.hometown}</span>
             </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;