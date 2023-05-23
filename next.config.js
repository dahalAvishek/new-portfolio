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
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: "/free-photo/**"
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: "/premium-photo/**"
        },
      ],
    },
  };