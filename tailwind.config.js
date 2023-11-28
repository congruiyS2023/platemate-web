/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  corePlugins: {preflight: false},
  theme: {
    fontFamily: {
      heading: ['Epilogue', 'sans-serif'],
      paragraph: ['Barlow', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

