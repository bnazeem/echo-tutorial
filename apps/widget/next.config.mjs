/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // <- skip TS type checks during build
  },
  eslint: {
    ignoreDuringBuilds: true, // <- optional, skip lint during build
  },
};

export default nextConfig;
