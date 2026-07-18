import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function About({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } },
  };

  const bullets = [
    { label: 'Degree', value: 'B.E Information Technology' },
    { label: 'Institution', value: 'Army Institute of Technology' },
    { label: 'Leadership', value: 'Secretary Technical Board' },
    { label: 'Problem Solving', value: '269 DSA Problems Solved' },
    { label: 'Specialization', value: 'React & Frontend Developer' },
    { label: 'Interests', value: 'High Performance Backend Systems' },
  ];

  return (
    <section
      id="about"
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
            About
          </h2>
          <div className="w-10 h-[2px] bg-zinc-700 mt-4" />
        </motion.div>

        {/* Content Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className={`text-base md:text-lg leading-relaxed font-sans ${
              isDark ? 'text-[#A1A1AA] font-light' : 'text-gray-500'
            }`}
          >
            {personalInfo.bio} I focus on developing systems that are both mathematically efficient and visually polished. I strive to merge strong algorithmic foundations with modern client architecture to engineer robust web portals.
          </motion.p>

          {/* Clean bullet specs list */}
          <motion.div
            variants={itemVariants}
            className={`rounded-3xl border divide-y ${
              isDark
                ? 'border-zinc-800 bg-[#18181B] divide-zinc-800'
                : 'border-gray-200 bg-[#FFFFFF] divide-gray-200'
            }`}
          >
            {bullets.map((bullet) => (
              <div
                key={bullet.label}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-2 transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-zinc-800/40"
              >
                <span className={`text-xs uppercase font-bold tracking-widest ${
                  isDark ? 'text-[#A1A1AA]' : 'text-gray-500'
                }`}>
                  {bullet.label}
                </span>
                <span className={`text-sm font-semibold flex items-center gap-2 ${
                  isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'
                }`}>
                  <FiArrowRight className="text-accentPurple opacity-50" size={13} />
                  {bullet.value}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
