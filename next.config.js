/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
  images : {
    remotePatterns: [
      {
        hostname: 'https://api-colombia.com',
        protocol: 'https'
      },
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https'
      },
      {
        hostname: 'images.unsplash.com',
        protocol: 'https'
      },
      {
        hostname: 'upload.wikimedia.org',
        protocol: 'https'
      },      
      {
        hostname: 'colombia.travel',
        protocol: 'https'
      },  
      {
        hostname: 'lanzateyviaja.com',
        protocol: 'https'
      },  
      {
        hostname: 'cdn.colombia.com',
        protocol: 'https'
      },  
    ],    
  }
}

//module.exports = nextConfig
module.exports = withBundleAnalyzer(nextConfig)