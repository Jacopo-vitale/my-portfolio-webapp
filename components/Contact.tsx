import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-primary dark:bg-primary-dark relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-serif font-bold text-dark dark:text-text-dark mb-4 flex items-center justify-center gap-3"
            >
                <Mail className="text-accent dark:text-accent-dark w-8 h-8" /> Get in Touch
            </motion.h2>
            <motion.p
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-muted dark:text-muted-dark max-w-xl mx-auto text-lg"
            >
                Open to collaborations, research opportunities, and interesting conversations about Medical AI.
            </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl text-center max-w-2xl mx-auto"
        >
            <div className="w-16 h-16 bg-accent/10 dark:bg-accent-dark/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Send className="w-8 h-8 text-accent dark:text-accent-dark" />
            </div>

            <p className="text-dark dark:text-white text-xl font-medium mb-8">
                The most direct way to reach me is via email.<br/>I usually respond within 24 hours.
            </p>
            
            <div className="flex flex-col items-center gap-6">
                <a 
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold bg-dark dark:bg-white text-white dark:text-dark hover:bg-accent dark:hover:bg-accent-dark hover:text-white dark:hover:text-black hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                    <Send className="w-5 h-5" /> 
                    Send an Email
                </a>
                
                <p className="text-muted dark:text-muted-dark text-sm font-mono bg-slate-50 dark:bg-slate-800 py-2 px-4 rounded-lg inline-block border border-slate-100 dark:border-slate-700">
                    {PROFILE.email}
                </p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;