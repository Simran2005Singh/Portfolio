import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

export default function Projects({ isDark }: { isDark: boolean }) {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <div className="w-10 h-[2px] bg-zinc-700 mt-4" />
        </motion.div>

        {/* Projects Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`p-8 rounded-3xl border flex flex-col md:flex-row gap-8 justify-between items-start transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'border-zinc-900 bg-zinc-900/10 hover:border-zinc-800'
                  : 'border-zinc-200 bg-zinc-50/10 hover:border-zinc-300'
              }`}
            >
              
              {/* Left Column: Number & Info */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className={`text-3xl font-light font-display opacity-30 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    0{index + 1}
                  </span>
                  <h3 className={`text-2xl font-bold font-display ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {project.title}
                  </h3>
                </div>

                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-zinc-400 font-light' : 'text-zinc-650'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xxs font-mono font-medium px-2.5 py-1 rounded border ${
                        isDark
                          ? 'border-zinc-900 bg-zinc-900/30 text-zinc-500'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Code & Demo Buttons */}
              <div className="flex md:flex-col gap-3 flex-shrink-0 w-full md:w-auto pt-4 md:pt-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-3 text-xs font-semibold rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-colors w-full md:w-40 ${
                      isDark
                        ? 'border-zinc-900 bg-zinc-900/20 text-zinc-400 hover:text-white hover:border-zinc-800'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                  >
                    <FiGithub size={13} />
                    Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-3 text-xs font-semibold rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-colors w-full md:w-40 ${
                      isDark
                        ? 'border-zinc-900 bg-zinc-900/20 text-zinc-400 hover:text-white hover:border-zinc-800'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                  >
                    <FiExternalLink size={13} />
                    Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
