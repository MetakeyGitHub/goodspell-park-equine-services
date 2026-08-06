import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "Horse Training, Agistment & Coaching", description: "Horse training, showjumping coaching, full-care agistment, spelling, thoroughbred pre-training, clinics and sales consultancy near Seymour, Victoria.", path: "/services", keywords: ["horse training Seymour", "horse agistment Seymour", "showjumping coaching Victoria", "horse spelling Victoria", "thoroughbred pre-training Victoria", "equestrian clinics Victoria"] });
const offerings = [
  ["Coaching", "Showjumping and dressage coaching for horses and riders of all ages and levels—from aspiring juniors and amateurs to Grand Prix partnerships."],
  ["Training & agistment", "Full-care packages shaped around the individual horse, with professional training and attentive daily management."],
  ["Breaking & pre-training", "Considered preparation for young horses and thoroughbreds, drawing on years of practical experience."],
  ["Consignment", "Professional presentation, campaign planning and support for owners bringing horses to market."],
  ["Purchase & sales consultancy", "Independent, experienced guidance to help riders identify the right horse and make confident decisions."],
  ["Clinics", "One- and two-day showjumping, dressage and flatwork clinics delivered throughout Victoria and interstate."],
];
export default function ServicesPage() { return <PageShell>
  <InnerHero eyebrow="What we do" title="One place. Every step forward." copy="Comprehensive support for horses and riders, from early foundations to elite performance." image="/images/pages/services.jpg" imageAlt="Showjumping rider competing" />
  <section className="editorial-section service-page-list" id="content"><div className="editorial-lead compact"><p className="eyebrow">Goodspell Park services</p><h2>Expert eyes. Individual programs.</h2><p>Goodspell Park brings coaching, horse development and full-care services together at one premium Victorian facility.</p></div>
    <div className="numbered-offerings">{offerings.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p><a href={`/contact?service=${encodeURIComponent(title)}`}>Enquire →</a></article>)}</div>
  </section><ContactBand />
  </PageShell>; }
