/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/script.js",
    "./js/legal.js",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        gondola: {
          base: '#FDF7F2',
          cardBg: '#FFF0E5',
          cardBorder: '#EED9CC',
          subtle: '#FFE7D6',
          primary: '#C82333',
          primaryHover: '#A71D2A',
          accent: '#D97706',
          charcoal: '#1E1B18',
          muted: '#3D3732'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif']
      }
    }
  },
  safelist: [
    'lg:order-1',
    'lg:order-2',
    'hidden',
    'active'
  ],
  plugins: []
};
