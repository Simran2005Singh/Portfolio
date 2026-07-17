// Framer Motion animation variants
import type { Variants } from 'framer-motion';

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none',
  duration = 0.5,
  delay = 0
): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        duration: duration,
        delay: delay,
        stiffness: 80,
        damping: 15,
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export const hoverScale: Variants = {
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 15,
    },
  },
  tap: {
    scale: 0.98,
  },
};

export const glowEffect: Variants = {
  hover: {
    boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)',
    transition: {
      duration: 0.3,
    },
  },
};
