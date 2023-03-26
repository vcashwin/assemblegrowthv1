/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-1": "animate-gradient-1 6s infinite",
        "gradient-2": "animate-gradient-2 6s infinite",
        "gradient-3": "animate-gradient-3 6s infinite",
      },
      keyframes: {
        "animate-gradient-1": {
          "0%, 16.667%, 100%": { opacity: "1" },
          "33.333%, 83.333%": { opacity: "0" },
        },
        "animate-gradient-2": {
          "0%, 16.667%, 66.667%, 100%": { opacity: "0" },
          "33.333%, 50%": { opacity: "1" },
        },
        "animate-gradient-3": {
          "0%, 50%,  100%": { opacity: "0" },
          "66.667%, 83.333%": { opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["Wotfard", ...defaultTheme.fontFamily.sans],
        mono: ["League Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
