/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  mistyrose: "#f5e1e2",
		  sienna: { "100": "#673133", "200": "#5e2427", "300": "#5d2427" },
		  gray: { "100": "#340506", "200": "#270405", "300": "#1a0102" },
		  black: "#000",
		  indianred: "#b25f62",
		  rosybrown: { "100": "#caabac", "200": "#a5787a" },
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
	corePlugins: { preflight: false },
  };
  