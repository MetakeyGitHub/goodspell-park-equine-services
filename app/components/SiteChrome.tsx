const exploreLinks = [
  ["Stable rental", "/stablerental"],
  ["Stallions", "/stallions"],
  ["Gallery", "/gallery"],
  ["News", "/news"],
  ["Horses for sale", "/horsesforsale"],
  ["Book online", "/book-online"],
  ["Request a clinic", "/upcoming-events"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Goodspell Park home">
        <span className="brand-mark">GP</span>
        <span><strong>Goodspell Park</strong><small>Equine Services</small></span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/about-us">About</a>
        <a href="/services">Services</a>
        <a href="/competitionhorses">Horses</a>
        <a href="/facilities">Facilities</a>
        <details className="desktop-more">
          <summary>Explore <span aria-hidden="true">＋</span></summary>
          <div className="desktop-more-menu">
            {exploreLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </div>
        </details>
      </nav>

      <a className="header-cta" href="mailto:scoman2@bigpond.com">Make an enquiry <span aria-hidden="true">↗</span></a>

      <details className="mobile-nav">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          <a href="/about-us">About</a>
          <a href="/services">Services</a>
          <a href="/competitionhorses">Competition horses</a>
          <a href="/facilities">Facilities</a>
          {exploreLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
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
        <a href="/book-online">Book a lesson</a>
        <a href="#top">Back to top ↑</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Goodspell Park Equine Services</p>
    </footer>
  );
}

type InnerHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  position?: string;
};

export function InnerHero({ eyebrow, title, copy, image, imageAlt, position }: InnerHeroProps) {
  return (
    <section className="inner-hero" id="top">
      <img src={image} alt={imageAlt} width="1800" height="1200" fetchPriority="high" style={position ? { objectPosition: position } : undefined} />
      <div className="inner-hero-overlay" />
      <div className="inner-hero-content">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      <a className="scroll-cue" href="#content" aria-label="Continue to page content">Discover <span aria-hidden="true">↓</span></a>
    </section>
  );
}

export function ContactBand({
  title = "Let’s talk about your horse.",
  copy = "Tell us where you are now, where you would like to go, and how we can help.",
}: { title?: string; copy?: string }) {
  return (
    <section className="page-contact">
      <p className="eyebrow light">Start a conversation</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <a className="button button-light" href="mailto:scoman2@bigpond.com">Make an enquiry <span aria-hidden="true">↗</span></a>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main><SiteHeader />{children}<SiteFooter /></main>;
}
