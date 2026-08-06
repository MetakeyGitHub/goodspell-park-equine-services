import type { Metadata } from "next";
import { ContactBand, InnerHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Horses For Sale", description: "Horse sales and purchase consultancy from Goodspell Park." };
export default function HorsesForSalePage() { return <PageShell>
  <InnerHero eyebrow="Find the right partnership" title="The right horse changes everything." copy="Sales, consignment and independent purchase guidance from horsepeople who understand performance and fit." image="/images/pages/jb-vivid.jpg" imageAlt="Competition horse at Goodspell Park" />
  <section className="empty-listing" id="content"><p className="eyebrow">Current listings</p><span className="empty-index">00</span><h2>No horses are currently listed.</h2><p>The source site has no active public listings at this time. Contact Jamie and Sue to discuss horses in work, upcoming opportunities or help finding the right partner.</p><div><a className="button button-dark" href="mailto:scoman2@bigpond.com?subject=Horse sales enquiry">Make a sales enquiry ↗</a><a className="text-link dark-link" href="/competitionhorses">View competition horses →</a></div></section>
  <ContactBand title="Tell us what you’re looking for." copy="Share your goals, level, budget and ideal type so the conversation can start in the right place." />
  </PageShell>; }
