import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export default function BackgroundCanvas({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;
    const connectionDistance = 120;
    const mouseInfluenceDistance = 180;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const width = canvas.width;
      const height = canvas.height;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const colorBase = isDark ? '255, 255, 255' : '37, 99, 235';
      const lineOpacityMultiplier = isDark ? 0.05 : 0.03;
      const dotOpacityMultiplier = isDark ? 0.15 : 0.1;

      // Update and draw particles
      particles.forEach((p) => {
        // Apply physics
        p.x += p.vx;
        p.y += p.vy;

        // Boundary checks
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse attraction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseInfluenceDistance) {
          const force = (mouseInfluenceDistance - dist) / mouseInfluenceDistance;
          p.x += (dx / dist) * force * 0.4;
          p.y += (dy / dist) * force * 0.4;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorBase}, ${p.alpha * dotOpacityMultiplier})`;
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * lineOpacityMultiplier;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${colorBase}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora Glow 1 */}
      <div
        className={`absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full blur-[120px] md:blur-[150px] transition-all duration-1000 ${
          isDark
            ? 'bg-violet-600/10'
            : 'bg-blue-200/20'
        }`}
        style={{
          top: '-10%',
          left: '-10%',
          animation: 'floatBlob1 22s infinite alternate ease-in-out',
        }}
      />
      {/* Aurora Glow 2 */}
      <div
        className={`absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[140px] md:blur-[170px] transition-all duration-1000 ${
          isDark
            ? 'bg-blue-600/5'
            : 'bg-indigo-100/20'
        }`}
        style={{
          bottom: '-15%',
          right: '-15%',
          animation: 'floatBlob2 28s infinite alternate ease-in-out',
        }}
      />

      {/* Connecting Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 transition-opacity duration-500 w-full h-full"
        style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
      />
    </div>
  );
}
