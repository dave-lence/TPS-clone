/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'primary-dark': "#031429",
        'primary': "#2C6DBC",
        'primary100': "#49a8ff",
        'light': '#f2f5fa',
        'input': 'rgba(73,168,255,0.15)',      
      }
    },
  },
  plugins: [
  ],
}

