module.exports = {
  purge: { enabled: true,
    content:["./public/index.html"],
    options: {
      safelist: ['bg-red-500', 'bg-red-200','bg-indigo-500','bg-indigo-200']}},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  fontFamily: {
    'karla': ['karla', 'sans-serif']},
  variants: {
    extend: {},
  },
  plugins: [],
}
