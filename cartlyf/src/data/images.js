// Every image the site uses. Pages refer to images by id.
//   commons:   a Wikimedia Commons file; `npm run images:fetch` downloads it and records its licence
//   generated: AI-generated (`canva` media id or `source`); never shows real people we name
//   pending:   the file isn't ready yet, so getImage() returns the `fallback` image instead
//   creditTitle: optional readable title for /credits when the Commons title is a file name
//   focus:     optional CSS object-position for crops (the skyline sits in the top third)
// Keep this file free of JSX: scripts/images.mjs imports it.

export const SIZE_LIMITS = { 1920: 400_000, 1280: 200_000 }

// 1920px photos also get a 960px version (same name with -960) for cards, phones and thumbnails.
export const VARIANT_WIDTH = 960
export const variantFile = (img) => (img && img.width === 1920 ? img.file.replace(/\.jpg$/,`-${VARIANT_WIDTH}.jpg`) : null)

export const IMAGES = {
  "nairobi-skyline": {
    file: "/images/nairobi-skyline.jpg",
    width: 1920,
    alt: "Nairobi's city skyline seen across Uhuru Park",
    commons: "Nairobi's_skyline_from_Uhuru_Park.jpg",
    focus: "center 30%",
  },
  "mombasa-port-workers": {
    file: "/images/mombasa-port-workers.jpg",
    width: 1920,
    alt: "Two port workers in high-visibility vests walking past trucks and stacked containers at Mombasa port",
    commons: "2015_07_31_Mombasa_Port_JPEG_RESIZED_0035.jpg",
    creditTitle: "Mombasa port: workers beside trucks and containers",
  },
  "mombasa-port-containers": {
    file: "/images/mombasa-port-containers.jpg",
    width: 1920,
    alt: "Rows of stacked shipping containers under gantry cranes at Mombasa port",
    commons: "2015_07_31_Mombasa_Port_JPEG_RESIZED_0045.jpg",
    creditTitle: "Mombasa port: container yard",
  },
  "westlands-traffic": {
    file: "/images/westlands-traffic.jpg",
    width: 1920,
    alt: "Cars, buses and motorbikes at a busy junction in Westlands, Nairobi, seen from above",
    commons: "Early_morning_traffic_at_Westlands_stage,_Nairobi.jpg",
  },
  "flyts-app": {
    file: "/FLYTS.png",
    alt: "FLYTS car rental marketplace app",
    own: true,
  },
  "gen-payments": {
    file: "/images/gen-payments.jpg",
    width: 1280,
    alt: "A shop owner's hands holding a phone that shows a mobile money payment confirmation",
    generated: true,
    source: "Figma AI (gemini-3.1-flash-image)",
  },
  "gen-data-protection": {
    file: "/images/gen-data-protection.jpg",
    width: 1280,
    alt: "Hands locking a filing cabinet of records beside a laptop showing a login screen",
    generated: true,
    source: "Figma AI (gemini-3.1-flash-image)",
  },
  "gen-ai-automation": {
    file: "/images/gen-ai-automation.jpg",
    width: 1280,
    alt: "A laptop showing a customer chat window next to a headset on an office desk",
    generated: true,
    source: "Figma AI (gemini-3.1-flash-image)",
  },
  "gen-financial-services": {
    file: "/images/gen-financial-services.jpg",
    width: 1280,
    alt: "A member's hands passing a passbook across the counter of a savings cooperative office",
    generated: true,
    source: "Figma AI (gemini-3.1-flash-image)",
  },
  "gen-health": {
    file: "/images/gen-health.jpg",
    width: 1280,
    alt: "A pharmacist's hands handing over a paper prescription bag at a pharmacy counter",
    generated: true,
    source: "Figma AI (gemini-3.1-flash-image)",
  },
  "gen-education": {
    file: "/images/gen-education.jpg",
    width: 1280,
    alt: "An empty university lecture hall with a printed weekly timetable pinned to a noticeboard",
    generated: true,
    source: "Figma AI (gemini-3.1-flash-image)",
  },
  "gen-about-workspace": {
    file: "/images/gen-about-workspace.jpg",
    width: 1280,
    alt: "Hands typing on a laptop beside a notebook of hand-drawn system diagrams",
    generated: true,
    source: "Figma AI (gemini-3.1-flash-image)",
  },
}

export function getImage(id) {
  const img = IMAGES[id]
  if (!img) return null
  return img.pending ? IMAGES[img.fallback] : img
}
