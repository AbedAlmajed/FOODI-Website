/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        green: "#39DB4A",
        red: "#FF6868",
        secondary: "#555",
        prigmayBG: "#FCFCFC",
        // Define colors for dark and light themes
        light: {
          background: "#FFFFFF",
          text: "#000000",
        },
        dark: {
          background: "#333333",
          text: "#CCCCCC",
        },
      },
    },
  },
  plugins: [require("daisyui")],
}