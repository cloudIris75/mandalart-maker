const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'mandalart-bucket.s3.ap-northeast-2.amazonaws.com',
      'assets.swygbro.com',
      'localhost',
    ],
  },
};

module.exports = nextConfig;
