/**
 * @format
 * @type {import('tailwindcss').Config}
 */

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
        "2xl": "1536px",
        "3xl": "2000px",
      },
      backgroundImage: {
        // 'gradient-radial-services':'radial-gradient(36.44% 36.44% at 50% 47.19%, #2B3E47 0%, rgba(7, 20, 25, 0) 96.86%, rgba(7, 20, 25, 0) 96.88%);'
      },
    },
  },
  plugins: [],
};
