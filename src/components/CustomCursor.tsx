import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const addHoverEvents = () => {
      const links = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add hover listeners
    addHoverEvents();

    // Re-check periodically in case DOM updates
    const interval = setInterval(addHoverEvents, 1000);

    // Add class to body to hide native cursor on desktops
    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Outer trailing glow circle */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          backgroundColor: linkHovered
            ? 'rgba(59, 130, 246, 0.15)'
            : 'rgba(139, 92, 246, 0.15)',
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 28,
          mass: 0.2,
        }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 0.6 : linkHovered ? 1.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 35,
        }}
      />
    </>
  );
}
