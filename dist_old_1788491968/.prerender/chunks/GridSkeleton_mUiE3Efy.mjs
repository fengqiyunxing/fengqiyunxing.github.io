import * as $ from "svelte/internal/server";
//#region src/components/common/GridSkeleton.svelte
function GridSkeleton($$renderer) {
	$$renderer.push(`<div class="border-b border-(--line-divider) mb-3"><div class="flex min-w-max space-x-8"><!--[-->`);
	const each_array = $.ensure_array_like([
		1,
		2,
		3,
		4
	]);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		each_array[$$index];
		$$renderer.push(`<div class="h-10 w-20 bg-(--btn-regular-bg) rounded animate-pulse"></div>`);
	}
	$$renderer.push(`<!--]--></div></div> <div class="flex flex-wrap gap-1.5 mb-4"><!--[-->`);
	const each_array_1 = $.ensure_array_like([
		1,
		2,
		3,
		4
	]);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		each_array_1[$$index_1];
		$$renderer.push(`<div class="h-7 w-16 bg-(--btn-regular-bg) rounded-full animate-pulse"></div>`);
	}
	$$renderer.push(`<!--]--></div> <div class="media-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"><!--[-->`);
	const each_array_2 = $.ensure_array_like([
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	]);
	for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
		each_array_2[$$index_2];
		$$renderer.push(`<div class="rounded-xl overflow-hidden"><div class="aspect-2/3 bg-(--btn-regular-bg) animate-pulse"></div></div>`);
	}
	$$renderer.push(`<!--]--></div> <div class="mt-6 flex items-center justify-center gap-3"><div class="w-11 h-11 bg-(--btn-regular-bg) rounded-lg animate-pulse"></div> <div class="w-16 h-8 bg-(--btn-regular-bg) rounded animate-pulse"></div> <div class="w-11 h-11 bg-(--btn-regular-bg) rounded-lg animate-pulse"></div></div>`);
}
//#endregion
export { GridSkeleton as t };
