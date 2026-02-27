/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",  // Brand Orange
        dark: "#0A0A0A",     // Softer black
        light: "#FFFFFF",
        graySoft: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      }
    },
  },
  plugins: [],
};