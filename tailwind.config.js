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
        'light-base': '#f1f5f9',
        'light-main': '#ffffff',
        'light-secondary': '#f8fafc',
        'light-accent': '#e2e8f0',
        'light-text': '#64748b',
        'dark-base': '#0f172a',
        'dark-main': '#152239',
        'dark-secondary': '#0f1626',
        'dark-accent': '#1b3152',
        'dark-text': '#f1f5f9',
        'code-editor': '#1e293b',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
