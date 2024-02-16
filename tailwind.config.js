/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'style-black': '#000000',
        'style-white': '#F8F8FF',
        'style-purple': '#7900FF',
      },
    },
  },
  plugins: [],
}

