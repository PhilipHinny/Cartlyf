import { getImage, variantFile, VARIANT_WIDTH } from "../../data/images"

/**
 * An image from the manifest, by id. Unknown ids fail the build instead of shipping a broken image.
 * 1920px photos get a srcset with their 960px version; pass `sizes` for anything narrower than the viewport.
 * `priority` is for the hero: load immediately and ask the browser to fetch it first.
 */
export default function Picture({ id, alt, className, sizes = "100vw", priority = false }) {
  const img = getImage(id)
  if (!img) throw new Error(`Unknown image id: ${id}`)
  const small = variantFile(img)
  return (
    <img
      src={img.file}
      srcSet={small ? `${small} ${VARIANT_WIDTH}w, ${img.file} ${img.width}w` : undefined}
      sizes={small ? sizes : undefined}
      alt={alt ?? img.alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={img.focus ? { objectPosition: img.focus } : undefined}
    />
  )
}
