import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { M as unescapeHTML, P as createAstro, S as maybeRenderHead, f as renderComponent, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import { i as buildProfilePage, s as getAuthorAvatarUrl } from "./Layout_CfOzU-i2.mjs";
import { n as getEntry, r as renderEntry } from "./_astro_content_jT1wG5gk.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey } from "./url-utils_Cr7cEKDY.mjs";
import { t as profileConfig } from "./profileConfig_DSpSrIO7.mjs";
import { t as $$Markdown } from "./Markdown_CVggKuht.mjs";
//#region src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$About = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$About;
	const aboutPost = await getEntry("spec", "about");
	if (!aboutPost) throw new Error("About page content not found");
	const { Content } = await renderEntry(aboutPost);
	const avatarUrl = await getAuthorAvatarUrl();
	const jsonLd = buildProfilePage({
		site: siteConfig.site_url,
		profileConfig,
		authorUrl: Astro.url.toString(),
		avatarUrl,
		description: profileConfig.bio
	});
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": i18n(I18nKey.about),
		"description": i18n(I18nKey.about)
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"><div class="card-base z-10 px-9 py-6 relative w-full ">${renderComponent($$result, "Markdown", $$Markdown, { "class": "mt-2" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}</div></div>`,
		"head": ($$result) => renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(jsonLd))}<\/script>`
	})}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/about.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/about.astro";
var $$url = "/about/";
//#endregion
//#region \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
//#endregion
export { page };
