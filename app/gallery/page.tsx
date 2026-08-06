import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "Equestrian & Showjumping Gallery", description: "View archive photographs of showjumping, competition horses, coaching and daily life at Goodspell Park in Whiteheads Creek, Victoria.", path: "/gallery", keywords: ["Goodspell Park gallery", "showjumping photos Australia", "equestrian centre Victoria photos"] });
const gallery = [
  ["/images/pages/lizetta.jpg", "Competition day"], ["/images/pages/services.jpg", "On course"],
  ["/images/pages/loose-kannan.jpg", "Young horse development"], ["/images/rider.jpg", "Goodspell Park training"],
  ["/images/pages/lesson-sue.jpg", "International experience"], ["/images/pages/stable-rental.jpg", "The property"],
  ["/images/pages/nows-the-time.jpg", "Partnership in progress"], ["/images/horse.jpg", "Life at the stable"],
];
export default function GalleryPage() { return <PageShell>
  <InnerHero eyebrow="In the arena & at home" title="The work behind every moment." copy="A visual journal of competition, training, horses and daily life at Goodspell Park." image="/images/pages/loose-kannan.jpg" imageAlt="Horse and rider showjumping" />
  <section className="gallery-section" id="content"><div className="editorial-lead compact"><p className="eyebrow">Gallery</p><h2>Latest photos from the Goodspell Park archive.</h2></div><div className="masonry-grid">{gallery.map(([src, label], i) => <figure key={src} className={i % 3 === 0 ? "tall" : ""}><img src={src} alt={label} width="1800" height="1200" loading="lazy" /><figcaption><span>{String(i + 1).padStart(2, "0")}</span>{label}</figcaption></figure>)}</div></section>
  <ContactBand />
  </PageShell>; }
