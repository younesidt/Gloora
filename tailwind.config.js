/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: "url('/hero.jpg')",
      },
    },
    fontFamily: {
      Averia: ["Averia Serif Libre", "serif"],
    },
  },
  plugins: [],
}

