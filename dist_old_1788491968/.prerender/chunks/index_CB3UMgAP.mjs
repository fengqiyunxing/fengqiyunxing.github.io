import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { S as maybeRenderHead, f as renderComponent, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { a as getTagUrl, c as i18n, p as I18nKey } from "./url-utils_Cr7cEKDY.mjs";
import { s as getTagList } from "./content-utils_CacKqhZP.mjs";
//#region src/pages/tags/index.astro
var tags_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const tags = await getTagList();
	const topTags = [...tags].sort((a, b) => b.count - a.count).slice(0, 10);
	const topMaxCount = topTags.length > 0 ? topTags[0].count : 1;
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": i18n(I18nKey.tags),
		"description": i18n(I18nKey.allTags)
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="card-base px-8 py-6 mb-4"><div class="text-2xl font-bold text-(--primary) mb-2">${i18n(I18nKey.tags)}</div><p class="text-30 text-sm">${i18n(I18nKey.allTags)} · ${tags.length} ${i18n(I18nKey.tagsCount)}</p></div><div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"><div class="card-base z-10 px-9 py-6 relative w-full"><div class="flex flex-wrap gap-2.5">${tags.map((t) => renderTemplate`<a${addAttribute(getTagUrl(t.name), "href")} class="tag-item group inline-flex items-center gap-1.5
                              text-sm font-medium px-3 py-1.5 transition-all duration-200"><span>${t.name.trim()}</span><span class="tag-count-badge text-xs font-bold px-1.5
                                     min-w-[1.5rem] text-center">${t.count}</span></a>`)}</div></div></div>${tags.length === 0 && renderTemplate`<div class="card-base px-8 py-12 text-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:tag-rounded",
		"class": "text-5xl text-30 mx-auto mb-4"
	})}<p class="text-30">${i18n(I18nKey.noData)}</p></div>`}${topTags.length > 0 && renderTemplate`<div class="card-base px-8 py-6 mt-4"><h2 class="text-lg font-bold text-75 mb-4">Top 10</h2><div class="flex flex-col gap-3">${topTags.map((t, i) => renderTemplate`<a${addAttribute(getTagUrl(t.name), "href")} class="flex items-center gap-3 group hover:bg-(--btn-card-bg-hover) rounded-lg px-3 py-2 -mx-3 transition-colors"><span class="text-sm font-bold text-(--primary) w-5 text-right shrink-0">${i + 1}</span><div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-1"><span class="text-sm font-medium text-50 truncate group-hover:text-(--primary) transition-colors">#${t.name.trim()}</span><span class="text-xs text-(--primary) ml-2 shrink-0">${t.count} ${i18n(I18nKey.postsCount)}</span></div><div class="h-2 rounded-full bg-(--primary)/10 overflow-hidden"><div class="h-full rounded-full bg-(--primary) transition-all duration-500"${addAttribute(`width: ${t.count / topMaxCount * 100}%`, "style")}></div></div></div></a>`)}</div></div>`}` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/tags/index.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/tags/index.astro";
var $$url = "/tags/";
//#endregion
//#region \0virtual:astro:page:src/pages/tags/index@_@astro
var page = () => tags_exports;
//#endregion
export { page };
