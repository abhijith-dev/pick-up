/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
         base: "#343638",
         common:'#e6edf2',
         border:'#4a4f54',
         box:'#3a3d40'
      }
    },
  },
  plugins: [],
}

