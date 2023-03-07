/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: "https://api.notion.com/v1/:path*",
        },
      ];
    },
  };
  
  module.exports = nextConfig;