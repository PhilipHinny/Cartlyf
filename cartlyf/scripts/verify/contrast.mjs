// Checks WCAG contrast for the colour pairs the design relies on, reading hex values
// straight from design-tokens.css so the check follows the real tokens.
import fs from "node:fs"

const css = fs.readFileSync(new URL("../../src/styles/design-tokens.css", import.meta.url), "utf8")
const token = (name) => {
  const m = css.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})\\s*;`))
  if (!m) throw new Error(`Token --${name} is missing or not a 6-digit hex value`)
  return m[1]
}
const luminance = (hex) => {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a, b) => {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}

// [foreground, background, minimum ratio, where it is used]
const PAIRS = [
  ["white", "teal-600", 4.5, "primary button text"],
  ["teal-600", "white", 4.5, "links and eyebrows on white"],
  ["teal-600", "mist", 4.5, "links on mist sections"],
  ["teal-700", "teal-50", 4.5, "icon tiles"],
  ["teal-700", "white", 4.5, "tags on cards"],
  ["teal-300", "ink-950", 4.5, "eyebrows and links on dark"],
  ["teal-300", "ink-900", 4.5, "proof strip accents"],
  ["text", "white", 4.5, "body text"],
  ["text-2", "white", 4.5, "secondary text"],
  ["text-2", "mist", 4.5, "secondary text on mist"],
  ["muted", "white", 4.5, "meta text (white backgrounds only)"],
  ["teal-600", "white", 3, "focus ring on light"],
  ["focus", "ink-950", 3, "focus ring on dark"],
  ["teal-600", "ink-950", 3, "primary button edge on dark"],
]

let problems = 0
for (const [fg, bg, min, use] of PAIRS) {
  const r = ratio(token(fg), token(bg))
  const ok = r >= min
  if (!ok) problems++
  console.log(`${ok ? "ok  " : "FAIL"} ${fg} on ${bg}: ${r.toFixed(2)} (needs ${min}) ${use}`)
}
process.exit(problems ? 1 : 0)
