/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'lilita-one': ["Lilita One", "sans-serif"],
      'poppins': ["Poppins", "sans-serif"]
    },
    

    extend: {
      colors: {
        'azul': '#1310E0',
        'verde': '#3CE010',
        'laranja': '#E05910',
        'verde-escuro': '#406137',
        'viola-escuro': '#3A388B'
      },

      maxWidth: {
        'desktop': '1440px'
      },

      boxShadow: {
        'default': '0px 0px 12px 4px rgba(0, 0, 0, 0.1)'
      },

      keyframes: {
        wiggle: {
          'from': {transfrom: 'scale(1)'},
          'to': {transfrom: 'scale(1.2)'},
        },

        scaleUp: {
          '0%': {transform: 'scale(1)'},
          '100%': {transform: 'scale (1.2)'},
        },
      },

      animation: {
        wiggle: 'wiggle .3s infinite alternate',
        scaleUp: 'scaleUp 0.3s ease-in-out infinite'
      },

      backgroundImage: {
        'home': 'url("/src/img/bg.png")'
      }
  },
  plugins: [],
}}
