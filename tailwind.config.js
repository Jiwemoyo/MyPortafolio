/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue':'#2B3467',
        'custom-white':'#FCFFE7',
        'custom-celeste':'#BAD7E9FF',
        'custom-red':'#EB455F'
      },
      animation:{
        'bg-fade': 'bgFade 2s ease-in-out infinite',
      },
      keyframes:{
        bgFade: {
          '0%, 100%': { backgroundColor: 'rgba(186, 215, 233,0.2)' }, // transparente
          '50%': { backgroundColor: 'rgb(186, 215, 233,0.6)' }, // color con opacidad (ajústalo según lo que necesites)
        },
      }
    },
  },
  plugins: [],
}

