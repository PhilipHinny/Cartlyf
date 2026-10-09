// Case studies shown on /case-studies and /case-studies/:slug.
// Keep this file free of JSX: vite.config.js imports it to build the route list.
// Text may contain [[PLACEHOLDER: ...]] markers; render it with <WithPlaceholders>.

export const CASE_STUDIES = [
  {
    slug: "duman-autos",
    title: "Duman Autos",
    headline: "Vehicle document-expiry tracking with automatic daily alerts",
    tag: "Logistics",
    image: "mombasa-port-containers",
    challengeShort: "Expiry dates tracked by hand, with a real risk of lapses",
    builtShort: "Daily expiry checks with SMS and email alerts",
    summary:
      "A system that tracks every vehicle and logistics document's expiry date and sends SMS and email alerts before anything lapses.",
    seoDescription:
      "How Cartlyf built fleet document tracking for Duman Autos: expiry dates recorded, checked daily and alerted by SMS and email before permits and other documents lapse.",
    client:
      "Duman Autos manages vehicles and logistics paperwork, and every one of those documents carries an expiry date.",
    challenge: [
      "Expiry dates on logistics and vehicle documents were tracked by hand. With many documents across many vehicles, there was a real risk of something lapsing unnoticed, and of a vehicle being off the road or uninsured as a result.",
    ],
    built: [
      "A system that records each document's expiry date against the vehicle it belongs to.",
      "A scheduled job that checks every document daily.",
      "SMS and email alerts sent before anything expires, so there is time to renew.",
      "Service reminders based on each vehicle's odometer, plus a trip log for the fleet.",
    ],
    results: [
      "8 vehicles and 10 vehicle and logistics documents tracked, with every expiry date checked daily.",
      "45 service reminders sent, with 25 services logged.",
      "75 trips logged in the system.",
    ],
    stack: [
      "Supabase (Postgres, Edge Functions)",
      "Daily scheduled jobs (pg_cron)",
      "SMS via Africa's Talking",
      "Email via Resend",
      "Firebase Hosting",
      "Installable web app",
    ],
    externalLink: { href: "https://duman-autos-ltd.web.app/", label: "Visit the Duman Autos app" },
  },
  {
    slug: "flyts",
    title: "FLYTS",
    headline: "A car rental marketplace for Kenya",
    tag: "Mobility",
    image: "westlands-traffic",
    screenshot: "flyts-app",
    challengeShort: "Payments, trust and data protection from day one",
    builtShort: "Web and Android apps, escrow payments, renter KYC",
    summary:
      "Cartlyf's own car rental marketplace, live on web and Android, with escrow payments, renter KYC and data protection built in.",
    seoDescription:
      "How Cartlyf built FLYTS, a Kenyan car rental marketplace with Paystack escrow, M-Pesa payments, renter KYC and ODPC compliance from day one.",
    client: "FLYTS is Cartlyf's own product: a car rental marketplace connecting renters with vehicles they can trust.",
    challenge: [
      "Build a car rental marketplace for Kenya that handles payments, trust and data protection from day one.",
    ],
    built: [
      "Web and Android apps.",
      "Paystack escrow and M-Pesa payment flows.",
      "KYC with physical verification of renters and vehicles.",
      "ODPC compliance documentation: privacy policy and data protection impact assessment.",
      "Google Play release.",
    ],
    results: ["Live on web and Android."],
    stack: ["React Native (Expo)", "Web app", "Paystack", "M-Pesa"],
    externalLink: { href: "https://www.flytsapp.com", label: "Visit flytsapp.com" },
    articleSlug: "building-flyts",
  },
  {
    slug: "multi-tenant-hr-saas",
    title: "Multi-tenant HR SaaS for a UK client",
    headline: "A leave and holiday platform serving many organisations from one system",
    tag: "SaaS",
    image: "gen-data-protection",
    challengeShort: "Many organisations in one system, with strict separation",
    builtShort: "Multi-tenant backend with row-level security",
    summary:
      "A multi-tenant leave and holiday management backend with strict data separation, built in PostgreSQL and deployed on AWS.",
    seoDescription:
      "Cartlyf's lead developer built a multi-tenant HR SaaS backend for a UK client: NestJS, PostgreSQL row-level security and AWS, with strict data separation between organisations.",
    client: "A UK company running a leave and holiday management platform. The client is kept anonymous.",
    challenge: [
      "Serve many separate organisations from one system, with strict separation so that no organisation can ever see another's data.",
    ],
    built: [
      "A multi-tenant backend with row-level security enforced in PostgreSQL.",
      "Deployment on AWS.",
      "Built by Cartlyf's lead developer as part of a partner agency team.",
    ],
    results: null,
    stack: ["NestJS", "TypeScript", "PostgreSQL with row-level security", "AWS"],
  },
]

export const getCaseStudy = (slug) => CASE_STUDIES.find((c) => c.slug === slug)
