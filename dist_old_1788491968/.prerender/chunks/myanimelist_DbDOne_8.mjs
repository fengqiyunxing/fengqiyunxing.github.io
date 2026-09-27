import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey } from "./url-utils_Cr7cEKDY.mjs";
import { t as formatDateI18nWithTime } from "./date-utils_DVmTBVcA.mjs";
import { t as TabNav } from "./TabNav_Bk5q2TMK.mjs";
import { i as isMalNsfw, n as filterNsfw, t as FilterControls } from "./FilterControls_Bu8-y6E9.mjs";
import { t as ClientPagination } from "./ClientPagination_DGmlmnj8.mjs";
import * as $ from "svelte/internal/server";
//#region src/utils/mal-utils.ts
var MAL_ANIME_FIELDS = [
	"id",
	"title",
	"main_picture",
	"alternative_titles",
	"mean",
	"media_type",
	"num_episodes",
	"genres",
	"start_season",
	"status",
	"list_status{status,score,num_episodes_watched,is_rewatching,updated_at,start_date,finish_date,comments}"
].join(",");
var MAL_MANGA_FIELDS = [
	"id",
	"title",
	"main_picture",
	"alternative_titles",
	"mean",
	"media_type",
	"num_chapters",
	"num_volumes",
	"genres",
	"start_date",
	"status",
	"list_status{status,score,num_chapters_read,num_volumes_read,is_rereading,updated_at,start_date,finish_date,comments}"
].join(",");
async function fetchMalList(options) {
	const kind = options.kind === "manga" ? "manga" : "anime";
	const endpoint = kind === "manga" ? "mangalist" : "animelist";
	const params = new URLSearchParams({
		fields: kind === "manga" ? MAL_MANGA_FIELDS : MAL_ANIME_FIELDS,
		limit: String(options.limit),
		offset: String(options.offset)
	});
	const response = await fetch(`${options.apiUrl}/users/${encodeURIComponent(options.username)}/${endpoint}?${params.toString()}`, { headers: {
		"X-MAL-CLIENT-ID": options.clientId,
		Accept: "application/json"
	} });
	if (!response.ok) throw new Error(`[MAL] 无法获取数据 (状态码: ${response.status})`);
	return await response.json();
}
var MAL_ANIME_STATUS_ORDER = [
	"watching",
	"completed",
	"on_hold",
	"dropped",
	"plan_to_watch"
];
var MAL_MANGA_STATUS_ORDER = [
	"reading",
	"completed",
	"on_hold",
	"dropped",
	"plan_to_read"
];
function getMalStatusOrder(kind) {
	return kind === "manga" ? MAL_MANGA_STATUS_ORDER : MAL_ANIME_STATUS_ORDER;
}
function getMalStatusText(status, fallback = "") {
	switch (status) {
		case "watching": return i18n(I18nKey.malStatusWatching);
		case "reading": return i18n(I18nKey.malStatusReading);
		case "completed": return i18n(I18nKey.malStatusCompleted);
		case "on_hold": return i18n(I18nKey.malStatusOnHold);
		case "dropped": return i18n(I18nKey.malStatusDropped);
		case "plan_to_watch": return i18n(I18nKey.malStatusPlanToWatch);
		case "plan_to_read": return i18n(I18nKey.malStatusPlanToRead);
		default: return fallback || status;
	}
}
function getMalSeasonText(season) {
	switch (season) {
		case "winter": return i18n(I18nKey.malSeasonWinter);
		case "spring": return i18n(I18nKey.malSeasonSpring);
		case "summer": return i18n(I18nKey.malSeasonSummer);
		case "fall": return i18n(I18nKey.malSeasonFall);
		default: return season;
	}
}
//#endregion
//#region src/components/pages/mal/Card.svelte
function Card($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { item, loadImage = false, kind = "anime", baseUrl = "https://myanimelist.net/anime/", nsfw = "off" } = $$props;
		const STATUS_COLORS = {
			watching: "bg-yellow-500",
			reading: "bg-yellow-500",
			completed: "bg-green-500",
			on_hold: "bg-orange-500",
			dropped: "bg-red-500",
			plan_to_watch: "bg-blue-500",
			plan_to_read: "bg-blue-500",
			unknown: "bg-gray-500"
		};
		const node = $.derived(() => item.node);
		const isManga = $.derived(() => kind === "manga");
		const userStatus = $.derived(() => item.list_status?.status || "unknown");
		const statusText = $.derived(() => getMalStatusText(userStatus()));
		const statusColor = $.derived(() => STATUS_COLORS[userStatus()] || "bg-gray-500");
		const title = $.derived(() => node().title || "MAL");
		const altTitle = $.derived(() => node().alternative_titles?.en && node().alternative_titles.en !== title() ? node().alternative_titles.en : node().alternative_titles?.ja && node().alternative_titles.ja !== title() ? node().alternative_titles.ja : "");
		const coverUrl = $.derived(() => node().main_picture?.large || node().main_picture?.medium || "");
		const userScore = $.derived(() => item.list_status?.score || 0);
		const meanScore = $.derived(() => node().mean || 0);
		$.derived(() => nsfw === "blur" && isMalNsfw(item));
		const seasonText = $.derived(() => isManga() ? "" : node().start_season ? [getMalSeasonText(node().start_season.season || ""), node().start_season.year].filter(Boolean).join(" ") : "");
		const yearText = $.derived(() => isManga() ? node().start_date ? node().start_date.substring(0, 4) : "" : "");
		const dateText = $.derived(() => seasonText() || yearText());
		const watched = $.derived(() => isManga() ? item.list_status?.num_chapters_read || 0 : item.list_status?.num_episodes_watched || 0);
		const total = $.derived(() => isManga() ? node().num_chapters || 0 : node().num_episodes || 0);
		const volumesWatched = $.derived(() => item.list_status?.num_volumes_read || 0);
		const volumesTotal = $.derived(() => node().num_volumes || 0);
		const episodesText = $.derived(() => watched() > 0 ? `${watched()}${total() ? `/${total()}` : ""}` : total() > 0 ? `0/${total()}` : "");
		const volumesText = $.derived(() => volumesWatched() > 0 ? `${volumesWatched()}${volumesTotal() ? `/${volumesTotal()}` : ""}卷` : "");
		const progressText = $.derived(() => isManga() ? [episodesText(), volumesText()].filter(Boolean).join(" ") : episodesText());
		const genreNames = $.derived(() => (node().genres || []).map((g) => g.name));
		const visibleGenres = $.derived(() => genreNames().slice(0, 2));
		const hiddenGenreCount = $.derived(() => Math.max(genreNames().length - visibleGenres().length, 0));
		const link = $.derived(() => `${baseUrl}${node().id}`);
		$.derived(() => coverUrl() ? [coverUrl()] : []);
		$$renderer.push(`<a${$.attr("href", link())} target="_blank" rel="noopener noreferrer nofollow" class="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] block"><div class="aspect-2/3 relative overflow-hidden">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<div class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"><div class="text-gray-400 dark:text-gray-500 text-4xl font-bold">MAL</div></div>`);
		$$renderer.push(`<!--]--> <div${$.attr_class(`absolute top-2 left-2 px-2 py-1 rounded-full text-xs text-white font-medium ${$.stringify(statusColor())}`)}>${$.escape(statusText())}</div> `);
		if (userScore() > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs text-white font-medium bg-black/50 backdrop-blur-sm flex items-center gap-1"><span class="text-yellow-400">⭐</span> ${$.escape(userScore())}</div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 p-3"><h3 class="font-bold text-sm text-white line-clamp-2 drop-shadow-lg">${$.escape(title())}</h3> `);
		if (altTitle()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-xs text-white/60 mt-0.5 line-clamp-1">${$.escape(altTitle())}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (dateText() || progressText()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-xs text-white/70 mt-1">`);
			if (dateText()) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`${$.escape(dateText())}`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (dateText() && progressText()) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`·`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (progressText()) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`${$.escape(progressText())}`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (meanScore() > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-xs text-white/70 mt-0.5"><span class="text-yellow-300 font-medium">MAL</span> ${$.escape(meanScore())}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (visibleGenres().length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="flex flex-wrap gap-1 mt-1.5"><!--[-->`);
			const each_array = $.ensure_array_like(visibleGenres());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let genre = each_array[$$index];
				$$renderer.push(`<span class="text-[0.6rem] px-1.5 py-0.5 rounded bg-white/20 text-white/90 backdrop-blur-sm">${$.escape(genre)}</span>`);
			}
			$$renderer.push(`<!--]--> `);
			if (hiddenGenreCount() > 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="text-[0.6rem] px-1.5 py-0.5 rounded bg-white/20 text-white/60 backdrop-blur-sm">+${$.escape(hiddenGenreCount())}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div></a>`);
	});
}
//#endregion
//#region src/components/pages/mal/MalSection.svelte
function MalSection($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { sectionId, items, isActive, itemsPerPage = 24, kind = "anime", baseUrl = "https://myanimelist.net/anime/", nsfw = "off" } = $$props;
		const safeItems = $.derived(() => filterNsfw(items, nsfw, isMalNsfw));
		const filters = $.derived(() => {
			const counts = {};
			for (const item of safeItems()) {
				const status = item.list_status?.status || "unknown";
				counts[status] = (counts[status] || 0) + 1;
			}
			return [{
				value: "all",
				label: i18n(I18nKey.malFilterAll),
				count: safeItems().length
			}, ...getMalStatusOrder(kind).filter((status) => counts[status]).map((status) => ({
				value: status,
				label: getMalStatusText(status),
				count: counts[status]
			}))];
		});
		let activeFilter = "all";
		let currentPage = 1;
		const filteredItems = $.derived(() => {
			if (activeFilter === "all") return safeItems();
			return safeItems().filter((item) => (item.list_status?.status || "unknown") === activeFilter);
		});
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
				filters: filters(),
				activeFilter,
				onFilterChange: handleFilterChange
			});
			$$renderer.push(`<!----> <div class="media-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"><!--[-->`);
			const each_array = $.ensure_array_like(pagedItems());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let item = each_array[$$index];
				$$renderer.push(`<div class="media-item"${$.attr("data-item-section", sectionId)}${$.attr("data-item-status", item.list_status?.status || "unknown")}>`);
				Card($$renderer, {
					item,
					loadImage: isActive,
					kind,
					baseUrl,
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
			$$renderer.push(`<div class="text-center py-12"><h3 class="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">${$.escape(i18n(I18nKey.malNoData))}</h3> <p class="text-gray-500 dark:text-gray-500">${$.escape(i18n(I18nKey.malNoDataDescription))}</p></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
//#region src/components/pages/mal/MalGrid.svelte
function MalGrid($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { categories, initialActiveCategory, animeBaseUrl = "https://myanimelist.net/anime/", mangaBaseUrl = "https://myanimelist.net/manga/", nsfw = "off" } = $$props;
		let activeCategory = "";
		function handleCategoryChange(categoryId) {
			activeCategory = categoryId;
		}
		if (categories.length > 0) {
			$$renderer.push("<!--[0-->");
			TabNav($$renderer, {
				tabs: categories,
				activeTab: activeCategory,
				onTabChange: handleCategoryChange
			});
			$$renderer.push(`<!----> <!--[-->`);
			const each_array = $.ensure_array_like(categories);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let category = each_array[$$index];
				MalSection($$renderer, {
					sectionId: category.id,
					items: category.items,
					isActive: category.id === activeCategory,
					itemsPerPage: 24,
					kind: category.id,
					baseUrl: category.id === "manga" ? mangaBaseUrl : animeBaseUrl,
					nsfw
				});
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/pages/myanimelist.astro
var myanimelist_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Myanimelist,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$Myanimelist = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Myanimelist;
	if (!siteConfig.pages.mal) return Astro2.redirect("/404/");
	const buildTime = formatDateI18nWithTime(/* @__PURE__ */ new Date());
	const malConfig = {
		username: siteConfig.mal?.username || "",
		clientId: siteConfig.mal?.clientId || "",
		apiUrl: siteConfig.mal?.apiUrl || "https://api.myanimelist.net/v2",
		animeBaseUrl: siteConfig.mal?.animeBaseUrl || "https://myanimelist.net/anime/",
		mangaBaseUrl: siteConfig.mal?.mangaBaseUrl || "https://myanimelist.net/manga/",
		pagination: {
			limit: 100,
			delay: 100,
			maxTotal: 1e3
		},
		nsfw: siteConfig.mal?.nsfw ?? "off"
	};
	const isConfigured = malConfig.username.trim() !== "" && malConfig.clientId.trim() !== "";
	async function fetchAll(kind) {
		const { limit, delay, maxTotal } = malConfig.pagination;
		let offset = 0;
		const allItems = [];
		while (true) {
			if (maxTotal > 0 && allItems.length >= maxTotal) {
				console.log(`[MAL] Reached max fetch limit ${maxTotal}, stopping`);
				break;
			}
			const data = await fetchMalList({
				apiUrl: malConfig.apiUrl,
				username: malConfig.username,
				clientId: malConfig.clientId,
				kind,
				limit,
				offset
			});
			const batch = data.data || [];
			allItems.push(...batch);
			if (!data.paging?.next || batch.length === 0) break;
			offset += limit;
			await new Promise((resolve) => setTimeout(resolve, delay));
		}
		return allItems;
	}
	let animeItems = [];
	let mangaItems = [];
	let animeFailed = false;
	let mangaFailed = false;
	if (isConfigured) {
		console.log(`[MAL] 🌐 Prod mode - fetching list for user ${malConfig.username}...`);
		try {
			animeItems = await fetchAll("anime");
			console.log(`[MAL] Anime list: ${animeItems.length} items`);
		} catch (error) {
			console.error("[MAL] Failed to fetch anime list:", error);
			animeFailed = true;
		}
		try {
			mangaItems = await fetchAll("manga");
			console.log(`[MAL] Manga list: ${mangaItems.length} items`);
		} catch (error) {
			console.error("[MAL] Failed to fetch manga list:", error);
			mangaFailed = true;
		}
	}
	const fetchFailed = animeFailed && mangaFailed;
	animeItems = filterNsfw(animeItems, malConfig.nsfw, isMalNsfw);
	mangaItems = filterNsfw(mangaItems, malConfig.nsfw, isMalNsfw);
	const categories = [];
	if (animeItems.length > 0) categories.push({
		id: "anime",
		name: i18n(I18nKey.malCategoryAnime),
		count: animeItems.length,
		items: animeItems
	});
	if (mangaItems.length > 0) categories.push({
		id: "manga",
		name: i18n(I18nKey.malCategoryManga),
		count: mangaItems.length,
		items: mangaItems
	});
	const activeCategory = categories[0]?.id || "anime";
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": i18n(I18nKey.mal),
		"description": i18n(I18nKey.malSubtitle)
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"><div class="card-base z-10 px-4 sm:px-6 md:px-9 py-4 sm:py-6 relative w-full"><!-- 页面标题 --><div class="relative w-full mb-8"><div class="mb-6"><div class="flex items-center gap-3 mb-3"><div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "material-symbols:menu-book",
		"class": "text-[1.5rem]"
	})}</div><div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">${i18n(I18nKey.mal)}</div></div><p class="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">${i18n(I18nKey.malSubtitle)}</p><p class="text-xs text-neutral-500 dark:text-neutral-500 mt-2">${i18n(I18nKey.malLastUpdated)} ${buildTime}</p></div>${!isConfigured ? renderTemplate`<div class="text-center py-16"><div class="inline-flex items-center justify-center w-16 h-16 bg-(--btn-regular-bg) rounded-full mb-6 border border-(--line-divider)">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "material-symbols:settings",
		"class": "text-[2rem] text-(--btn-content)"
	})}</div><h2 class="text-xl font-semibold text-black/80 dark:text-white/80 mb-3">${i18n(I18nKey.malNotConfigured)}</h2><p class="text-black/60 dark:text-white/60 mb-4 max-w-md mx-auto">${i18n(I18nKey.malNotConfiguredDesc)}</p></div>` : fetchFailed ? renderTemplate`<div class="text-center py-16"><div class="inline-flex items-center justify-center w-16 h-16 bg-(--btn-regular-bg) rounded-full mb-6 border border-(--line-divider)">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "material-symbols:error-outline",
		"class": "text-[2rem] text-red-500"
	})}</div><h2 class="text-xl font-semibold text-black/80 dark:text-white/80 mb-3">${i18n(I18nKey.malFetchError)}</h2><p class="text-black/60 dark:text-white/60 mb-4 max-w-md mx-auto">${i18n(I18nKey.malFetchErrorDesc)}</p></div>` : categories.length > 0 ? renderTemplate`${renderComponent($$result2, "MalGrid", MalGrid, {
		"client:load": true,
		"categories": categories,
		"initialActiveCategory": activeCategory,
		"animeBaseUrl": malConfig.animeBaseUrl,
		"mangaBaseUrl": malConfig.mangaBaseUrl,
		"nsfw": malConfig.nsfw,
		"client:component-hydration": "load",
		"client:component-path": "@/components/pages/mal/MalGrid.svelte",
		"client:component-export": "default"
	})}` : renderTemplate`<div class="text-center py-16"><div class="inline-flex items-center justify-center w-16 h-16 bg-(--btn-regular-bg) rounded-full mb-6 border border-(--line-divider)">${renderComponent($$result2, "Icon", $$Icon, {
		"name": "material-symbols:settings",
		"class": "text-[2rem] text-(--btn-content)"
	})}</div><h2 class="text-xl font-semibold text-black/80 dark:text-white/80 mb-3">${isConfigured ? i18n(I18nKey.malEmpty) : i18n(I18nKey.malNotConfigured)}</h2><p class="text-black/60 dark:text-white/60 mb-4 max-w-md mx-auto">${isConfigured ? i18n(I18nKey.malEmptyReason) : i18n(I18nKey.malNotConfiguredDesc)}</p></div>`}</div></div></div>` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/myanimelist.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/myanimelist.astro";
var $$url = "/myanimelist/";
//#endregion
//#region \0virtual:astro:page:src/pages/myanimelist@_@astro
var page = () => myanimelist_exports;
//#endregion
export { page };
