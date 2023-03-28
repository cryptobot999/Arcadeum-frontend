/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
      aspectRatio: {
        '1/3': '1 / 3',
        2: '2 / 1',
        4: '4 / 1',
      },
      colors: {
        'roulette-red': '#78172d',
        'roulette-black': '#222328',
      },
    },
  },
  plugins: [],
}
