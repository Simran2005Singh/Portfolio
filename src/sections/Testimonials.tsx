import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa6';
import { testimonials } from '../data/portfolioData';

export default function Testimonials({ isDark }: { isDark: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Slide variant definitions
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className={`py-24 relative overflow-hidden border-t ${
        isDark ? 'border-slate-900/50 bg-slate-950/20' : 'border-slate-200/50 bg-slate-50/20'
      }`}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accentBlue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accentPurple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">Testimonials</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accentBlue to-accentPurple mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            What collaborators and industry professionals say about working together with me.
          </p>
        </motion.div>

        {/* Carousel Slider Block */}
        <div className="relative">
          
          {/* Main Slide Card Container */}
          <div className="min-h-[280px] md:min-h-[220px] flex items-center justify-center relative overflow-hidden px-8">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={`w-full p-8 md:p-10 rounded-3xl border flex flex-col md:flex-row gap-6 items-center relative ${
                  isDark ? 'glass-card-dark border-white/5' : 'glass-card-light border-black/5'
                }`}
              >
                {/* Quotation icon decorator */}
                <FaQuoteLeft className="absolute top-6 left-6 text-slate-700/20 dark:text-slate-700/40" size={40} />

                {/* Avatar Column */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 dark:border-slate-800 border-slate-200 flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Feedback Copy */}
                <div className="space-y-4 text-center md:text-left flex-1 relative z-10">
                  <p className={`italic text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-650'}`}>
                    "{testimonials[currentIndex].feedback}"
                  </p>
                  <div>
                    <h4 className="text-base font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-xs text-accentPurple font-semibold">
                      {testimonials[currentIndex].role} &middot; <span className="opacity-80">{testimonials[currentIndex].company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Left/Right Arrow */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border transition-all duration-300 ${
              isDark
                ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800'
                : 'border-slate-200 bg-white/50 text-slate-650 hover:text-slate-900 hover:bg-slate-100'
            }`}
            aria-label="Previous Slide"
          >
            <FiChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border transition-all duration-300 ${
              isDark
                ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800'
                : 'border-slate-200 bg-white/50 text-slate-650 hover:text-slate-900 hover:bg-slate-100'
            }`}
            aria-label="Next Slide"
          >
            <FiChevronRight size={20} />
          </button>

        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 'right' : 'left');
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'bg-accentPurple w-6'
                  : isDark
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-slate-200 hover:bg-slate-350'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
