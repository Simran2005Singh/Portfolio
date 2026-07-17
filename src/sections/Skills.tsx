import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

interface SkillRowProps {
  name: string;
  level: number;
  isDark: boolean;
}

function SkillRow({ name, level, isDark }: SkillRowProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="font-semibold">{name}</span>
        <span className={`text-xs font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{level}%</span>
      </div>
      <div className={`h-2 w-full rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-accentBlue via-accentPurple to-accentPink rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className={`py-24 relative overflow-hidden border-t ${
        isDark ? 'border-slate-900/50 bg-slate-950/40' : 'border-slate-200/50 bg-slate-50/40'
      }`}
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-accentBlue/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-accentPink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">Expertise</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accentBlue to-accentPurple mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            My technical skills categorized by proficiency, covering programming, frontend, backend systems, and tools.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              variants={fadeIn('up', 0.5, catIdx * 0.05)}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-glass-dark hover:-translate-y-1.5 ${
                isDark
                  ? 'glass-card-dark border-white/5 hover:border-accentPurple/25'
                  : 'glass-card-light border-black/5 hover:border-accentBlue/25'
              }`}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center justify-between pb-3 border-b dark:border-slate-850 border-slate-200">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">
                  {cat.category}
                </span>
                <span className="text-xs font-mono font-normal opacity-50">
                  0{catIdx + 1}
                </span>
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillRow
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    isDark={isDark}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
