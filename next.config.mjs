import nextMDX from '@next/mdx'
import path from 'path'
import { readdirSync, accessSync } from 'fs'
import { fileURLToPath } from 'url'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const POSTS_DIR = path.join(__dirname, 'app/notes/(posts)')

function getPostFolders() {
  return readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .filter((d) => {
      try {
        accessSync(path.join(POSTS_DIR, d.name, 'page.mdx'))
        return true
      } catch {
        return false
      }
    })
    .map((d) => ({
      folder: d.name,
      slug: d.name.replace(/^\d+-/, ''),
    }))
    .filter(({ folder, slug }) => folder !== slug) // only if numbers were stripped
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['172.16.42.86'],
  pageExtensions: ['ts','tsx','js','jsx','md','mdx'],
  turbopack: {
    root: __dirname
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
    ],
    unoptimized: false
  },
  async rewrites() {
    const folders = getPostFolders()
    return folders.map(({ folder, slug }) => ({
      source: `/notes/${slug}`,
      destination: `/notes/${folder}`,
    }))
  },
  async redirects() {
    const folders = getPostFolders()
    return [
      {
        source: '/isthisinteresting',
        destination: '/notes',
        permanent: true,
      },
      {
        source: '/isthisinteresting/:path*',
        destination: '/notes/:path*',
        permanent: true,
      },
      // Redirect old numbered URLs to clean slugs
      ...folders.map(({ folder, slug }) => ({
        source: `/notes/${folder}`,
        destination: `/notes/${slug}`,
        permanent: true,
      })),
    ]
  },
}

export default withMDX(nextConfig)
