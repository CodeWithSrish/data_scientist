/** @type {import('next').NextConfig} */

// IMPORTANT — GitHub Pages setup:
// If you deploy to https://<username>.github.io/<repo-name>/ (a project page,
// not a user/organization page named <username>.github.io), GitHub serves your
// site from a sub-path. Set that sub-path below so all assets resolve correctly.
//
// Example: repo is "srishti-portfolio" -> basePath: '/srishti-portfolio'
// If your repo IS named "<username>.github.io" (a user page), leave this as ''.
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',          // static HTML export -> required for GitHub Pages
  basePath: repoBasePath,
  assetPrefix: repoBasePath ? `${repoBasePath}/` : undefined,
  images: {
    unoptimized: true,       // GitHub Pages has no Next.js image server
  },
  trailingSlash: true,       // avoids 404s on GitHub Pages routing
};

export default nextConfig;
