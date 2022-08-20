/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '10/20/70': '15% auto auto',
        'fixed': '40px 260px 40px'
    },
  },
  plugins: [],
}
}
