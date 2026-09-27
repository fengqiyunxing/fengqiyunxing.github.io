import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { a as getSortedPosts } from "./content-utils_CacKqhZP.mjs";
//#region src/pages/api/allPostMeta.json.ts
var allPostMeta_json_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
async function GET() {
	const allPostsData = (await getSortedPosts()).map((post) => ({
		id: post.id,
		title: post.data.title,
		description: post.data.description,
		published: post.data.published.getTime(),
		category: post.data.category || "",
		password: !!post.data.password
	})).sort((a, b) => b.published - a.published);
	return new Response(JSON.stringify(allPostsData));
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/allPostMeta.json@_@ts
var page = () => allPostMeta_json_exports;
//#endregion
export { page };
