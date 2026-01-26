import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PUBLICATIONS, AWARDS, PROFILE } from '../constants';
import { Code, Cpu, Eye, Activity, ExternalLink, Award, BookOpen } from 'lucide-react';

const Projects: React.FC = () => {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code className="w-6 h-6" />;
      case 'cpu': return <Cpu className="w-6 h-6" />;
      case 'eye': return <Eye className="w-6 h-6" />;
      case 'activity': return <Activity className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  return (
    <section id="work" className="py-24 bg-secondary dark:bg-secondary-dark relative transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark dark:text-text-dark mb-6">Selected Projects</h2>
          <div className="w-20 h-1 bg-accent dark:bg-accent-dark mb-6"></div>
          <p className="text-muted dark:text-muted-dark max-w-2xl text-lg leading-relaxed">
             A collection of my work in Medical AI, Deep Learning, and Health Technology Assessment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:border-accent-dark/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/5 dark:bg-accent-dark/10 rounded-lg text-accent dark:text-accent-dark group-hover:bg-accent dark:group-hover:bg-accent-dark group-hover:text-white dark:group-hover:text-black transition-colors">
                    {getIcon(project.icon)}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-dark dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications Section - Redesigned as List */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-6 h-6 text-accent dark:text-accent-dark" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark dark:text-text-dark">Recent Publications</h2>
            </div>
            
            <div className="space-y-6">
                {PUBLICATIONS.map((pub, index) => {
                    const Wrapper = pub.doi ? 'a' : 'div';
                    const wrapperProps = pub.doi 
                        ? { href: pub.doi, target: "_blank", rel: "noreferrer" } 
                        : {};

                    return (
                        <motion.div 
                            key={pub.id}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Wrapper 
                                {...wrapperProps}
                                className={`block bg-white dark:bg-slate-900 p-6 rounded-lg border-l-4 border-accent dark:border-accent-dark shadow-sm hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-1 dark:border-r dark:border-t dark:border-b dark:border-r-slate-800 dark:border-t-slate-800 dark:border-b-slate-800 ${pub.doi ? 'cursor-pointer hover:border-l-accent-light dark:hover:border-l-accent-dark' : ''}`}
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                                    <h3 className={`text-lg font-bold leading-tight ${pub.doi ? 'text-dark dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark' : 'text-dark dark:text-white'}`}>
                                        {pub.title}
                                    </h3>
                                    {pub.award && (
                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded-full whitespace-nowrap">
                                            <Award className="w-3 h-3" /> {pub.award}
                                        </span>
                                    )}
                                </div>
                                
                                <div className="text-slate-600 dark:text-slate-400 text-sm mb-3 italic">
                                    {pub.authors}
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <span className="font-serif font-bold text-accent dark:text-accent-dark bg-accent/5 dark:bg-accent-dark/10 px-3 py-1 rounded-md">
                                        {pub.journal}
                                    </span>
                                    <span className="text-slate-500 dark:text-slate-500 font-medium">
                                        {pub.year}
                                    </span>
                                    {pub.doi && (
                                        <div className="flex items-center gap-1 text-slate-400 hover:text-accent dark:hover:text-accent-dark transition-colors text-xs uppercase tracking-wider font-bold ml-auto">
                                            <ExternalLink className="w-3 h-3" /> READ PAPER
                                        </div>
                                    )}
                                </div>
                            </Wrapper>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300"
        >
             {/* Decorative Background for Awards */}
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Award className="w-64 h-64 text-dark dark:text-white" />
             </div>

             <h3 className="text-2xl font-serif font-bold mb-8 relative z-10 flex items-center gap-3 text-dark dark:text-white">
                <Award className="w-6 h-6 text-accent dark:text-accent-dark" /> Honors & Awards
             </h3>

             <ul className="space-y-4 relative z-10">
                {AWARDS.map((award, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-accent dark:bg-accent-dark rounded-full flex-shrink-0"></span>
                        <span className="leading-relaxed">{award}</span>
                    </li>
                ))}
             </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;