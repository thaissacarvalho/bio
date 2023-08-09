/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackBg': '#0E0D0E',
        'whiteBg': '#F1F0F0',
        'purpleBg': '#7900FF',
        'lightPurple': '#887DFD',
        'turquoise': '#14C8C8',
      },
    },
  },
  plugins: [],
}

