// Loads Insights articles from content/insights/*.md at build time.
import { marked } from "marked"
import { parseFrontMatter } from "./frontmatter"

const files = import.meta.glob("/content/insights/*.md", { query: "?raw", import: "default", eager: true })

export const INSIGHT_TAGS = ["Payments", "Data protection", "Logistics", "Case study"]

// Articles end with "---" and a bold call-to-action line. That line moves into the
// call-to-action box rendered under every article, so it is split off here.
function splitClosingCta(body) {
  const parts = body.trimEnd().split(/\r?\n---\r?\n/)
  if (parts.length > 1 && /health check/i.test(parts[parts.length - 1])) {
    return { body: parts.slice(0, -1).join("\n---\n"), cta: parts[parts.length - 1].trim() }
  }
  return { body, cta: null }
}

const renderer = new marked.Renderer()
renderer.link = function ({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens)
  const external = /^https?:\/\//.test(href)
  const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : ""
  return `<a href="${href}"${title ? ` title="${title}"` : ""}${attrs}>${text}</a>`
}

export const INSIGHTS = Object.values(files)
  .map((raw) => {
    const { data, body } = parseFrontMatter(raw)
    const { body: content, cta } = splitClosingCta(body)
    return {
      title: data.title,
      slug: data.slug,
      date: data.date,
      excerpt: data.excerpt,
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: data.author,
      readingMinutes: Math.max(1, Math.round(content.split(/\s+/).filter(Boolean).length / 200)),
      html: marked.parse(content, { renderer }),
      ctaHtml: cta ? marked.parseInline(cta) : null,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)))

export const getInsight = (slug) => INSIGHTS.find((a) => a.slug === slug)

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
