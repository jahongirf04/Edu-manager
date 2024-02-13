/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        global1: "#12486B",
        error_color: 'crimson',
        success_color: 'green'
      }
    }
  },
  plugins: []
}
