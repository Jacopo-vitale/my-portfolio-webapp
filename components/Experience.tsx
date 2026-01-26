import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../constants';
import { BookOpen, Activity, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark/50 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-16">
            {/* Research */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-light mb-12 flex items-center gap-3 border-b border-slate-800 pb-4"
              >
                 <Activity className="text-accent w-6 h-6" /> Experience
              </motion.h2>
              <div className="space-y-12 pl-4 border-l border-slate-800 relative">
                {EXPERIENCE.map((exp, index) => (
                  <motion.div 
                    key={exp.id} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative group"
                  >
                    <span className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:bg-accent group-hover:border-accent transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]"></span>
                    
                    <div className="mb-1">
                        <span className="text-accent text-xs font-bold uppercase tracking-wider font-mono">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                    <div className="text-slate-400 mb-4 text-sm">{exp.institution}, {exp.location}</div>
                    
                    <p className="text-slate-500 mb-4 text-sm italic border-l-2 border-slate-800 pl-3">{exp.description}</p>
                    <ul className="space-y-2">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                             <span className="mt-2 w-1 h-1 bg-slate-600 rounded-full flex-shrink-0 group-hover:bg-accent transition-colors"></span>
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
                className="text-2xl font-bold text-light mb-12 flex items-center gap-3 border-b border-slate-800 pb-4"
              >
                 <GraduationCap className="text-accent w-6 h-6" /> Education
              </motion.h2>
              <div className="space-y-12 pl-4 border-l border-slate-800 relative">
                {EDUCATION.map((edu, index) => (
                  <motion.div 
                    key={edu.id} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative group"
                  >
                    <span className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:bg-white group-hover:border-white transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]"></span>
                    
                    <div className="mb-1">
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-wider font-mono">{edu.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <div className="text-slate-400 mb-2 text-sm">{edu.institution}, {edu.location}</div>
                    {edu.grade && <div className="text-accent text-sm font-medium mb-3 bg-accent/10 w-fit px-2 py-0.5 rounded border border-accent/20">{edu.grade}</div>}
                    
                    <ul className="space-y-2">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                             <span className="mt-2 w-1 h-1 bg-slate-600 rounded-full flex-shrink-0 group-hover:bg-white transition-colors"></span>
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