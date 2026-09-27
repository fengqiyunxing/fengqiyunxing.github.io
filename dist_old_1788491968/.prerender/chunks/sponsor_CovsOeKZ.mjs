import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, r as getLqipProps, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey, s as url } from "./url-utils_Cr7cEKDY.mjs";
import { t as commentConfig } from "./commentConfig_DQHjcw7q.mjs";
import { t as sponsorConfig } from "./sponsorConfig_DdggGDQo.mjs";
import { t as $$Index } from "./comment_CqO4CP1n.mjs";
//#region src/pages/sponsor.astro
var sponsor_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Sponsor,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$Sponsor = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Sponsor;
	if (!siteConfig.pages.sponsor) return Astro.redirect("/404/");
	const isCommentEnabled = commentConfig?.type && commentConfig.type !== "none" && sponsorConfig.showComment !== false;
	const title = sponsorConfig.title || i18n(I18nKey.sponsorTitle);
	const description = sponsorConfig.description || i18n(I18nKey.sponsorDescription);
	const enabledMethods = sponsorConfig.methods.filter((method) => method.enabled);
	const sponsors = sponsorConfig.sponsors || [];
	const showSponsorsList = sponsorConfig.showSponsorsList !== false;
	function getQrLqipProps(qrCode) {
		return getLqipProps(qrCode, void 0, true);
	}
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": title,
		"description": description,
		"data-astro-cid-pzrnbdge": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32" data-astro-cid-pzrnbdge><div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-pzrnbdge><!-- 页面标题和描述 --><div class="mb-8" data-astro-cid-pzrnbdge><div class="flex items-center gap-3 mb-3" data-astro-cid-pzrnbdge><div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70" data-astro-cid-pzrnbdge>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:favorite",
		"class": "text-[1.5rem]",
		"data-astro-cid-pzrnbdge": true
	})}</div><div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100" data-astro-cid-pzrnbdge>${title}</div></div>${description && renderTemplate`<p class="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4" data-astro-cid-pzrnbdge>${description}</p>`}${sponsorConfig.usage && renderTemplate`<div class="mb-8 p-4 rounded-lg bg-(--primary)/8 dark:bg-(--btn-regular-bg) border border-(--primary)/30 dark:border-none backdrop-blur-xs shadow-xs usage-info-box" data-astro-cid-pzrnbdge><div class="flex items-start gap-2" data-astro-cid-pzrnbdge>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:info-outline",
		"class": "text-(--primary) text-lg shrink-0 mt-0.5",
		"data-astro-cid-pzrnbdge": true
	})}<p class="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed" data-astro-cid-pzrnbdge><span class="font-semibold text-(--primary)" data-astro-cid-pzrnbdge></span>${sponsorConfig.usage}</p></div></div>`}</div><!-- 打赏方式 --><div class="mb-8" data-astro-cid-pzrnbdge><div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-astro-cid-pzrnbdge>${enabledMethods.map((method) => renderTemplate`<div class="flex flex-col items-center card-base p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-(--primary) transition-colors" data-astro-cid-pzrnbdge><!-- 图标和名称 --><div class="flex items-center gap-3 mb-4" data-astro-cid-pzrnbdge>${method.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": method.icon,
		"class": "text-2xl text-neutral-900 dark:text-neutral-100 transition-colors",
		"data-astro-cid-pzrnbdge": true
	})}`}<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100" data-astro-cid-pzrnbdge>${method.name}</h3></div><!-- 描述 -->${method.description && renderTemplate`<p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4 text-center" data-astro-cid-pzrnbdge>${method.description}</p>`}<!-- 二维码或链接 -->${method.qrCode && renderTemplate`<div class="relative w-full max-w-[200px] aspect-square bg-white rounded-lg p-4 shadow-md mb-4 overflow-hidden" data-astro-cid-pzrnbdge><div class="lqip-placeholder absolute inset-0 rounded-lg pointer-events-none"${addAttribute(getQrLqipProps(method.qrCode).style, "style")} aria-hidden="true" data-astro-cid-pzrnbdge></div><img${addAttribute(url(method.qrCode), "src")}${addAttribute(`${method.name} ${i18n(I18nKey.scanToSponsor)}`, "alt")} class="relative w-full h-full object-contain opacity-0 transition-opacity duration-500 ease-out" loading="lazy" data-astro-cid-pzrnbdge></div>`}${method.link && renderTemplate`<a${addAttribute(method.link, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-(--primary) text-white dark:text-black/70 rounded-lg font-medium hover:bg-(--primary)/90 active:scale-95 transition-all" data-astro-cid-pzrnbdge><span data-astro-cid-pzrnbdge>${i18n(I18nKey.sponsorGoTo)}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "fa7-solid:arrow-up-right-from-square",
		"class": "text-sm",
		"data-astro-cid-pzrnbdge": true
	})}</a>`}</div>`)}</div></div></div></div>${showSponsorsList && renderTemplate`<div class="flex w-full rounded-(--radius-large) overflow-hidden relative mt-4" data-astro-cid-pzrnbdge><div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-pzrnbdge><div class="flex items-center justify-between mb-6" data-astro-cid-pzrnbdge><div class="flex items-center gap-3" data-astro-cid-pzrnbdge><div class="h-8 w-8 rounded-lg bg-(--primary)/10 flex items-center justify-center" data-astro-cid-pzrnbdge>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:emoji-people-rounded",
		"class": "text-[1.25rem] text-(--primary)",
		"data-astro-cid-pzrnbdge": true
	})}</div><h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100" data-astro-cid-pzrnbdge>${i18n(I18nKey.sponsorList)}</h2></div>${sponsors.length > 0 && renderTemplate`<span class="text-xs text-neutral-400 dark:text-neutral-500" data-astro-cid-pzrnbdge>${sponsors.length}</span>`}</div>${sponsors.length > 0 ? renderTemplate`<div class="sponsor-grid" data-astro-cid-pzrnbdge>${sponsors.map((sponsor) => renderTemplate`<div class="group flex items-center gap-3 p-3 rounded-xl border border-(--line-divider) hover:border-(--primary) transition-all duration-200" data-astro-cid-pzrnbdge><!-- 新的头像逻辑：有头像用图片，没有用首字母 -->${sponsor.avatar ? renderTemplate`<img${addAttribute(url(sponsor.avatar), "src")}${addAttribute(sponsor.name, "alt")} class="w-9 h-9 rounded-full object-cover shrink-0" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" data-astro-cid-pzrnbdge>` : null}<!-- 首字母头像（作为兜底，图片加载失败也会显示这个） --><div${addAttribute(`w-9 h-9 rounded-full bg-(--primary)/10 flex items-center justify-center shrink-0 group-hover:bg-(--primary)/20 transition-colors ${sponsor.avatar ? "hidden" : ""}`, "class")} data-astro-cid-pzrnbdge><span class="text-sm font-bold text-(--primary)" data-astro-cid-pzrnbdge>${sponsor.name.charAt(0)}</span></div><div class="flex-1 min-w-0" data-astro-cid-pzrnbdge><div class="flex items-center gap-2" data-astro-cid-pzrnbdge><span class="font-semibold text-sm text-neutral-900 dark:text-neutral-100 truncate" data-astro-cid-pzrnbdge>${sponsor.name}</span>${sponsor.amount && renderTemplate`<span class="shrink-0 text-xs font-bold text-(--primary)" data-astro-cid-pzrnbdge>${sponsor.amount}</span>`}</div>${sponsor.date && renderTemplate`<span class="text-[0.65rem] text-neutral-400 dark:text-neutral-500" data-astro-cid-pzrnbdge>${new Date(sponsor.date).toLocaleDateString()}</span>`}</div></div>`)}</div>` : renderTemplate`<div class="text-center py-12 text-neutral-500 dark:text-neutral-500" data-astro-cid-pzrnbdge><p data-astro-cid-pzrnbdge>${i18n(I18nKey.sponsorEmpty)}</p></div>`}</div></div>`}${isCommentEnabled && renderTemplate`<div class="mt-4" data-astro-cid-pzrnbdge>${renderComponent($$result, "Comment", $$Index, {
		"customPath": "/sponsor/",
		"title": "sponsor",
		"data-astro-cid-pzrnbdge": true
	})}</div>`}` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/sponsor.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/sponsor.astro";
var $$url = "/sponsor/";
//#endregion
//#region \0virtual:astro:page:src/pages/sponsor@_@astro
var page = () => sponsor_exports;
//#endregion
export { page };
