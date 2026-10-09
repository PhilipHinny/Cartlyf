import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SITE_URL, SITE_NAME } from './src/config/site.js'
import { CASE_STUDIES } from './src/data/caseStudies.js'
import { parseFrontMatter } from './src/lib/frontmatter.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Insights articles: front matter only, for routes, sitemap and RSS.
const insightsDir = path.join(__dirname, 'content/insights')
const insights = fs
  .readdirSync(insightsDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => parseFrontMatter(fs.readFileSync(path.join(insightsDir, f), 'utf8')).data)
  .sort((a, b) => (a.date < b.date ? 1 : -1))

const staticRoutes = [
  '/',
  '/services',
  '/industries',
  '/industries/mobility-logistics',
  '/case-studies',
  '/insights',
  '/labs',
  '/about',
  '/careers',
  '/contact',
  '/privacy',
]

const noindexRoutes = ['/credits']

const indexedRoutes = [
  ...staticRoutes,
  ...CASE_STUDIES.map((c) => `/case-studies/${c.slug}`),
  ...insights.map((a) => `/insights/${a.slug}`),
]

const routes = [...indexedRoutes, ...noindexRoutes]

const xmlEscape = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const today = new Date().toISOString().slice(0, 10)

function sitemapXml() {
  const lastmodFor = (route) => insights.find((a) => `/insights/${a.slug}` === route)?.date || today
  const priorityFor = (route) => (route === '/' ? '1.0' : route.split('/').length > 2 ? '0.7' : '0.8')
  const urls = indexedRoutes
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r === '/' ? '/' : r}</loc>\n    <lastmod>${lastmodFor(r)}</lastmod>\n    <priority>${priorityFor(r)}</priority>\n  </url>`
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

function rssXml() {
  const items = insights
    .map(
      (a) => `    <item>
      <title>${xmlEscape(a.title)}</title>
      <link>${SITE_URL}/insights/${a.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/insights/${a.slug}</guid>
      <pubDate>${new Date(`${a.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${xmlEscape(a.excerpt)}</description>
${(a.tags || []).map((t) => `      <category>${xmlEscape(t)}</category>`).join('\n')}
    </item>`
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} Insights</title>
    <link>${SITE_URL}/insights</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Practical notes on payments, data protection and logistics in East Africa.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`
}

// Writes sitemap.xml and rss.xml into the build output.
function seoFiles() {
  return {
    name: 'cartlyf-seo-files',
    apply: 'build',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml() })
      this.emitFile({ type: 'asset', fileName: 'rss.xml', source: rssXml() })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    seoFiles(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes,
      renderer: new PuppeteerRenderer({
        maxConcurrentRoutes: 1,
        renderAfterDocumentEvent: 'render-event'
      })
    })
  ],
})
