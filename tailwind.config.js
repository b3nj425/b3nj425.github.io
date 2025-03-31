/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // Asegúrate de que esté configurado para detectar los archivos en 'pages'
    './components/**/*.{js,ts,jsx,tsx}', // Si tienes una carpeta 'components'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
