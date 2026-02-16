/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#ec4899',
        accent: '#f59e0b',
        coral: '#FF7A6B',
        'coral-hover': '#FF6B6B',
        dark: '#1f2937',
        darker: '#111827',
        'dark-bg': '#0a0e27',
        'dark-card': '#1a1f3a',
        'dark-hover': '#252d48',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-up': 'scaleUp 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 15px 50px rgba(99, 102, 241, 0.2)',
        'glow': '0 0 30px rgba(99, 102, 241, 0.4)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.4)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#6366f1',
          secondary: '#ec4899',
          accent: '#f59e0b',
          neutral: '#2a2f45',
          'base-100': '#0a0e27',
          'base-200': '#1a1f3a',
          'base-300': '#252d48',
        },
      },
    ],
  },
}
