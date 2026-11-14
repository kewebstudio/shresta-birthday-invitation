/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fairy: {
          pink: "#F8D9ED",
          lavender: "#D9C4F5",
          purple: "#A77BC4",
          gold: "#F1D18B",
          cream: "#FFF9EF",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};