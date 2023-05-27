// const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{html,ts}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "1080px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    extend: {
      colors: {
        customRed: "#FF0000",
        red: "#b10404",
        primary: "#3490dc",
        "primary-dark": "#2764a6",
        secondary: "#38c172",
        "secondary-dark": "#276749",
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#4a5568",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        slate: {
          950: "#1F2937",
          // ...
        },
        red: {
          500: "#b10404",
          600: "#ff0000",
        },
      },
      // fontFamily: {
      //   sans: ["Clash Display", "sans-serif"],
      // },
      fontFamily: {
        sans: ["Clash Display", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]};
