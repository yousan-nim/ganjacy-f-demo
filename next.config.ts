/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // Enables static export
  // assetPrefix: isProd ? "/GANJACY/" : "",
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
};