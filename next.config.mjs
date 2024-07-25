/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mcemotihari.ac.in",
      },
      {
        protocol: "https",
        hostname: "keck.ac.in/",
      },
    ],
  },
};

export default nextConfig;
