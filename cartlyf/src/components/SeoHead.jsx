import { Helmet } from "react-helmet-async"
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, TWITTER_HANDLE } from "../config/site"

/**
 * SeoHead — drop this into any page to set per-page <head> tags.
 * `title` is the page name; it becomes "Page name | Cartlyf Technologies"
 * unless `fullTitle` is given. `path` is the route, e.g. "/services".
 * `breadcrumb` is [{ name, path }] from the top level down to this page; it becomes BreadcrumbList data.
 */
export default function SeoHead({
  title,
  fullTitle,
  description,
  path = "/",
  ogType = "website",
  image = DEFAULT_OG_IMAGE,
  structuredData,
  breadcrumb,
  noindex = false,
}) {
  const pageTitle = fullTitle || (title ? `${title} | ${SITE_NAME}` : SITE_NAME)
  const url = `${SITE_URL}${path}`
  const breadcrumbData = breadcrumb && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={pageTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
    </Helmet>
  )
}
