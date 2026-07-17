import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBookOpen, FiAward, FiCode, FiGitBranch } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
  isDark: boolean;
}

function StatCard({ label, value, suffix = '', icon, isDark }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) {
        setCount(end);
        return;
      }
      
      const duration = 1.5; // in seconds
      const totalFrames = 60;
      const frameDuration = (duration * 1000) / totalFrames;
      const increment = (end - start) / totalFrames;
      
      let currentFrame = 0;
      const counter = setInterval(() => {
        currentFrame++;
        start += increment;
        if (currentFrame >= totalFrames) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn('up', 0.5)}
      className={`p-6 rounded-2xl border flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 ${
        isDark
          ? 'glass-card-dark hover:border-accentPurple/30'
          : 'glass-card-light hover:border-accentBlue/30'
      }`}
    >
      <div className={`p-3 rounded-xl mb-3 ${isDark ? 'bg-slate-900/80 text-accentPurple' : 'bg-slate-100 text-accentBlue'}`}>
        {icon}
      </div>
      <h3 className="text-3xl font-extrabold mb-1 tracking-tight">
        {count}
        {suffix}
      </h3>
      <p className={`text-xs font-medium uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        {label}
      </p>
    </motion.div>
  );
}

export default function About({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden border-t ${
        isDark ? 'border-slate-900/50 bg-slate-950/20' : 'border-slate-200/50 bg-slate-50/20'
      }`}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accentPurple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accentBlue/5 rounded-full blur-[80px] pointer-events-none" />

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
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">Me</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accentBlue to-accentPurple mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            My background, academic journey, and what drives me as a software developer.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Objective */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div
              variants={fadeIn('up', 0.5)}
              className={`p-8 rounded-2xl border ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiCode className="text-accentBlue" /> Professional Bio
              </h3>
              <p className={`leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-650'}`}>
                {personalInfo.bio}
              </p>
              <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-650'}`}>
                I am highly enthusiastic about diving deep into backend design, optimization, and system scalability, while maintaining an eye for pixel-perfect frontend layouts. I active compete in coding platforms to refine my problem-solving speed.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.5)}
              className={`p-8 rounded-2xl border ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiAward className="text-accentPurple" /> Career Objective & Interests
              </h3>
              <p className={`leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-650'}`}>
                To build high-performance applications that deliver significant user experience improvements. I aim to merge my strong algorithm foundations with cutting-edge system designs to solve challenging infrastructure problems.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Full Stack Web', 'Data Structures & Algorithms', 'Machine Learning', 'Cloud Architecture', 'Distributed Systems'].map((interest) => (
                  <span
                    key={interest}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${
                      isDark
                        ? 'border-slate-800 bg-slate-900/50 text-slate-300'
                        : 'border-slate-200 bg-slate-100/50 text-slate-700'
                    }`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Education & Animated Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className={`p-8 rounded-2xl border ${isDark ? 'glass-card-dark' : 'glass-card-light'}`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiBookOpen className="text-accentBlue" /> Academic Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-base">{personalInfo.education.degree}</h4>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {personalInfo.education.college}
                  </p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Timeline</span>
                  <span className="font-semibold text-accentPurple">{personalInfo.education.graduationYear}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t pt-3 dark:border-slate-850 border-slate-200">
                  <span className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Current CGPA</span>
                  <span className="font-semibold text-accentBlue">{personalInfo.education.gpa}</span>
                </div>
              </div>
            </motion.div>

            {/* Statistics Counters Grid */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                label="Leetcode Solved"
                value={500}
                suffix="+"
                icon={<FiCode size={20} />}
                isDark={isDark}
              />
              <StatCard
                label="CodeChef Solved"
                value={250}
                suffix="+"
                icon={<FiAward size={20} />}
                isDark={isDark}
              />
              <StatCard
                label="GitHub Repos"
                value={50}
                suffix="+"
                icon={<FiGitBranch size={20} />}
                isDark={isDark}
              />
              <StatCard
                label="Hackathons Won"
                value={3}
                suffix=""
                icon={<FiAward size={20} />}
                isDark={isDark}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
