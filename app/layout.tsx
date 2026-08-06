import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://goodspell-park-equine-services.vercel.app"),
  title: {
    default: "Goodspell Park | Equine Services & Showjumping",
    template: "%s | Goodspell Park",
  },
  description: "Boutique equestrian training, coaching and horse care in Whiteheads Creek, Victoria.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Goodspell Park Equine Services",
    description: "Experience in every stride. Elite horsemanship, individual care and proven performance.",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Goodspell Park Equine Services" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
