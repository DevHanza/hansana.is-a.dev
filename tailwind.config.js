/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/*.{html,css,js}",
    "./src/css/*.{css}",
    "./src/js/*.{js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#121212",
        secondary: "#464646",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
