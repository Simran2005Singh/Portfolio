import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import avatarImg from '../assets/developer_avatar.png';
import TypingAnimation from '../components/TypingAnimation';

export default function Hero({ isDark }: { isDark: boolean }) {


  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center pt-36 pb-24 overflow-hidden ${
        isDark ? 'bg-[#09090B]' : 'bg-[#FFFFFF]'
      }`}
    >
      {/* Extremely subtle background radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accentPurple/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Display Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
        >
          <motion.span
            variants={itemVariants}
            className={`text-xs md:text-sm font-semibold tracking-[0.25em] uppercase ${
              isDark ? 'text-zinc-500' : 'text-gray-500'
            }`}
          >
            Hi, I'm
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className={`text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] font-display ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            SIMRAN <br />
            SINGH
          </motion.h1>

          {/* Subtitles Stack */}
          <motion.div
            variants={itemVariants}
            className={`text-xl md:text-3xl font-medium tracking-tight font-display ${
              isDark ? 'text-zinc-400' : 'text-gray-500'
            }`}
          >
            I am a <TypingAnimation words={personalInfo.titles} />
          </motion.div>

          {/* One sentence bio */}
          <motion.p
            variants={itemVariants}
            className={`text-sm md:text-base leading-relaxed max-w-lg ${
              isDark ? 'text-zinc-400' : 'text-gray-500'
            }`}
          >
            {personalInfo.oneSentence}
          </motion.p>

          {/* Premium Actions Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >


            {/* GitHub */}
            <a
              href="https://github.com/simran2005singh"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3.5 text-sm font-semibold rounded-2xl border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isDark
                  ? 'border-zinc-800 bg-zinc-900/10 text-zinc-300 hover:border-zinc-700 hover:text-white'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:text-zinc-950'
              }`}
            >
              <FiGithub size={15} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/simran-singh-921a83295/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3.5 text-sm font-semibold rounded-2xl border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isDark
                  ? 'border-zinc-800 bg-zinc-900/10 text-zinc-300 hover:border-zinc-700 hover:text-white'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:text-zinc-950'
              }`}
            >
              <FiLinkedin size={15} />
              LinkedIn
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/simran_val/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3.5 text-sm font-semibold rounded-2xl border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isDark
                  ? 'border-zinc-800 bg-zinc-900/10 text-zinc-300 hover:border-zinc-700 hover:text-white'
                  : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:text-gray-950'
              }`}
            >
              <SiLeetcode size={14} />
              LeetCode
            </a>
          </motion.div>
        </motion.div>

        {/* Right Portrait Column */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.3 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Very soft ambient backglow */}
            <div className="absolute inset-0 bg-accentPurple/5 rounded-[2.5rem] blur-2xl pointer-events-none" />

            {/* Main Picture Frame */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className={`w-full h-full rounded-[2rem] overflow-hidden border transition-all duration-500 hover:scale-[1.01] ${
                isDark
                  ? 'border-zinc-800/80 bg-zinc-900/30'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <img
                src={avatarImg}
                alt="Simran Singh Profile"
                className={`w-full h-full object-cover select-none pointer-events-none transition-all duration-700 hover:scale-105 ${
                  isDark ? 'brightness-[0.95] contrast-[1.05]' : ''
                }`}
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
