/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: every route is prerendered to plain HTML at build time,
  // so crawlers see full content without running JS. Deployable to any static host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
