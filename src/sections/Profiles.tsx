import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiAward, FiCheckCircle, FiGithub } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { codingProfiles } from '../data/portfolioData';

export default function Profiles({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  // Generate mock contribution grid data (53 weeks * 7 days)
  const contributionGrid = useMemo(() => {
    const grid: number[][] = [];
    for (let w = 0; w < 53; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        const rand = Math.random();
        if (rand < 0.45) week.push(0);
        else if (rand < 0.7) week.push(1);
        else if (rand < 0.85) week.push(2);
        else if (rand < 0.95) week.push(3);
        else week.push(4);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const getIntensityClass = (level: number) => {
    switch (level) {
      case 0: return isDark ? 'bg-zinc-900 border-zinc-950/20' : 'bg-zinc-100 border-zinc-200';
      case 1: return 'bg-emerald-950/50 border-emerald-950/10';
      case 2: return 'bg-emerald-800/50 border-emerald-800/10';
      case 3: return 'bg-emerald-600/70 border-emerald-600/10';
      case 4: return 'bg-emerald-500 border-emerald-500/10';
      default: return 'bg-zinc-900';
    }
  };

  const languages = [
    { name: 'TypeScript', percentage: 70, color: '#3178c6' },
    { name: 'JavaScript', percentage: 20, color: '#f1e05a' },
    { name: 'Java', percentage: 10, color: '#b07219' },
  ];

  return (
    <section
      id="profiles"
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
            Profiles & Stats
          </h2>
          <div className="w-10 h-[2px] bg-zinc-700 mt-4" />
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Coding Profile Links */}
          <div className="md:col-span-4 space-y-6">
            <h3 className={`text-xs font-bold uppercase tracking-widest font-sans ${
              isDark ? 'text-[#A1A1AA]' : 'text-gray-500'
            }`}>
              Platform Profiles
            </h3>

            <div className="space-y-4">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group ${
                    isDark
                      ? 'border-zinc-800 bg-[#18181B] hover:border-zinc-700'
                      : 'border-gray-200 bg-[#FFFFFF] hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {profile.name === 'LeetCode' ? (
                        <SiLeetcode className="text-amber-500" size={20} />
                      ) : profile.name === 'GitHub' ? (
                        <FiGithub className="text-purple-400" size={20} />
                      ) : (
                        <span className="p-0.5 rounded-full bg-zinc-900 text-zinc-500 flex items-center justify-center">
                          <FiExternalLink size={12} />
                        </span>
                      )}
                      <h4 className={`font-bold font-display ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>
                        {profile.name}
                      </h4>
                    </div>
                    <FiExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className={`text-xs mb-4 font-mono ${isDark ? 'text-[#A1A1AA]' : 'text-gray-500'}`}>
                    @{profile.username}
                  </p>

                  <div className="flex gap-4 text-xs font-semibold pt-3 border-t dark:border-zinc-800 border-zinc-200">
                    <span className="flex items-center gap-1">
                      <FiCheckCircle className="text-emerald-500" size={12} /> {profile.solved}
                    </span>
                    {profile.rating && (
                      <span className="flex items-center gap-1">
                        <FiAward className="text-amber-500" size={12} /> {profile.rating}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: GitHub Stats Panel */}
          <div className="md:col-span-8 space-y-6">
            <h3 className={`text-xs font-bold uppercase tracking-widest font-sans ${
              isDark ? 'text-[#A1A1AA]' : 'text-gray-500'
            }`}>
              GitHub Analytics
            </h3>

            {/* Contributions Box */}
            <div className={`p-6 rounded-3xl border ${
              isDark ? 'border-zinc-800 bg-[#18181B]' : 'border-gray-200 bg-[#FFFFFF] shadow-sm'
            }`}>
              <div className="flex justify-between items-center mb-6">
                <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Contribution Heat-map
                </span>
                <span className={`text-[10px] font-mono ${isDark ? 'text-[#A1A1AA]' : 'text-gray-500'}`}>
                  824 commits last year
                </span>
              </div>

              {/* Scrollable Contributions Panel */}
              <div className="overflow-x-auto pb-2 scrollbar-thin">
                <div className="flex flex-col gap-1 min-w-[500px]">
                  <div className="flex gap-[3px]">
                    {contributionGrid.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[3px]">
                        {week.map((level, dIdx) => (
                          <div
                            key={dIdx}
                            className={`w-2.5 h-2.5 rounded-[1px] border ${getIntensityClass(level)}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Streak & Language distribution side-by-side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Streak Card */}
              <div className={`p-6 rounded-3xl border flex flex-col justify-between ${
                isDark ? 'border-zinc-900 bg-zinc-900/10' : 'border-zinc-200 bg-zinc-50/10'
              }`}>
                <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-650'}`}>
                  Commit Streak
                </span>
                <div className="py-4 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className={isDark ? 'text-[#A1A1AA]' : 'text-gray-500'}>Current Streak</span>
                    <span className={`font-mono font-bold ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>42 Days</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className={isDark ? 'text-[#A1A1AA]' : 'text-gray-500'}>Longest Streak</span>
                    <span className={`font-mono font-bold ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>120 Days</span>
                  </div>
                </div>
              </div>

              {/* Language Distribution Card */}
              <div className={`p-6 rounded-3xl border flex flex-col justify-between ${
                isDark ? 'border-zinc-900 bg-zinc-900/10' : 'border-zinc-200 bg-zinc-50/10'
              }`}>
                <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-650'}`}>
                  Languages
                </span>
                
                {/* Thin stacked bar distribution */}
                <div className="space-y-4 py-2">
                  <div className="h-1.5 w-full flex rounded-full overflow-hidden">
                    {languages.map((lang) => (
                      <div
                        key={lang.name}
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                        className="h-full"
                      />
                    ))}
                  </div>

                  {/* Badges details */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex items-center gap-1.5 text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: lang.color }} />
                        <span className={isDark ? 'text-[#A1A1AA]' : 'text-gray-500'}>
                          {lang.name} <span className="opacity-60">{lang.percentage}%</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
