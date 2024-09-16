/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#28CB8B',
        secondary: '#263238',
        info:"#2194f3",
        neutral:{
          Black:'#263238',
          D_Grey:'#4D4D4D',
          Grey:'#717171',
          L_Grey:'#89939E',
          Greyblue:"#ABBED1",
          Silver:"#F5F7FA",
          White:"#FFFFFF"
        }
      }
    },
  },
  plugins: [],
}