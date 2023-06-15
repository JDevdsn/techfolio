/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary:  " #ffffffff",
        secondary: "#4f504f",
        tertiary: "#c1e1c9ff",
        "black-100": "#7d89c6",
        "black-200": "#d0b6be",
      },
      boxShadow: {
        card: "0px 15px 15px -15px #a6c1eehero",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Metaverse.png')",
      },
    },
  },
  plugins: [],
};