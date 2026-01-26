import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PUBLICATIONS, AWARDS, PROFILE } from '../constants';
import { Code2, Cpu, Eye, Activity, Award, Download, ExternalLink } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    code: <Code2 className="w-6 h-6 text-slate-300" />,
    cpu: <Cpu className="w-6 h-6 text-slate-300" />,
    eye: <Eye className="w-6 h-6 text-slate-300" />,
    activity: <Activity className="w-6 h-6 text-slate-300" />
};

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-primary text-light relative border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Projects */}
        <div className="mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-2 flex items-center gap-2"
            >
                <Cpu className="text-accent" /> Projects & Innovation
            </motion.h2>
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-accent mb-12"
            ></motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROJECTS.map((proj, index) => (
                    <motion.div 
                        key={proj.id} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-secondary p-8 rounded-xl border border-slate-700/50 hover:border-accent hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col hover:-translate-y-1 relative overflow-hidden"
                    >
                         {/* Hover Glow Effect */}
                         <div className="absolute -right-10 -top-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors pointer-events-none"></div>

                        <div className="mb-6 bg-dark w-12 h-12 flex items-center justify-center rounded-lg border border-slate-700 group-hover:border-accent/50 transition-colors z-10">
                            {iconMap[proj.icon]}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors z-10">{proj.title}</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow z-10">{proj.description}</p>
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50 z-10">
                            {proj.tech.map(t => (
                                <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-dark px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
            {/* Publications */}
            <div className="lg:col-span-2">
                <div className="flex justify-between items-end mb-8">
                     <div>
                        <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white mb-2 flex items-center gap-2"
                        >
                            Recent Publications
                        </motion.h3>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-1 bg-slate-700"
                        ></motion.div>
                     </div>
                     <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="text-sm text-accent hover:text-white transition-colors flex items-center gap-1 font-bold">
                        Google Scholar <ExternalLink className="w-3 h-3" />
                     </a>
                </div>

                <div className="space-y-4">
                    {PUBLICATIONS.map((pub, index) => (
                        <motion.div 
                            key={pub.id} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 bg-secondary/40 border-l-2 border-slate-700 hover:border-accent hover:bg-secondary transition-all rounded-r-lg"
                        >
                            <h4 className="font-semibold text-lg text-slate-200 mb-2 leading-snug group-hover:text-white transition-colors">
                                <a href={pub.doi || PROFILE.scholar} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                                    {pub.title}
                                </a>
                            </h4>
                            <p className="text-sm text-slate-500 mb-2 font-mono text-xs">{pub.authors}</p>
                            <div className="flex flex-wrap justify-between items-center text-xs gap-3">
                                <span className="text-slate-400 font-serif italic">{pub.journal}, {pub.year}</span>
                                {pub.doi && (
                                     <a href={pub.doi} target="_blank" rel="noreferrer" className="text-accent hover:text-white uppercase font-bold tracking-wider text-[10px] border border-accent/30 px-2 py-1 rounded hover:bg-accent hover:border-accent transition-colors">
                                        DOI
                                     </a>
                                )}
                            </div>
                            {pub.award && (
                                <div className="mt-3 text-xs font-bold text-amber-400 flex items-center gap-2 bg-amber-400/10 w-fit px-3 py-1 rounded-full border border-amber-400/20">
                                    <Award className="w-3 h-3" /> {pub.award}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Awards */}
            <div>
                 <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-white mb-2 flex items-center gap-2"
                >
                    Honors & Awards
                </motion.h3>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-1 bg-slate-700 mb-8"
                ></motion.div>
                
                <div className="space-y-6">
                    {AWARDS.map((award, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-4 p-4 bg-secondary/20 rounded-lg border border-transparent hover:border-slate-700 transition-colors"
                        >
                            <div className="mt-1">
                                <Award className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-slate-300 text-sm leading-relaxed">{award}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;