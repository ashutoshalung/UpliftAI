/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#F97316',
          coral: '#F43F5E',
          magenta: '#D946EF',
          pink: '#EC4899',
          yellow: '#EAB308',
          green: '#22C55E',
          teal: '#14B8A6',
          navy: '#1E1B4B',
        },
      },
    },
  },
  plugins: [],
};
