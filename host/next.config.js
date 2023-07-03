/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "myHost",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          myRemote: `myRemote@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
