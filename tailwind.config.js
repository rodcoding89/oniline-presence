/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        thirty: 'var(--color-thirty)',
        fifty: 'var(--color-fifty)'
      },
      screens: {
        'max-920':{'max': '920px'},
        'max-792':{'max': '792px'},
        'max-485':{'max': '485px'},
        'max-520':{'max': '520px'},
      }
    },
  },
  plugins: [],
}

