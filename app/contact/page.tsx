import { InnerHero, PageShell } from "../components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Contact & Equestrian Enquiries",
  description: "Contact Goodspell Park near Seymour for showjumping coaching, horse training, agistment, spelling, clinics, stable rental and sales advice.",
  path: "/contact",
  keywords: ["contact Goodspell Park", "equestrian enquiries Seymour", "horse training enquiry Victoria", "showjumping lessons Seymour"],
});

const enquiryTypes = [
  ["Coaching or lessons", "Coaching and lesson enquiry"],
  ["Training or agistment", "Training and agistment enquiry"],
  ["Spelling or pre-training", "Spelling and pre-training enquiry"],
  ["Stable rental", "Stable rental enquiry"],
  ["Horse sales", "Horse sales enquiry"],
  ["Clinic request", "Clinic request"],
];

export default function ContactPage() {
  return <PageShell>
    <InnerHero eyebrow="Start a conversation" title="Tell us where you want to go next." copy="Choose the enquiry that best fits, or call Jamie and Sue directly to discuss your horse, goals and timing." image="/images/pages/jb-vivid.jpg" imageAlt="Competition horse at Goodspell Park in Whiteheads Creek" />
    <section className="contact-page" id="content">
      <div className="contact-intro">
        <p className="eyebrow">Goodspell Park enquiries</p>
        <h2>Direct, personal advice from experienced horsepeople.</h2>
        <p>Include your horse’s age, current level, your goals, preferred timing and the best way to reach you. The more context you share, the more useful the first conversation can be.</p>
      </div>
      <div className="enquiry-grid" aria-label="Choose an enquiry type">
        {enquiryTypes.map(([label, subject], index) => <a key={label} href={`mailto:scoman2@bigpond.com?subject=${encodeURIComponent(subject)}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><i aria-hidden="true">↗</i></a>)}
      </div>
      <div className="contact-details">
        <div><span>Email</span><a href="mailto:scoman2@bigpond.com">scoman2@bigpond.com</a></div>
        <div><span>Jamie</span><a href="tel:+61427019610">0427 019 610</a></div>
        <div><span>Sue</span><a href="tel:+61412019611">0412 019 611</a></div>
        <div><span>Location</span><address>140 Hall Lane<br />Whiteheads Creek VIC 3660</address></div>
      </div>
    </section>
  </PageShell>;
}
