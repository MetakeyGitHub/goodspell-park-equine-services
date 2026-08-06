import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "Request a Showjumping Clinic", description: "Request a one- or two-day showjumping, dressage or flatwork clinic in Victoria or interstate with Jamie and Sue Coman.", path: "/upcoming-events", keywords: ["showjumping clinics Victoria", "equestrian clinics Australia", "Jamie Coman clinic", "Sue Coman clinic", "horse riding clinic Victoria"] });
export default function ClinicPage() { return <PageShell>
  <InnerHero eyebrow="Bring Goodspell Park to you" title="A better clinic starts with a clear purpose." copy="One- and two-day coaching experiences for riders and horses of all levels." image="/images/pages/lesson-sue.jpg" imageAlt="Jamie and Sue Coman showjumping clinic" />
  <section className="clinic-layout" id="content"><div><p className="eyebrow">Showjumping clinics</p><h2>Experience shared. Confidence built.</h2><p>Jamie and Sue make themselves available for a number of clinics each month. Programs can focus on showjumping at all levels, dressage and flatwork, with an enjoyable, educational approach shaped by more than 30 years of industry knowledge.</p><p>Clinics can be structured across one or two days and tailored to the age, level and goals of the riders and horses attending.</p></div>
    <aside><span>Booking note</span><strong>4 weeks</strong><p>All clinics must be requested at least four weeks before the proposed date.</p><a className="button button-light" href="mailto:scoman2@bigpond.com?subject=Clinic date request">Request a clinic ↗</a></aside></section>
  <section className="request-checklist"><p className="eyebrow">Include with your request</p><div>{["Club or organisation", "Proposed date", "Number of riders", "Rider levels", "Location", "Contact details", "Special requests"].map((item, i) => <p key={item}><span>0{i + 1}</span>{item}</p>)}</div></section>
  <ContactBand title="Start planning your clinic." copy="Send the proposed date, location, group size and rider levels to the Goodspell Park team." />
  </PageShell>; }
