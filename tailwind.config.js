/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'nondenoic-main': '#3b82f6',
        'nondenoic-secondary': '#60a5fa',
        'text-main': '#141515',
        'text-secondary': '#898A8A',
        'code-editor': '#090909',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        12: 'repeat(12, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
