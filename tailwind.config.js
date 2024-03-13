/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Poppins, sans-serif",
        altDisplay: "Nunito, san-serif",
      },
      colors: {
        gold: "#C3995D",
        purple: "#522989",
        gray: "#EAEAEA",
        gray_dark: "#939393",
      },
    },
  },
  plugins: [],
};
