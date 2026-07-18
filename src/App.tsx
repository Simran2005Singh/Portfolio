import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Profiles from './sections/Profiles';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      setIsDark(true);
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      localStorage.setItem('theme', 'light');
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-darkBg text-slate-100' : 'bg-lightBg text-slate-900'}`}>
      {/* Custom interactive cursor */}
      <CustomCursor />

      {/* Main sticky navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content Layout */}
      <main>
        {/* Section 1: Hero Landing Page */}
        <Hero isDark={isDark} />

        {/* Section 2: About */}
        <About isDark={isDark} />

        {/* Section 3: Skills */}
        <Skills isDark={isDark} />

        {/* Section 4: Projects */}
        <Projects isDark={isDark} />

        {/* Section 5: Experience */}
        <Experience isDark={isDark} />

        {/* Section 6: Achievements */}
        <Achievements isDark={isDark} />

        {/* Section 7: Coding Profiles & GitHub Stats */}
        <Profiles isDark={isDark} />

        {/* Section 8: Contact */}
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Back to top floating button */}
      <BackToTop isDark={isDark} />
    </div>
  );
}
