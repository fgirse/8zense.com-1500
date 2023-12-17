const config = require("./src/config/config.json");
const withVideos = require('next-videos')

module.exports = withVideos()
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  output: 'standalone',
};

module.exports = nextConfig;
