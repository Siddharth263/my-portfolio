/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./src/**/*.{jsx,js}'],
  darmode: 'classic',
  theme: {
    extend: {
      fontFamily:{
        crimsonPro:['Crimson Pro', 'serif']
      },
      lineHeight: {
        'extra-loose': '2.5rem',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}
