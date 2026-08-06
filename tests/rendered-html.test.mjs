import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Goodspell Park homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Goodspell Park \| Equine Services &amp; Showjumping<\/title>/i);
  assert.match(html, /Experience.*in every stride\./s);
  assert.match(html, /Training &amp; agistment/);
  assert.match(html, /Sydney Olympics/);
  assert.match(html, /Make an enquiry/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("includes accessible navigation and sharing metadata", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /aria-label="Open navigation"/);
  assert.match(html, /property="og:image" content="https:\/\/goodspell-park-equine-services\.vercel\.app\/og\.png"/);
  assert.match(html, /lang="en"/);
});
