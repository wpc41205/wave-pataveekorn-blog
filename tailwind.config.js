/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown600: '#26231E',
        brown500: '#43403B',
        brown400: '#75716B',
        brown300: '#DAD6D1',
        brown200: '#EFEDEB',
        brown100: '#F9F8F6',
        white: '#FFFFFF',
        orange: '#F2B68C',
        green: '#12B279',
        greenLight: '#D7F2E9',
        red: '#EB5164',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 