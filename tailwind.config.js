/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '567px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {

      fontFamily:{
        sora :["Sora", "sans-serif"],
      },
      screens: {
        'xs': {'min':'320px','max':'566px'},
        // => @media (min-width: 992px) { ... }
      },

      colors: {
        "color-primary": "#0f0715",
        "color-secondary": "#5a34a2",
        "color-sub-heading":"#dad9dd",
        
      }
    },
  },
  plugins: [],
}