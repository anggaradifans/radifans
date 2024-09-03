/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    webpack: (config) => {
      config.externals.push({
        'sharp': 'commonjs sharp',
        'canvas': 'commonjs canvas'
      })
      return config
    },
    // Add these lines for GitHub Pages deployment
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    // This line is optional, but can be helpful for GitHub Pages
    images: {
      loader: 'akamai',
      path: '',
    },
  }
  
  export default nextConfig