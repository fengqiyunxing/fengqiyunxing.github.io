import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { t as getCollection } from "./_astro_content_jT1wG5gk.mjs";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
//#region src/utils/dynamic-utils.ts
var sortDynamics = (entries) => entries.sort((a, b) => {
	if (a.data.pinned && !b.data.pinned) return -1;
	if (!a.data.pinned && b.data.pinned) return 1;
	return b.data.published.getTime() - a.data.published.getTime();
});
var dynamicSlug = (id) => id.replace(/\.(md|mdx)$/i, "");
var dynamicPlainText = (entry) => (entry.body || "").replace(/!\[[^\]]*\]\([^)]+\)/g, " ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/<[^>]+>/g, " ").replace(/[#>*_`~[\]()-]/g, " ").replace(/\s+/g, " ").trim();
var dynamicSearchText = (entry) => [dynamicPlainText(entry), entry.data.location].filter(Boolean).join(" ").toLocaleLowerCase();
//#endregion
//#region src/pages/api/dynamic.json.ts
var dynamic_json_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var markdownImagePattern = /!\[([^\]]*)\]\((\S+?)(?:\s+["']([^"']*)["'])?\)/g;
async function GET() {
	const processor = await createMarkdownProcessor();
	const dynamics = sortDynamics(await getCollection("dynamic"));
	const data = await Promise.all(dynamics.map(async (entry) => {
		const images = [];
		const markdown = (entry.body || "").replace(markdownImagePattern, (_match, alt, src, title) => {
			images.push({
				alt,
				src,
				...title ? { title } : {}
			});
			return "";
		});
		const rendered = await processor.render(markdown);
		return {
			id: dynamicSlug(entry.id),
			published: entry.data.published.getTime(),
			html: rendered.code,
			images,
			searchText: dynamicSearchText(entry),
			pinned: entry.data.pinned || false,
			location: entry.data.location.trim()
		};
	}));
	return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json; charset=utf-8" } });
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/dynamic.json@_@ts
var page = () => dynamic_json_exports;
//#endregion
export { page };
