import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../constants';
import { BookOpen, Activity } from './Icons';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark/50 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-16">
            {/* Research */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-light mb-12 flex items-center gap-3 border-b border-zinc-800 pb-4"
              >
                 <Activity className="text-accent w-5 h-5" /> Experience
              </motion.h2>
              <div className="space-y-12 pl-4 border-l border-zinc-800 relative">
                {EXPERIENCE.map((exp, index) => (
                  <motion.div 
                    key={exp.id} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative group"
                  >
                    <span className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-zinc-800 border-2 border-zinc-600 group-hover:bg-accent group-hover:border-accent transition-colors"></span>
                    
                    <div className="mb-1">
                        <span className="text-accent text-xs font-bold uppercase tracking-wider">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                    <div className="text-zinc-400 mb-4 text-sm">{exp.institution}, {exp.location}</div>
                    
                    <p className="text-zinc-500 mb-4 text-sm italic">{exp.description}</p>
                    <ul className="space-y-2">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                             <span className="mt-1.5 w-1 h-1 bg-zinc-600 rounded-full flex-shrink-0"></span>
                             {detail}
                          </li>
                        ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-light mb-12 flex items-center gap-3 border-b border-zinc-800 pb-4"
              >
                 <BookOpen className="text-accent w-5 h-5" /> Education
              </motion.h2>
              <div className="space-y-12 pl-4 border-l border-zinc-800 relative">
                {EDUCATION.map((edu, index) => (
                  <motion.div 
                    key={edu.id} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative group"
                  >
                    <span className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-zinc-800 border-2 border-zinc-600 group-hover:bg-white group-hover:border-white transition-colors"></span>
                    
                    <div className="mb-1">
                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{edu.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <div className="text-zinc-400 mb-2 text-sm">{edu.institution}, {edu.location}</div>
                    {edu.grade && <div className="text-accent text-sm font-medium mb-3">{edu.grade}</div>}
                    
                    <ul className="space-y-2">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                             <span className="mt-1.5 w-1 h-1 bg-zinc-600 rounded-full flex-shrink-0"></span>
                             {detail}
                          </li>
                        ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;