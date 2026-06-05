// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          50: '#fdf2f8',   // Light pink background
          100: '#fce7f3',
          200: '#fbcfe8',
          500: '#ec4899',  // Primary pink
          700: '#be185d',  // Darker pink for text/buttons
          800: '#9d174d',
          900: '#831843',
        },
        cream: '#FFFDD0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'], // Great for headings
      }
    },
  },
  plugins: [],
}