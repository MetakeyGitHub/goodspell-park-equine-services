import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Boutique showjumping, coaching, training, agistment and thoroughbred care in Whiteheads Creek, Victoria.",
};

const services = [
  {
    number: "01",
    title: "Training & agistment",
    copy: "Individual programs for showjumpers at every stage, supported by attentive daily care and experienced eyes.",
  },
  {
    number: "02",
    title: "Coaching & clinics",
    copy: "Private and group coaching for riders from novice through to Grand Prix, at Goodspell Park or on location.",
  },
  {
    number: "03",
    title: "Thoroughbred care",
    copy: "Considered pre-training, spelling and agistment programs built around each horse’s wellbeing and development.",
  },
  {
    number: "04",
    title: "Sales & consultancy",
    copy: "Practical, trusted guidance for purchases, sales and consignments, grounded in decades of competition experience.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Goodspell Park home">
          <span className="brand-mark">GP</span>
          <span>
            <strong>Goodspell Park</strong>
            <small>Equine Services</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">Our approach</a>
          <a href="#services">Services</a>
          <a href="#team">Jamie & Sue</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">Make an enquiry <span aria-hidden="true">↗</span></a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">Our approach</a>
            <a href="#services">Services</a>
            <a href="#team">Jamie & Sue</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

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
            <a className="text-link light-link" href="#team">Meet Jamie & Sue <span aria-hidden="true">↘</span></a>
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
            <a className="text-link dark-link" href="#team">Our story <span aria-hidden="true">→</span></a>
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
              <a href="#contact" aria-label={`Enquire about ${service.title}`}>Enquire <span aria-hidden="true">↗</span></a>
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

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <img src="/images/horse.jpg" alt="Horse at Goodspell Park" width="450" height="300" loading="lazy" />
        <div className="contact-overlay" />
        <div className="contact-content">
          <p className="eyebrow light">Start a conversation</p>
          <h2 id="contact-title">Let’s talk about<br />your next chapter.</h2>
          <p>For training, coaching, agistment, spelling or sales enquiries, speak with the Goodspell Park team.</p>
          <a className="button button-light" href="mailto:scoman2@bigpond.com">Make an enquiry <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark inverse">GP</span>
          <div><strong>Goodspell Park</strong><small>Equine Services</small></div>
        </div>
        <address>
          140 Hall Lane, Whiteheads Creek VIC 3660<br />
          <a href="mailto:scoman2@bigpond.com">scoman2@bigpond.com</a><br />
          <a href="tel:+61427019610">0427 019 610</a> · <a href="tel:+61412019611">0412 019 611</a>
        </address>
        <div className="footer-links">
          <a href="https://www.facebook.com/Goodspellpark/" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Goodspell Park Equine Services</p>
      </footer>
    </main>
  );
}
