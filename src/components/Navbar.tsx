import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['home', ...navLinks.map((link) => link.id)].map((id) =>
        document.getElementById(id)
      );
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        if (!section) continue;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? isDark
            ? 'bg-zinc-950/80 border-zinc-900/60 backdrop-blur-md py-4'
            : 'bg-white/80 border-gray-200/60 backdrop-blur-md py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Name */}
        <div
          className="cursor-pointer font-display text-lg font-bold tracking-tight text-zinc-100 dark:text-zinc-100"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className={isDark ? 'text-white' : 'text-zinc-900'}>Simran Singh</span>
        </div>

        {/* Links & Action button */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium tracking-wide relative py-1 transition-all duration-300 ${
                    activeSection === link.id
                      ? isDark
                        ? 'text-white'
                        : 'text-zinc-900'
                      : isDark
                      ? 'text-zinc-500 hover:text-zinc-300'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNavLine"
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                        isDark ? 'bg-white' : 'bg-zinc-900'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
              isDark
                ? 'border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-700'
                : 'border-gray-200 bg-gray-50 text-gray-500 hover:text-gray-900 hover:border-gray-300'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border ${
              isDark ? 'border-zinc-800 text-zinc-400' : 'border-gray-200 text-gray-500'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl transition-colors ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${
              isDark ? 'bg-zinc-950/95 border-b border-zinc-900' : 'bg-white/95 border-b border-gray-200'
            }`}
          >
            <ul className="px-6 pt-2 pb-6 space-y-4 font-display">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left py-2 text-sm font-semibold tracking-wide transition-colors ${
                      activeSection === link.id
                        ? isDark
                          ? 'text-white'
                          : 'text-zinc-900'
                        : isDark
                        ? 'text-zinc-500 hover:text-zinc-300'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
