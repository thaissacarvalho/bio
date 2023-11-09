/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'style-black': '#0E0D0E',
        'style-white': '#F1F0F0',
        'style-purple': '#7900FF',
        'style-light-purple': '#887DFD',
        'style-turquoise': '#14C8C8',
      },
    },
  },
  plugins: [],
}

