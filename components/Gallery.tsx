import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY } from '../constants';
import { MapPin, Camera, Globe, ExternalLink } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-dark relative border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="mb-16 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2"
            >
                <Camera className="text-accent w-8 h-8" /> Global Impact
            </motion.h2>
            <motion.p
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-slate-400 max-w-xl mx-auto"
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Wrapper 
                            {...wrapperProps}
                            className="group relative h-80 rounded-2xl overflow-hidden border border-slate-800 hover:border-accent/50 transition-all cursor-pointer shadow-2xl block"
                        >
                            {/* Image Background */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-accent text-xs font-bold uppercase tracking-widest border border-accent/30 px-2 py-1 rounded bg-dark/50 backdrop-blur-md">
                                            {item.category}
                                        </span>
                                        {item.link && (
                                            <div 
                                                className="text-white group-hover:text-accent transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md group-hover:bg-white/20"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-200 transition-colors">
                                        {item.title}
                                    </h3>
                                    
                                    {item.partners ? (
                                        <div className="flex items-start gap-2 text-slate-300 text-sm mb-4">
                                            <Globe className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                                            <span className="leading-snug">{item.partners}</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
                                            <MapPin className="w-4 h-4 text-accent" />
                                            <span>{item.location}</span>
                                        </div>
                                    )}

                                    <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
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