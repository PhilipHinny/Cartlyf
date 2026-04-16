import { Helmet } from "react-helmet-async"

/**
 * SeoHead — drop this into any page to set per-page <head> tags.
 * All props are optional; omitted props are simply not rendered.
 */
export default function SeoHead({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogType = "website",
  structuredData,
}) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      {(ogTitle || title) && (
        <meta property="og:title" content={ogTitle || title} />
      )}
      {(ogDescription || description) && (
        <meta property="og:description" content={ogDescription || description} />
      )}
      {(ogUrl || canonical) && (
        <meta property="og:url" content={ogUrl || canonical} />
      )}
      <meta property="og:type" content={ogType} />

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
