import type { Metadata } from "next";
import "./globals.css";
import { localBusinessJsonLd, SITE_NAME, SITE_URL } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://goodspell-park-equine-services.vercel.app"),
  title: {
    default: "Goodspell Park | Equine Services & Showjumping",
    template: "%s | Goodspell Park",
  },
  description: "Showjumping coaching, horse training, agistment, spelling and equestrian facilities near Seymour and Benalla, Victoria.",
  applicationName: SITE_NAME,
  authors: [{ name: "Goodspell Park Equine Services", url: SITE_URL }],
  creator: "Goodspell Park Equine Services",
  publisher: "Goodspell Park Equine Services",
  category: "Equestrian services",
  keywords: ["equestrian centre Victoria", "showjumping coaching Victoria", "horse training Seymour", "horse agistment Seymour", "horse spelling Victoria", "Goodspell Park", "Jamie Coman", "Sue Coman"],
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Goodspell Park Equine Services",
    description: "Experience in every stride. Elite horsemanship, individual care and proven performance.",
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Goodspell Park Equine Services" }],
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: "Showjumping coaching, horse training and attentive equine care near Seymour, Victoria.", images: ["/og.png"] },
  manifest: "/site.webmanifest",
  other: { "geo.region": "AU-VIC", "geo.placename": "Whiteheads Creek" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
