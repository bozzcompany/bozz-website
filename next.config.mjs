/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/web/:project/',
        destination: '/web/:project/index.html',
      },
    ];
  },
};

export default nextConfig;
