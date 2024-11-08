/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleblue: "#D8DBE2",
        bluegray: "#373f51",
        blueblack: "#1B1B1E",
        greenblue: "#58a4b0",
        palebluey: "#a9bcd0",
      },
      fontFamily: {
        custom: [
          "Gill Sans",
          "Gill Sans MT",
          "Calibri",
          "Trebuchet MS",
          "sans-serif",
        ],
        baskerville: [
          "Baskerville",
          "Baskerville Old Face",
          "Hoefler Text",
          "Garamond",
          "Times New Roman",
          "serif",
        ],
        lucida: [
          "Trebuchet MS",
          "Lucida Grande",
          "Lucida Sans Unicode",
          "Lucida Sans",
          "Tahoma",
          "sans-serif",
        ],
      },
      fontSize: {
        "8vh": "8vh",
        "2.8em": "2.8em",
        "7vh": "7vh",
        "calc(1em + 0.5vw)": "calc(1em + 0.5vw)",
      },
      spacing: {
        "2vh": "2vh",
        "180px": "180px",
        "5vh": "5vh",
        "40vh": "40vh",
        "6vw": "6vw",
        "3vw": "3vw",
      },
      keyframes: {
        waveFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
      },
      animation: {
        'wave-fade-in': "waveFadeIn 2s ease forwards", 
        // Add the animation
        'sparkle': 'sparkle 1s ease-in-out infinite', // Adjust duration and easing as needed

      },
    },
  },
  plugins: [nextui()],
};
