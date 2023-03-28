/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-1": "animate-gradient-1 4s infinite",
      },
      keyframes: {
        "animate-gradient-1": {
          "0%, 16.667%, 100%": { opacity: "0" },
          "33.333%, 83.333%": { opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-grifter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customorange: "#EA552B",
        lightorange: "#FBE8DE",
        lightgray: "#ELEAF4",
        yellow: "#FDD900",
      },
    },
  },
  plugins: [],
};
