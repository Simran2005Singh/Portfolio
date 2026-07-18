import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../data/portfolioData';

export default function Achievements({ isDark }: { isDark: boolean }) {
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
      id="achievements"
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
            Achievements
          </h2>
          <div className="w-10 h-[2px] bg-zinc-700 mt-4" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.id}
              variants={cardVariants}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'border-zinc-900 bg-zinc-900/10 hover:border-zinc-800'
                  : 'border-zinc-200 bg-zinc-50/10 hover:border-zinc-300'
              }`}
            >
              <div>
                <span className={`text-xxs font-mono uppercase tracking-widest font-semibold ${
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  {ach.date} &middot; {ach.issuer}
                </span>

                <h3 className={`text-xl font-bold font-display mt-4 mb-2 ${
                  isDark ? 'text-zinc-150' : 'text-zinc-900'
                }`}>
                  {ach.title}
                </h3>

                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-zinc-400 font-light' : 'text-zinc-650'
                }`}>
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
