module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        350: '350px',
        390: '390px',
      },
      height: {
        630: '630px',
        844: '844px',
      },
      colors: {
        vivaMegenta: '#BB2649',
        hover: '#D93060',
        background: '#F2F0EB',
        border: '#263056',
      },
    },
  },
  plugins: [],
};
