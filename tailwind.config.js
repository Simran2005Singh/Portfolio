/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#09090B',
        darkCard: '#131316',
        darkCardBorder: 'rgba(255, 255, 255, 0.05)',
        lightBg: '#F8FAFC',
        lightCard: '#FFFFFF',
        lightCardBorder: 'rgba(0, 0, 0, 0.04)',
        accentPurple: '#8B5CF6',
        accentBlue: '#3B82F6',
        accentPink: '#EC4899',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-slow': 'glow 12s ease-in-out infinite',
        'gradient-bg': 'gradient-bg 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        'gradient-bg': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
        'dark-radial': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, rgba(9, 9, 11, 0) 70%)',
        'light-radial': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, rgba(248, 250, 252, 0) 70%)',
      },
      boxShadow: {
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.3)',
      }
    },
  },
  plugins: [],
}
