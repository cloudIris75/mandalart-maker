module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.5rem',
      },
      lineHeight: {
        2: '0.6rem',
      },
      width: {
        350: '350px',
        390: '390px',
      },
      height: {
        630: '630px',
        844: '844px',
      },
      spacing: {
        18: '4.75rem',
        26: '6.75em',
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
