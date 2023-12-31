/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "myRemote",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./Header": "./src/components/Header.tsx",
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
