import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS } from '../constants';
import { Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const data = [
    { subject: 'AI / ML', A: 95, fullMark: 100 },
    { subject: 'Web Dev', A: 85, fullMark: 100 },
    { subject: 'Bio-Signal', A: 90, fullMark: 100 },
    { subject: 'Embedded', A: 75, fullMark: 100 },
    { subject: 'DevOps', A: 70, fullMark: 100 },
    { subject: 'Clinical', A: 85, fullMark: 100 },
  ];

  return (
    <section id="skills" className="py-24 bg-primary dark:bg-primary-dark relative transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-serif font-bold text-dark dark:text-text-dark mb-4 flex items-center justify-center gap-2"
            >
                <Brain className="text-accent dark:text-accent-dark w-8 h-8" /> Technical Expertise
            </motion.h2>
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-accent dark:bg-accent-dark mx-auto mb-6"
            ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Chart - Professional Style */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] w-full min-w-0 relative bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 transition-colors"
          >
            <div className="w-full h-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid stroke="#e2e8f0" strokeOpacity={0.5} /> {/* slate-200 */}
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 600, fontFamily: 'sans-serif' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#0f766e" // accent color (Teal 700)
                    strokeWidth={2}
                    fill="#0f766e"
                    fillOpacity={0.2}
                    isAnimationActive={true}
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#1e293b', fontSize: '12px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        itemStyle={{ color: '#0f766e', fontWeight: 'bold' }}
                        cursor={{ stroke: '#0f766e', strokeWidth: 1 }}
                    />
                </RadarChart>
                </ResponsiveContainer>
            </div>
          </motion.div>

          {/* List */}
          <div className="grid grid-cols-1 gap-8">
            {SKILLS.map((skillGroup, index) => (
              <motion.div 
                key={skillGroup.category} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-slate-200 dark:border-slate-800 pb-6 last:border-0"
              >
                <h3 className="text-sm font-bold text-accent dark:text-accent-dark uppercase tracking-widest mb-4 font-sans">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {skillGroup.items.map((item) => (
                    <motion.span 
                        key={item} 
                        whileHover={{ y: -2 }}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md hover:bg-accent/10 dark:hover:bg-accent-dark/10 hover:text-accent dark:hover:text-accent-dark transition-colors cursor-default border border-slate-200 dark:border-slate-700"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;