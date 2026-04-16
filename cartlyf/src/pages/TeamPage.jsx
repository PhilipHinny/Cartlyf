import Team from "../components/team"
import SeoHead from "../components/SeoHead"
import "../styles/page-header.css"

export default function TeamPage() {
  return (
    <div className="page-wrapper">
      <SeoHead
        title="Our Team | Cartlyf Technologies — Kitale, Kenya"
        description="Meet the team behind Cartlyf Technologies — builders, designers, and operators creating practical digital products for East Africa from Kitale, Kenya."
        canonical="https://www.cartlyftechnologies.com/team"
        ogTitle="The Cartlyf Team — Building East Africa's Digital Future"
        ogDescription="Meet the people behind FLYTS, HAPA, and Cartlyf's timetable scheduling system. A Kenyan tech team building from Kitale."
        ogUrl="https://www.cartlyftechnologies.com/team"
      />
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">Our Team</h1>
          <p className="page-header-description">
            The people building practical technology for Africa from Kitale, Kenya
          </p>
        </div>
      </div>
      <Team />
    </div>
  )
}


