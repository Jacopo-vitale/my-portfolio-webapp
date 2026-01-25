import React, { useEffect, useState } from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail, MapPin, BookOpen } from './Icons';
import { generateHeroBackground } from '../services/geminiService';

const Hero: React.FC = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const image = await generateHeroBackground();
      if (image) {
        setBgImage(image);
      }
    };
    fetchImage();
  }, []);

  return (
    <div id="home" className="relative w-full py-32 md:py-48 flex flex-col justify-center items-center overflow-hidden bg-dark">
      
      {/* Dynamic Background Image */}
      {bgImage && (
        <div 
            className="absolute inset-0 z-0 animate-fade-in transition-opacity duration-1000 opacity-40"
            style={{ 
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%) contrast(120%) brightness(60%)'
            }}
        />
      )}

      {/* Fallback/Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark pointer-events-none"></div>
      
      {/* Decorative Elements (Fallback if no image yet, or overlay) */}
      {!bgImage && (
          <>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          </>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <div className="mb-8 inline-block">
            <h2 className="text-accent font-mono text-xs md:text-sm tracking-[0.2em] uppercase border-b border-accent/30 pb-1 mb-2">
                Portfolio
            </h2>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight drop-shadow-lg">
          {PROFILE.name}
        </h1>
        
        <h2 className="text-xl md:text-3xl text-zinc-300 font-light mb-10 max-w-3xl mx-auto tracking-wide">
          {PROFILE.title}
        </h2>
        
        <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent hidden md:block"></div>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-12 leading-relaxed font-serif italic text-left md:text-center md:px-0 pl-4">
            {PROFILE.summary}
            </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
            <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-accent/50">
                <Mail className="w-4 h-4" /> 
                <span>Email</span>
            </a>
            <a href={`https://github.com/${PROFILE.github}`} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-accent/50">
                <Github className="w-4 h-4" /> 
                <span>GitHub</span>
            </a>
            <a href={`https://linkedin.com/in/${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-accent/50">
                <Linkedin className="w-4 h-4" /> 
                <span>LinkedIn</span>
            </a>
             <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-accent/50">
                <BookOpen className="w-4 h-4" /> 
                <span>Scholar</span>
            </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-zinc-500 text-xs uppercase tracking-widest">
             <MapPin className="w-3 h-3" /> {PROFILE.location}
        </div>
      </div>
    </div>
  );
};

export default Hero;