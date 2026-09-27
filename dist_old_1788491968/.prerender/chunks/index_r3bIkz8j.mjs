import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { S as maybeRenderHead, f as renderComponent, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, p as I18nKey, r as getPostUrlBySlug } from "./url-utils_Cr7cEKDY.mjs";
import { r as getSeriesList } from "./content-utils_CacKqhZP.mjs";
//#region src/pages/series/index.astro
var series_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const seriesList = await getSeriesList();
	const totalPosts = seriesList.reduce((sum, series) => sum + series.count, 0);
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": i18n(I18nKey.series),
		"description": i18n(I18nKey.allSeries),
		"data-astro-cid-patfotal": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="card-base px-8 py-6 mb-4" data-astro-cid-patfotal><div class="text-2xl font-bold text-(--primary) mb-2" data-astro-cid-patfotal>${i18n(I18nKey.series)}</div><p class="text-30 text-sm" data-astro-cid-patfotal>${i18n(I18nKey.allSeries)} · ${totalPosts} ${i18n(I18nKey.postsCount)}</p></div>${seriesList.length > 0 ? renderTemplate`<div class="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] items-start gap-4 mb-4" data-astro-cid-patfotal>${seriesList.map((series) => renderTemplate`<div class="series-acc card-base overflow-hidden" data-astro-cid-patfotal><button type="button" aria-expanded="false" class="series-acc-header group flex w-full items-center gap-3 p-5 md:p-6 pb-3 cursor-pointer select-none text-left transition" data-astro-cid-patfotal><span class="shrink-0 w-12 h-12 rounded-full bg-(--primary)/10 group-hover:bg-(--primary)/20 flex items-center justify-center transition-colors" data-astro-cid-patfotal>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:layers",
		"aria-hidden": "true",
		"class": "text-2xl text-(--primary)",
		"data-astro-cid-patfotal": true
	})}</span><span class="flex-1 min-w-0" data-astro-cid-patfotal><span class="block text-lg font-bold text-90 truncate group-hover:text-(--primary) transition" data-astro-cid-patfotal>${series.name}</span><span class="block text-sm text-30 mt-0.5 transition group-hover:text-(--primary)/60" data-astro-cid-patfotal>${series.count} ${i18n(I18nKey.postsCount)}</span></span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:keyboard-arrow-down-rounded",
		"aria-hidden": "true",
		"class": "acc-arrow shrink-0 text-[1.25rem] text-30 group-hover:text-(--primary) transition-transform duration-300",
		"data-astro-cid-patfotal": true
	})}</button><div class="series-acc-content overflow-hidden max-h-0 transition-[max-height,opacity] duration-300 ease-in-out" data-astro-cid-patfotal><ol class="flex flex-col px-5 md:px-6 pb-4" data-astro-cid-patfotal>${series.posts.map((post, idx) => renderTemplate`<li data-astro-cid-patfotal><a${addAttribute(getPostUrlBySlug(post.id), "href")}${addAttribute([
		"group flex items-center gap-3 px-3 py-3 -mx-1 rounded-lg transition-all",
		"hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]",
		idx < series.posts.length - 1 && "border-b border-dashed border-(--line-divider)"
	], "class:list")} data-astro-cid-patfotal><span class="shrink-0 w-6 h-6 rounded-md bg-(--enter-btn-bg) text-(--primary) flex items-center justify-center text-sm font-bold transition" data-astro-cid-patfotal>${idx + 1}</span><span class="flex-1 min-w-0 font-bold text-sm text-black/75 dark:text-white/75 truncate transition group-hover:text-(--primary)" data-astro-cid-patfotal>${post.data.title}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chevron-right-rounded",
		"aria-hidden": "true",
		"class": "shrink-0 text-xl text-black/15 dark:text-white/15 transition group-hover:text-(--primary) group-hover:translate-x-0.5",
		"data-astro-cid-patfotal": true
	})}</a></li>`)}</ol></div></div>`)}</div>` : renderTemplate`<div class="card-base px-8 py-12 text-center" data-astro-cid-patfotal>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:layers",
		"class": "text-5xl text-30 mx-auto mb-4",
		"data-astro-cid-patfotal": true
	})}<p class="text-30" data-astro-cid-patfotal>${i18n(I18nKey.noSeries)}</p></div>`}<script>
        function onSeriesAccordion(e) {
            var btn = e.target && e.target.closest ? e.target.closest('.series-acc-header') : null;
            if (!btn) return;
            var card = btn.closest('.series-acc');
            var content = card ? card.querySelector('.series-acc-content') : null;
            if (!content) return;

            var isOpen = btn.getAttribute('aria-expanded') === 'true';

            // 手风琴：关闭其它已展开的系列
            var others = document.querySelectorAll('.series-acc-header[aria-expanded="true"]');
            for (var i = 0; i < others.length; i++) {
                var o = others[i];
                if (o === btn) continue;
                o.setAttribute('aria-expanded', 'false');
                var oc = o.closest('.series-acc');
                var ocC = oc ? oc.querySelector('.series-acc-content') : null;
                if (ocC) {
                    ocC.setAttribute('data-open', 'false');
                    ocC.style.maxHeight = '0px';
                }
            }

            var next = !isOpen;
            btn.setAttribute('aria-expanded', String(next));
            content.setAttribute('data-open', String(next));
            content.style.maxHeight = next ? content.scrollHeight + 'px' : '0px';
        }

        // 事件委托，Swup 切页后新内容也能工作；避免重复注册（@swup/scripts-plugin 会重跑内联脚本）
        if (!window.__seriesAccordionInit) {
            window.__seriesAccordionInit = true;
            document.addEventListener('click', onSeriesAccordion);
        }
    <\/script>` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/series/index.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/series/index.astro";
var $$url = "/series/";
//#endregion
//#region \0virtual:astro:page:src/pages/series/index@_@astro
var page = () => series_exports;
//#endregion
export { page };
