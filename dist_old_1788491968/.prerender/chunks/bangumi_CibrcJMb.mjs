import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, m as Fragment, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey } from "./url-utils_Cr7cEKDY.mjs";
import { t as formatDateI18nWithTime } from "./date-utils_DVmTBVcA.mjs";
import { t as GridSkeleton } from "./GridSkeleton_mUiE3Efy.mjs";
import { t as TabNav } from "./TabNav_Bk5q2TMK.mjs";
import { n as filterNsfw, r as isBangumiNsfw, t as FilterControls } from "./FilterControls_Bu8-y6E9.mjs";
import { t as ClientPagination } from "./ClientPagination_DGmlmnj8.mjs";
import { onMount } from "svelte";
import * as $ from "svelte/internal/server";
//#region src/components/pages/bangumi/Card.svelte
function Card($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { item, loadImage = false, subjectBaseUrl = "https://bangumi.one/subject/", nsfw = "off" } = $$props;
		const STATUS_COLORS = {
			1: "bg-blue-500",
			2: "bg-green-500",
			3: "bg-yellow-500",
			4: "bg-orange-500",
			5: "bg-red-500"
		};
		function getStatusText(type) {
			const subjectType = item.subject?.type;
			switch (type) {
				case 1:
					if (subjectType === 1) return i18n(I18nKey.bangumiStatusBookWish);
					if (subjectType === 3) return i18n(I18nKey.bangumiStatusMusicWish);
					if (subjectType === 4) return i18n(I18nKey.bangumiStatusGameWish);
					return i18n(I18nKey.bangumiStatusWish);
				case 2:
					if (subjectType === 1) return i18n(I18nKey.bangumiStatusBookRead);
					if (subjectType === 3) return i18n(I18nKey.bangumiStatusMusicListened);
					if (subjectType === 4) return i18n(I18nKey.bangumiStatusGamePlayed);
					return i18n(I18nKey.bangumiStatusWatched);
				case 3:
					if (subjectType === 1) return i18n(I18nKey.bangumiStatusBookReading);
					if (subjectType === 3) return i18n(I18nKey.bangumiStatusMusicListening);
					if (subjectType === 4) return i18n(I18nKey.bangumiStatusGamePlaying);
					return i18n(I18nKey.bangumiStatusWatching);
				case 4: return i18n(I18nKey.bangumiStatusOnHold);
				case 5: return i18n(I18nKey.bangumiStatusDropped);
				default: return i18n(I18nKey.bangumiStatusUnknown);
			}
		}
		const tags = $.derived(() => item.tags && item.tags.length > 0 ? item.tags : (item.subject?.tags || []).map((t) => t.name).slice(0, 5));
		const visibleTags = $.derived(() => tags().slice(0, 2));
		const hiddenTagCount = $.derived(() => Math.max(tags().length - visibleTags().length, 0));
		const images = $.derived(() => item.subject?.images);
		$.derived(() => images() ? [
			images().medium,
			images().common,
			images().small,
			images().large
		].filter(Boolean) : []);
		const title = $.derived(() => item.subject?.name_cn || item.subject?.name || "");
		const year = $.derived(() => item.subject?.date ? item.subject.date.substring(0, 4) : "");
		const statusColor = $.derived(() => STATUS_COLORS[item.type] || "bg-gray-500");
		const score = $.derived(() => item.subject?.score || 0);
		$.derived(() => nsfw === "blur" && isBangumiNsfw(item));
		$$renderer.push(`<a${$.attr("href", `${$.stringify(subjectBaseUrl)}${$.stringify(item.subject?.id)}`)} target="_blank" rel="noopener noreferrer nofollow" class="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] block"><div class="aspect-2/3 relative overflow-hidden">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<div class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"><div class="text-gray-400 text-4xl">📖</div></div>`);
		$$renderer.push(`<!--]--> <div${$.attr_class(`absolute top-2 left-2 px-2 py-1 rounded-full text-xs text-white font-medium ${$.stringify(statusColor())}`, "svelte-tojcup")}>${$.escape(getStatusText(item.type))}</div> `);
		if (score()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs text-white font-medium bg-black/50 backdrop-blur-sm flex items-center gap-1"><span class="text-yellow-400">⭐</span> ${$.escape(score())}</div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 p-3"><h3 class="font-bold text-sm text-white line-clamp-2 drop-shadow-lg svelte-tojcup">${$.escape(title())}</h3> `);
		if (year()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-xs text-white/60 mt-1">${$.escape(year())}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (item.comment) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-xs text-white/75 line-clamp-1 mt-1 leading-relaxed svelte-tojcup"${$.attr("title", item.comment)}>${$.escape(item.comment)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (visibleTags().length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="flex flex-wrap gap-1 mt-1.5"><!--[-->`);
			const each_array = $.ensure_array_like(visibleTags());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let tag = each_array[$$index];
				$$renderer.push(`<span class="text-[0.6rem] px-1.5 py-0.5 rounded bg-white/20 text-white/90 backdrop-blur-sm">${$.escape(tag)}</span>`);
			}
			$$renderer.push(`<!--]--> `);
			if (hiddenTagCount() > 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="text-[0.6rem] px-1.5 py-0.5 rounded bg-white/20 text-white/60 backdrop-blur-sm">+${$.escape(hiddenTagCount())}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div></a>`);
	});
}
//#endregion
//#region src/components/pages/bangumi/BangumiSection.svelte
function BangumiSection($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { sectionId, items, isActive, itemsPerPage = 24, subjectBaseUrl, nsfw = "off" } = $$props;
		const STATUS_MAP = {
			1: "wish",
			2: "collect",
			3: "doing",
			4: "on_hold",
			5: "dropped"
		};
		const isGame = $.derived(() => sectionId === "game");
		const isBook = $.derived(() => sectionId === "book");
		const isMusic = $.derived(() => sectionId === "music");
		function getFilterLabel(type) {
			if (isGame()) switch (type) {
				case "collect": return i18n(I18nKey.bangumiFilterGamePlayed);
				case "doing": return i18n(I18nKey.bangumiFilterGamePlaying);
				case "wish": return i18n(I18nKey.bangumiFilterGameWish);
			}
			if (isBook()) switch (type) {
				case "collect": return i18n(I18nKey.bangumiFilterBookRead);
				case "doing": return i18n(I18nKey.bangumiFilterBookReading);
				case "wish": return i18n(I18nKey.bangumiFilterBookWish);
			}
			if (isMusic()) switch (type) {
				case "collect": return i18n(I18nKey.bangumiFilterMusicListened);
				case "doing": return i18n(I18nKey.bangumiFilterMusicListening);
				case "wish": return i18n(I18nKey.bangumiFilterMusicWish);
			}
			switch (type) {
				case "collect": return i18n(I18nKey.bangumiFilterWatched);
				case "doing": return i18n(I18nKey.bangumiFilterWatching);
				case "wish": return i18n(I18nKey.bangumiFilterWish);
			}
		}
		const safeItems = $.derived(() => filterNsfw(items, nsfw, isBangumiNsfw));
		const statusCounts = $.derived(() => () => {
			const counts = {};
			for (const item of safeItems()) {
				const status = STATUS_MAP[item.type] || "unknown";
				counts[status] = (counts[status] || 0) + 1;
			}
			return counts;
		});
		const filters = $.derived(() => () => {
			const counts = statusCounts()();
			return [
				{
					value: "all",
					label: i18n(I18nKey.bangumiFilterAll),
					count: safeItems().length
				},
				{
					value: "collect",
					label: getFilterLabel("collect"),
					count: counts.collect || 0
				},
				{
					value: "doing",
					label: getFilterLabel("doing"),
					count: counts.doing || 0
				},
				{
					value: "wish",
					label: getFilterLabel("wish"),
					count: counts.wish || 0
				},
				{
					value: "on_hold",
					label: i18n(I18nKey.bangumiFilterOnHold),
					count: counts.on_hold || 0
				},
				{
					value: "dropped",
					label: i18n(I18nKey.bangumiFilterDropped),
					count: counts.dropped || 0
				}
			].filter((f) => f.value === "all" || f.count > 0);
		});
		let activeFilter = "all";
		let currentPage = 1;
		const filteredItems = $.derived(() => activeFilter === "all" ? safeItems() : safeItems().filter((item) => (STATUS_MAP[item.type] || "unknown") === activeFilter));
		const totalPages = $.derived(() => Math.max(1, Math.ceil(filteredItems().length / itemsPerPage)));
		const pagedItems = $.derived(() => filteredItems().slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
		function handleFilterChange(filter) {
			activeFilter = filter;
			currentPage = 1;
		}
		function goToPage(page) {
			if (page >= 1 && page <= totalPages()) currentPage = page;
		}
		$$renderer.push(`<div${$.attr_class("media-section", void 0, { "hidden": !isActive })}${$.attr("data-section", sectionId)}>`);
		if (safeItems().length > 0) {
			$$renderer.push("<!--[0-->");
			FilterControls($$renderer, {
				filters: filters()(),
				activeFilter,
				onFilterChange: handleFilterChange
			});
			$$renderer.push(`<!----> <div class="media-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"><!--[-->`);
			const each_array = $.ensure_array_like(pagedItems());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let item = each_array[$$index];
				$$renderer.push(`<div class="media-item"${$.attr("data-item-section", sectionId)}${$.attr("data-item-status", STATUS_MAP[item.type] || "unknown")}>`);
				Card($$renderer, {
					item,
					loadImage: isActive,
					subjectBaseUrl,
					nsfw
				});
				$$renderer.push(`<!----></div>`);
			}
			$$renderer.push(`<!--]--></div> `);
			ClientPagination($$renderer, {
				totalItems: filteredItems().length,
				itemsPerPage,
				currentPage,
				onPageChange: goToPage
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="text-center py-12"><h3 class="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">${$.escape(i18n(I18nKey.bangumiNoData))}</h3> <p class="text-gray-500 dark:text-gray-500">${$.escape(i18n(I18nKey.bangumiNoDataDescription))}</p></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
//#region src/components/pages/bangumi/BangumiGrid.svelte
function BangumiGrid($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { tabs: staticTabs, initialActiveTab, bangumiData: staticData, subjectBaseUrl, fetchConfig, nsfw } = $$props;
		const nsfwMode = $.derived(() => nsfw ?? fetchConfig?.nsfw ?? "off");
		const isDynamic = $.derived(() => !!fetchConfig);
		let activeTab = "";
		let fetchLoading = false;
		const loading = $.derived(() => isDynamic() && fetchLoading);
		let error = false;
		let errorTitle = "";
		let errorDesc = "";
		let dynamicTabs = [];
		let dynamicData = {};
		const tabs = $.derived(() => staticTabs || dynamicTabs);
		const bangumiData = $.derived(() => staticData || dynamicData);
		const categoryMap = {
			book: {
				name: i18n(I18nKey.bangumiCategoryBook),
				subjectType: 1
			},
			anime: {
				name: i18n(I18nKey.bangumiCategoryAnime),
				subjectType: 2
			},
			music: {
				name: i18n(I18nKey.bangumiCategoryMusic),
				subjectType: 3
			},
			game: {
				name: i18n(I18nKey.bangumiCategoryGame),
				subjectType: 4
			},
			real: {
				name: i18n(I18nKey.bangumiCategoryReal),
				subjectType: 6
			}
		};
		function handleTabChange(tabId) {
			activeTab = tabId;
		}
		async function fetchCategory(apiUrl, username, subjectType, pagination) {
			const { limit, delay, maxTotal } = pagination;
			let offset = 0;
			const allItems = [];
			while (true) {
				if (maxTotal > 0 && allItems.length >= maxTotal) break;
				const url = `${apiUrl}/v0/users/${username}/collections?subject_type=${subjectType}&limit=${limit}&offset=${offset}`;
				const resp = await fetch(url, { headers: { Accept: "application/json" } });
				if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
				const batch = (await resp.json()).data || [];
				if (batch.length > 0) {
					allItems.push(...batch);
					offset += limit;
					if (batch.length < limit) break;
					await new Promise((r) => setTimeout(r, delay));
				} else break;
			}
			return allItems;
		}
		async function loadDynamicData() {
			if (!fetchConfig) return;
			const { username, apiUrl, categories, categoryOrder, pagination } = fetchConfig;
			const enabled = [];
			for (const [k, v] of Object.entries(categories)) if (v) enabled.push(k);
			if (categoryOrder.length > 0) enabled.sort((a, b) => {
				const ai = categoryOrder.indexOf(a);
				const bi = categoryOrder.indexOf(b);
				if (ai === -1 && bi === -1) return 0;
				if (ai === -1) return 1;
				if (bi === -1) return -1;
				return ai - bi;
			});
			const newTabs = [];
			const newData = {};
			for (const catKey of enabled) {
				const info = categoryMap[catKey];
				if (!info) continue;
				try {
					const data = await fetchCategory(apiUrl, username, info.subjectType, pagination);
					const filtered = filterNsfw(data, nsfwMode(), isBangumiNsfw);
					newData[catKey] = filtered;
					newTabs.push({
						id: catKey,
						name: info.name,
						count: filtered.length
					});
				} catch (e) {
					console.error(`[Bangumi] Failed to fetch ${catKey} data:`, e);
					fetchLoading = false;
					error = true;
					errorTitle = i18n(I18nKey.bangumiFetchError);
					errorDesc = i18n(I18nKey.bangumiFetchErrorDesc);
					return;
				}
			}
			if (newTabs.length === 0 || newTabs.every((t) => t.count === 0)) {
				fetchLoading = false;
				error = true;
				errorTitle = i18n(I18nKey.bangumiNoData);
				errorDesc = i18n(I18nKey.bangumiNoDataDescription);
				return;
			}
			dynamicTabs = newTabs;
			dynamicData = newData;
			activeTab = newTabs[0].id;
			fetchLoading = false;
			const now = /* @__PURE__ */ new Date();
			const pad = (n) => n < 10 ? `0${n}` : String(n);
			`${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}`;
		}
		function restoreTabFromHash() {
			if (!isDynamic()) {
				const hash = window.location.hash.replace(/^#/, "");
				if (hash) try {
					const decoded = decodeURIComponent(hash);
					if (tabs().some((t) => t.id === decoded)) activeTab = decoded;
				} catch {}
			}
		}
		onMount(async () => {
			restoreTabFromHash();
			if (isDynamic()) await loadDynamicData();
		});
		if (isDynamic() && loading()) {
			$$renderer.push("<!--[0-->");
			GridSkeleton($$renderer, {});
		} else if (isDynamic() && error) {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<div class="text-center py-16"><div class="inline-flex items-center justify-center w-16 h-16 bg-(--btn-regular-bg) rounded-full mb-6 border border-(--line-divider)"><span class="text-[2rem] text-red-500">⚠</span></div> <h2 class="text-xl font-semibold text-black/80 dark:text-white/80 mb-3">${$.escape(errorTitle)}</h2> <p class="text-black/60 dark:text-white/60 mb-4 max-w-md mx-auto">${$.escape(errorDesc)}</p></div>`);
		} else if (tabs().length > 0) {
			$$renderer.push("<!--[2-->");
			TabNav($$renderer, {
				tabs: tabs(),
				activeTab,
				onTabChange: handleTabChange
			});
			$$renderer.push(`<!----> <!--[-->`);
			const each_array = $.ensure_array_like(tabs());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let tab = each_array[$$index];
				BangumiSection($$renderer, {
					sectionId: tab.id,
					items: bangumiData()[tab.id] || [],
					isActive: tab.id === activeTab,
					itemsPerPage: 24,
					subjectBaseUrl,
					nsfw: nsfwMode()
				});
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/pages/bangumi.astro
var bangumi_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Bangumi,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$Bangumi = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Bangumi;
	if (!siteConfig.pages.bangumi) return Astro2.redirect("/404/");
	const buildTime = formatDateI18nWithTime(/* @__PURE__ */ new Date());
	const bangumiConfig = {
		username: siteConfig.bangumi?.userId,
		mode: siteConfig.bangumi?.mode || "static",
		apiUrl: siteConfig.bangumi?.apiUrl || "https://api.bangumi.one",
		subjectBaseUrl: siteConfig.bangumi?.subjectBaseUrl || "https://bangumi.one/subject/",
		categories: {
			book: siteConfig.bangumi?.categories?.book ?? true,
			anime: siteConfig.bangumi?.categories?.anime ?? true,
			music: siteConfig.bangumi?.categories?.music ?? true,
			game: siteConfig.bangumi?.categories?.game ?? true,
			real: siteConfig.bangumi?.categories?.real ?? false
		},
		pagination: {
			limit: 50,
			delay: 50,
			maxTotal: 1e3
		},
		nsfw: siteConfig.bangumi?.nsfw ?? "off"
	};
	const isDynamic = bangumiConfig.mode === "dynamic";
	const categoryMap = {
		book: {
			id: "book",
			name: i18n(I18nKey.bangumiCategoryBook),
			subjectType: 1
		},
		anime: {
			id: "anime",
			name: i18n(I18nKey.bangumiCategoryAnime),
			subjectType: 2
		},
		music: {
			id: "music",
			name: i18n(I18nKey.bangumiCategoryMusic),
			subjectType: 3
		},
		game: {
			id: "game",
			name: i18n(I18nKey.bangumiCategoryGame),
			subjectType: 4
		},
		real: {
			id: "real",
			name: i18n(I18nKey.bangumiCategoryReal),
			subjectType: 6
		}
	};
	async function fetchBangumiData(username, subjectType) {
		const { limit, delay, maxTotal } = bangumiConfig.pagination;
		let offset = 0;
		let allData = [];
		let hasMore = true;
		console.log(`[Bangumi] 🌐 Prod mode - fetching subjectType ${subjectType} data for user ${username}...`);
		while (hasMore) {
			if (maxTotal > 0 && allData.length >= maxTotal) {
				console.log(`[Bangumi] Reached max fetch limit ${maxTotal}, stopping`);
				break;
			}
			const url = `${bangumiConfig.apiUrl}/v0/users/${username}/collections?subject_type=${subjectType}&limit=${limit}&offset=${offset}`;
			console.log(`[Bangumi] Fetching data: ${url} (fetched: ${allData.length})`);
			const response = await fetch(url, { headers: {
				"User-Agent": "YuuOuRou Blog",
				Accept: "application/json"
			} });
			if (!response.ok) throw new Error(`[Bangumi] Failed to fetch data (status: ${response.status}): ${url}`);
			const currentBatch = (await response.json()).data || [];
			if (currentBatch.length > 0) {
				allData = allData.concat(currentBatch);
				offset += limit;
				if (currentBatch.length < limit) hasMore = false;
			} else hasMore = false;
			if (hasMore) await new Promise((resolve) => setTimeout(resolve, delay));
		}
		console.log(`[Bangumi] Fetched ${allData.length} items in total`);
		return allData;
	}
	const bangumiData = {};
	const tabs = [];
	let fetchFailed = false;
	const isUserIdConfigured = bangumiConfig.username && bangumiConfig.username !== "you-user-id" && bangumiConfig.username.trim() !== "";
	if (!isUserIdConfigured) console.log("[Bangumi] ⚠️ Bangumi user ID not configured, skipping fetch");
	else if (!isDynamic) console.log("[Bangumi] 🌐 Fetching data from API (static mode)");
	if (!isDynamic) {
		for (const [categoryKey, enabled] of Object.entries(bangumiConfig.categories)) {
			if (!isUserIdConfigured) break;
			if (enabled && categoryMap[categoryKey]) {
				const categoryInfo = categoryMap[categoryKey];
				try {
					const data = await fetchBangumiData(bangumiConfig.username, categoryInfo.subjectType);
					const filteredData = filterNsfw(data, bangumiConfig.nsfw, isBangumiNsfw);
					bangumiData[categoryKey] = filteredData;
					tabs.push({
						id: categoryKey,
						name: categoryInfo.name,
						count: filteredData.length
					});
				} catch (error) {
					console.error(`[Bangumi] Failed to fetch ${categoryInfo.name} data:`, error);
					fetchFailed = true;
					break;
				}
			}
		}
		const categoryOrder = siteConfig.bangumi?.categoryOrder || [];
		if (categoryOrder.length > 0) tabs.sort((a, b) => {
			const aIndex = categoryOrder.indexOf(a.id);
			const bIndex = categoryOrder.indexOf(b.id);
			if (aIndex === -1 && bIndex === -1) return 0;
			if (aIndex === -1) return 1;
			if (bIndex === -1) return -1;
			return aIndex - bIndex;
		});
	}
	const activeTab = tabs[0]?.id || "anime";
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": i18n(I18nKey.bangumi),
		"description": i18n(I18nKey.bangumiSubtitle),
		"data-astro-cid-avaugctc": true
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32" data-astro-cid-avaugctc><div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-avaugctc><!-- 页面标题 --><div class="relative w-full mb-8" data-astro-cid-avaugctc><div class="mb-6" data-astro-cid-avaugctc><div class="flex items-center gap-3 mb-3" data-astro-cid-avaugctc><div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70" data-astro-cid-avaugctc>${renderComponent($$result2, "Icon", $$Icon, {
		"name": "material-symbols:movie",
		"class": "text-[1.5rem]",
		"data-astro-cid-avaugctc": true
	})}</div><div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100" data-astro-cid-avaugctc>${i18n(I18nKey.bangumi)}</div></div><p class="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed" data-astro-cid-avaugctc>${i18n(I18nKey.bangumiSubtitle)}</p>${!isDynamic && renderTemplate`<p class="text-xs text-neutral-500 dark:text-neutral-500 mt-2" data-astro-cid-avaugctc>${i18n(I18nKey.bangumiLastUpdated)} ${buildTime}</p>`}</div>${isDynamic ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${!isUserIdConfigured ? renderTemplate`<div class="text-center py-16" data-astro-cid-avaugctc><div class="inline-flex items-center justify-center w-16 h-16 bg-(--btn-regular-bg) rounded-full mb-6 border border-(--line-divider)" data-astro-cid-avaugctc>${renderComponent($$result3, "Icon", $$Icon, {
		"name": "material-symbols:settings",
		"class": "text-[2rem] text-(--btn-content)",
		"data-astro-cid-avaugctc": true
	})}</div><h2 class="text-xl font-semibold text-black/80 dark:text-white/80 mb-3" data-astro-cid-avaugctc>未配置 Bangumi 用户ID</h2><p class="text-black/60 dark:text-white/60 mb-4 max-w-md mx-auto" data-astro-cid-avaugctc>请在 src/config/siteConfig.ts 中配置你的 Bangumi 用户ID</p></div>` : renderTemplate`${renderComponent($$result3, "BangumiGrid", BangumiGrid, {
		"client:load": true,
		"subjectBaseUrl": bangumiConfig.subjectBaseUrl,
		"fetchConfig": {
			username: bangumiConfig.username,
			apiUrl: bangumiConfig.apiUrl,
			categories: bangumiConfig.categories,
			categoryOrder: siteConfig.bangumi?.categoryOrder || [],
			pagination: bangumiConfig.pagination,
			nsfw: bangumiConfig.nsfw
		},
		"data-astro-cid-avaugctc": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/pages/bangumi/BangumiGrid.svelte",
		"client:component-export": "default"
	})}`}` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${fetchFailed ? renderTemplate`<div class="text-center py-16" data-astro-cid-avaugctc><div class="inline-flex items-center justify-center w-16 h-16 bg-(--btn-regular-bg) rounded-full mb-6 border border-(--line-divider)" data-astro-cid-avaugctc>${renderComponent($$result3, "Icon", $$Icon, {
		"name": "material-symbols:error-outline",
		"class": "text-[2rem] text-red-500",
		"data-astro-cid-avaugctc": true
	})}</div><h2 class="text-xl font-semibold text-black/80 dark:text-white/80 mb-3" data-astro-cid-avaugctc>${i18n(I18nKey.bangumiFetchError)}</h2><p class="text-black/60 dark:text-white/60 mb-4 max-w-md mx-auto" data-astro-cid-avaugctc>${i18n(I18nKey.bangumiFetchErrorDesc)}</p></div>` : tabs.length > 0 ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "BangumiGrid", BangumiGrid, {
		"client:load": true,
		"tabs": tabs,
		"initialActiveTab": activeTab,
		"bangumiData": bangumiData,
		"subjectBaseUrl": bangumiConfig.subjectBaseUrl,
		"nsfw": bangumiConfig.nsfw,
		"data-astro-cid-avaugctc": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/pages/bangumi/BangumiGrid.svelte",
		"client:component-export": "default"
	})}` })}` : renderTemplate`<div class="text-center py-16" data-astro-cid-avaugctc><div class="inline-flex items-center justify-center w-16 h-16 bg-(--btn-regular-bg) rounded-full mb-6 border border-(--line-divider)" data-astro-cid-avaugctc>${renderComponent($$result3, "Icon", $$Icon, {
		"name": "material-symbols:settings",
		"class": "text-[2rem] text-(--btn-content)",
		"data-astro-cid-avaugctc": true
	})}</div><h2 class="text-xl font-semibold text-black/80 dark:text-white/80 mb-3" data-astro-cid-avaugctc>${isUserIdConfigured ? i18n(I18nKey.bangumiEmpty) : "未配置 Bangumi 用户ID"}</h2><p class="text-black/60 dark:text-white/60 mb-4 max-w-md mx-auto" data-astro-cid-avaugctc>${isUserIdConfigured ? i18n(I18nKey.bangumiEmptyReason) : "请在 src/config/siteConfig.ts 中配置你的 Bangumi 用户ID"}</p></div>`}` })}`}</div></div></div>` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/bangumi.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/bangumi.astro";
var $$url = "/bangumi/";
//#endregion
//#region \0virtual:astro:page:src/pages/bangumi@_@astro
var page = () => bangumi_exports;
//#endregion
export { page };
