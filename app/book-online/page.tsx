import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "Book Private Showjumping Lessons", description: "Request a private showjumping lesson near Seymour with Olympic rider Jamie Coman or Grand Prix rider Sue Coman at Goodspell Park.", path: "/book-online", keywords: ["showjumping lessons Seymour", "private horse riding lessons Victoria", "Jamie Coman coaching", "Sue Coman coaching", "showjumping coach near me"] });
const lessons = [
  { name: "Private lesson with Jamie Coman", image: "/images/pages/lesson-jamie.jpg", copy: "A focused one-hour private showjumping lesson with Olympic rider and NCAS Level 3 coach Jamie Coman." },
  { name: "Private lesson with Sue Coman", image: "/images/pages/lesson-sue.jpg", copy: "A one-hour private showjumping lesson with international World Cup and Grand Prix rider Sue Coman." },
];
export default function BookOnlinePage() { return <PageShell>
  <InnerHero eyebrow="Showjumping coaching near Seymour" title="One hour. One partnership. Clear next steps." copy="Private showjumping lessons tailored to where you and your horse are today." image="/images/pages/lesson-sue.jpg" imageAlt="Private showjumping lesson at Goodspell Park near Seymour" />
  <section className="editorial-section" id="content"><div className="editorial-lead compact"><p className="eyebrow">Private lessons</p><h2>Choose your coach.</h2><p>Lessons are held at 140 Hall Lane, Whiteheads Creek. Pricing below reflects the current source website and should be confirmed when arranging your time.</p></div>
    <div className="lesson-grid">{lessons.map(lesson => <article key={lesson.name}><img src={lesson.image} alt={lesson.name} width="1800" height="1200" loading="lazy" /><div><p className="eyebrow">1 hour · $100 listed price</p><h2>{lesson.name}</h2><p>{lesson.copy}</p><a className="button button-dark" href={`mailto:scoman2@bigpond.com?subject=${encodeURIComponent(lesson.name)}`}>Request a time ↗</a></div></article>)}</div>
  </section><ContactBand title="Need help choosing?" copy="Tell us about your horse, experience and goals, and the team will guide you to the right lesson." />
  </PageShell>; }
