/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const card = plugin(function({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)'
        },
        '.back-face-hidden': {
          'backface-visibility': 'hidden'
        }
    });
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [card],
}