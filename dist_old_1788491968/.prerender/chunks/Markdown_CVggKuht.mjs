import { P as createAstro, S as maybeRenderHead, v as renderSlot, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
/* empty css                          */
//#region src/components/common/Markdown.astro
createAstro("https://fengqiyunxing.github.io");
var $$Markdown = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Markdown;
	const className = Astro.props.class;
	return renderTemplate`${maybeRenderHead($$result)}<div data-pagefind-body${addAttribute(`prose dark:prose-invert prose-base max-w-none! custom-md ${className}`, "class")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/common/Markdown.astro", void 0);
//#endregion
export { $$Markdown as t };
