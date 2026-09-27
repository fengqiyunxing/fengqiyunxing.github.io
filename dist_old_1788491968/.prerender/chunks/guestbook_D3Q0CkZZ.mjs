import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import { n as getEntry, r as renderEntry } from "./_astro_content_jT1wG5gk.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey } from "./url-utils_Cr7cEKDY.mjs";
import { t as commentConfig } from "./commentConfig_DQHjcw7q.mjs";
import { t as $$Markdown } from "./Markdown_CVggKuht.mjs";
import { t as $$Index } from "./comment_CqO4CP1n.mjs";
//#region src/pages/guestbook.astro
var guestbook_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Guestbook,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$Guestbook = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Guestbook;
	if (!siteConfig.pages.guestbook) return Astro.redirect("/404/");
	const guestbookPost = await getEntry("spec", "guestbook");
	if (!guestbookPost) throw new Error("guestbook page content not found");
	const { Content } = await renderEntry(guestbookPost);
	const isCommentEnabled = commentConfig?.type && commentConfig.type !== "none";
	const title = i18n(I18nKey.guestbook);
	const description = i18n(I18nKey.guestbookDescription);
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": title,
		"description": description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"><div class="card-base z-10 px-9 py-6 relative w-full"><!-- 页面标题和描述 --><div class="mb-8"><div class="flex items-center gap-3 mb-3"><div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chat",
		"class": "text-[1.5rem]"
	})}</div><div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">${title}</div></div>${description && renderTemplate`<p class="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">${description}</p>`}</div>${renderComponent($$result, "Markdown", $$Markdown, { "class": "mt-2" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}</div></div><div class="mt-4">${isCommentEnabled ? renderTemplate`${renderComponent($$result, "Comment", $$Index, {
		"post": guestbookPost,
		"customPath": "/guestbook/"
	})}` : renderTemplate`<div class="card-base p-8 mb-6 relative overflow-hidden"><div class="text-center py-8 text-(--content-meta)"><div class="w-16 h-16 mx-auto mb-4 rounded-full bg-(--btn-regular-bg) flex items-center justify-center"><svg class="w-8 h-8 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><p class="text-base mb-2">${i18n(I18nKey.commentNotConfigured)}</p><p class="text-sm text-(--content-meta) opacity-75">${i18n(I18nKey.guestbookCommentHint)}</p></div></div>`}</div>` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/guestbook.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/guestbook.astro";
var $$url = "/guestbook/";
//#endregion
//#region \0virtual:astro:page:src/pages/guestbook@_@astro
var page = () => guestbook_exports;
//#endregion
export { page };
