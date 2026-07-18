import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ isDark }: { isDark: boolean }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const contactMethods = [
    {
      name: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: FiMail,
      color: 'text-blue-500',
    },
    {
      name: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: FiPhone,
      color: 'text-emerald-500',
    },
    {
      name: 'LinkedIn',
      value: 'simran-singh-921a83295',
      href: 'https://www.linkedin.com/in/simran-singh-921a83295/',
      icon: FiLinkedin,
      color: 'text-violet-500',
    },
    {
      name: 'GitHub',
      value: 'simran2005singh',
      href: 'https://github.com/simran2005singh',
      icon: FiGithub,
      color: 'text-purple-400',
    },
  ];

  return (
    <section
      id="contact"
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
            Contact
          </h2>
          <div className="w-10 h-[2px] bg-zinc-700 mt-4" />
        </motion.div>

        {/* Contact Card Layout */}
        <div
          className={`p-8 md:p-12 rounded-3xl border ${
            isDark
              ? 'border-zinc-900 bg-zinc-900/10'
              : 'border-zinc-200 bg-zinc-50/10'
          }`}
        >
          <div className="max-w-xl space-y-8">
            <h3 className={`text-2xl md:text-3xl font-bold font-display ${
              isDark ? 'text-zinc-100' : 'text-zinc-900'
            }`}>
              Let's build something exceptional.
            </h3>
            
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-zinc-400 font-light' : 'text-zinc-650'
            }`}>
              I am open to full-time developer opportunities, technical internships, and collaborative software engineering projects. Feel free to reach out through any of these channels.
            </p>

            {/* Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t dark:border-zinc-900 border-zinc-200">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.name}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                      isDark
                        ? 'border-zinc-900 bg-zinc-900/20 hover:border-zinc-800'
                        : 'border-zinc-200 bg-zinc-50 hover:border-zinc-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`p-2.5 rounded-xl ${
                        isDark ? 'bg-zinc-900' : 'bg-zinc-100'
                      }`}>
                        <Icon size={16} />
                      </span>
                      <div>
                        <span className={`text-[10px] uppercase font-bold tracking-wider block ${
                          isDark ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>
                          {method.name}
                        </span>
                        <span className={`text-xs font-semibold font-mono ${
                          isDark ? 'text-zinc-300' : 'text-zinc-800'
                        }`}>
                          {method.value}
                        </span>
                      </div>
                    </div>
                    
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-zinc-500" size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
