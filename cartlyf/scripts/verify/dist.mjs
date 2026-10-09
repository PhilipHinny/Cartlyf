// Checks the built site in dist/: one unique title and description per page, no dead or
// broken internal links or anchors, no HAPA or RU, page-specific markers, sitemap and noindex.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("../../", import.meta.url))
const dist = path.join(root, "dist")
const SITE = "https://www.cartlyftechnologies.com"

const EXPECTED = [
  "/",
  "/services",
  "/industries",
  "/industries/mobility-logistics",
  "/case-studies",
  "/case-studies/duman-autos",
  "/case-studies/flyts",
  "/case-studies/multi-tenant-hr-saas",
  "/insights",
  "/insights/building-flyts",
  "/insights/mpesa-reconciliation-for-logistics",
  "/insights/odpc-compliance-for-logistics",
  "/insights/what-expired-documents-cost-fleets",
  "/labs",
  "/about",
  "/careers",
  "/contact",
  "/privacy",
]

// Substrings each built page must contain. Tasks add entries as pages move to the kit.
const MARKERS = {
  "/": ["srcset=", "page-hero--home", "proof-strip", "featured-case", "steps-item", "link-list", "insight-card", "photo-card", "cta-band-title"],
  "/case-studies": ["srcset=", "page-hero", "case-card", "cta-band-title"],
  "/case-studies/duman-autos": ["page-hero", "case-study-side", "cta-band-title"],
  "/case-studies/flyts": ["page-hero", "case-study-screenshot", "cta-band-title"],
  "/case-studies/multi-tenant-hr-saas": ["page-hero", "case-study-side", "cta-band-title"],
  "/industries/mobility-logistics": ["page-hero", "case-card", "cta-band-title"],
  "/services": ["page-hero", "services-jump", "service-offer", "cta-band-title"],
  "/industries": ["page-hero", "industry-row", 'id="education"', "cta-band-title"],
  "/insights": ["page-hero", "insights-filter", "insight-card", "cta-band-title"],
  "/insights/building-flyts": ["page-hero", "article-body", "article-cta", "min read"],
  "/insights/mpesa-reconciliation-for-logistics": ["page-hero", "article-body", "article-cta"],
  "/insights/odpc-compliance-for-logistics": ["page-hero", "article-body", "article-cta"],
  "/insights/what-expired-documents-cost-fleets": ["page-hero", "article-body", "article-cta"],
  "/labs": ["page-hero", "labs-item"],
  "/about": ["page-hero", "about-story", "cta-band-title"],
  "/contact": ["page-hero", "contact-panel", "contact-form-card"],
  "/privacy": ["page-hero", "article-body"],
}

// Pages that must carry a robots noindex tag and stay out of the sitemap.
const NOINDEX = ["/credits"]

const pages = {}
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f)
    if (fs.statSync(p).isDirectory()) walk(p)
    else if (f === "index.html") {
      const rel = "/" + path.relative(dist, dir).split(path.sep).join("/")
      pages[rel] = fs.readFileSync(p, "utf8")
    }
  }
}
walk(dist)

let problems = 0
const fail = (msg) => {
  console.log("FAIL", msg)
  problems++
}
const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))

for (const r of [...EXPECTED, ...NOINDEX]) if (!pages[r]) fail(`missing page ${r}`)

const titles = new Map()
const descs = new Map()
for (const [route, html] of Object.entries(pages)) {
  const t = html.match(/<title[^>]*>[^<]*<\/title>/g) || []
  const d = html.match(/<meta[^>]*name="description"[^>]*>/g) || []
  if (t.length !== 1 || d.length !== 1) fail(`${route}: ${t.length} titles, ${d.length} descriptions`)
  const title = (t[0] || "").replace(/<[^>]+>/g, "")
  const desc = (d[0] || "").match(/content="([^"]*)"/)?.[1]
  titles.set(title, [...(titles.get(title) || []), route])
  descs.set(desc, [...(descs.get(desc) || []), route])

  for (const m of html.matchAll(/href="([^"]*)"/g)) {
    const href = m[1].replace(/&amp;/g, "&")
    if (href === "" || href === "#") {
      fail(`${route}: dead link "${href}"`)
      continue
    }
    if (/^(https?:|mailto:|tel:)/.test(href) || href.startsWith("/assets/")) continue
    if (/\.(png|jpe?g|svg|xml|txt|css|webp)$/.test(href)) continue
    const [pathPart, hash] = href.split("#")
    const target = pathPart.split("?")[0] || route
    if (!pages[target]) {
      fail(`${route}: broken link ${href}`)
      continue
    }
    if (hash && !idsOf(pages[target]).has(hash)) fail(`${route}: missing anchor ${href}`)
  }

  if (/hapa/i.test(html)) fail(`${route}: mentions HAPA`)
  if (html.includes("[[PLACEHOLDER")) fail(`${route}: still shows a [[PLACEHOLDER]]`)
  if (/uganda|kampala/i.test(html)) fail(`${route}: mentions Uganda (Kenya and East Africa only for now)`)
  if (/lang-button|>RU</.test(html)) fail(`${route}: RU language toggle`)
  for (const marker of MARKERS[route] || []) if (!html.includes(marker)) fail(`${route}: missing "${marker}"`)
}
for (const [k, v] of titles) if (v.length > 1) fail(`duplicate title "${k}" on ${v.join(", ")}`)
for (const [, v] of descs) if (v.length > 1) fail(`duplicate description on ${v.join(", ")}`)

// The credits page names every Commons photographer, and every page links to it.
const creditsJson = JSON.parse(fs.readFileSync(path.join(root, "src/data/image-credits.json"), "utf8"))
const htmlEscape = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
for (const [id, c] of Object.entries(creditsJson)) {
  if (!(pages["/credits"] || "").includes(htmlEscape(c.author))) fail(`/credits: no credit for ${id} (${c.author})`)
}
for (const [route, html] of Object.entries(pages)) if (!html.includes('href="/credits"')) fail(`${route}: footer has no Image credits link`)

// Every page except Careers (which keeps its own hero) starts with the kit's PageHero.
for (const route of [...EXPECTED, ...NOINDEX]) {
  if (route !== "/careers" && !(pages[route] || "").includes("page-hero")) fail(`${route}: no page-hero`)
}
// No leftovers from the old page header.
for (const [route, html] of Object.entries(pages)) if (html.includes('class="page-header')) fail(`${route}: old page-header markup`)

// SEO: share image on every page, valid structured data, and the right schema types.
const SCHEMA = {
  "/": ["ProfessionalService"],
  "/about": ["ProfessionalService"],
  "/services": ["OfferCatalog"],
  "/industries/mobility-logistics": ["BreadcrumbList"],
  "/case-studies/duman-autos": ["BreadcrumbList"],
  "/case-studies/flyts": ["BreadcrumbList"],
  "/case-studies/multi-tenant-hr-saas": ["BreadcrumbList"],
  "/insights/building-flyts": ["Article", "BreadcrumbList"],
}
for (const [route, html] of Object.entries(pages)) {
  if (!/<meta[^>]*property="og:image"[^>]*content="https:\/\/www\.cartlyftechnologies\.com\/[^"]+\.(jpg|png)"/.test(html)) fail(`${route}: no absolute og:image`)
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1])
  const types = []
  for (const b of blocks) {
    try {
      const walkTypes = (o) => {
        if (Array.isArray(o)) return o.forEach(walkTypes)
        if (o && typeof o === "object") {
          if (o["@type"]) types.push(...[].concat(o["@type"]))
          Object.values(o).forEach(walkTypes)
        }
      }
      walkTypes(JSON.parse(b))
    } catch {
      fail(`${route}: structured data is not valid JSON`)
    }
  }
  for (const t of SCHEMA[route] || []) if (!types.includes(t)) fail(`${route}: no ${t} structured data`)
}

// Unknown addresses must get a real 404 page, not the home page with a 200 (a "soft 404").
const notFound = path.join(dist, "404.html")
if (!fs.existsSync(notFound)) fail("dist/404.html missing")
else {
  const nf = fs.readFileSync(notFound, "utf8")
  if (!nf.includes("Page not found")) fail("404.html is not the Page not found page")
  if (!/<meta[^>]*name="robots"[^>]*content="noindex"/.test(nf)) fail("404.html has no robots noindex tag")
}
const hosting = JSON.parse(fs.readFileSync(path.join(root, "firebase.json"), "utf8")).hosting
if ((hosting.rewrites || []).some((r) => r.source === "**")) fail("firebase.json still rewrites every URL to index.html (soft 404s)")

const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8")
for (const r of EXPECTED) if (!sitemap.includes(`<loc>${SITE}${r}</loc>`)) fail(`sitemap missing ${r}`)
for (const r of NOINDEX) {
  if (sitemap.includes(`${SITE}${r}</loc>`)) fail(`sitemap lists noindex page ${r}`)
  if (!/<meta[^>]*name="robots"[^>]*content="noindex"/.test(pages[r] || "")) fail(`${r}: no robots noindex tag`)
}
if (!fs.existsSync(path.join(dist, "rss.xml"))) fail("rss.xml missing")

console.log(`${Object.keys(pages).length} pages checked, ${problems} problem(s)`)
process.exit(problems ? 1 : 0)
