/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cloud: "url('./assets/images/Cloud-background.png')",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "80%",
      mobile: "560px",
    },
    colors: {
      white: "#fff",
      midnight: "#1E213A",
      dark: "#100E1D",
      darkblue: " #110E3C",
      yellow: "#FFEC65",
      "gray-200": " #E7E7EB",
      "gray-300": "#585676",
      "gray-400": "#6E707A",
      "gray-500": "#A09FB1",
      "gray-600": " #88869D ",
    },
  },
  plugins: [],
};
