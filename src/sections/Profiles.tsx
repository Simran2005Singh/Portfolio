import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiArrowUpRight, FiCode, FiAward } from 'react-icons/fi';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import { codingProfiles } from '../data/portfolioData';
import type { CodingProfile } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

const iconMap: Record<string, any> = {
  FiGithub: FiGithub,
  SiLeetcode: SiLeetcode,
  SiCodechef: SiCodechef,
  SiGeeksforgeeks: SiGeeksforgeeks,
  SiHackerrank: SiHackerrank,
};

const brandColorMap: Record<string, string> = {
  LeetCode: 'group-hover:border-amber-500/30 dark:group-hover:border-amber-500/20 group-hover:text-amber-500',
  CodeChef: 'group-hover:border-yellow-600/30 dark:group-hover:border-yellow-600/20 group-hover:text-yellow-600',
  GitHub: 'group-hover:border-slate-500/30 dark:group-hover:border-slate-500/20 group-hover:text-purple-400',
  GeeksforGeeks: 'group-hover:border-green-600/30 dark:group-hover:border-green-600/20 group-hover:text-green-600',
  HackerRank: 'group-hover:border-emerald-500/30 dark:group-hover:border-emerald-500/20 group-hover:text-emerald-500',
};

function ProfileCard({ profile, idx, isDark }: { profile: CodingProfile; idx: number; isDark: boolean }) {
  const IconComp = iconMap[profile.icon] || FiCode;
  const hoverClass = brandColorMap[profile.name] || 'group-hover:text-accentPurple';

  return (
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn('up', 0.5, idx * 0.05)}
      className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-dark group relative ${
        isDark
          ? `glass-card-dark border-white/5 ${hoverClass}`
          : `glass-card-light border-black/5 ${hoverClass}`
      }`}
    >
      <div>
        {/* Top Header Block */}
        <div className="flex justify-between items-center mb-6">
          <div className={`p-3 rounded-2xl transition-colors ${
            isDark ? 'bg-slate-900 group-hover:bg-slate-850' : 'bg-slate-100 group-hover:bg-slate-200'
          }`}>
            <IconComp size={24} />
          </div>
          <FiArrowUpRight className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
        </div>

        <h3 className="text-xl font-bold mb-1 text-slate-800 dark:text-white">
          {profile.name}
        </h3>
        <p className={`text-xs font-mono mb-6 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          @{profile.username}
        </p>
      </div>

      {/* Profile Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t dark:border-slate-850 border-slate-200">
        <div>
          <span className={`text-[10px] uppercase font-bold tracking-wider block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            {profile.name === 'GitHub' ? 'Repos' : 'Rating'}
          </span>
          <span className="text-sm font-semibold text-slate-850 dark:text-slate-200 flex items-center gap-1">
            {profile.name !== 'GitHub' && <FiAward className="text-amber-500 flex-shrink-0" size={12} />}
            {profile.rating || 'N/A'}
          </span>
        </div>
        <div>
          <span className={`text-[10px] uppercase font-bold tracking-wider block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            {profile.name === 'GitHub' ? 'Contributions' : 'Solved'}
          </span>
          <span className="text-sm font-semibold text-slate-850 dark:text-slate-200">
            {profile.solved}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Profiles({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="profiles"
      className={`py-24 relative overflow-hidden border-t ${
        isDark ? 'border-slate-900/50 bg-slate-950/20' : 'border-slate-200/50 bg-slate-50/20'
      }`}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accentBlue/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accentPurple/5 rounded-full blur-[80px] pointer-events-none" />

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
            Coding <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">Profiles</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accentBlue to-accentPurple mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            My performance statistics and problem-solving badges across major competitive programming and software engineering sites.
          </p>
        </motion.div>

        {/* Profiles Cards Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
        >
          {codingProfiles.map((profile, idx) => (
            <ProfileCard
              key={profile.name}
              profile={profile}
              idx={idx}
              isDark={isDark}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
