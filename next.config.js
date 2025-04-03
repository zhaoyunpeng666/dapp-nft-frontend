/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://fangchao1988.xicp.net/api/:path*', // 替换为您的测试环境 API 地址
      },
    ];
  },
};

module.exports = nextConfig; 