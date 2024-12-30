/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.html","./assets/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        labelle: ['"La Belle Aurore"', 'regular'], // Добавляем шрифт
      },
    },
  },
  plugins: [],
}