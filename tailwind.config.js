/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        'standard': '192px',
        'mobile-standard': '192px'
      },
      width: {
        'content': '1000px',
        'mobile-content': '300px',
      },
      fontSize: {
        'header': '48px',
        'body': '32px',
        'mobile-header': '40px',
        'mobile-body': '20px'
      },
      fontFamily: {
        'RobotoMono': ['Roboto Mono', 'monospace'],
        'Inter': ['Inter', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      },
      placeholderColor: {
        'custom-green': '#78BE20', // Example custom color
      },
      filter: {
        'figma-shadow': 'drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5))',
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: ['focus'],
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-glass': {
          background: 'rgba(255, 255, 255, 0.81)',
        },
        '.shadow-glass': {
          'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        },
        '.backdrop-blur-glass': {
          'backdrop-filter': 'blur(5px)',
          '-webkit-backdrop-filter': 'blur(5px)',
        },
        '.border-glass': {
          'border-radius': '16px',
          'border': '1px solid rgba(255, 255, 255, 0.49)',
        },
      }, ['responsive', 'hover']);
    }),
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.placeholder-custom-green::placeholder': {
          color: '#78BE20',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover', 'focus'])
    }
  ],

}
