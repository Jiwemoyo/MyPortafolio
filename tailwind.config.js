/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#f8fafc',
        'theme-surface': '#ffffff',
        'theme-primary': '#0ea5e9',
        'theme-secondary': '#8b5cf6',
        'theme-text': '#0f172a',
        'theme-muted': '#64748b',
        'ik-teal': '#00a896',
        'ik-dark': '#111111',
        'ik-light': '#f4f1ea',
        'ik-accent': '#ff2a2a',
        'ik-gray': '#d1cdc5',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['"Archivo Black"', 'sans-serif'],
        'pixel': ['"VT323"', 'monospace']
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px rgba(17,17,17,1)',
        'brutal-lg': '10px 10px 0px 0px rgba(17,17,17,1)',
        'brutal-active': '2px 2px 0px 0px rgba(17,17,17,1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
