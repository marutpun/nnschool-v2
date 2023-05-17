/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        atlantis: {
          50: '#f7fce9',
          100: '#eef8cf',
          200: '#dcf2a4',
          300: '#c2e76f',
          400: '#a9d843',
          500: '#8dc125',
          600: '#6b9719',
          700: '#527318',
          800: '#425c18',
          900: '#394e19',
          950: '#1c2b08',
        },

        'oxford-blue': {
          50: '#f3f6f8',
          100: '#e0e7ed',
          200: '#c4d2dd',
          300: '#9bb1c5',
          400: '#6a88a6',
          500: '#4f6c8b',
          600: '#445a76',
          700: '#3c4c62',
          800: '#374253',
          900: '#303846',
          950: '#1d232f',
        },
      },
    },
  },
  plugins: [],
};
