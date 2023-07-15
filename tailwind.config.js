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
        'light-base': '#ffffff',
        'light-secondary': '#f5f5f5',
        'light-accent': '#e2e8f0',
        'light-headings': '#171717',
        'light-text': '#404040',
        'dark-base': '#0a0a0a',
        'dark-secondary': '#171717',
        'dark-accent': '#1b3152',
        'dark-headings': '#ffffff',
        'dark-text': '#d4d4d4',
        'code-editor': '#090909',
      },
      gridTemplateRows: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
