import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "Goodspell Park News & Archive", description: "Read archive updates, breeding highlights and team opportunities from Goodspell Park Equine Services in Victoria.", path: "/news", keywords: ["Goodspell Park news", "equestrian news Victoria", "showjumping news Australia", "sport horse breeding Australia"] });
export default function NewsPage() { return <PageShell>
  <InnerHero eyebrow="From Goodspell Park" title="News from the team and the stable." copy="Archive updates, breeding highlights and opportunities from Goodspell Park." image="/images/pages/news.jpg" imageAlt="Horse and rider at Goodspell Park" position="center 30%" />
  <section className="editorial-section" id="content"><div className="editorial-lead compact"><p className="eyebrow">From the archive</p><h2>Stories worth keeping.</h2><p>The source website currently contains two historical news items. They are retained here as archive content.</p></div>
    <div className="news-grid"><article><img src="/images/pages/stallion-untouchable.jpg" alt="Untouchable 27" width="1800" height="1200" loading="lazy" /><div><p className="eyebrow">Stallion of the week</p><h2>Untouchable 27</h2><p>One of the most popular stallions in France and worldwide, recognised for the quality of his progeny in sport and at auction.</p><span>Archived service fee · $3,000 GST inclusive</span><a href="mailto:scoman2@bigpond.com?subject=Untouchable 27 enquiry">More information ↗</a></div></article>
      <article><img src="/images/pages/news.jpg" alt="Goodspell Park working pupil opportunity" width="1202" height="1800" loading="lazy" /><div><p className="eyebrow">Team opportunity · Archive</p><h2>Working pupil position</h2><p>A historical opportunity to join the Seymour property, train with Jamie and Sue, and work with professional horses across all levels.</p><a href="mailto:scoman2@bigpond.com?subject=Goodspell Park opportunities">Ask about current opportunities ↗</a></div></article></div>
  </section><ContactBand />
  </PageShell>; }
