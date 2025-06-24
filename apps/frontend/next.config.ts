/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      // Add other domains as needed
      // {
      //   protocol: 'https',
      //   hostname: 'your-image-domain.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
}

module.exports = nextConfig