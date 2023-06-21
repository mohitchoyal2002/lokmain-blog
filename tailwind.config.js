/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        link: "#051b2c",
        tag: "#3a3db3",
        author: "#303293",
        btn: "#e54b4d",
        footer:"#14143c",
        main: "#424d57"
      },
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif"
      },
      screens:{
        xs: '200px'
      },
      boxShadow:{
        blog: "3px 6px 15px 0px rgba(5,27,44,.12),0 8px 24px -4px rgba(5,27,44,.08)",
      },
      height:{
        100: '30rem'
      },
      width:{
        100: '24rem'
      },
      backgroundImage: {
        red_blue: "linear-gradient(92.27deg,#e54b4d,#303293)",
        news: "linear-gradient(153.96deg,#e54b4d,#3a3db3)"
      }
    },
  },
  plugins: [],
}

