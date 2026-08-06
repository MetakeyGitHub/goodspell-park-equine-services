import { ContactBand, PageShell } from "./components/SiteChrome";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "Equestrian Centre & Showjumping Coaching Victoria",
  description: "Showjumping coaching, horse training, agistment, spelling and professional equestrian facilities near Seymour and Benalla, Victoria.",
  path: "/",
  keywords: ["equestrian centre Victoria", "showjumping coaching Victoria", "horse training Seymour", "horse agistment Seymour", "horse spelling Benalla", "Goodspell Park"],
});

const services = [
  {
    number: "01",
    title: "Training & agistment",
    href: "/services",
    copy: "Individual programs for showjumpers at every stage, supported by attentive daily care and experienced eyes.",
  },
  {
    number: "02",
    title: "Coaching & clinics",
    href: "/book-online",
    copy: "Private and group coaching for riders from novice through to Grand Prix, at Goodspell Park or on location.",
  },
  {
    number: "03",
    title: "Thoroughbred care",
    href: "/services",
    copy: "Considered pre-training, spelling and agistment programs built around each horse’s wellbeing and development.",
  },
  {
    number: "04",
    title: "Sales & consultancy",
    href: "/horsesforsale",
    copy: "Practical, trusted guidance for purchases, sales and consignments, grounded in decades of competition experience.",
  },
];

export default function Home() {
  return (
    <PageShell>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/hero.jpg"
          alt="Showjumper and rider clearing a fence at competition"
          width="2172"
          height="1448"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Whiteheads Creek · Victoria</p>
          <h1 id="hero-title">Experience<br />in every stride.</h1>
          <p className="hero-copy">Elite horsemanship. Individual care. A place where horses and riders are given every opportunity to thrive.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#services">Explore our services <span aria-hidden="true">→</span></a>
            <a className="text-link light-link" href="/about-us">Meet Jamie & Sue <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="hero-note" aria-label="Our focus">
          <span>01</span>
          <p>Showjumping<br />Training & care</p>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to our approach">Scroll <span aria-hidden="true">↓</span></a>
      </section>

      <section className="intro section" id="about" aria-labelledby="intro-title">
        <div className="section-kicker">
          <span>Our approach</span>
          <i />
        </div>
        <div className="intro-grid">
          <h2 id="intro-title">The measure of great horsemanship is not just performance. It’s the confidence built along the way.</h2>
          <div className="intro-copy">
            <p>Goodspell Park is the home of international showjumping riders Jamie and Sue Coman. From first rounds to World Cup level, their philosophy remains the same: understand the individual, build the partnership and never compromise on care.</p>
            <a className="text-link dark-link" href="/about-us">Our story <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="values" aria-label="Goodspell Park values">
          <span>Horsemanship</span><span>Performance</span><span>Care</span>
        </div>
      </section>

      <section className="services section" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 id="services-title">Purposeful programs.<br />Personal attention.</h2>
          </div>
          <p>Comprehensive services for competition horses, riders and thoroughbreds—delivered by a team that understands what progress takes.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href={service.href} aria-label={`Learn more about ${service.title}`}>Learn more <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy" id="team" aria-labelledby="legacy-title">
        <div className="legacy-image-wrap">
          <img src="/images/rider.jpg" alt="Horse and rider training at Goodspell Park" width="1180" height="500" loading="lazy" />
          <div className="legacy-badge"><strong>2000</strong><span>Australian Team<br />Sydney Olympics</span></div>
        </div>
        <div className="legacy-content">
          <p className="eyebrow light">Jamie & Sue Coman</p>
          <h2 id="legacy-title">Proven at the highest level. Grounded in the everyday.</h2>
          <p>Jamie and Sue have produced and competed showjumpers through to Grand Prix and World Cup level for many years. Jamie represented Australia at the Sydney 2000 Olympics and is an NCAS Level 3 Showjumping Coach. Together, they bring high-performance knowledge to every horse and rider in their care.</p>
          <div className="legacy-facts">
            <div><strong>24/7</strong><span>Care and supervision</span></div>
            <div><strong>Level 3</strong><span>NCAS coaching</span></div>
            <div><strong>All levels</strong><span>Novice to Grand Prix</span></div>
          </div>
        </div>
      </section>

      <section className="quote section" aria-label="Goodspell Park philosophy">
        <p className="eyebrow">The Goodspell standard</p>
        <blockquote>“Every horse deserves the time, care and clarity to become their best.”</blockquote>
        <p className="quote-note">A boutique Victorian property where experience, facilities and a deeply personal approach come together.</p>
      </section>

      <ContactBand title="Let’s talk about your next chapter." copy="For training, coaching, agistment, spelling or sales enquiries, speak with the Goodspell Park team." />
    </PageShell>
  );
}
