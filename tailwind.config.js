/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    colors: {
      'mainColor': '#FBD675',
      'gray': '#B1B1B1',
      'lightGray': '#F8F8F8',
      'semiLightGray': '#C7C3C3',
    },
    extend: {
      spacing: {
        '2px': '2px',
      }
    },
  },
  plugins: [],
}
