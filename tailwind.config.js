/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "16.8px"],   
      base: ["16px", "19.2px"],  
      lg: ["20px", "24px"],     
      xl: ["24px", "28.8px"],   
      "2xl": ["27px", "32.4px"],
      "3xl": ["36px", "43.2px"],
      "4xl": ["80px", "96px"],  
    },
    extend: {
      fontFamily: {
        primary: ["Roboto", ...defaultTheme.fontFamily.sans],
        secondary: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#eaeff8",
          100: "#bfccea",
          200: "#a0b4e0",
          300: "#7491d1",
          400: "#597cc9",
          500: "#305bbb",
          600: "#2c53aa",
          700: "#224185",
          800: "#1a3267",
          900: "#14264f",
        },
        accent: {
          50: "#e6f9f1",
          100: "#b2ebd5",
          200: "#8de2c0",
          300: "#5ad5a3",
          400: "#39cd91",
          500: "#08c076",
          600: "#07af6b",
          700: "#068854",
          800: "#046a41",
          900: "#035132",
        },
        grey: {
          50: "#ecedef",
          100: "#c3c6ce",
          200: "#a6abb6",
          300: "#7d8494",
          400: "#646d80",
          500: "#3d4860",
          600: "#384257",
          700: "#2b3344",
          800: "#222835",
          900: "#1a1e28",
        },
        neutral: {
          black: "#080f1f",
          white: "#f4f8ff",
        },
        screens: {
          sm: "450px",
          md: "768px",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
