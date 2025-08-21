/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// If your site will live at https://username.github.io/<REPO_NAME>
// set basePath/assetPrefix to "/<REPO_NAME>".
// If it will be at https://username.github.io (user/organization page), leave them empty.
const repoName = 'personal-website' // change or set to '' if deploying to root

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  output: 'export',                 // enables `next export`
  images: { unoptimized: true },    // required for static export when using next/image
  trailingSlash: true,              // helps with GH Pages static hosting
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
