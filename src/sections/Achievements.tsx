import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiBookmark, FiExternalLink } from 'react-icons/fi';
import { achievements } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

export default function Achievements({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="achievements"
      className={`py-24 relative overflow-hidden border-t ${
        isDark ? 'border-slate-900/50 bg-slate-950/20' : 'border-slate-200/50 bg-slate-50/20'
      }`}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-accentPurple/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-accentPink/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

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
            Honors & <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">Achievements</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accentBlue to-accentPurple mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            Major accolades, hackathon victories, and academic milestones earned throughout my developer journey.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              variants={fadeIn('up', 0.5, idx * 0.05)}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-dark group relative ${
                isDark
                  ? 'glass-card-dark border-white/5 hover:border-accentPurple/25'
                  : 'glass-card-light border-black/5 hover:border-accentBlue/25'
              }`}
            >
              {/* Card top row */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  {/* Decorative badge icon wrapper */}
                  <div className={`p-4 rounded-2xl ${
                    isDark ? 'bg-slate-900/80 text-amber-400' : 'bg-slate-100 text-amber-500'
                  } group-hover:scale-110 transition-transform`}>
                    <FiAward size={24} />
                  </div>
                  <span className={`text-xs font-mono font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {ach.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-accentPurple transition-colors">
                  {ach.title}
                </h3>
                <h4 className="text-accentBlue font-semibold text-sm mb-4">
                  {ach.issuer}
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-650'}`}>
                  {ach.description}
                </p>
              </div>

              {/* Card footer links if present */}
              {ach.link && (
                <div className="mt-8 pt-4 border-t dark:border-slate-850 border-slate-200">
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-accentPurple hover:underline"
                  >
                    View Credential <FiExternalLink size={12} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates & Badge banner (bonus decorative section) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-16 p-8 rounded-3xl border flex flex-col md:flex-row md:items-center justify-between gap-6 ${
            isDark ? 'glass-card-dark border-white/5' : 'glass-card-light border-black/5'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${isDark ? 'bg-slate-900 text-accentPurple' : 'bg-slate-100 text-accentBlue'}`}>
              <FiBookmark size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold">Standard Certifications</h4>
              <p className={`text-xs md:text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                AWS Certified Cloud Practitioner, Oracle Java SE Certification, HackerRank Problem Solving (Gold)
              </p>
            </div>
          </div>
          <button
            className={`px-5 py-2.5 font-bold rounded-xl border text-sm transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:text-white'
                : 'border-slate-200 bg-white/50 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Verify Credentials
          </button>
        </motion.div>

      </div>
    </section>
  );
}
