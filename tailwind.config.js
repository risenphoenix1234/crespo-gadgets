/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0a0a0a',
          soft: '#111111',
          card: '#161616',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E9CE73',
          dark: '#9A7B1F',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E9CE73 0%, #D4AF37 45%, #9A7B1F 100%)',
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(212,175,55,0.35), 0 8px 30px rgba(212,175,55,0.12)',
      },
    },
  },
  plugins: [],
}