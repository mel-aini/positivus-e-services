/** @type {import('tailwindcss').Config} */
export default {
content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
      screens: {
        'sm-h': { 'raw': '(max-height: 600px)' },
        'si': { 'raw': '(min-width: 0px)' },
      },
      keyframes: {
        test: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
        expand: {
          '0%': {height: '115px'},
          '100%': {height: 'fit-content'},
        },
      }
    },
  },
  plugins: [],
}

