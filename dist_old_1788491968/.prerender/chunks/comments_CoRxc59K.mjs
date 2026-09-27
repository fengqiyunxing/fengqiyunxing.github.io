import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import { C as dynamicConfig, D as renderScript, t as $$Layout } from "./Layout_CfOzU-i2.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { f as siteConfig } from "./url-utils_Cr7cEKDY.mjs";
import { t as commentConfig } from "./commentConfig_DQHjcw7q.mjs";
import { t as $$Index } from "./comment_CqO4CP1n.mjs";
//#region src/pages/dynamic/comments.astro
var comments_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Comments,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$Comments = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Comments;
	if (!siteConfig.pages.dynamic || dynamicConfig.showComment === false || !commentConfig.type || commentConfig.type === "none") return Astro.redirect("/404/");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="dynamic-comment-embed">${renderComponent($$result, "Comment", $$Index, { "customPath": "/dynamic/" })}</main>` })}${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/pages/dynamic/comments.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/dynamic/comments.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/dynamic/comments.astro";
var $$url = "/dynamic/comments/";
//#endregion
//#region \0virtual:astro:page:src/pages/dynamic/comments@_@astro
var page = () => comments_exports;
//#endregion
export { page };
