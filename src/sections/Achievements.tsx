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
        isDark ? 'border-zinc-900 bg-[#09090B]' : 'border-gray-200 bg-[#F8FAFC]'
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
                  ? 'border-zinc-800 bg-[#18181B] hover:border-zinc-700'
                  : 'border-gray-200 bg-[#FFFFFF] hover:border-gray-300 shadow-sm'
              }`}
            >
              <div>
                <span className={`text-xxs font-mono uppercase tracking-widest font-semibold ${
                  isDark ? 'text-[#A1A1AA]' : 'text-gray-500'
                }`}>
                  {ach.date} &middot; {ach.issuer}
                </span>

                <h3 className={`text-xl font-bold font-display mt-4 mb-2 ${
                  isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'
                }`}>
                  {ach.title}
                </h3>

                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-[#A1A1AA] font-light' : 'text-gray-500'
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
