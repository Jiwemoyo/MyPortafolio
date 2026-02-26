/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cyber-black':'#0a0a0a',
        'cyber-dark':'#1a1a2e',
        'cyber-cyan':'#00d9ff',
        'cyber-magenta':'#ff006e',
        'cyber-white':'#f0f0f0',
        'cyber-gray':'#404040',
      },
      animation:{
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'flicker': 'flicker 0.15s infinite',
        'pulse-cyan': 'pulseCyan 2s ease-in-out infinite',
        'line-move': 'lineMove 2s ease-in-out infinite',
      },
      keyframes:{
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff' },
          '50%': { textShadow: '0 0 20px #00d9ff, 0 0 30px #00d9ff, 0 0 40px #ff006e' }
        },
        scan: {
          '0%': { boxShadow: 'inset 0 0 0px #00d9ff' },
          '50%': { boxShadow: 'inset 0 0 20px #00d9ff' },
          '100%': { boxShadow: 'inset 0 0 0px #00d9ff' }
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.9' }
        },
        pulseCyan: {
          '0%, 100%': { borderColor: '#00d9ff', boxShadow: '0 0 0 0 rgba(0, 217, 255, 0.7)' },
          '50%': { borderColor: '#ff006e', boxShadow: '0 0 0 10px rgba(0, 217, 255, 0)' }
        },
        lineMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' }
        }
      }
    },
  },
  plugins: [],
}

