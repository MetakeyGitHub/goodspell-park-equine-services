import type { Metadata } from "next";

export const SITE_URL = "https://goodspell-park-equine-services.vercel.app";
export const SITE_NAME = "Goodspell Park Equine Services";
export const DEFAULT_OG_IMAGE = "/og.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export function pageMetadata({ title, description, path, keywords }: PageMetadataInput): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: `${title} | Goodspell Park`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_AU",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — horsemanship, performance and care` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Goodspell Park`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: "Goodspell Park",
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  logo: `${SITE_URL}/logo.jpg`,
  description: "Boutique equestrian centre offering showjumping coaching, horse training, agistment, spelling, pre-training and stable rental near Seymour, Victoria.",
  email: "scoman2@bigpond.com",
  telephone: "+61 427 019 610",
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+61 427 019 610", contactType: "customer enquiries", areaServed: "AU", availableLanguage: "English" },
    { "@type": "ContactPoint", telephone: "+61 412 019 611", contactType: "customer enquiries", areaServed: "AU", availableLanguage: "English" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "140 Hall Lane",
    addressLocality: "Whiteheads Creek",
    addressRegion: "VIC",
    postalCode: "3660",
    addressCountry: "AU",
  },
  areaServed: ["Whiteheads Creek", "Seymour", "Benalla", "Victoria", "Australia"],
  sameAs: ["https://www.facebook.com/Goodspellpark/"],
  founder: [
    { "@type": "Person", name: "Jamie Coman" },
    { "@type": "Person", name: "Sue Coman" },
  ],
  knowsAbout: [
    "Showjumping coaching",
    "Horse training",
    "Horse agistment",
    "Thoroughbred pre-training",
    "Equestrian clinics",
    "Horse sales consultancy",
  ],
};
