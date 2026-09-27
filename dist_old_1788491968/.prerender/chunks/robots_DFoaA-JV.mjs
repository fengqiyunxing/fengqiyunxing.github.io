import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
//#region src/pages/robots.txt.ts
var robots_txt_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var robotsTxt = `
User-agent: *
Disallow: /_astro/

Sitemap: ${new URL("sitemap-index.xml", "https://fengqiyunxing.github.io").href}
`.trim();
var GET = () => {
	return new Response(robotsTxt, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
//#endregion
//#region \0virtual:astro:page:src/pages/robots.txt@_@ts
var page = () => robots_txt_exports;
//#endregion
export { page };
