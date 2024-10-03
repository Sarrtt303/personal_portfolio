/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        loopScroll:{
          '0%':{transform: 'translateX(0)'},
          '100%': { transform: 'translateX(calc(-1 * var(--scroll-width) / 3))' },
        },
      },
      animation:{
        'loop-scroll': 'loopScroll 1s linear infinite',
      },
    },
  },
  plugins: [],
};