/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapercave.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.icon-icons.com'
      }
    ]
  }
};

export default nextConfig;
