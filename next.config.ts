import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images:{
  //   remotePatterns: [new URL("https://i.ibb.co.com/7tPVqq49/Sagingan-Festival.png")]
  // }

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
    ],
  },
};

export default nextConfig;
