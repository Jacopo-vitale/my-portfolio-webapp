import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    if (form.current) {
        // TODO: Replace with your EmailJS service ID, template ID, and public key
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        
        // Simulation
        setTimeout(() => {
             setStatus('success');
             if(form.current) form.current.reset();
             setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    }
  };

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
            className="bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-sm"
        >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="user_name" className="text-sm font-medium text-slate-300">Name</label>
                        <input type="text" name="user_name" required className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Dr. John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="user_email" className="text-sm font-medium text-slate-300">Email</label>
                        <input type="email" name="user_email" required className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="john@example.com" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                    <textarea name="message" required rows={5} className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" placeholder="I'd like to discuss..."></textarea>
                </div>

                <div className="flex justify-end pt-4">
                    <button 
                        type="submit" 
                        disabled={status === 'sending' || status === 'success'}
                        className={`
                            flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all
                            ${status === 'sending' ? 'bg-slate-700 cursor-wait' : 
                              status === 'success' ? 'bg-emerald-600 text-white cursor-default' : 
                              'bg-accent hover:bg-cyan-400 text-dark shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'}
                        `}
                    >
                        {status === 'idle' && <><Send className="w-4 h-4" /> Send Message</>}
                        {status === 'sending' && 'Sending...'}
                        {status === 'success' && <><CheckCircle className="w-4 h-4" /> Sent Successfully</>}
                        {status === 'error' && <><AlertCircle className="w-4 h-4" /> Error. Try again.</>}
                    </button>
                </div>
            </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;