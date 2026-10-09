// Image pipeline for the website.
//   node scripts/images.mjs fetch            Download every Commons photo in src/data/images.js,
//                                            record its licence in src/data/image-credits.json
//   node scripts/images.mjs variants         Rebuild the 960px versions from the files in public/images
//   node scripts/images.mjs add <id> <file>  Resize and compress a local file (e.g. a Canva export)
//                                            to the manifest entry's path and width
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"
import { IMAGES, SIZE_LIMITS, VARIANT_WIDTH, variantFile } from "../src/data/images.js"

const root = fileURLToPath(new URL("..", import.meta.url))
const creditsFile = path.join(root, "src/data/image-credits.json")
const UA = "CartlyfWebsite/1.0 (https://www.cartlyftechnologies.com; info@cartlyftechnologies.com)"
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const ENTITIES = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " }
const stripHtml = (s = "") =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&(#\d+|[a-z]+);/gi, (m, e) => (e[0] === "#" ? String.fromCharCode(+e.slice(1)) : ENTITIES[e] ?? m))
    .replace(/\s+/g, " ")
    .trim()

// Writes a JPEG at `width`, lowering quality until it fits `limit`.
async function writeJpeg(input, file, width, limit) {
  const target = path.join(root, "public", file)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  let quality = 80
  let out
  for (; quality >= 50; quality -= 5) {
    out = await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer()
    if (out.length <= limit) break
  }
  fs.writeFileSync(target, out)
  console.log(`  ${file} ${Math.round(out.length / 1024)} KB at quality ${quality}`)
}

// Saves the entry at its width, plus a 960px version for 1920px photos.
async function save(id, input) {
  const img = IMAGES[id]
  if (!img || !img.width) throw new Error(`Unknown image id or no width: ${id}`)
  console.log(id)
  await writeJpeg(input, img.file, img.width, SIZE_LIMITS[img.width])
  const variant = variantFile(img)
  if (variant) await writeJpeg(input, variant, VARIANT_WIDTH, SIZE_LIMITS[1280])
}

// Rebuilds the small versions from the files already in public/ (no download).
async function variants() {
  for (const [id, img] of Object.entries(IMAGES)) {
    const variant = variantFile(img)
    if (!variant || img.pending) continue
    console.log(id)
    await writeJpeg(fs.readFileSync(path.join(root, "public", img.file)), variant, VARIANT_WIDTH, SIZE_LIMITS[1280])
  }
}

async function fetchCommons() {
  const credits = fs.existsSync(creditsFile) ? JSON.parse(fs.readFileSync(creditsFile, "utf8")) : {}
  for (const [id, img] of Object.entries(IMAGES)) {
    if (!img.commons) continue
    const api =
      "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo" +
      `&iiprop=url|extmetadata&iiurlwidth=${img.width}&titles=${encodeURIComponent("File:" + img.commons)}`
    const meta = await (await fetch(api, { headers: { "User-Agent": UA } })).json()
    const info = Object.values(meta.query.pages)[0].imageinfo?.[0]
    if (!info) throw new Error(`${id}: File:${img.commons} not found on Wikimedia Commons`)
    const m = info.extmetadata
    credits[id] = {
      title: stripHtml(m.ObjectName?.value) || img.commons,
      author: stripHtml(m.Artist?.value) || "Unknown",
      licence: stripHtml(m.LicenseShortName?.value),
      licenceUrl: m.LicenseUrl?.value || null,
      sourceUrl: info.descriptionurl,
    }
    console.log(`${id}: ${credits[id].licence}, ${credits[id].author}`)
    await sleep(1500)
    const res = await fetch(info.thumburl || info.url, { headers: { "User-Agent": UA } })
    if (!res.ok) throw new Error(`${id}: download failed with HTTP ${res.status}`)
    await save(id, Buffer.from(await res.arrayBuffer()))
    await sleep(1500)
  }
  fs.writeFileSync(creditsFile, JSON.stringify(credits, null, 2) + "\n")
}

const [command, id, file] = process.argv.slice(2)
if (command === "fetch") await fetchCommons()
else if (command === "variants") await variants()
else if (command === "add" && id && file) await save(id, fs.readFileSync(file))
else {
  console.log("Usage: node scripts/images.mjs fetch | variants | add <id> <file>")
  process.exit(1)
}
