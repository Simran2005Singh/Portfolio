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
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Profiles', id: 'profiles' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'glass-nav-dark py-4'
            : 'glass-nav-light py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-2xl font-bold tracking-wider font-sans bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">
            &lt;Simran.dev /&gt;
          </span>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium relative py-1 transition-colors duration-300 ${
                    activeSection === link.id
                      ? isDark
                        ? 'text-white'
                        : 'text-slate-900'
                      : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-955'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accentBlue to-accentPurple rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all duration-300 ${
              isDark
                ? 'border-slate-800 bg-slate-900/50 text-amber-400 hover:bg-slate-800'
                : 'border-slate-200 bg-white/50 text-slate-800 hover:bg-slate-100'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all duration-300 ${
              isDark
                ? 'border-slate-800 bg-slate-900/50 text-amber-400'
                : 'border-slate-200 bg-white/50 text-slate-800'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${
              isDark ? 'bg-slate-950/95 border-b border-slate-900' : 'bg-white/95 border-b border-slate-100'
            }`}
          >
            <ul className="px-6 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left py-2 text-base font-medium transition-colors ${
                      activeSection === link.id
                        ? 'text-accentPurple font-bold'
                        : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
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
