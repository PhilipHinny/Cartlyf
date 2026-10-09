// Runs after `npm run build`. Firebase Hosting serves dist/404.html with a real 404 status
// for any address that has no page, so unknown URLs aren't indexed as copies of the home page.
// The prerenderer writes the Page not found page to dist/404/index.html; move it into place.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dist = fileURLToPath(new URL("../dist/", import.meta.url))
const source = path.join(dist, "404", "index.html")
if (!fs.existsSync(source)) {
  console.error("copy-404: dist/404/index.html not found; was /404 prerendered?")
  process.exit(1)
}
fs.copyFileSync(source, path.join(dist, "404.html"))
fs.rmSync(path.join(dist, "404"), { recursive: true })
console.log("copy-404: wrote dist/404.html")
