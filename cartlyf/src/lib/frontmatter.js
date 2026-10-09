// Minimal front matter parser: `key: value`, quoted strings and [a, b] lists.
// Kept free of Vite-only APIs so vite.config.js can use it too.
export function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }
  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^(\w+):\s*(.*)$/)
    if (!m) continue
    let value = m[2].trim()
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value.slice(1, -1).split(",").map((v) => v.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
    } else {
      value = value.replace(/^["']|["']$/g, "")
    }
    data[m[1]] = value
  }
  return { data, body: match[2] }
}
