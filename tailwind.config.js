/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  corePlugins: { preflight: false },
  theme: {
    fontFamily: {
      heading: ["Epilogue", "sans-serif"],
      paragraph: ["Barlow", "sans-serif"],
    },
    extend: {
      textColor: {
        primary: "#12664f",
      },
      colors: {
        primary: "#12664f",
        midnight: "#3E4140",
      },
      width: {
        '3/10': '30%',
        '88':'22rem'
      }
    },
    safelist: [],
  },
  plugins: [],
};
