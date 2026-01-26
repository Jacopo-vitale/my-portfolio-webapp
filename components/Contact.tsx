import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark relative border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-4"
            >
                Get in Touch
            </motion.h2>
            <motion.p
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-slate-400 max-w-xl mx-auto"
            >
                Open to collaborations, research opportunities, and interesting conversations about Medical AI.
            </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-sm text-center"
        >
            <p className="text-slate-300 text-lg mb-8">
                The most direct way to reach me is via email. I usually respond within 24 hours.
            </p>
            
            <a 
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold bg-accent hover:bg-cyan-400 text-dark shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
            >
                <Send className="w-5 h-5" /> 
                Send an Email
            </a>
            
            <p className="mt-8 text-slate-500 text-sm font-mono">
                {PROFILE.email}
            </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;