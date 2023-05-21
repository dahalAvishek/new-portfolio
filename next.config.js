/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.hitedigital.com',
          port: '',
          pathname: "/wp-content/**"
        },
      ],
    },
  };