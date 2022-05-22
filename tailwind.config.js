module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'champange-pink': '#e3d5ca',
        chocolate: '#532A21',
        isabelline: '#EDEDE9',
        'pale-silver': '#D6CCC2',
        linen: '#F5EBE0',
        'desert-sand': '#D5BDAF',
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '-100px' },
          '40%,100%': { 'background-position': '140px' },
        },
      },
    },
  },
  plugins: [],
};
