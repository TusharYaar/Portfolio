const colors = require('tailwindcss/colors');
module.exports = {
  purge: { enabled: true,
    preserveHtmlElements: true,
    content:["./public/index.html","./public/indexScript.js","./public/skills.js"],

    options: {
      safelist: ['bg-red-500', 'bg-red-200','bg-indigo-500','bg-indigo-200','opacity-10','h-0']}},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: colors.lightBlue,
        purple: colors.purple,
        emarald: colors.emerald,
        teal: colors.teal,
        orange: colors.orange,
        rose:colors.rose
      }
    },
  fontFamily: {
    'karla': ['karla', 'sans-serif']}},
  variants: {
    extend: {},
  },
  plugins: [],
}
