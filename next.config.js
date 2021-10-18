/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  // Target must be serverless
  // target: "experimental-serverless-trace",
  target: "serverless",
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/rouse-yoga/image/upload/",
    domains: ["cdn.sanity.io", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
