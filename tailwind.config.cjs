/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.tsx",
    "./src/components/**/*.tsx",
    "./src/pages/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        remaxRed: {
          100: '#D80C21',
          200: '#AA1017'
        },
        remaxWhite: {
          100: '#F4F4F4',
          200: '#EEEEEE',
          300: '#636466',
          400: '#404041',
        },
        remaxBlue: {
          100: '#024490',
          200: '#04326C',
        },
        viviRanelagh: {
          green: '#009D45',
          blue: '#062A39',
        },
      },
      fontFamily: {
        sans: "Montserrat, sans-serif"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')
  ],
}
