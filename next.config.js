/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack(config) {
    // Enable WebAssembly
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    // This is the key part: configure how WebAssembly is processed
    config.module.rules.push({
      test: /\.wasm$/,
      type: "asset/resource",
    });

    return config;
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
