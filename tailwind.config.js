const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        base: "0px",
        sm: "480px",
        sm2: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1920px",
        "3xl": "2000px",
      },
      backgroundImage: {
        // 'gradient-radial-services':'radial-gradient(36.44% 36.44% at 50% 47.19%, #2B3E47 0%, rgba(7, 20, 25, 0) 96.86%, rgba(7, 20, 25, 0) 96.88%);'
      },
      extend: {
        colors: {
          mistyrose: "#f5e1e2",
          sienna: { 100: "#673133", 200: "#5e2427", 300: "#5d2427" },
          gray: { 100: "#340506", 200: "#270405", 300: "#1a0102" },
          black: "#000",
          indianred: "#b25f62",
          rosybrown: { 100: "#caabac", 200: "#a5787a" },
          dimgray: "#524646",
          darkgray: "#ab9d9e",
          darkslategray: "#443c3d",
          white: "#fff",
        },
        fontFamily: {
          poppins: "Poppins",
          "nunito-sans": "'Nunito Sans'",
          golden: "GOLDEN",
          gilroy: "Gilroy",
          lamore: "LAMORE",
        },
        borderRadius: { "481xl": "500px", "231xl": "250px" },
      },
      fontSize: {
        "3xl": "22px",
        lgi: "19px",
        "8xl-3": "27.3px",
        base: "16px",
        "3xl-2": "22.2px",
        "70xl-1": "89.1px",
        "169xl": "188px",
        "6xl": "25px",
        "17xl-4": "36.4px",
        "51xl-1": "70.1px",
        xl: "20px",
        "14xl": "33px",
        lg: "18px",
      },
    },
  },
  plugins: [],
};
