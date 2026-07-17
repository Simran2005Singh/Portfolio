import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import { socialLinks } from '../data/portfolioData';

const iconMap: Record<string, any> = {
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,
  SiLeetcode: SiLeetcode,
  SiCodechef: SiCodechef,
  SiGeeksforgeeks: SiGeeksforgeeks,
};

export default function Footer({ isDark }: { isDark: boolean }) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-12 border-t relative overflow-hidden ${
      isDark ? 'border-slate-900 bg-slate-950/70' : 'border-slate-200 bg-slate-100/40'
    }`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
        
        {/* Left: Brand Logo & Title */}
        <div className="text-center md:text-left space-y-2">
          <span
            onClick={() => handleScrollTo('home')}
            className="text-2xl font-bold tracking-wider font-sans cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple"
          >
            &lt;Simran.dev /&gt;
          </span>
          <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            Full Stack Developer & Competitive Programmer
          </p>
        </div>

        {/* Center: Quick navigation links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => handleScrollTo(id)}
              className={`capitalize transition-colors ${
                isDark ? 'text-slate-400 hover:text-white' : 'text-slate-650 hover:text-slate-900'
              }`}
            >
              {id === 'home' ? 'Home' : id}
            </button>
          ))}
        </div>

        {/* Right: Social icons grid */}
        <div className="flex justify-center md:justify-end items-center gap-4">
          {socialLinks.map((social) => {
            const IconComp = iconMap[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'border-slate-850 bg-slate-900/50 text-slate-400 hover:text-white hover:border-accentPurple hover:shadow-glow-purple'
                    : 'border-slate-200 bg-white text-slate-650 hover:text-slate-900 hover:border-accentBlue hover:shadow-glow-blue'
                }`}
                title={social.name}
              >
                {IconComp ? <IconComp size={16} /> : social.name}
              </a>
            );
          })}
        </div>

      </div>

      {/* Copyright line */}
      <div className="mt-8 pt-8 border-t border-slate-900/5 dark:border-white/5 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Simran Singh. All rights reserved.</p>
        <p className="mt-1 flex items-center justify-center gap-1">
          Made with passion &middot; Simran Singh <FiMail className="inline" size={10} />
        </p>
      </div>
    </footer>
  );
}
