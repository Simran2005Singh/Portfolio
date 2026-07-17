import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronUp } from 'react-icons/fi';

export default function BackToTop({ isDark }: { isDark: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3.5 rounded-xl border shadow-xl z-50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer ${
            isDark
              ? 'border-slate-800 bg-slate-900/80 text-white hover:bg-slate-800 hover:shadow-glow-purple hover:border-accentPurple'
              : 'border-slate-200 bg-white/80 text-slate-800 hover:bg-slate-100 hover:shadow-glow-blue hover:border-accentBlue'
          }`}
          aria-label="Back to top"
        >
          <FiChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
