/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.meetupstatic.com',
        port: '',
        pathname: '/photos/member/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
