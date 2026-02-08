import React from 'react';
import { motion } from 'framer-motion';
import { HOBBIES } from '../constants';
import { Heart } from 'lucide-react';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-24 bg-primary dark:bg-primary-dark relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="mb-16 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-serif font-bold text-dark dark:text-text-dark mb-4 flex items-center justify-center gap-2"
            >
                <Heart className="text-accent dark:text-accent-dark w-8 h-8" /> Hobbies & Interests
            </motion.h2>
            <motion.p
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-muted dark:text-muted-dark max-w-xl mx-auto text-lg"
            >
                What I do when I'm not in the lab or coding.
            </motion.p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {HOBBIES.map((hobby, index) => {
                return (
                    <motion.div 
                        key={hobby.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="group relative h-80 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl transition-all duration-500 block border border-slate-200 dark:border-slate-800">
                            {/* Image Background */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${hobby.image})` }}
                            ></div>
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-slate-900/95 dark:via-slate-900/50 dark:to-transparent opacity-90 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-serif font-bold text-dark dark:text-white mb-2 leading-tight dark:drop-shadow-md">
                                        {hobby.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-slate-200 dark:border-white/20 pt-4 mt-2 font-medium">
                                        {hobby.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
};

export default Hobbies;