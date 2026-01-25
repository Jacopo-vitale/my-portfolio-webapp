import React from 'react';
import { PROJECTS, PUBLICATIONS, AWARDS, PROFILE } from '../constants';
import { Code, Cpu, Eye, Activity, Award, BookOpen, Download } from './Icons';

const iconMap: Record<string, React.ReactNode> = {
    code: <Code className="w-6 h-6 text-zinc-300" />,
    cpu: <Cpu className="w-6 h-6 text-zinc-300" />,
    eye: <Eye className="w-6 h-6 text-zinc-300" />,
    activity: <Activity className="w-6 h-6 text-zinc-300" />
};

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-primary text-light">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Projects */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-2">Projects & Innovation</h2>
            <div className="h-1 w-20 bg-accent mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROJECTS.map((proj) => (
                    <div key={proj.id} className="group bg-secondary p-8 rounded-none border border-zinc-800 hover:border-accent transition-all duration-300 flex flex-col">
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
                    </div>
                ))}
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
            {/* Publications */}
            <div className="lg:col-span-2">
                <div className="flex justify-between items-end mb-8">
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                            Recent Publications
                        </h3>
                        <div className="h-1 w-12 bg-zinc-700"></div>
                     </div>
                     <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="text-sm text-accent hover:text-white transition-colors flex items-center gap-1">
                        View Google Scholar <Download className="w-3 h-3 rotate-[-90deg]" />
                     </a>
                </div>

                <div className="space-y-4">
                    {PUBLICATIONS.map((pub) => (
                        <div key={pub.id} className="group p-6 bg-secondary/30 border-l-2 border-transparent hover:border-accent hover:bg-secondary transition-all">
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Awards */}
            <div>
                 <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    Honors & Awards
                </h3>
                <div className="h-1 w-12 bg-zinc-700 mb-8"></div>
                
                <div className="space-y-6">
                    {AWARDS.map((award, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="mt-1">
                                <Award className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-zinc-300 text-sm leading-relaxed">{award}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;