import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';
import TypingAnimation from '../components/TypingAnimation';
import avatarImg from '../assets/developer_avatar.png';

const iconMap: Record<string, any> = {
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,
  SiLeetcode: SiLeetcode,
  SiCodechef: SiCodechef,
  SiGeeksforgeeks: SiGeeksforgeeks,
};

export default function Hero({ isDark }: { isDark: boolean }) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-mesh"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-accentBlue/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-accentPurple/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <motion.h4
            variants={fadeIn('up', 0.5)}
            className="text-lg md:text-xl font-medium tracking-wide text-accentBlue mb-3"
          >
            Hi, my name is
          </motion.h4>

          <motion.h1
            variants={fadeIn('up', 0.5)}
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            variants={fadeIn('up', 0.5)}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 h-12 flex items-center"
          >
            <span className={`mr-2 ${isDark ? 'text-slate-350' : 'text-slate-700'}`}>I am a</span>
            <TypingAnimation words={personalInfo.titles} />
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.5)}
            className={`max-w-xl text-base md:text-lg mb-8 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 bg-gradient-to-r from-accentBlue to-accentPurple text-white font-medium rounded-xl hover:shadow-glow-purple transition-all duration-300 flex items-center gap-2 group hover:scale-[1.02]"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className={`px-6 py-3.5 font-medium rounded-xl border transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] ${
                isDark
                  ? 'border-slate-800 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-300 bg-white/40 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              Contact Me
              <FiMail />
            </button>

            <a
              href={personalInfo.resumeUrl}
              download
              className={`px-6 py-3.5 font-medium rounded-xl border transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] ${
                isDark
                  ? 'border-accentPurple/20 bg-accentPurple/5 text-accentPurple hover:bg-accentPurple hover:text-white hover:border-transparent'
                  : 'border-accentBlue/20 bg-accentBlue/5 text-accentBlue hover:bg-accentBlue hover:text-white hover:border-transparent'
              }`}
            >
              Resume
              <FiDownload />
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            className="flex items-center space-x-5"
          >
            {socialLinks.map((social) => {
              const IconComp = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 rounded-xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    isDark
                      ? 'border-slate-850 bg-slate-900/30 text-slate-400 hover:text-white hover:border-accentPurple hover:shadow-glow-purple'
                      : 'border-slate-200 bg-white/30 text-slate-600 hover:text-slate-900 hover:border-accentBlue hover:shadow-glow-blue'
                  }`}
                  title={social.name}
                >
                  {IconComp ? <IconComp size={20} /> : social.name}
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Portrait Image Column */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            {/* Pulsing ring outline */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accentBlue to-accentPurple rounded-3xl blur opacity-30 animate-pulse-slow scale-105" />

            {/* Rotating gradient background card borders */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-accentBlue via-accentPurple to-accentPink rounded-3xl animate-float opacity-50 blur-[2px]" />

            {/* Image Container */}
            <div
              className={`relative w-full h-full rounded-3xl overflow-hidden border-2 ${
                isDark ? 'border-slate-900 bg-slate-950' : 'border-slate-100 bg-white'
              }`}
            >
              <img
                src={avatarImg}
                alt="Simran Singh Avatar"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
