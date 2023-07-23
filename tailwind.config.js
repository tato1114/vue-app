/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        default_blue: '#00b4ff',
        default_light_blue: '#e8f0fe'
      }
    }
  },
  plugins: [],
}

