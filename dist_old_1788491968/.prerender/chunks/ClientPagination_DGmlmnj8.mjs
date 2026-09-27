import { c as i18n, p as I18nKey } from "./url-utils_Cr7cEKDY.mjs";
import { t as PageJump } from "./PageJump_wy5gGTL_.mjs";
import * as $ from "svelte/internal/server";
//#region src/components/common/ClientPagination.svelte
function ClientPagination($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { totalItems, itemsPerPage, currentPage, onPageChange } = $$props;
		const totalPages = $.derived(() => Math.ceil(totalItems / itemsPerPage));
		function generatePageNumbers(current, total) {
			if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
			const delta = 2;
			const left = Math.max(2, current - delta);
			const right = Math.min(total - 1, current + delta);
			const pages = [1];
			if (left > 2) pages.push("...");
			for (let i = left; i <= right; i++) pages.push(i);
			if (right < total - 1) pages.push("...");
			if (total > 1) pages.push(total);
			return pages;
		}
		const pageNumbers = $.derived(() => generatePageNumbers(currentPage, totalPages()));
		function goToPage(page) {
			if (page >= 1 && page <= totalPages() && page !== currentPage) onPageChange(page);
		}
		if (totalPages() > 1) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="responsive-pagination flex justify-center items-center mt-8 svelte-ewpvbp"><div class="mobile-pagination items-center gap-3 svelte-ewpvbp"><button type="button" class="btn-card overflow-hidden rounded-(--radius-large) text-(--primary) w-11 h-11 disabled:opacity-50 disabled:cursor-not-allowed svelte-ewpvbp"${$.attr("disabled", currentPage === 1, true)}${$.attr("aria-label", i18n(I18nKey.paginationPrev))}><svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"></path></svg></button> <div class="btn-card flex items-center rounded-(--radius-large) px-4 h-11 gap-1.5">`);
			PageJump($$renderer, {
				variant: "current",
				currentPage,
				lastPage: totalPages(),
				onJump: goToPage
			});
			$$renderer.push(`<!----> <span class="text-sm text-neutral-500 dark:text-neutral-500">/</span> <span class="text-base font-bold text-neutral-700 dark:text-neutral-300">${$.escape(totalPages())}</span></div> <button type="button" class="btn-card overflow-hidden rounded-(--radius-large) text-(--primary) w-11 h-11 disabled:opacity-50 disabled:cursor-not-allowed svelte-ewpvbp"${$.attr("disabled", currentPage === totalPages(), true)}${$.attr("aria-label", i18n(I18nKey.paginationNext))}><svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"></path></svg></button></div> <div class="desktop-pagination items-center gap-3 svelte-ewpvbp"><button type="button" class="btn-card overflow-hidden rounded-(--radius-large) text-(--primary) w-11 h-11 disabled:opacity-50 disabled:cursor-not-allowed svelte-ewpvbp"${$.attr("disabled", currentPage === 1, true)}${$.attr("aria-label", i18n(I18nKey.paginationPrev))}><svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"></path></svg></button> <!--[-->`);
			const each_array = $.ensure_array_like(pageNumbers());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let pageItem = each_array[$$index];
				if (pageItem === "...") {
					$$renderer.push("<!--[0-->");
					PageJump($$renderer, {
						variant: "ellipsis",
						currentPage,
						lastPage: totalPages(),
						onJump: goToPage
					});
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<button type="button"${$.attr_class(`rounded-(--radius-large) overflow-hidden w-11 h-11 flex items-center justify-center font-bold ${pageItem === currentPage ? "bg-(--primary) text-white dark:text-black/70" : "btn-card active:scale-[0.85] text-neutral-700 dark:text-neutral-300"}`, "svelte-ewpvbp")}${$.attr("aria-label", String(pageItem))}${$.attr("aria-current", pageItem === currentPage ? "page" : void 0)}>${$.escape(pageItem)}</button>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--> <button type="button" class="btn-card overflow-hidden rounded-(--radius-large) text-(--primary) w-11 h-11 disabled:opacity-50 disabled:cursor-not-allowed svelte-ewpvbp"${$.attr("disabled", currentPage === totalPages(), true)}${$.attr("aria-label", i18n(I18nKey.paginationNext))}><svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"></path></svg></button></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { ClientPagination as t };
