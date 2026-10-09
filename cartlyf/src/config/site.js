// Site-wide configuration. Keep this file free of JSX: vite.config.js imports it too.

export const SITE_URL = "https://www.cartlyftechnologies.com"
export const SITE_NAME = "Cartlyf Technologies"

// Booking page for the free 30-minute health check. Leave empty to fall back to the
// contact form with "Book a health check" preselected.
const BOOKING_PAGE_URL = "https://calendly.com/cartlyftechnologies/30min"
export const BOOKING_URL = BOOKING_PAGE_URL || "/contact?subject=health-check"

export const CONTACT = {
  email: "info@cartlyftechnologies.com",
  phones: [
    { display: "+254 714 968 636", tel: "+254714968636" },
    { display: "+254 716 857 147", tel: "+254716857147" },
  ],
  // WhatsApp uses the same two numbers as the phone list.
  whatsapp: [
    { display: "+254 714 968 636", wa: "254714968636" },
    { display: "+254 716 857 147", wa: "254716857147" },
  ],
  offices: [
    { city: "Nairobi", address: "Ruaka, Nairobi, Kenya" },
    { city: "Kitale", address: "Cartlyf Technologies Limited, Kitale, Kenya" },
  ],
  linkedin: "https://www.linkedin.com/company/cartlyf-technologies-limited",
  twitter: "https://x.com/cartlyf2685",
}

export const FLYTS_URL = "https://www.flytsapp.com"

// Contact form subjects. The key is what goes in ?subject= on /contact.
export const CONTACT_SUBJECTS = [
  { key: "health-check", label: "Book a health check" },
  { key: "project", label: "Project enquiry" },
  { key: "partnerships", label: "Partnerships" },
  { key: "careers", label: "Careers" },
]

// 1200x630 share image used by LinkedIn, WhatsApp, X and others.
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const TWITTER_HANDLE = "@cartlyf2685"

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  // ProfessionalService is a LocalBusiness type: it lets Google show Cartlyf for local searches.
  "@type": ["Organization", "ProfessionalService"],
  name: "Cartlyf Technologies Limited",
  alternateName: "Cartlyf Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/cartlyf-logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Technology consultancy in Nairobi, Kenya building M-Pesa and payment integrations, data protection (ODPC) compliance and AI automation for businesses across East Africa.",
  email: CONTACT.email,
  telephone: CONTACT.phones.map((p) => p.tel),
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Ruaka",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Kitale",
      addressCountry: "KE",
    },
  ],
  areaServed: ["Kenya", "East Africa"],
  knowsAbout: [
    "M-Pesa integration",
    "Payment gateway integration",
    "ODPC data protection compliance",
    "AI automation",
    "Logistics software",
    "Fleet document tracking",
    "Custom software development",
  ],
  sameAs: [CONTACT.linkedin, CONTACT.twitter],
}

// Main navigation, also listed in the footer.
export const NAV_LINKS = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]
