// Checks the image manifest: files exist and are within size limits, every Commons photo
// has a recorded, allowed licence, pending images have a real fallback, and nothing in
// public/images/ is unreferenced.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { IMAGES, SIZE_LIMITS, variantFile } from "../../src/data/images.js"

const root = fileURLToPath(new URL("../../", import.meta.url))
const creditsFile = path.join(root, "src/data/image-credits.json")
const credits = fs.existsSync(creditsFile) ? JSON.parse(fs.readFileSync(creditsFile, "utf8")) : {}
const ALLOWED_LICENCE = /^(CC0|Public domain|CC BY(-SA)? \d\.\d)$/i

// Old images whose source can't be traced. Task 11 deletes them and fills this list.
const REMOVED = [
  "hero-image.jpg",
  "background-hero.png",
  "financial-technology-dashboard.png",
  "healthcare-technology-integration.png",
  "logistics-warehouse-technology.jpg",
  "modern-office-building.png",
  "online-education-platform.png",
  "photo-1510906594845-bc082582c8cc.jpeg",
  "solar-panels-renewable-energy.jpg",
  "team 1.jpg",
  "team 2.png",
  "FLYTSAPP.png",
]

let problems = 0
const fail = (msg) => {
  console.log("FAIL", msg)
  problems++
}

for (const [id, img] of Object.entries(IMAGES)) {
  if (typeof img.alt !== "string" || !img.alt) fail(`${id}: missing alt text`)
  if (img.pending) {
    const fb = IMAGES[img.fallback]
    if (!fb || fb.pending) fail(`${id}: pending without a usable fallback`)
    console.log(`WARN ${id}: pending, pages show "${img.fallback}" instead`)
    continue
  }
  const file = path.join(root, "public", img.file)
  if (!fs.existsSync(file)) {
    fail(`${id}: file ${img.file} not found`)
    continue
  }
  const size = fs.statSync(file).size
  if (img.width && size > SIZE_LIMITS[img.width]) fail(`${id}: ${size} bytes, limit ${SIZE_LIMITS[img.width]}`)
  // 1920px photos also need a 960px version for cards, phones and thumbnails.
  const variant = variantFile(img)
  if (variant) {
    const vf = path.join(root, "public", variant)
    if (!fs.existsSync(vf)) fail(`${id}: missing small version ${variant} (run npm run images:variants)`)
    else if (fs.statSync(vf).size > SIZE_LIMITS[1280]) fail(`${id}: ${variant} is over ${SIZE_LIMITS[1280]} bytes`)
  }
  if (img.commons) {
    const c = credits[id]
    if (!c) fail(`${id}: no credit recorded (run npm run images:fetch)`)
    else if (!ALLOWED_LICENCE.test(c.licence)) fail(`${id}: licence "${c.licence}" is not allowed`)
    if (c && /&[a-z#0-9]+;/i.test(`${c.title} ${c.author}`)) fail(`${id}: credit text still contains HTML entities`)
  }
}

const dir = path.join(root, "public/images")
const referenced = new Set(Object.values(IMAGES).flatMap((i) => [i.file, variantFile(i)].filter(Boolean)))
if (fs.existsSync(dir)) {
  for (const f of fs.readdirSync(dir)) if (!referenced.has(`/images/${f}`)) fail(`unreferenced file public/images/${f}`)
}
for (const f of REMOVED) if (fs.existsSync(path.join(root, "public", f))) fail(`old image still present: public/${f}`)

console.log(`${Object.keys(IMAGES).length} images checked, ${problems} problem(s)`)
process.exit(problems ? 1 : 0)
