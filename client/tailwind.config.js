/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // lightmode
      ...colors,
    },
    fontFamily: {
      logoFont: ["Diphylleia", "serif"],
      themeFont: ["Inconsolata", "monospace"],
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      width: {
        screen: "100dvw",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
