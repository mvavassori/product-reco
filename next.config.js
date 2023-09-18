/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/mvavassori/blog-posts-product-reco/master/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
