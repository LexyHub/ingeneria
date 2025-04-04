/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C2EFF',
        secondary: '#1800A3',
        textPrimary: '#2F2F2F',
        textSecondary: '#666666',
        hoverSecondary: '#EEEBFF',
        bgSecondary: '#F7F6FF',
        bgPlatform: '#F4F4F4',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
