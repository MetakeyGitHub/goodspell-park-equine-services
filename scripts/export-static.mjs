import { mkdir, writeFile } from "node:fs/promises";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const routes = [
  "/", "/about-us", "/competitionhorses", "/services", "/facilities",
  "/stablerental", "/stallions", "/gallery", "/news", "/horsesforsale",
  "/book-online", "/upcoming-events",
  "/contact",
];

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://goodspell-park-equine-services.vercel.app${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`Static export failed for ${route} with status ${response.status}`);
  const output = route === "/" ? new URL("../dist/client/index.html", import.meta.url) : new URL(`../dist/client${route}/index.html`, import.meta.url);
  if (route !== "/") await mkdir(new URL(`../dist/client${route}/`, import.meta.url), { recursive: true });
  await writeFile(output, await response.text());
}
