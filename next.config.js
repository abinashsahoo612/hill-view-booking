/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // if using Server Actions
  },
};

module.exports = nextConfig;
