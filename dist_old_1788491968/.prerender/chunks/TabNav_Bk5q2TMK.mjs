import { onMount } from "svelte";
import * as $ from "svelte/internal/server";
//#region src/components/common/TabNav.svelte
function TabNav($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { tabs, activeTab, onTabChange, useHash = true } = $$props;
		function handleHashChange() {
			if (!useHash) return;
			const hash = window.location.hash.replace(/^#/, "");
			if (hash) try {
				const decoded = decodeURIComponent(hash);
				if (tabs.some((t) => t.id === decoded)) onTabChange(decoded);
			} catch {}
		}
		onMount(() => {
			window.addEventListener("hashchange", handleHashChange);
			return () => window.removeEventListener("hashchange", handleHashChange);
		});
		$$renderer.push(`<div class="border-b border-(--line-divider) mb-3"><div class="overflow-x-auto" data-tab-scroll-container=""><nav class="flex min-w-max space-x-8" aria-label="Tabs"><!--[-->`);
		const each_array = $.ensure_array_like(tabs);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let tab = each_array[$$index];
			$$renderer.push(`<button${$.attr_class(`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${tab.id === activeTab ? "border-(--primary) text-(--primary)" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"}`)} type="button">${$.escape(tab.name)} `);
			if (tab.count !== void 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="ml-2 bg-(--btn-regular-bg) text-(--btn-content) py-0.5 px-2 rounded-full text-xs">${$.escape(tab.count)}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></button>`);
		}
		$$renderer.push(`<!--]--></nav></div></div>`);
	});
}
//#endregion
export { TabNav as t };
