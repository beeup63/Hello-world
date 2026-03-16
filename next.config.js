/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Next.js 13 needs this for some static exports or images if not handled
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
