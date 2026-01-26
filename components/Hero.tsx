import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail, MapPin, BookOpen, Download } from 'lucide-react';
import { Orcid } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full py-32 md:py-48 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Fallback/Overlay Gradient - Medical Dark Mode */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/95 via-primary/90 to-dark pointer-events-none"></div>
      
      {/* Decorative Elements - Medical/Tech Pulse */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-900/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
      ></motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-block"
        >
            <h2 className="text-accent font-mono text-xs md:text-sm tracking-[0.2em] uppercase border-b border-accent/30 pb-1 mb-2">
                Computer Science Engineer
            </h2>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight drop-shadow-2xl"
        >
          {PROFILE.name}
        </motion.h1>
        
        <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-3xl text-slate-300 font-light mb-10 max-w-3xl mx-auto tracking-wide"
        >
          {PROFILE.title}
        </motion.h2>
        
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
        >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent hidden md:block"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12 leading-relaxed font-sans font-light text-left md:text-center md:px-0 pl-4">
            {PROFILE.summary}
            </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
        >
            <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-all bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Mail className="w-4 h-4" /> 
                <span>Email</span>
            </a>
            <a href={`https://github.com/${PROFILE.github}`} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-all bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Github className="w-4 h-4" /> 
                <span>GitHub</span>
            </a>
            <a href={`https://linkedin.com/in/${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-all bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Linkedin className="w-4 h-4" /> 
                <span>LinkedIn</span>
            </a>
            <a href={PROFILE.orcid} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-all bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Orcid className="w-4 h-4" /> 
                <span>ORCID</span>
            </a>
            <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-all bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <BookOpen className="w-4 h-4" /> 
                <span>Scholar</span>
            </a>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-500 text-xs uppercase tracking-widest font-mono"
        >
             <a 
                href={PROFILE.locationLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-accent transition-colors group"
             >
                <MapPin className="w-3 h-3 group-hover:animate-bounce" /> 
                <span>Current: {PROFILE.location}</span>
             </a>
             <div className="hidden md:block w-1 h-1 bg-slate-800 rounded-full"></div>
             <a 
                href={PROFILE.hometownLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
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