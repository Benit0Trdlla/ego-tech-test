import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://challenge.egodesign.dev/media/images/**')],
  },
};

export default nextConfig;
