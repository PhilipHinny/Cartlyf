import SeoHead from "../components/SeoHead"
import PageHero from "../components/kit/PageHero"
import Picture from "../components/kit/Picture"
import { IMAGES } from "../data/images"
import credits from "../data/image-credits.json"

export default function CreditsPage() {
  const photos = Object.entries(IMAGES)
    .filter(([id, img]) => img.commons && credits[id])
    .map(([id, img]) => ({ id, file: img.file, ...credits[id], title: img.creditTitle ?? credits[id].title }))
  const hasGenerated = Object.values(IMAGES).some((img) => img.generated && !img.pending)

  return (
    <div className="page-wrapper">
      <SeoHead
        title="Image Credits"
        description="Credits and licences for the photographs used on the Cartlyf Technologies website."
        path="/credits"
        noindex
      />
      <PageHero eyebrow="Legal" title="Image credits" lead="The photographs on this site and their licences." />

      <section className="section">
        <div className="container container-narrow">
          <ul className="credits-list">
            {photos.map((c) => (
              <li key={c.id} className="credits-item">
                <Picture id={c.id} alt="" sizes="96px" className="credits-thumb" />
                <div>
                  <p className="card-title">{c.title}</p>
                  <p className="card-text">
                    By {c.author}. Licence:{" "}
                    {c.licenceUrl ? (
                      <a href={c.licenceUrl} target="_blank" rel="noopener noreferrer">{c.licence}</a>
                    ) : (
                      c.licence
                    )}
                    .{" "}
                    <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer">Source on Wikimedia Commons</a>.
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {hasGenerated && (
            <p className="card-text credits-note">
              Other images on this site were generated with AI image tools. They are illustrations, not
              photographs of Cartlyf's team, clients or offices.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
