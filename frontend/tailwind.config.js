/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backdropFilter: {
        'blur-15': 'blur(15px)',
      },
    },
  },
  variants: {
    backdropFilter: ['responsive'],
  },
  plugins: [],
}

