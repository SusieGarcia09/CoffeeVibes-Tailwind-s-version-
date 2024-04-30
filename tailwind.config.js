/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          30: '#F5EDE0',

          50: '#D9BB84',
          
          100: '#A65424',
  
          200: '#73280D',
  
          300: '#400D01',
        },
        // ...
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

