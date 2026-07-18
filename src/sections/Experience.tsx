import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <div className="w-10 h-[2px] bg-zinc-700 mt-4" />
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-12">
          {experienceTimeline.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 relative"
            >
              {/* Left Side: Duration */}
              <div className="md:col-span-4">
                <span className={`text-xs md:text-sm font-semibold tracking-wider font-mono uppercase ${
                   isDark ? 'text-[#A1A1AA]' : 'text-gray-500'
                }`}>
                  {item.duration}
                </span>
              </div>

              {/* Right Side: Role details */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <h3 className={`text-2xl font-bold font-display ${
                     isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'
                  }`}>
                    {item.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-accentPurple font-display mt-1">
                    {item.company}
                  </h4>
                </div>

                <ul className="space-y-3">
                  {item.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className={`text-sm leading-relaxed relative pl-4 ${
                         isDark ? 'text-[#A1A1AA] font-light' : 'text-gray-500'
                      }`}
                    >
                      <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-zinc-700" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
