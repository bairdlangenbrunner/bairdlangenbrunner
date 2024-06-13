/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Open Sans'", "Helvetica", "sans-serif"],
      serif: ["Domine", "Georgia", "serif"],
    },
    extend: {},
  },
  plugins: [],
}