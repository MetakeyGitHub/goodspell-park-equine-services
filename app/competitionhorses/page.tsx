import type { Metadata } from "next";
import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";
import { competitionHorses } from "../content";

export const metadata: Metadata = { title: "Competition Horses", description: "Meet competition horses produced and campaigned by Goodspell Park." };

export default function CompetitionHorsesPage() {
  return <PageShell>
    <InnerHero eyebrow="The stable" title="Horses with heart, scope and a future." copy="A snapshot of the competition horses developed and campaigned by Jamie and Sue Coman." image="/images/pages/lizetta.jpg" imageAlt="Goodspell Park competition horse" position="center 35%" />
    <section className="editorial-section" id="content"><div className="editorial-lead compact"><p className="eyebrow">Competition horses</p><h2>Produced with patience. Campaigned with purpose.</h2><p>These profiles are preserved from the existing Goodspell Park catalogue and represent horses from an earlier competition season.</p></div>
      <div className="horse-grid">{competitionHorses.map((horse, index) => <article className="horse-card" key={horse.name}><div className="horse-image"><img src={horse.image} alt={horse.name} width="1800" height="1200" loading="lazy" /><span>0{index + 1}</span></div><p className="eyebrow">{horse.meta}</p><h2>{horse.name}</h2><p>{horse.copy}</p></article>)}</div>
    </section>
    <ContactBand title="Looking for your next partner?" copy="Goodspell Park also offers sales, consignment and purchase consultancy grounded in decades of competition experience." />
  </PageShell>;
}
