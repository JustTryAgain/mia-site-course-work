/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.{html,js}", "./pages/*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        labelle: ['"La Belle Aurore"', 'cursive'],
      },
    },
  },
  plugins: [],
}