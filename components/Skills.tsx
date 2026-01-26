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
    <section id="skills" className="py-24 bg-dark text-light border-t border-slate-900 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-2 text-center flex items-center justify-center gap-2"
        >
            <Brain className="text-accent w-8 h-8" /> Technical Expertise
        </motion.h2>
        <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-accent mx-auto mb-16"
        ></motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Chart - Styled to be minimal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] w-full relative"
          >
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-64 h-64 border border-accent rounded-full animate-pulse-slow"></div>
                <div className="w-48 h-48 border border-accent absolute rounded-full"></div>
             </div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#334155" /> {/* slate-700 */}
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500, fontFamily: 'monospace' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#06b6d4" // cyan-500
                  strokeWidth={2}
                  fill="#06b6d4"
                  fillOpacity={0.4}
                  isAnimationActive={true}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff', fontSize: '12px' }}
                    itemStyle={{ color: '#22d3ee' }}
                    cursor={{ stroke: '#06b6d4', strokeWidth: 1 }}
                />
              </RadarChart>
            </ResponsiveContainer>
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
                className="border-b border-slate-800 pb-6 last:border-0"
              >
                <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4 font-mono">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {skillGroup.items.map((item) => (
                    <motion.span 
                        key={item} 
                        whileHover={{ scale: 1.05, color: "#fff" }}
                        className="text-slate-300 font-light hover:text-white transition-colors cursor-default"
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