module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        390: '390px',
      },
      height: {
        693: '693px',
      },
      backgroundImage: {
        background:
          'url(https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/background.png)',
      },
    },
  },
  plugins: [],
};
