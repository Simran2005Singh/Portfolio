import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiInfo, FiX, FiCheck } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

import campusBitesImg from '../assets/campusbites.png';
import smartPortfolioImg from '../assets/smart_portfolio.png';
import digitalHealthImg from '../assets/digital_health.png';
import forestManagementImg from '../assets/forest_management.png';

const imageMap: Record<string, string> = {
  campusbites: campusBitesImg,
  smart_portfolio: smartPortfolioImg,
  digital_health: digitalHealthImg,
  forest_management: forestManagementImg,
};

export default function Projects({ isDark }: { isDark: boolean }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  // Unique tags list for filtering
  const filterTags = ['All', 'Full Stack', 'Data Structures', 'TypeScript', 'Hackathon Winner', 'Ecology'];

  // Filtering logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag =
      selectedTag === 'All' ||
      project.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase()) ||
      (selectedTag === 'Hackathon Winner' && project.tags.some((t) => t.includes('Winner')));

    return matchesSearch && matchesTag;
  });

  return (
    <section
      id="projects"
      className={`py-24 relative overflow-hidden border-t ${
        isDark ? 'border-slate-900/50 bg-slate-950/20' : 'border-slate-200/50 bg-slate-50/20'
      }`}
    >
      {/* Background glow blooms */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-accentBlue/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-accentPurple/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

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
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">Projects</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accentBlue to-accentPurple mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            Explore some of my core full-stack applications, problem-solving integrations, and hackathon prototypes.
          </p>
        </motion.div>

        {/* Filters Controls Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Search Input */}
          <div className="relative max-w-md w-full">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by name, description, tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-accentPurple transition-all ${
                isDark
                  ? 'border-slate-850 bg-slate-900/40 text-slate-200 placeholder-slate-500 focus:bg-slate-900'
                  : 'border-slate-200 bg-white/40 text-slate-850 placeholder-slate-400 focus:bg-white'
              }`}
            />
          </div>

          {/* Tags Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-xs px-4.5 py-2.5 rounded-lg border font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-accentBlue to-accentPurple border-transparent text-white shadow-glow-purple scale-[1.02]'
                    : isDark
                    ? 'border-slate-850 bg-slate-900/20 text-slate-400 hover:text-white hover:bg-slate-900/60'
                    : 'border-slate-200 bg-white/20 text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-dark ${
                  isDark
                    ? 'glass-card-dark border-white/5 hover:border-accentPurple/25'
                    : 'glass-card-light border-black/5 hover:border-accentBlue/25'
                }`}
              >
                {/* Image Cover */}
                <div className="h-56 relative overflow-hidden bg-slate-950">
                  <img
                    src={imageMap[project.image]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.featured && (
                    <span className="absolute top-4 left-4 text-xxs uppercase tracking-wider font-extrabold px-3 py-1 bg-gradient-to-r from-accentBlue to-accentPurple text-white rounded-full shadow-glow-purple">
                      Featured
                    </span>
                  )}
                  {project.tags.includes('Hackathon Winner') && (
                    <span className="absolute top-4 right-4 text-xxs uppercase tracking-wider font-extrabold px-3 py-1 bg-amber-500 text-slate-950 rounded-full">
                      Hackathon Winner
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xxs font-semibold px-2 py-0.5 rounded ${
                            isDark ? 'bg-slate-900 text-slate-400' : 'bg-slate-100/80 text-slate-650'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-accentPurple transition-colors">
                      {project.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs font-mono font-medium px-2 py-1 rounded-md border ${
                            isDark
                              ? 'border-slate-850 bg-slate-900/30 text-slate-350'
                              : 'border-slate-200 bg-slate-50 text-slate-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons Action bar */}
                  <div className="flex items-center gap-3 pt-4 border-t dark:border-slate-850 border-slate-200 text-sm">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 font-medium transition-colors ${
                          isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <FiGithub size={16} /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-medium text-accentBlue hover:underline ml-auto"
                      >
                        Live Demo <FiExternalLink size={14} />
                      </a>
                    )}
                    <button
                      onClick={() => setActiveCaseStudy(project)}
                      className={`flex items-center gap-1.5 font-semibold transition-colors ${
                        isDark ? 'text-accentPurple hover:text-purple-300' : 'text-accentPurple hover:text-purple-700'
                      }`}
                    >
                      Case Study <FiInfo size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty Results Placeholder */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-16 text-center"
            >
              <p className="text-slate-500 text-lg mb-2">No projects match your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('All');
                }}
                className="text-accentPurple underline text-sm"
              >
                Reset all filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Dynamic Case Study Modal Overlay */}
        <AnimatePresence>
          {activeCaseStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCaseStudy(null)}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              />

              {/* Modal Body Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className={`relative w-full max-w-3xl rounded-3xl overflow-hidden border shadow-2xl z-10 max-h-[85vh] flex flex-col ${
                  isDark ? 'glass-card-dark border-white/5 text-white' : 'glass-card-light border-black/5 text-slate-900'
                }`}
              >
                {/* Header Image Cover */}
                <div className="h-48 relative overflow-hidden bg-slate-950 flex-shrink-0">
                  <img
                    src={imageMap[activeCaseStudy.image]}
                    alt={activeCaseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-white hover:bg-slate-950 transition-colors"
                  >
                    <FiX size={20} />
                  </button>
                  <h3 className="absolute bottom-4 left-6 text-2xl md:text-3xl font-extrabold text-white">
                    {activeCaseStudy.title}
                  </h3>
                </div>

                {/* Content Scrolling Body */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-accentBlue mb-2">Overview</h4>
                    <p className={`leading-relaxed text-sm md:text-base ${isDark ? 'text-slate-350' : 'text-slate-750'}`}>
                      {activeCaseStudy.longDescription || activeCaseStudy.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-accentPurple mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeCaseStudy.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 mt-0.5 flex-shrink-0">
                            <FiCheck size={12} />
                          </span>
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-accentPink mb-2">Tech Stack Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCaseStudy.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border ${
                            isDark
                              ? 'border-slate-800 bg-slate-900/50 text-slate-300'
                              : 'border-slate-200 bg-slate-100/50 text-slate-750'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons Bar */}
                <div className="p-5 border-t dark:border-slate-850 border-slate-200 bg-slate-900/10 flex items-center justify-between flex-shrink-0">
                  <div className="flex gap-4">
                    {activeCaseStudy.githubUrl && (
                      <a
                        href={activeCaseStudy.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <FiGithub size={16} /> GitHub Code
                      </a>
                    )}
                    {activeCaseStudy.liveUrl && (
                      <a
                        href={activeCaseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-accentBlue to-accentPurple text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 shadow-glow-purple transition-colors"
                      >
                        Live Demo <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className={`text-sm font-medium ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-650 hover:text-slate-900'}`}
                  >
                    Close
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
