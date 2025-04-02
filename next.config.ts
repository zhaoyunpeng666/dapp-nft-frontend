// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'duyi-resource.oss-cn-beijing.aliyuncs.com',
      },
      {
        protocol: "https",
        hostname: 'example.com',
      },
      {
        protocol: "https",
        hostname: 'via.placeholder.com',
      },
    ]
  }
};

module.exports = nextConfig;
