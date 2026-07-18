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
    { label: 'Problem Solving', value: '300+ DSA Problems Solved' },
    { label: 'Specialization', value: 'React & Frontend Developer' },
    { label: 'Interests', value: 'High Performance Backend Systems' },
  ];

  return (
    <section
      id="about"
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
              isDark ? 'text-zinc-400 font-light' : 'text-zinc-700'
            }`}
          >
            {personalInfo.bio} I focus on developing systems that are both mathematically efficient and visually polished. I strive to merge strong algorithmic foundations with modern client architecture to engineer robust web portals.
          </motion.p>

          {/* Clean bullet specs list */}
          <motion.div
            variants={itemVariants}
            className={`rounded-3xl border divide-y ${
              isDark
                ? 'border-zinc-900 bg-zinc-900/10 divide-zinc-900'
                : 'border-zinc-200 bg-zinc-50/10 divide-zinc-200'
            }`}
          >
            {bullets.map((bullet) => (
              <div
                key={bullet.label}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-2 transition-colors duration-300 hover:bg-zinc-900/5 dark:hover:bg-zinc-900/30"
              >
                <span className={`text-xs uppercase font-bold tracking-widest ${
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  {bullet.label}
                </span>
                <span className={`text-sm font-semibold flex items-center gap-2 ${
                  isDark ? 'text-zinc-300' : 'text-zinc-800'
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
