import * as $ from "svelte/internal/server";
//#region src/utils/nsfw-utils.ts
var NSFW_KEYWORDS = [
	"Hentai",
	"Ecchi",
	"えっち",
	"エッチ",
	"NSFW",
	"R18",
	"R-18",
	"18禁",
	"黄油",
	"卖肉",
	"成人",
	"成人向け",
	"エロ"
];
function isVndbNsfw(item) {
	const img = item.vn?.image;
	return (img?.sexual ?? 0) > 1 || (img?.violence ?? 0) > 1 || (item.vn?.tags ?? []).some((t) => NSFW_KEYWORDS.includes(t.name));
}
function isMalNsfw(item) {
	return (item.node?.genres ?? []).some((g) => NSFW_KEYWORDS.includes(g.name));
}
function isBangumiNsfw(item) {
	if (item.subject?.nsfw === true) return true;
	return [...item.tags ?? [], ...(item.subject?.tags ?? []).map((t) => t.name)].some((n) => NSFW_KEYWORDS.includes(n));
}
function filterNsfw(items, mode, isNsfw) {
	return mode === "hide" ? items.filter((x) => !isNsfw(x)) : items;
}
//#endregion
//#region src/components/common/FilterControls.svelte
function FilterControls($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { filters, activeFilter, onFilterChange } = $$props;
		$$renderer.push(`<div class="flex flex-wrap gap-1.5 mb-4"><!--[-->`);
		const each_array = $.ensure_array_like(filters);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let filter = each_array[$$index];
			$$renderer.push(`<button${$.attr_class(`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${filter.value === activeFilter ? "bg-(--primary) text-white shadow-md" : "bg-(--btn-regular-bg) text-(--btn-content) hover:bg-(--btn-regular-bg-hover)"}`)} type="button">${$.escape(filter.label)} `);
			if (filter.count !== void 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="ml-1">(${$.escape(filter.count)})</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></button>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { isVndbNsfw as a, isMalNsfw as i, filterNsfw as n, isBangumiNsfw as r, FilterControls as t };
