import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { S as maybeRenderHead, T as defineScriptVars, f as renderComponent, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { t as $$MainGridLayout, u as Icon } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, p as I18nKey, s as url } from "./url-utils_Cr7cEKDY.mjs";
import { onMount } from "svelte";
import * as $ from "svelte/internal/server";
//#region src/components/pages/AdvancedSearch.svelte
function AdvancedSearch($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let title = $.fallback($$props["title"], () => i18n(I18nKey.search), true);
		let description = $.fallback($$props["description"], "");
		let keyword = "";
		let results = [];
		let isSearching = false;
		let initialized = false;
		const getInitialKeyword = () => {
			if (typeof window !== "undefined") return new URLSearchParams(window.location.search).get("q") || "";
			return "";
		};
		url("/"), url("/");
		const search = async () => {
			if (!initialized || !keyword.trim()) {
				results = [];
				return;
			}
			isSearching = true;
			try {
				if (window.pagefind) {
					const response = await window.pagefind.search(keyword);
					results = await Promise.all(response.results.map((item) => item.data()));
				}
			} catch (error) {
				console.error("Search error:", error);
				results = [];
			} finally {
				isSearching = false;
			}
		};
		onMount(() => {
			const initialize = async () => {
				initialized = true;
				const initialKeyword = getInitialKeyword();
				if (initialKeyword) keyword = initialKeyword;
				if (keyword.trim()) await search();
			};
			window.__loadPagefind?.();
			if (window.pagefind) initialize();
			else document.addEventListener("pagefindready", initialize, { once: true });
		});
		$$renderer2.push(`<div class="card-base px-6 py-6 md:px-9 md:py-6 mb-4 rounded-(--radius-large)"><div class="mb-4"><div class="flex items-center gap-3 mb-3"><div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70">`);
		Icon($$renderer2, {
			icon: "material-symbols:search",
			class: "text-[1.5rem]"
		});
		$$renderer2.push(`<!----></div> <div class="text-3xl font-bold text-90">${$.escape(title)}</div></div> `);
		if (description) {
			$$renderer2.push("<!--[0-->");
			$$renderer2.push(`<p class="text-base text-50 leading-relaxed">${$.escape(description)}</p>`);
		} else $$renderer2.push("<!--[-1-->");
		$$renderer2.push(`<!--]--></div> <div class="relative flex"><div class="relative flex-1"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">`);
		Icon($$renderer2, {
			icon: "material-symbols:search",
			class: "text-2xl text-50"
		});
		$$renderer2.push(`<!----></div> <input type="text" class="block w-full p-4 pl-10 text-sm bg-transparent border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-(--primary) hover:border-black/20 dark:hover:border-white/20 text-75 placeholder:opacity-50 transition-colors outline-hidden"${$.attr("placeholder", i18n(I18nKey.search))}${$.attr("value", keyword)}/></div></div></div> <div class="grid grid-cols-1 gap-4"><div>`);
		if (isSearching) {
			$$renderer2.push("<!--[0-->");
			$$renderer2.push(`<div class="flex justify-center py-10">`);
			Icon($$renderer2, {
				icon: "svg-spinners:ring-resize",
				class: "text-4xl text-(--primary)"
			});
			$$renderer2.push(`<!----></div>`);
		} else if (results.length > 0) {
			$$renderer2.push("<!--[1-->");
			$$renderer2.push(`<div class="space-y-4"><!--[-->`);
			const each_array = $.ensure_array_like(results);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let result = each_array[$$index];
				$$renderer2.push(`<div class="card-base p-6 block rounded-(--radius-large)"><a${$.attr("href", result.url)} class="block group"><h5 class="mb-2 text-2xl font-bold tracking-tight text-90 group-hover:text-(--primary) transition-colors">${$.html(result.meta.title)}</h5> <p class="font-normal text-75">${$.html(result.excerpt)}</p></a></div>`);
			}
			$$renderer2.push(`<!--]--></div>`);
		} else if (keyword) {
			$$renderer2.push("<!--[2-->");
			$$renderer2.push(`<div class="card-base p-10 text-center text-50 rounded-(--radius-large)">${$.escape(i18n(I18nKey.searchNoResults))}</div>`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<div class="card-base p-10 text-center text-50 rounded-(--radius-large)">${$.escape(i18n(I18nKey.searchTypeSomething))}</div>`);
		}
		$$renderer2.push(`<!--]--></div></div>`);
		$.bind_props($$props, {
			title,
			description
		});
	});
}
//#endregion
//#region src/pages/search.astro
var search_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Search,
	file: () => $$file,
	url: () => $$url
});
var $$Search = createComponent(($$result, $$props, $$slots) => {
	const title = i18n(I18nKey.search);
	const description = "";
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": title,
		"description": description
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="min-h-[80vh]">${renderComponent($$result2, "AdvancedSearch", AdvancedSearch, {
		"client:load": true,
		"title": title,
		"description": description,
		"client:component-hydration": "load",
		"client:component-path": "@components/pages/AdvancedSearch.svelte",
		"client:component-export": "default"
	})}</div>` })}${renderTemplate`<script>(function(){${defineScriptVars({ scriptUrl: url("/pagefind/pagefind.js") })}
    if (!window.pagefind) {
        async function loadPagefind() {
            const url = scriptUrl.replace(/\\/$/, "")
            try {
                const response = await fetch(url, { method: 'HEAD' });
                if (response.status !== 200) {
                    return;
                }
                const pagefind = await import(scriptUrl);
                await pagefind.options({
                    "excerptLength": 20
                });
                window.pagefind = pagefind;
                window.dispatchEvent(new Event('pagefindready'));
            } catch (error) {
                console.warn("Pagefind script not found or failed to load.");
                window.dispatchEvent(new Event('pagefindloaderror'));
            }
        }
        loadPagefind();
    }
})();<\/script>`}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/search.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/search.astro";
var $$url = "/search/";
//#endregion
//#region \0virtual:astro:page:src/pages/search@_@astro
var page = () => search_exports;
//#endregion
export { page };
