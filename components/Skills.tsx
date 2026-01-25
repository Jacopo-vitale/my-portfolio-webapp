import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

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
    <section id="skills" className="py-24 bg-dark text-light border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Technical Expertise</h2>
        <div className="h-1 w-20 bg-accent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Chart - Styled to be minimal */}
          <div className="h-[400px] w-full relative">
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-64 h-64 border border-accent rounded-full"></div>
                <div className="w-48 h-48 border border-accent absolute rounded-full"></div>
             </div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#3f3f46" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 12, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#9f1239"
                  strokeWidth={2}
                  fill="#9f1239"
                  fillOpacity={0.6}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff', fontSize: '12px' }}
                    itemStyle={{ color: '#fb7185' }}
                    cursor={{ stroke: '#9f1239', strokeWidth: 1 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* List */}
          <div className="grid grid-cols-1 gap-8">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category} className="border-b border-zinc-800 pb-6 last:border-0">
                <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="text-zinc-300 font-light hover:text-white transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;