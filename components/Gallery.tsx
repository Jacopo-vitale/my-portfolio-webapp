import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY } from '../constants';
import { MapPin, Camera, Globe, ExternalLink } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-secondary dark:bg-secondary-dark relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="mb-16 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-serif font-bold text-dark dark:text-text-dark mb-4 flex items-center justify-center gap-2"
            >
                <Camera className="text-accent dark:text-accent-dark w-8 h-8" /> Global Impact
            </motion.h2>
            <motion.p
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-muted dark:text-muted-dark max-w-xl mx-auto text-lg"
            >
                Snapshot of my involvement in European projects, international conferences, and research visits.
            </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {GALLERY.map((item, index) => {
                const Wrapper = item.link ? 'a' : 'div';
                const wrapperProps = item.link 
                    ? { href: item.link, target: "_blank", rel: "noreferrer" } 
                    : {};

                return (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Wrapper 
                            {...wrapperProps}
                            className="group relative h-96 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl transition-all duration-500 block border border-slate-200 dark:border-slate-800"
                        >
                            {/* Image Background - Restored B&W to Color Effect */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                            
                            {/* Overlay Gradient - Adaptive Theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-slate-900/95 dark:via-slate-900/50 dark:to-transparent opacity-90 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-accent dark:text-white text-xs font-bold uppercase tracking-widest bg-white/80 dark:bg-accent-dark/90 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm border border-slate-100 dark:border-transparent">
                                            {item.category}
                                        </span>
                                        {item.link && (
                                            <div 
                                                className="text-slate-500 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity bg-white/50 dark:bg-white/20 p-2 rounded-full backdrop-blur-sm shadow-sm hover:text-accent dark:hover:text-accent-dark"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-2xl font-serif font-bold text-dark dark:text-white mb-2 leading-tight dark:drop-shadow-md">
                                        {item.title}
                                    </h3>
                                    
                                    {item.partners ? (
                                        <div className="flex items-start gap-2 text-slate-600 dark:text-slate-200 text-sm mb-4 font-medium dark:drop-shadow-md">
                                            <Globe className="w-4 h-4 text-accent dark:text-accent-dark mt-1 flex-shrink-0" />
                                            <span className="leading-snug line-clamp-2">{item.partners}</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-200 text-sm mb-4 font-medium dark:drop-shadow-md">
                                            <MapPin className="w-4 h-4 text-accent dark:text-accent-dark" />
                                            <span>{item.location}</span>
                                        </div>
                                    )}

                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-slate-200 dark:border-white/20 pt-4 mt-2 font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Wrapper>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
};

export default Gallery;