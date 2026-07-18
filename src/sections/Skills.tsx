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
        isDark ? 'border-zinc-900 bg-[#09090B]' : 'border-gray-200 bg-[#FFFFFF]'
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
            isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'
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
                  ? 'border-zinc-800 bg-[#18181B] hover:border-zinc-700'
                  : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm'
              }`}
            >
              <h3 className={`text-lg font-bold font-display mb-6 ${
                isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'
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
                        ? 'border-zinc-800 bg-zinc-900/20 text-[#A1A1AA] hover:text-[#F8FAFC] hover:border-zinc-700'
                        : 'border-gray-200 bg-gray-50 text-gray-500 hover:text-gray-900 hover:border-gray-300'
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
