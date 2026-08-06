import type { Metadata } from "next";
import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";
import { stallions } from "../content";

export const metadata: Metadata = { title: "Stallions", description: "Explore the Goodspell Park international breeding stallion catalogue." };
export default function StallionsPage() { const featured = stallions.filter(s => s.featured); return <PageShell>
  <InnerHero eyebrow="Breeding catalogue" title="World-class bloodlines. Australian access." copy="A legacy catalogue of international sport-horse stallions represented through Goodspell Park." image="/images/pages/stallion-chilli.jpg" imageAlt="International breeding stallion" position="center 35%" />
  <section className="editorial-section" id="content"><div className="editorial-lead compact"><p className="eyebrow">Featured stallions</p><h2>Performance written into the pedigree.</h2><p>Goodspell Park worked with Mike Tweedie and Groupe France Elevage to bring leading international breeding lines to Australian breeders.</p></div>
    <div className="featured-stallions">{featured.map(s => <article key={s.name}><img src={s.image} alt={s.name} width="1800" height="1200" loading="lazy" /><div><p className="eyebrow">{s.pedigree}</p><h2>{s.name}</h2><p>{s.copy}</p><strong>{s.price}</strong></div></article>)}</div>
    <div className="catalogue-heading"><div><p className="eyebrow">Full directory</p><h2>International collection</h2></div><p>Catalogue pricing and semen availability are historical source details and must be confirmed before booking.</p></div>
    <div className="stallion-directory">{stallions.map((s, i) => <article key={s.name}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{s.name}</h3><p>{s.pedigree}</p></div><strong>{s.price}</strong>{s.copy && <p>{s.copy}</p>}<a href={`mailto:scoman2@bigpond.com?subject=Stallion enquiry: ${encodeURIComponent(s.name)}`}>Enquire ↗</a></article>)}</div>
  </section><ContactBand title="Discuss your breeding plans." copy="Contact Sue to confirm current availability, terms and pricing for your preferred stallion." />
  </PageShell>; }
