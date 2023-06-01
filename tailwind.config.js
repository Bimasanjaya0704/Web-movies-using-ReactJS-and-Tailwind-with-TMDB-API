/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center : true,
      padding : '10px',
    },

    extend: {
      colors : {
        dark : '#001F29',
        second : '#153243',
        primary : '#25C9CC',
        psecond : '#20B0B3',
        light :'#F4F9E9',
        lsecond : '#DCE0D3'
         }
    },
  },
  plugins: [],
}