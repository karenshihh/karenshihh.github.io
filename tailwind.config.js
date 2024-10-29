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
        "paleblue": "#D8DBE2",
        "bluegray": "#373f51",
        "blueblack": "#1B1B1E",
        "greenblue": "#58a4b0",
        "paleblue": "#a9bcd0"
        
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
    },
  },
  plugins: [nextui()],
};
