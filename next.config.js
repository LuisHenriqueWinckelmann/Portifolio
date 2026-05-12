/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  outputFileTracing: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
