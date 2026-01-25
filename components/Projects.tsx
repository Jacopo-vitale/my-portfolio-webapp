import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PUBLICATIONS, AWARDS, PROFILE } from '../constants';
import { Code, Cpu, Eye, Activity, Award, Download } from './Icons';

const iconMap: Record<string, React.ReactNode> = {
    code: <Code className="w-6 h-6 text-zinc-300" />,
    cpu: <Cpu className="w-6 h-6 text-zinc-300" />,
    eye: <Eye className="w-6 h-6 text-zinc-300" />,
    activity: <Activity className="w-6 h-6 text-zinc-300" />
};

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-primary text-light relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Projects */}
        <div className="mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-2"
            >
                Projects & Innovation
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
                        className="group bg-secondary p-8 rounded-none border border-zinc-800 hover:border-accent transition-all duration-300 flex flex-col hover:-translate-y-1"
                    >
                        <div className="mb-6 bg-dark w-12 h-12 flex items-center justify-center border border-zinc-800 group-hover:border-accent/50 transition-colors">
                            {iconMap[proj.icon]}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors">{proj.title}</h3>
                        <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">{proj.description}</p>
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                            {proj.tech.map(t => (
                                <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">
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
                            className="h-1 bg-zinc-700"
                        ></motion.div>
                     </div>
                     <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="text-sm text-accent hover:text-white transition-colors flex items-center gap-1">
                        View Google Scholar <Download className="w-3 h-3 rotate-[-90deg]" />
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
                            className="group p-6 bg-secondary/30 border-l-2 border-transparent hover:border-accent hover:bg-secondary transition-all"
                        >
                            <h4 className="font-semibold text-lg text-zinc-200 mb-2 leading-snug group-hover:text-white transition-colors">
                                <a href={pub.doi || PROFILE.scholar} target="_blank" rel="noreferrer" className="hover:underline decoration-accent underline-offset-4">
                                    {pub.title}
                                </a>
                            </h4>
                            <p className="text-sm text-zinc-500 mb-2">{pub.authors}</p>
                            <div className="flex flex-wrap justify-between items-center text-xs gap-3">
                                <span className="text-zinc-400 font-serif italic">{pub.journal}, {pub.year}</span>
                                {pub.doi && (
                                     <a href={pub.doi} target="_blank" rel="noreferrer" className="text-accent hover:text-white uppercase font-bold tracking-wider text-[10px] border border-accent/30 px-2 py-1 rounded hover:bg-accent hover:border-accent transition-colors">
                                        DOI Link
                                     </a>
                                )}
                            </div>
                            {pub.award && (
                                <div className="mt-3 text-xs font-bold text-accent flex items-center gap-2">
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
                    className="h-1 bg-zinc-700 mb-8"
                ></motion.div>
                
                <div className="space-y-6">
                    {AWARDS.map((award, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-4"
                        >
                            <div className="mt-1">
                                <Award className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-zinc-300 text-sm leading-relaxed">{award}</p>
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