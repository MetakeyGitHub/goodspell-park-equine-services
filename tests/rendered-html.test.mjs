import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Goodspell Park homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Equestrian Centre &amp; Showjumping Coaching Victoria \| Goodspell Park<\/title>/i);
  assert.match(html, /Experience.*in every stride\./s);
  assert.match(html, /Training &amp; agistment/);
  assert.match(html, /Sydney Olympics/);
  assert.match(html, /Make an enquiry/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("renders every primary site route", async () => {
  const routes = {
    "/about-us": "Experience that shapes every partnership.",
    "/competitionhorses": "Horses with heart, scope and a future.",
    "/services": "One place. Every step forward.",
    "/facilities": "Built for horses. Ready for ambition.",
    "/stablerental": "Bring your operation somewhere built to perform.",
    "/stallions": "World-class bloodlines. Australian access.",
    "/gallery": "The work behind every moment.",
    "/news": "News from the team and the stable.",
    "/horsesforsale": "The right horse changes everything.",
    "/book-online": "One hour. One partnership. Clear next steps.",
    "/upcoming-events": "A better clinic starts with a clear purpose.",
    "/contact": "Tell us where you want to go next.",
  };
  for (const [pathname, heading] of Object.entries(routes)) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), pathname);
  }
});

test("includes accessible navigation and sharing metadata", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /aria-label="Open navigation"/);
  assert.match(html, /class="mobile-contact-link" href="\/contact"/);
  assert.match(html, /property="og:image" content="https:\/\/goodspell-park-equine-services\.vercel\.app\/og\.png"/);
  assert.match(html, /lang="en-AU"/);
  assert.match(html, /rel="canonical" href="https:\/\/goodspell-park-equine-services\.vercel\.app"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /SportsActivityLocation/);
  assert.match(html, /max-image-preview:large/);
});

test("gives every page distinct search and social metadata", async () => {
  const routes = ["/", "/about-us", "/competitionhorses", "/services", "/facilities", "/stablerental", "/stallions", "/gallery", "/news", "/horsesforsale", "/book-online", "/upcoming-events", "/contact"];
  const titles = new Set();
  const descriptions = new Set();

  for (const pathname of routes) {
    const html = await (await render(pathname)).text();
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(title, `missing title: ${pathname}`);
    assert.ok(description && description.length >= 70 && description.length <= 165, `invalid description: ${pathname}`);
    assert.match(html, new RegExp(`rel="canonical" href="https://goodspell-park-equine-services\\.vercel\\.app${pathname === "/" ? "" : pathname}"`));
    assert.match(html, /property="og:title"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    titles.add(title);
    descriptions.add(description);
  }

  assert.equal(titles.size, routes.length);
  assert.equal(descriptions.size, routes.length);
});
