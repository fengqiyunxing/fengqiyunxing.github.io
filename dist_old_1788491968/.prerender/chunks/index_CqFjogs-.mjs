import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import { C as dynamicConfig, E as templateExit, T as templateEnter } from "./Layout_CfOzU-i2.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { i as fetchMemos, n as $$ImageWrapper, p as $$Icon, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey, s as url } from "./url-utils_Cr7cEKDY.mjs";
import { t as commentConfig } from "./commentConfig_DQHjcw7q.mjs";
import { t as profileConfig } from "./profileConfig_DSpSrIO7.mjs";
import "./date-utils_DVmTBVcA.mjs";
/* empty css                          */
import { t as ClientPagination } from "./ClientPagination_DGmlmnj8.mjs";
import { onMount } from "svelte";
import * as $ from "svelte/internal/server";
import * as FancyboxModule from "@fancyapps/ui";
//#region src/components/pages/dynamic/dynamic-gallery.ts
function registerDynamicGallery() {
	if (customElements.get("dynamic-gallery")) return;
	class DynamicGallery extends HTMLElement {
		activeIndex = 0;
		images = [];
		connectedCallback() {
			if (this.dataset.ready) return;
			const source = this.dataset.sourceId ? document.getElementById(this.dataset.sourceId) : null;
			if (!source) return;
			const elements = [...source.querySelectorAll("img")];
			if (elements.length === 0) return;
			this.images = elements.map((element) => ({
				alt: element.alt,
				element,
				src: element.currentSrc || element.src
			}));
			this.buildGrid();
			this.buildThumbnails();
			this.bindControls();
			this.dataset.ready = "true";
			this.hidden = false;
			document.dispatchEvent(new CustomEvent("dynamic-gallery:ready"));
		}
		buildGrid() {
			const grid = this.querySelector("[data-gallery-grid]");
			if (!grid) return;
			grid.dataset.count = String(Math.min(this.images.length, 6));
			grid.dataset.layout = this.images.length === 1 ? "single" : "grid";
			this.images.slice(0, 6).forEach(({ element, alt }, index) => {
				const button = document.createElement("button");
				button.type = "button";
				button.className = "dynamic-gallery-grid-item";
				button.setAttribute("aria-label", (this.dataset.viewImage || "View image {index}").replace("{index}", String(index + 1)));
				if (this.images.length === 1) button.addEventListener("click", () => this.openLightbox(0));
				else button.addEventListener("click", () => this.open(index));
				const container = element.closest("center") ?? element.closest("figure") ?? element;
				element.alt = alt;
				button.append(element);
				if (index === 5 && this.images.length > 6) {
					const more = document.createElement("span");
					more.className = "dynamic-gallery-more";
					more.textContent = `+${this.images.length - 6}`;
					button.append(more);
				}
				grid.append(button);
				if (container !== element) container.remove();
			});
			for (const { element } of this.images.slice(6)) (element.closest("center") ?? element.closest("figure") ?? element).remove();
		}
		buildThumbnails() {
			const thumbnails = this.querySelector("[data-gallery-thumbnails]");
			if (!thumbnails) return;
			this.images.forEach(({ element, alt }, index) => {
				const button = document.createElement("button");
				button.type = "button";
				button.className = "dynamic-gallery-thumbnail";
				button.dataset.index = String(index);
				button.setAttribute("aria-label", (this.dataset.selectImage || "Select image {index}").replace("{index}", String(index + 1)));
				button.addEventListener("click", () => this.select(index));
				const thumbnail = element.cloneNode(true);
				thumbnail.alt = alt;
				thumbnail.removeAttribute("id");
				button.append(thumbnail);
				thumbnails.append(button);
			});
		}
		bindControls() {
			this.querySelector("[data-gallery-collapse]")?.addEventListener("click", () => this.collapse());
			this.querySelector("[data-gallery-prev]")?.addEventListener("click", () => this.select(this.activeIndex - 1));
			this.querySelector("[data-gallery-next]")?.addEventListener("click", () => this.select(this.activeIndex + 1));
			this.querySelector("[data-gallery-lightbox]")?.addEventListener("click", (event) => {
				event.preventDefault();
				FancyboxModule.Fancybox.show(this.images.map((image) => ({
					src: image.src,
					type: "image"
				})), { startIndex: this.activeIndex });
			});
		}
		open(index) {
			const grid = this.querySelector("[data-gallery-grid]");
			const viewer = this.querySelector("[data-gallery-viewer]");
			if (!grid || !viewer) return;
			grid.hidden = true;
			viewer.hidden = false;
			this.select(index);
		}
		collapse() {
			const grid = this.querySelector("[data-gallery-grid]");
			const viewer = this.querySelector("[data-gallery-viewer]");
			if (!grid || !viewer) return;
			grid.hidden = false;
			viewer.hidden = true;
		}
		openLightbox(index) {
			FancyboxModule.Fancybox.show(this.images.map((image) => ({
				src: image.src,
				type: "image"
			})), { startIndex: index });
		}
		select(index) {
			this.activeIndex = (index + this.images.length) % this.images.length;
			const counter = this.querySelector("[data-gallery-counter]");
			if (counter) counter.textContent = `${this.activeIndex + 1} / ${this.images.length}`;
			const image = this.images[this.activeIndex];
			const main = this.querySelector("[data-gallery-main]");
			if (!main) return;
			main.src = image.src;
			main.alt = image.alt;
			main.dataset.galleryIndex = String(this.activeIndex);
			this.querySelector("[data-gallery-lightbox]")?.setAttribute("data-src", image.src);
			this.querySelectorAll("[data-gallery-thumbnails] [data-index]").forEach((thumbnail) => {
				thumbnail.dataset.active = String(Number(thumbnail.dataset.index) === this.activeIndex);
			});
			this.querySelector(`[data-gallery-thumbnails] [data-index="${this.activeIndex}"]`)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center"
			});
		}
	}
	customElements.define("dynamic-gallery", DynamicGallery);
}
//#endregion
//#region src/components/pages/dynamic/dynamic-inline-comments.ts
function registerDynamicInlineComments() {
	if (customElements.get("dynamic-inline-comments")) return;
	class DynamicInlineComments extends HTMLElement {
		frame;
		connectedCallback() {
			if (this.dataset.ready) return;
			this.querySelector("[data-comment-toggle]")?.addEventListener("click", () => this.toggle());
			window.addEventListener("message", this.handleMessage);
			window.addEventListener("dynamic-theme-change", this.syncTheme);
			DynamicInlineComments.observeTheme();
			this.dataset.ready = "true";
		}
		disconnectedCallback() {
			window.removeEventListener("message", this.handleMessage);
			window.removeEventListener("dynamic-theme-change", this.syncTheme);
		}
		static observeTheme() {
			if (document.documentElement.dataset.dynamicThemeObserver) return;
			new MutationObserver(() => {
				window.dispatchEvent(new Event("dynamic-theme-change"));
			}).observe(document.documentElement, {
				attributes: true,
				attributeFilter: ["class"]
			});
			document.documentElement.dataset.dynamicThemeObserver = "true";
		}
		syncTheme = () => {
			this.frame?.contentWindow?.postMessage({
				type: "dynamic-comment-theme",
				dark: document.documentElement.classList.contains("dark")
			}, window.location.origin);
		};
		handleMessage = (event) => {
			if (event.origin !== window.location.origin || event.source !== this.frame?.contentWindow || event.data?.type !== "dynamic-comment-height") return;
			if (this.frame) this.frame.style.height = `${Math.max(240, Number(event.data.height))}px`;
		};
		toggle() {
			const panel = this.querySelector("[data-comment-panel]");
			if (!panel) return;
			const willOpen = panel.hidden;
			panel.hidden = !willOpen;
			this.dataset.expanded = String(willOpen);
			if (willOpen && !this.frame) this.load(panel);
		}
		load(panel) {
			const frame = document.createElement("iframe");
			frame.className = "dynamic-comment-frame";
			frame.src = this.dataset.src || "";
			frame.title = this.querySelector("[data-comment-toggle] span")?.textContent || "Comments";
			frame.loading = "lazy";
			frame.addEventListener("load", this.syncTheme);
			panel.append(frame);
			this.frame = frame;
		}
	}
	customElements.define("dynamic-inline-comments", DynamicInlineComments);
}
//#endregion
//#region src/components/pages/dynamic/DynamicFeed.svelte
function DynamicFeed($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { source, itemsPerPage, showComments, emptyText, noResultsText, loadingText, allYearsText, timezone, memos } = $$props;
		let entries = [];
		let filtered = [];
		let currentPage = 1;
		let loading = true;
		let failed = false;
		let list;
		let searchInput = null;
		let yearSelect = null;
		$.derived(() => filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
		function pageFromUrl() {
			return Math.max(1, Number(new URL(window.location.href).searchParams.get("page")) || 1);
		}
		function updateUrl(clearHash = false) {
			const current = new URL(window.location.href);
			if (currentPage > 1) current.searchParams.set("page", String(currentPage));
			else current.searchParams.delete("page");
			if (clearHash) current.hash = "";
			history.replaceState(history.state, "", current);
		}
		function applyFilters(resetPage = true) {
			const query = searchInput?.value.toLocaleLowerCase().trim() || "";
			const year = yearSelect?.value || "all";
			filtered = entries.filter((entry) => (year === "all" || String(new Date(entry.published).getUTCFullYear()) === year) && (!query || entry.searchText.includes(query)));
			if (resetPage) currentPage = 1;
			const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
			currentPage = Math.min(currentPage, totalPages);
			updateUrl(resetPage);
		}
		function populateYears() {
			if (!yearSelect) return;
			yearSelect.replaceChildren();
			const all = document.createElement("option");
			all.value = "all";
			all.textContent = allYearsText;
			yearSelect.append(all);
			const years = [...new Set(entries.map((entry) => new Date(entry.published).getUTCFullYear()))];
			for (const year of years) {
				const option = document.createElement("option");
				option.value = String(year);
				option.textContent = String(year);
				yearSelect.append(option);
			}
		}
		function goToPage(page) {
			currentPage = page;
			updateUrl(true);
			document.querySelector(".dynamic-page")?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
		onMount(() => {
			registerDynamicGallery();
			registerDynamicInlineComments();
			const page = list.closest(".dynamic-page");
			page?.querySelector("[data-dynamic-item-template]");
			searchInput = page?.querySelector("[data-dynamic-search]") ?? null;
			yearSelect = page?.querySelector("[data-year-select]") ?? null;
			const filter = () => applyFilters();
			searchInput?.addEventListener("input", filter);
			yearSelect?.addEventListener("change", filter);
			const load = async () => {
				try {
					if (memos?.enable) entries = await fetchMemos(memos.apiUrl, { parent: memos.parent });
					else {
						const response = await fetch(source);
						if (!response.ok) throw new Error(`HTTP ${response.status}`);
						entries = await response.json();
					}
					const countEl = document.querySelector("[data-dynamic-page-count]");
					if (countEl) countEl.textContent = String(entries.length);
					populateYears();
					currentPage = pageFromUrl();
					applyFilters(false);
					const anchorId = decodeURIComponent(window.location.hash.slice(1));
					if (anchorId) {
						const anchorIndex = filtered.findIndex((entry) => `dynamic-${entry.id.replace(/[^a-zA-Z0-9_-]/g, "-")}` === anchorId);
						if (anchorIndex >= 0) {
							currentPage = Math.floor(anchorIndex / itemsPerPage) + 1;
							updateUrl();
						}
					}
				} catch (error) {
					console.error("Failed to load dynamics", error);
					failed = true;
				} finally {
					loading = false;
				}
			};
			load();
			return () => {
				searchInput?.removeEventListener("input", filter);
				yearSelect?.removeEventListener("change", filter);
			};
		});
		if (loading) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="dynamic-loading card-base" role="status"><span class="dynamic-loading-spinner" aria-hidden="true"></span> <p>${$.escape(loadingText)}</p></div>`);
		} else if (failed || entries.length === 0) {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<div class="dynamic-empty card-base"><p>${$.escape(emptyText)}</p></div>`);
		} else if (filtered.length === 0) {
			$$renderer.push("<!--[2-->");
			$$renderer.push(`<div class="dynamic-no-results card-base"><p>${$.escape(noResultsText)}</p></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="dynamic-feed"></div> `);
		if (!loading && !failed) {
			$$renderer.push("<!--[0-->");
			ClientPagination($$renderer, {
				totalItems: filtered.length,
				itemsPerPage,
				currentPage,
				onPageChange: goToPage
			});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/components/pages/dynamic/DynamicGallery.astro
createAstro("https://fengqiyunxing.github.io");
var $$DynamicGallery = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DynamicGallery;
	const { sourceId } = Astro.props;
	return renderTemplate`${renderComponent($$result, "dynamic-gallery", "dynamic-gallery", {
		"class": "dynamic-gallery",
		"data-source-id": sourceId,
		"data-view-image": i18n(I18nKey.dynamicViewImage),
		"data-select-image": i18n(I18nKey.dynamicSelectImage),
		"hidden": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="dynamic-gallery-grid" data-gallery-grid></div><div class="dynamic-gallery-viewer" data-gallery-viewer hidden><div class="dynamic-gallery-toolbar"><button type="button" class="btn-plain dynamic-gallery-action" data-gallery-collapse>${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:close-fullscreen-rounded" })}<span>${i18n(I18nKey.dynamicCollapseGallery)}</span></button><button type="button" class="btn-plain dynamic-gallery-action"${addAttribute(`dynamic-${sourceId}`, "data-fancybox")} data-gallery-lightbox data-type="image">${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:zoom-in-rounded" })}<span>${i18n(I18nKey.dynamicViewOriginal)}</span></button><span class="dynamic-gallery-counter" data-gallery-counter aria-live="polite"></span></div><div class="dynamic-gallery-stage"><button type="button" class="btn-plain dynamic-gallery-nav dynamic-gallery-prev" data-gallery-prev${addAttribute(i18n(I18nKey.dynamicPreviousImage), "aria-label")}${addAttribute(i18n(I18nKey.dynamicPreviousImage), "title")}>${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:chevron-left-rounded" })}</button><img class="dynamic-gallery-main-image" data-gallery-main alt=""><button type="button" class="btn-plain dynamic-gallery-nav dynamic-gallery-next" data-gallery-next${addAttribute(i18n(I18nKey.dynamicNextImage), "aria-label")}${addAttribute(i18n(I18nKey.dynamicNextImage), "title")}>${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:chevron-right-rounded" })}</button></div><div class="dynamic-gallery-thumbnails" data-gallery-thumbnails></div></div>` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/pages/dynamic/DynamicGallery.astro", void 0);
//#endregion
//#region src/components/pages/dynamic/DynamicInlineComments.astro
createAstro("https://fengqiyunxing.github.io");
var $$DynamicInlineComments = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DynamicInlineComments;
	const { src } = Astro.props;
	return renderTemplate`${renderComponent($$result, "dynamic-inline-comments", "dynamic-inline-comments", {
		"class": "dynamic-inline-comments",
		"data-src": src
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<button type="button" class="dynamic-comment-toggle btn-plain" data-comment-toggle>${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:chat-bubble-outline-rounded" })}<span>${i18n(I18nKey.comments)}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:expand-more-rounded",
		"class": "dynamic-comment-chevron"
	})}</button><div class="dynamic-comment-panel" data-comment-panel hidden></div>` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/pages/dynamic/DynamicInlineComments.astro", void 0);
//#endregion
//#region src/components/pages/dynamic/DynamicItemTemplate.astro
var $$DynamicItemTemplate = createComponent(($$result, $$props, $$slots) => {
	const profileLabel = i18n(I18nKey.dynamicProfile).replace("{name}", profileConfig.name);
	const profileUrl = url(dynamicConfig.profileUrl || "/about/");
	return renderTemplate`<template data-dynamic-item-template>${templateEnter($$result)}${renderComponent($$result, "dynamic-entry", "dynamic-entry", {
		"class": "dynamic-entry card-base",
		"data-dynamic-entry": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article><header class="dynamic-entry-header"><a${addAttribute(profileUrl, "href")} class="dynamic-avatar"${addAttribute(profileLabel, "aria-label")}>${renderComponent($$result, "ImageWrapper", $$ImageWrapper, {
		"src": profileConfig.avatar || "",
		"alt": profileConfig.name,
		"widths": [96],
		"sizes": "48px",
		"loading": "lazy",
		"fadeIn": false
	})}</a><div class="dynamic-identity"><a${addAttribute(profileUrl, "href")} class="dynamic-author"${addAttribute(profileLabel, "aria-label")}><strong data-dynamic-author>${profileConfig.name}</strong></a><div class="dynamic-meta"><a class="dynamic-time" data-dynamic-permalink><time data-dynamic-time></time></a><span class="dynamic-location" data-dynamic-location hidden>${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:location-on-rounded" })}<span data-dynamic-location-text></span></span></div></div><span class="dynamic-pinned-badge" data-dynamic-pinned hidden>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:push-pin",
		"class": "size-3"
	})}${i18n(I18nKey.pinned)}</span><span class="dynamic-entry-decoration" aria-hidden="true">${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:format-quote-rounded" })}</span></header><div class="dynamic-content custom-md" data-dynamic-content></div>${renderComponent($$result, "DynamicGallery", $$DynamicGallery, { "sourceId": "dynamic-template-content" })}${renderComponent($$result, "DynamicInlineComments", $$DynamicInlineComments, { "src": "" })}</article>` })}${templateExit($$result)}</template>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/pages/dynamic/DynamicItemTemplate.astro", void 0);
//#endregion
//#region src/pages/dynamic/index.astro
var dynamic_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	if (!siteConfig.pages.dynamic) return Astro.redirect("/404/");
	const title = dynamicConfig.title || i18n(I18nKey.dynamic);
	const description = dynamicConfig.description || i18n(I18nKey.dynamicDescription);
	const itemsPerPage = Math.max(1, dynamicConfig.itemsPerPage ?? 10);
	const showInlineComments = Boolean(dynamicConfig.showComment !== false && commentConfig.type && commentConfig.type !== "none");
	const dataUrl = dynamicConfig.apiUrl?.startsWith("http") ? dynamicConfig.apiUrl : url(dynamicConfig.apiUrl || "/api/dynamic.json");
	const memos = dynamicConfig.memos;
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": title,
		"description": description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="dynamic-page" aria-labelledby="dynamic-page-title"><div><header class="dynamic-page-header card-base"><div class="dynamic-page-heading"><div class="dynamic-page-icon" aria-hidden="true">${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:forum-rounded" })}</div><div><h2 id="dynamic-page-title">${title}</h2>${description && renderTemplate`<p>${description}</p>`}</div></div><div class="dynamic-count"${addAttribute(i18n(I18nKey.dynamic), "aria-label")}>${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:dynamic-feed-rounded" })}<strong data-dynamic-page-count>0</strong><span>${i18n(I18nKey.dynamic)}</span></div><div class="dynamic-filter"><label class="dynamic-search">${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:search-rounded" })}<input type="search" data-dynamic-search${addAttribute(i18n(I18nKey.dynamicSearch), "placeholder")}></label><label class="dynamic-year-select">${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:calendar-month-rounded" })}<select data-year-select${addAttribute(i18n(I18nKey.year), "aria-label")}><option value="all">${i18n(I18nKey.dynamicAllYears)}</option></select>${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:arrow-drop-down-rounded" })}</label></div></header>${renderComponent($$result, "DynamicFeed", DynamicFeed, {
		"client:load": true,
		"source": dataUrl,
		"itemsPerPage": itemsPerPage,
		"showComments": showInlineComments,
		"emptyText": i18n(I18nKey.dynamicEmpty),
		"noResultsText": i18n(I18nKey.dynamicNoResults),
		"loadingText": i18n(I18nKey.dynamicLoading),
		"allYearsText": i18n(I18nKey.dynamicAllYears),
		"timezone": siteConfig.timezone || "UTC",
		"memos": memos,
		"client:component-hydration": "load",
		"client:component-path": "@/components/pages/dynamic/DynamicFeed.svelte",
		"client:component-export": "default"
	})}${renderComponent($$result, "DynamicItemTemplate", $$DynamicItemTemplate, {})}</div></section>` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/dynamic/index.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/dynamic/index.astro";
var $$url = "/dynamic/";
//#endregion
//#region \0virtual:astro:page:src/pages/dynamic/index@_@astro
var page = () => dynamic_exports;
//#endregion
export { page };
