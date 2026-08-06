import type { Metadata } from "next";
import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = { title: "About Jamie & Sue Coman", description: "Meet the international showjumping riders behind Goodspell Park." };

export default function AboutPage() {
  return <PageShell>
    <InnerHero eyebrow="Our story" title="Experience that shapes every partnership." copy="International competition knowledge, thoughtful coaching and a lifelong commitment to the horse." image="/images/rider.jpg" imageAlt="Horse and rider at Goodspell Park" />
    <section className="editorial-section" id="content">
      <div className="editorial-lead"><p className="eyebrow">Jamie & Sue Coman</p><h2>Proven at the highest level. Present in every detail.</h2></div>
      <div className="prose-columns">
        <p>Jamie and Sue have successfully competed and produced showjumpers through to Grand Prix and World Cup level for many years. Jamie’s international career includes representing Australia at the Sydney 2000 Olympics.</p>
        <p>As an NCAS Level 3 Showjumping Coach, Jamie works with riders across the full journey—from developing confidence and correct foundations to preparing for elite competition. His experience also extends to thoroughbred pre-training.</p>
        <p>Sue has won and placed on numerous horses at World Cup and Grand Prix level. She remains deeply committed to coaching and travels throughout Victoria and interstate to help horses and riders build stronger partnerships.</p>
      </div>
      <div className="metric-row"><div><strong>2000</strong><span>Sydney Olympic team</span></div><div><strong>Level 3</strong><span>NCAS coaching</span></div><div><strong>30+ years</strong><span>Industry knowledge</span></div></div>
    </section>
    <section className="split-feature"><img src="/images/pages/services.jpg" alt="Rider and horse in training" width="1800" height="1200" loading="lazy" /><div><p className="eyebrow light">The philosophy</p><h2>Understand the individual. Build the partnership.</h2><p>Whether the goal is a first confident round or a World Cup start, the approach is patient, practical and personal. Good horsemanship comes before everything else.</p><a className="button button-light" href="/services">Explore services →</a></div></section>
    <ContactBand />
  </PageShell>;
}
