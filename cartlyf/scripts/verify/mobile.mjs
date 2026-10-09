// Loads every page in headless Chrome at phone widths and checks layout and basic
// accessibility, exercises key behaviours, and saves screenshots to verify-screens/.
// Needs a fresh `npm run build` first.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import puppeteer from "puppeteer"
import { preview } from "vite"

const root = fileURLToPath(new URL("../../", import.meta.url))
const PORT = 4179
const BASE = `http://localhost:${PORT}`
const shotsDir = path.join(root, "verify-screens")

const ROUTES = [
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
  "/insights/odpc-compliance-for-logistics",
  "/labs",
  "/about",
  "/careers",
  "/contact",
  "/privacy",
  "/credits",
  "/does-not-exist",
]

let problems = 0
const fail = (msg) => {
  console.log("FAIL", msg)
  problems++
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

const server = await preview({ root, logLevel: "error", preview: { port: PORT, strictPort: true } })
const browser = await puppeteer.launch()
const page = await browser.newPage()
page.on("pageerror", (e) => fail(`page error: ${e.message}`))

async function open(url, width) {
  await page.setViewport({ width, height: 800 })
  await page.goto(BASE + url, { waitUntil: "networkidle0" })
}

// Lazy images only load when scrolled into view; force them so broken ones show up.
async function loadAllImages() {
  await page.evaluate(() => {
    for (const img of document.querySelectorAll("img")) img.loading = "eager"
    window.scrollTo(0, document.body.scrollHeight)
  })
  await page.waitForNetworkIdle({ idleTime: 300, timeout: 15000 }).catch(() => {})
  await page.evaluate(() => window.scrollTo(0, 0))
}

try {
  for (const width of [320, 375]) {
    for (const route of ROUTES) {
      await open(route, width)
      await loadAllImages()
      const r = await page.evaluate(() => {
        const imgs = [...document.querySelectorAll("img")]
        return {
          overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
          unlabeled: [...document.querySelectorAll("input:not([type=hidden]),select,textarea")].filter(
            (e) => !(e.labels && e.labels.length) && !e.getAttribute("aria-label")
          ).length,
          noAlt: imgs.filter((i) => !i.hasAttribute("alt")).map((i) => i.src),
          broken: imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
          h1: document.querySelectorAll("h1").length,
        }
      })
      if (r.overflow) fail(`${route} @${width}px: horizontal scroll`)
      if (r.unlabeled) fail(`${route} @${width}px: ${r.unlabeled} unlabelled field(s)`)
      if (r.noAlt.length) fail(`${route} @${width}px: images without alt: ${r.noAlt.join(", ")}`)
      if (r.broken.length) fail(`${route} @${width}px: broken images: ${r.broken.join(", ")}`)
      if (r.h1 !== 1) fail(`${route} @${width}px: ${r.h1} h1 elements`)
    }
  }

  // BEHAVIOUR CHECKS (later tasks append below this line)

  // Hero text sits on at least 78% ink at tablet widths, where it spans most of the width.
  for (const width of [800, 1024]) {
    await open("/about", width)
    const bg = await page.evaluate(() => {
      const st = getComputedStyle(document.querySelector(".page-hero.has-media"), "::before")
      return { image: st.backgroundImage, color: st.backgroundColor }
    })
    if (bg.image !== "none" || bg.color !== "rgba(10, 22, 28, 0.86)") fail(`hero overlay @${width}px: ${JSON.stringify(bg)}`)
  }

  // An unknown ?tag= shows every article (Review Focus 5).
  await open("/insights?tag=Nope", 1280)
  const allCards = await page.$$eval(".insight-card", (c) => c.length)
  if (allCards !== 4) fail(`/insights?tag=Nope shows ${allCards} cards, expected 4`)

  // Hash links land with the section heading visible below the fixed nav (Review Focus 1),
  // both on a direct load and when clicked from another page.
  const headingInView = () =>
    page.evaluate(() => {
      const h = document.querySelector("#education h2").getBoundingClientRect()
      return {
        scrolled: window.scrollY > 0,
        belowNav: h.top >= document.querySelector(".nav-container").getBoundingClientRect().bottom,
        inViewport: h.bottom <= window.innerHeight,
      }
    })
  for (const width of [375, 1366]) {
    await open("/industries#education", width)
    await wait(900)
    const r = await headingInView()
    if (!r.scrolled || !r.belowNav || !r.inViewport) fail(`/industries#education @${width}px (direct): ${JSON.stringify(r)}`)
    await open("/", width)
    await page.evaluate(() => document.querySelector('footer a[href="/industries#education"]').click())
    await wait(1200)
    const c = await headingInView()
    if (!c.scrolled || !c.belowNav || !c.inViewport) fail(`/industries#education @${width}px (clicked from Home): ${JSON.stringify(c)}`)
  }

  // Mobile menu over a dark hero: opens, stays inside the viewport, closes on navigation.
  await open("/", 375)
  await page.click(".mobile-menu-button")
  await wait(300)
  const menu = await page.evaluate(() => ({
    open: !!document.querySelector("#mobile-menu"),
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    linkColor: getComputedStyle(document.querySelector(".mobile-link")).color,
  }))
  if (!menu.open) fail("mobile menu did not open")
  if (menu.overflow) fail("mobile menu causes horizontal scroll")
  if (menu.linkColor !== "rgb(255, 255, 255)") fail(`mobile menu links are ${menu.linkColor}, expected white on ink`)
  await page.click('.mobile-link[href="/services"]')
  await wait(400)
  if (await page.$("#mobile-menu")) fail("mobile menu stayed open after navigating")

  // Contact form subject preselection from the URL.
  const CONTACT_CASES = [
    ["?subject=health-check", "health-check", ""],
    ["?subject=careers", "careers", ""],
    ["?subject=project&offer=care-plan", "project", "I'm interested in the Care Plan."],
    ["?subject=bogus", "", ""],
  ]
  for (const [query, subject, message] of CONTACT_CASES) {
    await open(`/contact${query}`, 1280)
    const got = await page.evaluate(() => [
      document.querySelector("#contact-subject").value,
      document.querySelector("#contact-message").value,
    ])
    if (got[0] !== subject || got[1] !== message) fail(`/contact${query}: got ${JSON.stringify(got)}`)
  }

  // Insights tag filter.
  await open("/insights", 1280)
  await page.evaluate(() =>
    [...document.querySelectorAll(".insights-filter")].find((b) => b.textContent === "Payments").click()
  )
  await wait(300)
  const paymentCards = await page.$$eval(".insight-card", (c) => c.length)
  if (paymentCards !== 2) fail(`Insights "Payments" filter shows ${paymentCards} cards, expected 2`)

  // Screenshots for visual review against the approved mockups.
  fs.mkdirSync(shotsDir, { recursive: true })
  for (const route of ROUTES) {
    const name = route === "/" ? "home" : route.slice(1).replace(/\W+/g, "-")
    for (const [label, width] of [["phone", 375], ["desktop", 1366]]) {
      await open(route, width)
      await loadAllImages()
      await page.screenshot({ path: path.join(shotsDir, `${name}-${label}.png`), fullPage: true })
    }
  }
} finally {
  await browser.close()
  await server.close()
}

console.log(`${problems} problem(s); screenshots in verify-screens/`)
process.exit(problems ? 1 : 0)
