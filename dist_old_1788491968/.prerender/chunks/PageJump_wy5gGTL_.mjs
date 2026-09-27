import { c as i18n, p as I18nKey } from "./url-utils_Cr7cEKDY.mjs";
import * as $ from "svelte/internal/server";
//#region src/components/common/PageJump.svelte
function PageJump($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { variant, currentPage, lastPage, onJump, hrefTemplate, hrefFirst } = $$props;
		const digits = $.derived(() => String(lastPage).length);
		const label = i18n(I18nKey.paginationJump);
		if (variant === "ellipsis") {
			$$renderer.push("<!--[0-->");
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button type="button"${$.attr("aria-label", label)}${$.attr("title", label)} class="w-11 h-11 flex items-center justify-center cursor-pointer transition-colors duration-150 text-neutral-700 dark:text-neutral-300 hover:text-(--primary)"><svg class="w-11 h-11" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></button>`);
			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button type="button"${$.attr("aria-label", label)}${$.attr("title", label)} class="h-11 p-0 flex items-center justify-center cursor-pointer text-base font-bold text-(--primary)"${$.attr_style(`width: ${digits() + .5}ch`)}>${$.escape(currentPage)}</button>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { PageJump as t };
