import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, T as defineScriptVars, f as renderComponent, i as defineStyleVars, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import { D as renderScript } from "./Layout_CfOzU-i2.mjs";
import { r as renderEntry } from "./_astro_content_jT1wG5gk.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { a as getApiUrlList, c as processCoverImageSync, p as $$Icon, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { a as getTagUrl, c as i18n, f as siteConfig, n as getFileDirFromPath, p as I18nKey, r as getPostUrlBySlug, s as url } from "./url-utils_Cr7cEKDY.mjs";
import { a as getSortedPosts } from "./content-utils_CacKqhZP.mjs";
import { n as formatDateToYYYYMMDD } from "./date-utils_DVmTBVcA.mjs";
import { t as PageJump } from "./PageJump_wy5gGTL_.mjs";
import { n as $$CoverImage, t as $$PostMeta } from "./PostMeta_C5zTxvvI.mjs";
//#region src/components/common/Pagination.astro
createAstro("https://fengqiyunxing.github.io");
var $$Pagination = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pagination;
	const { page, style } = Astro.props;
	const HIDDEN = -1;
	const className = Astro.props.class;
	const VISIBLE = 5;
	let count = 1;
	let l = page.currentPage;
	let r = page.currentPage;
	while (0 < l - 1 && r + 1 <= page.lastPage && count + 2 <= VISIBLE) {
		count += 2;
		l--;
		r++;
	}
	while (0 < l - 1 && count < VISIBLE) {
		count++;
		l--;
	}
	while (r + 1 <= page.lastPage && count < VISIBLE) {
		count++;
		r++;
	}
	let pages = [];
	if (l > 1) pages.push(1);
	if (l === 3) pages.push(2);
	if (l > 3) pages.push(HIDDEN);
	for (let i = l; i <= r; i++) pages.push(i);
	if (r < page.lastPage - 2) pages.push(HIDDEN);
	if (r === page.lastPage - 2) pages.push(page.lastPage - 1);
	if (r < page.lastPage) pages.push(page.lastPage);
	const getPageUrl = (p) => {
		if (p === 1) return "/";
		return `/${p}/`;
	};
	const jumpHrefTemplate = url("/{page}/");
	const jumpHrefFirst = url("/");
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([className, "pagination-wrapper flex flex-col gap-4 items-center"], "class:list")}${addAttribute(style, "style")} data-astro-cid-jysyaamr><!-- 分页控件 --><div class="flex flex-row gap-3 justify-center" role="navigation"${addAttribute(i18n(I18nKey.postList), "aria-label")} data-astro-cid-jysyaamr><!-- 移动端简化版分页 --><div class="mobile-pagination flex items-center gap-3" data-astro-cid-jysyaamr><a${addAttribute(page.url.prev || "#", "href")}${addAttribute(i18n(I18nKey.paginationPrev), "aria-label")}${addAttribute(!page.url.prev ? "true" : "false", "aria-disabled")}${addAttribute(!page.url.prev ? "-1" : "0", "tabindex")}${addAttribute(["btn-card overflow-hidden rounded-(--radius-large) text-(--primary) w-11 h-11", {
		disabled: !page.url.prev,
		"opacity-50": !page.url.prev,
		"cursor-not-allowed": !page.url.prev
	}], "class:list")} data-astro-cid-jysyaamr>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chevron-left-rounded",
		"class": "text-[1.75rem]",
		"aria-hidden": "true",
		"data-astro-cid-jysyaamr": true
	})}</a><div class="btn-card flex items-center rounded-(--radius-large) px-4 h-11 gap-1.5" data-astro-cid-jysyaamr>${renderComponent($$result, "PageJump", PageJump, {
		"client:load": true,
		"variant": "current",
		"currentPage": page.currentPage,
		"lastPage": page.lastPage,
		"hrefTemplate": jumpHrefTemplate,
		"hrefFirst": jumpHrefFirst,
		"data-astro-cid-jysyaamr": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/common/PageJump.svelte",
		"client:component-export": "default"
	})}<span class="text-sm text-neutral-500 dark:text-neutral-500" data-astro-cid-jysyaamr>/</span><span class="text-base font-bold text-neutral-700 dark:text-neutral-300" data-astro-cid-jysyaamr>${page.lastPage}</span></div><a${addAttribute(page.url.next || "#", "href")}${addAttribute(i18n(I18nKey.paginationNext), "aria-label")}${addAttribute(!page.url.next ? "true" : "false", "aria-disabled")}${addAttribute(!page.url.next ? "-1" : "0", "tabindex")}${addAttribute(["btn-card overflow-hidden rounded-(--radius-large) text-(--primary) w-11 h-11", {
		disabled: !page.url.next,
		"opacity-50": !page.url.next,
		"cursor-not-allowed": !page.url.next
	}], "class:list")} data-astro-cid-jysyaamr>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chevron-right-rounded",
		"class": "text-[1.75rem]",
		"aria-hidden": "true",
		"data-astro-cid-jysyaamr": true
	})}</a></div><!-- 桌面端完整版分页 --><div class="desktop-pagination flex items-center gap-3" data-astro-cid-jysyaamr><a${addAttribute(page.url.prev || "#", "href")}${addAttribute(i18n(I18nKey.paginationPrev), "aria-label")}${addAttribute(!page.url.prev ? "true" : "false", "aria-disabled")}${addAttribute(!page.url.prev ? "-1" : "0", "tabindex")}${addAttribute(["btn-card overflow-hidden rounded-(--radius-large) text-(--primary) w-11 h-11", {
		disabled: !page.url.prev,
		"opacity-50": !page.url.prev,
		"cursor-not-allowed": !page.url.prev
	}], "class:list")} data-astro-cid-jysyaamr>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chevron-left-rounded",
		"class": "text-[1.75rem]",
		"aria-hidden": "true",
		"data-astro-cid-jysyaamr": true
	})}</a>${pages.map((p) => {
		if (p == HIDDEN) return renderTemplate`${renderComponent($$result, "PageJump", PageJump, {
			"client:load": true,
			"variant": "ellipsis",
			"currentPage": page.currentPage,
			"lastPage": page.lastPage,
			"hrefTemplate": jumpHrefTemplate,
			"hrefFirst": jumpHrefFirst,
			"data-astro-cid-jysyaamr": true,
			"client:component-hydration": "load",
			"client:component-path": "@/components/common/PageJump.svelte",
			"client:component-export": "default"
		})}`;
		if (p == page.currentPage) return renderTemplate`<div class="h-11 w-11 rounded-(--radius-large) bg-(--primary) flex items-center justify-center
                        font-bold text-white dark:text-black/70" aria-current="page" data-astro-cid-jysyaamr>${p}</div>`;
		return renderTemplate`<a${addAttribute(url(getPageUrl(p)), "href")}${addAttribute(`${i18n(I18nKey.paginationPage)} ${p}`, "aria-label")} class="btn-card w-11 h-11 rounded-(--radius-large) overflow-hidden active:scale-[0.85] font-bold text-neutral-700 dark:text-neutral-300" data-astro-cid-jysyaamr>${p}</a>`;
	})}<a${addAttribute(page.url.next || "#", "href")}${addAttribute(i18n(I18nKey.paginationNext), "aria-label")}${addAttribute(!page.url.next ? "true" : "false", "aria-disabled")}${addAttribute(!page.url.next ? "-1" : "0", "tabindex")}${addAttribute(["btn-card overflow-hidden rounded-(--radius-large) text-(--primary) w-11 h-11", {
		disabled: !page.url.next,
		"opacity-50": !page.url.next,
		"cursor-not-allowed": !page.url.next
	}], "class:list")} data-astro-cid-jysyaamr>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chevron-right-rounded",
		"class": "text-[1.75rem]",
		"aria-hidden": "true",
		"data-astro-cid-jysyaamr": true
	})}</a></div></div></div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/common/Pagination.astro", void 0);
//#endregion
//#region src/components/layout/PostStats.astro
createAstro("https://fengqiyunxing.github.io");
var $$PostStats = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostStats;
	const { published, words, minutes, showPublished = true, showWords = true, showReadingTime = true, showIcons = false, className = "" } = Astro.props;
	const hasPublished = showPublished;
	const hasWords = showWords && typeof words === "number";
	const hasMinutes = showReadingTime && typeof minutes === "number";
	const textClass = "text-xs font-medium";
	const dividerClass = "text-xs font-medium text-black/20 dark:text-white/20";
	const iconWrapperClass = "transition h-5 w-5 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-1.5";
	const iconClass = "text-sm";
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["flex flex-wrap items-center gap-2", className], "class:list")}>${hasPublished && renderTemplate`<div class="flex items-center">${showIcons && renderTemplate`<div${addAttribute(iconWrapperClass, "class")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:calendar-today-outline-rounded",
		"class": iconClass
	})}</div>`}<span${addAttribute(textClass, "class")}>${!showIcons && `${i18n(I18nKey.publishedAt)} `}${formatDateToYYYYMMDD(published)}</span></div>`}${hasPublished && hasWords && renderTemplate`<span${addAttribute(dividerClass, "class")}>|</span>`}${hasWords && renderTemplate`<div class="flex items-center">${showIcons && renderTemplate`<div${addAttribute(iconWrapperClass, "class")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:notes-rounded",
		"class": iconClass
	})}</div>`}<span${addAttribute(textClass, "class")}>${words} ${i18n(words === 1 ? I18nKey.wordCount : I18nKey.wordsCount)}</span></div>`}${(hasPublished || hasWords) && hasMinutes && renderTemplate`<span${addAttribute(dividerClass, "class")}>|</span>`}${hasMinutes && renderTemplate`<div class="flex items-center">${showIcons && renderTemplate`<div${addAttribute(iconWrapperClass, "class")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:schedule-outline-rounded",
		"class": iconClass
	})}</div>`}<span${addAttribute(textClass, "class")}>${minutes} ${i18n(minutes === 1 ? I18nKey.minuteCount : I18nKey.minutesCount)}</span></div>`}</div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/layout/PostStats.astro", void 0);
//#endregion
//#region src/components/layout/PostCard.astro
createAstro("https://fengqiyunxing.github.io");
var $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostCard;
	const { entry, title, url, published, tags, category, image, description, pinned, password, style, loading = "lazy" } = Astro.props;
	const className = Astro.props.class;
	const processedImage = processCoverImageSync(image, entry.id);
	const apiUrls = getApiUrlList(image, entry.id);
	const hasCover = processedImage !== void 0 && processedImage !== null && processedImage !== "";
	const coverWidth = "30%";
	const gridCoverFullWidth = siteConfig.postListLayout.grid.coverFullWidth ?? false;
	const descriptionLines = Math.max(0, Math.trunc(siteConfig.postListLayout.descriptionLines ?? 2));
	const metaConfig = siteConfig.postListLayout.meta ?? {};
	const showCategory = metaConfig.showCategory ?? true;
	const metaShowTags = metaConfig.showTags ?? true;
	const metaTagCount = metaConfig.tagCount !== void 0 ? Math.max(0, Math.trunc(metaConfig.tagCount)) : 1;
	const metaShowWords = metaConfig.showWords ?? true;
	const metaShowReadingTime = metaConfig.showReadingTime ?? true;
	const metaShowPublished = metaConfig.showPublished ?? true;
	const statsConfig = siteConfig.postListLayout.stats ?? {};
	const statsShowPublished = statsConfig.showPublished ?? true;
	const statsShowWords = statsConfig.showWords ?? true;
	const statsShowReadingTime = statsConfig.showReadingTime ?? true;
	const tagsPosition = siteConfig.postListLayout.tagsPosition ?? "meta";
	const showTagsInMeta = metaShowTags && tagsPosition === "meta";
	const showTagsAtBottom = metaShowTags && tagsPosition === "bottom";
	const bottomTagsAsText = (siteConfig.postListLayout.tagsBottomStyle ?? "chip") === "text";
	const descriptionClampLines = String(descriptionLines);
	const shouldClampDescription = descriptionLines > 0;
	const tagList = tags ?? [];
	const bottomTags = metaTagCount > 0 ? tagList.slice(0, metaTagCount) : tagList;
	const hiddenTags = tagList.slice(bottomTags.length);
	const hiddenTagCount = hiddenTags.length;
	const { remarkPluginFrontmatter } = await renderEntry(entry);
	const descriptionText = description || remarkPluginFrontmatter.excerpt || "";
	const words = remarkPluginFrontmatter.words;
	const minutes = remarkPluginFrontmatter.minutes;
	const $$definedVars = defineStyleVars([{
		coverWidth,
		descriptionClampLines
	}]);
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"post-card-wrapper",
		hasCover ? "has-cover" : "no-cover",
		pinned ? "pinned" : "",
		gridCoverFullWidth ? "" : "grid-cover-inset",
		"card-base flex flex-col-reverse w-full rounded-(--radius-large) overflow-hidden relative",
		className
	], "class:list")}${addAttribute(`${style}; ${$$definedVars}`, "style")} data-astro-cid-bcbntzfu><!-- pinned icon --><div${addAttribute([
		"post-card-content",
		"pl-4 md:pl-9 pr-4 md:pr-2 pt-4 md:pt-7 pb-4 md:pb-7 relative flex flex-col h-full",
		{
			"w-full md:w-[calc(100%-52px-12px)]": !hasCover,
			"w-full md:w-[calc(100%-var(--coverWidth)-1.5rem)]": hasCover
		}
	], "class:list")}${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu><a${addAttribute(url, "href")} class="post-card-title transition group w-full block font-bold mb-3 text-3xl text-90
        hover:text-(--primary) dark:hover:text-(--primary)
        active:text-(--title-active) dark:active:text-(--title-active)
        before:w-1 before:h-5 before:rounded-md before:bg-(--primary)
        before:absolute before:top-[35px] before:left-[18px] before:hidden md:before:block"${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu>${title}${password && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:lock-outline",
		"class": "inline text-2xl align-middle -translate-y-px",
		"data-astro-cid-bcbntzfu": true
	})}`}</a><!-- metadata -->${renderComponent($$result, "PostMetadata", $$PostMeta, {
		"published": published,
		"tags": tags,
		"showPublished": metaShowPublished,
		"showCategory": showCategory,
		"showTags": showTagsInMeta,
		"maxTags": metaTagCount > 0 ? metaTagCount : void 0,
		"showNoTags": true,
		"hideUpdateDate": true,
		"category": category || void 0,
		"pinned": pinned,
		"words": words,
		"minutes": minutes,
		"showWords": metaShowWords,
		"showReadingTime": metaShowReadingTime,
		"className": "mb-4 post-meta card-header-meta",
		"data-astro-cid-bcbntzfu": true
	})}<!-- description --><div${addAttribute(["transition text-75 md:pr-4 description grow", { "description-clamped": shouldClampDescription }], "class:list")}${addAttribute(descriptionText, "title")}${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu>${descriptionText}</div><!-- bottom tags（与 stats 二选一） -->${showTagsAtBottom && bottomTags.length > 0 && renderTemplate`<div${addAttribute(["post-card-bottom-tags flex flex-wrap items-center mt-auto pt-3", bottomTagsAsText ? "gap-x-3 gap-y-1" : "gap-1.5"], "class:list")}${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu>${bottomTags.map((tag) => renderTemplate`<a${addAttribute(getTagUrl(tag), "href")}${addAttribute(`View all posts with the ${tag.trim()} tag`, "aria-label")}${addAttribute(["transition text-xs font-medium", bottomTagsAsText ? "text-50 hover:text-(--primary)" : "tag-item px-2.5 py-1"], "class:list")}${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu>#${tag.trim()}</a>`)}${hiddenTagCount > 0 && renderTemplate`<span${addAttribute(hiddenTags.map((tag) => `#${tag.trim()}`).join(" "), "title")}${addAttribute(["text-xs font-medium", bottomTagsAsText ? "text-50" : "tag-item tag-item-static px-2.5 py-1"], "class:list")}${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu>+${hiddenTagCount}</span>`}</div>`}<!-- stats（与底部标签二选一） -->${!showTagsAtBottom && renderTemplate`${renderComponent($$result, "PostStats", $$PostStats, {
		"published": published,
		"words": words,
		"minutes": minutes,
		"showPublished": statsShowPublished,
		"showWords": statsShowWords,
		"showReadingTime": statsShowReadingTime,
		"showIcons": siteConfig.postListLayout.showStatsIcons,
		"className": "stats mt-auto pt-3 text-black/30 dark:text-white/30 gap-x-2",
		"data-astro-cid-bcbntzfu": true
	})}`}</div>${hasCover && renderTemplate`<a${addAttribute(url, "href")}${addAttribute(title, "aria-label")}${addAttribute([
		"post-card-image",
		"group",
		"w-full md:w-(--coverWidth)",
		"aspect-2/1 md:aspect-auto",
		"relative md:absolute md:top-4 md:bottom-4 md:right-4",
		"rounded-(--radius-large) md:rounded-xl overflow-hidden"
	], "class:list")}${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu><div class="absolute pointer-events-none z-10 w-full h-full group-hover:bg-black/30 group-active:bg-black/50 transition"${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu></div><div class="absolute pointer-events-none z-20 w-full h-full flex items-center justify-center "${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chevron-right-rounded",
		"class": "transition opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 text-white text-5xl",
		"data-astro-cid-bcbntzfu": true
	})}</div>${renderComponent($$result, "CoverImage", $$CoverImage, {
		"src": processedImage,
		"basePath": getFileDirFromPath(entry.filePath || ""),
		"alt": "Cover Image of the Post",
		"class": "w-full h-full transition-transform duration-300 group-hover:scale-110 group-active:scale-115",
		"preview": true,
		"loading": loading,
		"apiUrls": apiUrls,
		"data-astro-cid-bcbntzfu": true
	})}</a>`}${!hasCover && renderTemplate`<a${addAttribute(url, "href")}${addAttribute(title, "aria-label")}${addAttribute([
		"post-card-enter-btn",
		"flex btn-regular w-13",
		"absolute right-3 top-3 bottom-3 rounded-xl bg-(--enter-btn-bg)",
		"hover:bg-(--enter-btn-bg-hover) active:bg-(--enter-btn-bg-active) active:scale-95"
	], "class:list")}${addAttribute($$definedVars, "style")} data-astro-cid-bcbntzfu>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chevron-right-rounded",
		"class": "transition text-(--primary) text-4xl mx-auto",
		"data-astro-cid-bcbntzfu": true
	})}</a>`}</div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/layout/PostCard.astro", void 0);
//#endregion
//#region src/components/layout/PostPage.astro
createAstro("https://fengqiyunxing.github.io");
var $$PostPage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostPage;
	const { page } = Astro.props;
	let delay = 0;
	const interval = 50;
	const masonryEnabled = siteConfig.postListLayout.grid.masonry;
	const columnWidth = siteConfig.postListLayout.grid.columnWidth || 280;
	const defaultLayout = siteConfig.postListLayout.defaultMode || "list";
	const mobileDefaultLayout = siteConfig.postListLayout.mobileDefaultMode || defaultLayout;
	const initialLayoutClass = defaultLayout === "grid" ? "post-grid-auto grid-mode" : "flex flex-col gap-4 md:gap-4 list-mode";
	const coverPositionClass = siteConfig.postListLayout.coverPosition === "left" ? " cover-left" : "";
	return renderTemplate`${maybeRenderHead($$result)}<div id="post-list-container"${addAttribute(`transition-all duration-500 ease-in-out mb-4 ${initialLayoutClass}${coverPositionClass}`, "class")}${addAttribute(defaultLayout, "data-default-layout")}${addAttribute(mobileDefaultLayout, "data-mobile-default-layout")}${addAttribute(masonryEnabled, "data-masonry-enabled")}${addAttribute(columnWidth, "data-column-width")}${addAttribute(`--post-card-min-width: ${columnWidth}px;`, "style")} data-astro-cid-ebpqrusg>${page.data.map((entry, index) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
		"entry": entry,
		"title": entry.data.title,
		"tags": entry.data.tags,
		"category": entry.data.category,
		"published": entry.data.published,
		"updated": entry.data.updated,
		"url": getPostUrlBySlug(entry.id),
		"image": entry.data.image,
		"description": entry.data.description,
		"draft": entry.data.draft,
		"pinned": entry.data.pinned,
		"password": !!entry.data.password,
		"loading": index < 2 ? "eager" : "lazy",
		"class:list": "onload-animation post-card-item",
		"style": `animation-delay: calc(var(--content-delay) + ${delay++ * interval}ms);`,
		"data-astro-cid-ebpqrusg": true
	})}`)}</div><!-- 立即执行脚本：防止刷新时的布局闪烁 --><script>(function(){${defineScriptVars({
		defaultLayout,
		mobileDefaultLayout,
		columnWidth
	})}
  (function() {
    const savedLayout = localStorage.getItem('postListLayout');
    // 根据视口宽度确定有效的默认布局
    const effectiveDefault = window.innerWidth < 780 ? mobileDefaultLayout : defaultLayout;
    // 低于380px强制网格模式
    const effectiveLayout = window.innerWidth < 380 ? 'grid' : (savedLayout || effectiveDefault);

    if (effectiveLayout !== defaultLayout) {
      const container = document.getElementById('post-list-container');

      if (container) {
        // 禁用过渡动画
        container.style.transition = 'none';

        // 移除所有布局类
        container.classList.remove('list-mode', 'grid-mode', 'post-grid-auto', 'flex', 'flex-col', 'gap-4', 'md:gap-4');

        if (effectiveLayout === 'grid') {
          container.classList.add('grid-mode', 'post-grid-auto');
        } else {
          container.classList.add('list-mode', 'flex', 'flex-col', 'gap-4', 'md:gap-4');
        }

        // 强制重排后恢复过渡动画
        container.offsetHeight;
        container.style.transition = '';
      }
    }
  })();
})();<\/script>${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/components/layout/PostPage.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/layout/PostPage.astro", void 0);
//#endregion
//#region src/pages/[...page].astro
var ____page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var getStaticPaths = (async ({ paginate }) => {
	const allBlogPosts = await getSortedPosts();
	const pageSize = siteConfig.pagination.postsPerPage;
	return paginate(allBlogPosts, { pageSize });
});
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page } = Astro.props;
	const len = page.data.length;
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PostPage", $$PostPage, { "page": page })}${page.total > page.size && renderTemplate`${renderComponent($$result, "Pagination", $$Pagination, {
		"class": "mx-auto onload-animation",
		"page": page,
		"style": `animation-delay: calc(var(--content-delay) + ${len * 50}ms)`
	})}`}` })}${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/pages/[...page].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/[...page].astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/[...page].astro";
var $$url = "/[...page]/";
//#endregion
//#region \0virtual:astro:page:src/pages/[...page]@_@astro
var page = () => ____page__exports;
//#endregion
export { page };
