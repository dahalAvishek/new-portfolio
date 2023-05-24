/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'outer' : '0 3px 3px 1px rgba(0, 0, 0, 1);'
      }
    },
    screens: {
      'lg': {'max': '950px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '650px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '450px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
