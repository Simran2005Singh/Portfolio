import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiAward, FiUsers, FiCpu, FiHeart } from 'react-icons/fi';
import { experienceTimeline } from '../data/portfolioData';
import type { TimelineItem } from '../data/portfolioData';

const iconMap: Record<string, any> = {
  internship: FiBriefcase,
  hackathon: FiAward,
  leadership: FiUsers,
  training: FiCpu,
  volunteer: FiHeart,
};

const colorMap: Record<string, { badge: string; dot: string; line: string }> = {
  internship: {
    badge: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    dot: 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]',
    line: 'from-blue-500',
  },
  hackathon: {
    badge: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    dot: 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]',
    line: 'from-amber-500',
  },
  leadership: {
    badge: 'bg-violet-500/10 text-violet-500 border-violet-500/20',
    dot: 'bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.6)]',
    line: 'from-violet-500',
  },
  training: {
    badge: 'bg-teal-500/10 text-teal-500 border-teal-500/20',
    dot: 'bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.6)]',
    line: 'from-teal-500',
  },
  volunteer: {
    badge: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    dot: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]',
    line: 'from-emerald-500',
  },
};

function TimelineCard({ item, index, isDark }: { item: TimelineItem; index: number; isDark: boolean }) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: '-50px' });
  const IconComp = iconMap[item.type] || FiBriefcase;
  const colors = colorMap[item.type] || colorMap.internship;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-stretch justify-between w-full md:mb-12 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Spacer for Desktop (occupies opposite side of card) */}
      <div className="hidden md:block w-[45%] flex-shrink-0" />

      {/* Center Timeline Node and Connecting Dot */}
      <div className="absolute left-4 md:left-1/2 top-4 md:-translate-x-1/2 flex flex-col items-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isCardInView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${colors.dot}`}
        >
          <IconComp size={16} />
        </motion.div>
      </div>

      {/* Event Details Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={isCardInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className={`w-full md:w-[45%] pl-12 md:pl-0 ${
          isEven ? 'md:text-right' : 'md:text-left'
        }`}
      >
        <div
          className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glass-dark ${
            isDark
              ? 'glass-card-dark border-white/5 hover:border-accentPurple/25'
              : 'glass-card-light border-black/5 hover:border-accentBlue/25'
          }`}
        >
          {/* Card Header Row */}
          <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className={`text-xxs uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${colors.badge}`}>
              {item.type}
            </span>
            <span className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {item.duration}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-1">{item.role}</h3>
          <h4 className="text-accentBlue font-medium text-sm mb-4">{item.company}</h4>

          {/* Description Bullets */}
          <ul className={`space-y-2 text-sm leading-relaxed ${isDark ? 'text-slate-350' : 'text-slate-650'}`}>
            {item.description.map((desc, idx) => (
              <li key={idx} className={`flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-accentPurple mt-2 flex-shrink-0" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className={`py-24 relative overflow-hidden border-t ${
        isDark ? 'border-slate-900/50 bg-slate-950/40' : 'border-slate-200/50 bg-slate-50/40'
      }`}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accentPurple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accentBlue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">Journey</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accentBlue to-accentPurple mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            A timeline of my professional experiences, internships, hackathon milestones, and leadership achievements.
          </p>
        </motion.div>

        {/* Timeline Line & Grid Wrapper */}
        <div className="relative max-w-5xl mx-auto pl-8 md:pl-0">
          
          {/* Vertical central line line-track */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
          
          {/* Timeline Cards Grid */}
          <div className="relative space-y-12 md:space-y-0">
            {experienceTimeline.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
