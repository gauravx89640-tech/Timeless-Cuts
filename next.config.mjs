/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '4d5237c30a356d151256-061d1325504a8536a91576f3d0153286.ssl.cf2.rackcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fbho3-4.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fbho3-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fbho3-6.fna.fbcdn.net',
      },
    ],
  },
}

export default nextConfig
