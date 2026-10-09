/** Eyebrow, heading and lead for a section, with an optional right-aligned link. */
export default function SectionHeader({ eyebrow, title, lead, action, as = "h2", id }) {
  const Heading = as
  return (
    <div className="section-header">
      <div className="section-header-text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Heading className="section-title" id={id}>
          {title}
        </Heading>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {action}
    </div>
  )
}
