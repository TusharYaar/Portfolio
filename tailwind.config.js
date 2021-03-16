module.exports = {
  purge: { enabled: true,
    preserveHtmlElements: false,
    content:["./public/index.html","./public/indexScript.js","./public/skills.js"],

    options: {
      safelist: ['bg-red-500', 'bg-red-200','bg-indigo-500','bg-indigo-200','opacity-10','h-0']}},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  fontFamily: {
    'karla': ['karla', 'sans-serif']}},
  variants: {
    extend: {},
  },
  plugins: [],
}
