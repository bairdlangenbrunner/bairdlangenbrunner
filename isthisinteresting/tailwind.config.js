/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Open Sans'", "sans-serif"],
      serif: ["Domine", "Courier", "Georgia", "serif"],
      monospace: ['"Roboto Mono"', "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
