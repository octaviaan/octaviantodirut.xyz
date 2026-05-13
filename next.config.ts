import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = process.env.NEXT_DEV_DIST;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: distDir || ".next",
  turbopack: {
    root: configDir,
  },
};

export default nextConfig;
