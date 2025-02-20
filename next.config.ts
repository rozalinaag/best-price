import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Add the alias for `@`
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');  // Point to `src` folder
    return config;
  },
};

export default nextConfig;
