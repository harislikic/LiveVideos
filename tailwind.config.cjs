/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    screens: {
      'phone': '320px',
      // => @media (min-width: 320px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'iPad': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
