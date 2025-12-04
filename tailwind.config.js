/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1c1ca0',
        'brand-blue': '#7abcfc',
        'brand-cyan': '#5a9fd4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(135deg, #7abcfc 0%, #5a9fd4 50%, #1c1ca0 100%)',
      },
    },
  },
  plugins: [],
}

