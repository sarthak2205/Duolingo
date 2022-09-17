/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'star-pattern' : "url('../Images/Star-patter.jpg')",
      }
    },
  },
  plugins: [],
}
