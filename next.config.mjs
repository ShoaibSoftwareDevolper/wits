const nextConfig = {
  allowedDevOrigins: [
    "tribunal-compromise-norman-traveling.trycloudflare.com",
    "*.trycloudflare.com",
  ],
  images: {
    formats: ["image/webp"],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
