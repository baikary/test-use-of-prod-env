import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_FULL_NAME: process.env.NEXT_PUBLIC_FULL_NAME || '{{FULL_NAME}}',
    NEXT_PUBLIC_SITE_TYPE: process.env.NEXT_PUBLIC_SITE_TYPE || '{{SITE_TYPE}}',
  },
};

export default nextConfig;
