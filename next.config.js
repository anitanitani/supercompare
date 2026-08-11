/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['cheerio']
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      }
    ];
  }
};
module.exports = nextConfig;
