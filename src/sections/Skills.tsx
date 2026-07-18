import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

export default function Skills({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section
      id="skills"
      className={`py-36 relative overflow-hidden border-t ${
        isDark ? 'border-zinc-900 bg-zinc-950/20' : 'border-zinc-200 bg-zinc-50/20'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            Skills
          </h2>
          <div className="w-10 h-[2px] bg-zinc-700 mt-4" />
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'border-zinc-900 bg-zinc-900/10 hover:border-zinc-800'
                  : 'border-zinc-200 bg-zinc-50/10 hover:border-zinc-300'
              }`}
            >
              <h3 className={`text-lg font-bold font-display mb-6 ${
                isDark ? 'text-zinc-200' : 'text-zinc-800'
              }`}>
                {cat.category}
              </h3>
              
              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-medium px-4 py-2.5 rounded-xl border transition-colors ${
                      isDark
                        ? 'border-zinc-900 bg-zinc-900/20 text-zinc-400 hover:text-white hover:border-zinc-800'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-650 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
