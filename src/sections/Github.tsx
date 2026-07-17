import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGitBranch, FiStar, FiGitCommit, FiFolder, FiExternalLink } from 'react-icons/fi';
import { fadeIn, staggerContainer } from '../animations/variants';

interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  link: string;
}

const pinnedRepos: PinnedRepo[] = [
  {
    name: 'campusbites-system',
    description: 'Cafeteria food ordering and queue tracking management platform with real-time websocket updates.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 24,
    forks: 8,
    link: 'https://github.com',
  },
  {
    name: 'smart-portfolio-manager',
    description: 'Fintech stock advisor and ranker using custom Trie auto-complete and Max-Heap structures.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 18,
    forks: 5,
    link: 'https://github.com',
  },
  {
    name: 'digital-health-dispatch',
    description: 'AI symptom matching and emergency ambulance routing map router built for health hackathon.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 12,
    forks: 3,
    link: 'https://github.com',
  },
];

export default function Github({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  // Generate mock contribution grid data (53 weeks * 7 days)
  const contributionGrid = useMemo(() => {
    const grid: number[][] = [];
    for (let w = 0; w < 53; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        // Random level of contribution: 0 (none) to 4 (high)
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
      case 0: return isDark ? 'bg-slate-900 border-slate-950/20' : 'bg-slate-100 border-slate-200';
      case 1: return 'bg-emerald-900/40 border-emerald-950/10';
      case 2: return 'bg-emerald-700/60 border-emerald-800/10';
      case 3: return 'bg-emerald-500/80 border-emerald-600/10';
      case 4: return 'bg-emerald-400 border-emerald-500/10';
      default: return 'bg-slate-900';
    }
  };

  return (
    <section
      id="github"
      className={`py-24 relative overflow-hidden border-t ${
        isDark ? 'border-slate-900/50 bg-slate-950/20' : 'border-slate-200/50 bg-slate-50/20'
      }`}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accentPurple/5 rounded-full blur-[120px] pointer-events-none" />

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
            Open Source <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400">Contributions</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            My public repositories, statistics dashboard, and commit histories on GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stats & Contribution Chart */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Interactive Grid Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-3xl border ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold">Contribution Activity</h3>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    824 contributions in the last year
                  </p>
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:underline flex items-center gap-1"
                >
                  View Profile <FiExternalLink size={12} />
                </a>
              </div>

              {/* Grid Layout Scrollable Wrapper */}
              <div className="overflow-x-auto pb-4 scrollbar-thin">
                <div className="flex flex-col gap-1 min-w-[720px]">
                  {/* Days Label row */}
                  <div className="flex gap-[3px]">
                    {contributionGrid.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[3px]">
                        {week.map((level, dIdx) => (
                          <div
                            key={dIdx}
                            className={`w-3.5 h-3.5 rounded-sm border ${getIntensityClass(level)}`}
                            title={`${level === 0 ? 'No' : level * 2} contributions on week ${wIdx + 1}, day ${dIdx + 1}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid Legend Row */}
              <div className="flex justify-end items-center gap-1.5 text-xs text-slate-500 mt-2 font-medium">
                <span>Less</span>
                <div className="w-3 h-3 rounded-sm bg-slate-900 border border-slate-950/20" />
                <div className="w-3 h-3 rounded-sm bg-emerald-900/40 border border-emerald-950/10" />
                <div className="w-3 h-3 rounded-sm bg-emerald-700/60 border border-emerald-800/10" />
                <div className="w-3 h-3 rounded-sm bg-emerald-500/80 border border-emerald-600/10" />
                <div className="w-3 h-3 rounded-sm bg-emerald-400 border border-emerald-500/10" />
                <span>More</span>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className={`p-6 rounded-2xl border flex items-center gap-4 ${
                isDark ? 'glass-card-dark' : 'glass-card-light'
              }`}>
                <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-900 text-emerald-400' : 'bg-slate-100 text-emerald-500'}`}>
                  <FiGitCommit size={20} />
                </div>
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Commits
                  </span>
                  <span className="text-xl font-bold">1,240+</span>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border flex items-center gap-4 ${
                isDark ? 'glass-card-dark' : 'glass-card-light'
              }`}>
                <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-900 text-amber-500' : 'bg-slate-100 text-amber-600'}`}>
                  <FiStar size={20} />
                </div>
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Stars
                  </span>
                  <span className="text-xl font-bold">50+</span>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border flex items-center gap-4 ${
                isDark ? 'glass-card-dark' : 'glass-card-light'
              }`}>
                <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-900 text-purple-400' : 'bg-slate-100 text-purple-500'}`}>
                  <FiGitBranch size={20} />
                </div>
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Forks
                  </span>
                  <span className="text-xl font-bold">15+</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Pinned Repos */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <FiFolder className="text-emerald-400" /> Pinned Repositories
            </h3>

            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              {pinnedRepos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeIn('left', 0.5, idx * 0.05)}
                  className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-x-1.5 hover:shadow-glass-dark group ${
                    isDark
                      ? 'glass-card-dark border-white/5 hover:border-emerald-500/20'
                      : 'glass-card-light border-black/5 hover:border-emerald-500/20'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold group-hover:text-emerald-400 transition-colors">
                        {repo.name}
                      </h4>
                      <FiExternalLink size={14} className="opacity-45 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className={`text-xs mb-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiStar size={12} /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiGitBranch size={12} /> {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
