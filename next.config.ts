import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Firebase Hosting
  // This generates static HTML files in the 'out' directory
  output: 'export',
  
  images: {
    // For static export, images must be unoptimized
    // The Image component will still work, but won't use Next.js optimization API
    // Images will be served directly from the public folder
    unoptimized: true,
    // Configure allowed image qualities
    qualities: [90],
    // Note: Image optimization features (AVIF, WebP conversion) require a server
    // For static export, images are served as-is from the public directory
    // If you need external images in the future, add them here:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //   },
    // ],
  },
  
  // Configure trailing slash behavior
  // false = /about (default)
  // true = /about/
  trailingSlash: false,
  
  // Performance optimizations
  // Compress output for better performance
  compress: true,
  
  // Note: SWC minification is enabled by default in Next.js 13+
  // No need to configure swcMinify as it's always on
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
