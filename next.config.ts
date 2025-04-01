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
      }
    ]
  }
};

module.exports = nextConfig;
