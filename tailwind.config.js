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
        'custom-white':'#FCFFE7'
      }
    },
  },
  plugins: [],
}

