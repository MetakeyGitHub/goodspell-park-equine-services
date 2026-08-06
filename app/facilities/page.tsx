import type { Metadata } from "next";
import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";
import { facilities } from "../content";

export const metadata: Metadata = { title: "Facilities", description: "Explore Goodspell Park's premium equestrian facilities in Whiteheads Creek." };
export default function FacilitiesPage() { return <PageShell>
  <InnerHero eyebrow="The property" title="Built for horses. Ready for ambition." copy="An extensive, professional base designed for consistent training, recovery and exceptional daily care." image="/images/pages/stable-rental.jpg" imageAlt="Equestrian facilities at Goodspell Park" />
  <section className="editorial-section" id="content"><div className="editorial-lead"><p className="eyebrow">Facilities</p><h2>A world-class base in the Victorian countryside.</h2></div><div className="prose-columns"><p>Originally built to train world-class racehorses, Goodspell Park is now home to Jamie and Sue Coman and provides an elite, extensive base for a complete range of equestrian services.</p><p>Whether a horse stays for a short spell or a long-term program, the property offers a comfortable and consistent home supported by experienced supervision.</p></div>
    <div className="facility-grid">{facilities.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>
  </section>
  <section className="wide-statement"><p className="eyebrow light">Whiteheads Creek · Victoria</p><h2>Space to work.<br />Time to recover.<br />Care without compromise.</h2></section>
  <ContactBand title="Plan a stay at Goodspell Park." copy="Enquire about spelling, agistment, training or stable rental at the property." />
  </PageShell>; }
