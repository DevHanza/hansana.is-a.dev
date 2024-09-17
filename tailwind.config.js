/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,css,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#121212',
      'secondary': '#464646',
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}