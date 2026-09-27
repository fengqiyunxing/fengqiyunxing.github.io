import { P as createAstro, S as maybeRenderHead, f as renderComponent, m as Fragment, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import { D as renderScript } from "./Layout_CfOzU-i2.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { f as coverImageConfig, l as shouldAddNoReferrer, n as $$ImageWrapper, o as getImageFormats, p as $$Icon, r as getLqipProps, s as getImageQuality } from "./MainGridLayout_B9O8q-AA.mjs";
import { a as getTagUrl, c as i18n, p as I18nKey, s as url, t as getCategoryUrl } from "./url-utils_Cr7cEKDY.mjs";
import { t as commentConfig } from "./commentConfig_DQHjcw7q.mjs";
import { n as formatDateToYYYYMMDD } from "./date-utils_DVmTBVcA.mjs";
//#region src/components/common/CoverImage.astro
createAstro("https://fengqiyunxing.github.io");
var $$CoverImage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CoverImage;
	const { id, src, alt, position = "center", basePath = "/", preview = false, layout = "constrained", formats = getImageFormats(), loading = "lazy", apiUrls = [], naturalHeight = false } = Astro.props;
	const configQuality = getImageQuality();
	const className = Astro.props.class;
	const isLocal = !(src.startsWith("/") || src.startsWith("http") || src.startsWith("https") || src.startsWith("data:"));
	const isPublic = src.startsWith("/");
	const imageClass = "w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-out";
	const imageStyle = `object-position: ${position};`;
	const lqipProps = isLocal ? getLqipProps(src, basePath) : isPublic ? getLqipProps(src, basePath, true) : getLqipProps(src);
	const widths = [828];
	const sizes = preview ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px" : "(max-width: 768px) 100vw, 828px";
	const quality = configQuality;
	const showLoading = coverImageConfig.showLoading ?? true;
	const remoteReferrerPolicy = !isLocal && shouldAddNoReferrer(isPublic ? url(src) : src) ? "no-referrer" : void 0;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(id, "id")}${addAttribute([className, "cover-image-container overflow-hidden relative"], "class:list")}${addAttribute(showLoading ? "true" : "false", "data-loading")}${addAttribute(apiUrls.length > 0 ? JSON.stringify(apiUrls) : void 0, "data-api-urls")}${addAttribute(naturalHeight ? "true" : void 0, "data-natural-height")} data-astro-cid-q3lybnyu><!-- LQIP 渐变占位 --><div class="lqip-placeholder absolute inset-0 pointer-events-none"${addAttribute(lqipProps.style, "style")} aria-hidden="true" data-astro-cid-q3lybnyu></div><!-- 加载动画 -->${showLoading && renderTemplate`<div class="loading-spinner absolute inset-0 flex items-center justify-center z-10" style="background-color: var(--card-bg);" data-astro-cid-q3lybnyu><div class="spinner" data-astro-cid-q3lybnyu></div></div>`}<!-- 错误提示 --><div class="error-message absolute inset-0 items-center justify-center z-20 hidden pointer-events-none" data-astro-cid-q3lybnyu><span class="text-white text-sm px-3 py-1 rounded-sm bg-black/50" data-astro-cid-q3lybnyu>Image API Error</span></div><!-- 本地图片 -->${isLocal && renderTemplate`${renderComponent($$result, "ImageWrapper", $$ImageWrapper, {
		"src": src,
		"basePath": basePath,
		"alt": alt || "",
		"class": "w-full h-full",
		"position": position,
		"loading": loading,
		"formats": formats,
		"quality": quality,
		"layout": layout,
		"width": 828,
		"widths": widths,
		"sizes": sizes,
		"dataCoverImg": true,
		"showLqip": false,
		"showOverlay": false,
		"data-astro-cid-q3lybnyu": true
	})}`}<!-- 远程图片 -->${!isLocal && renderTemplate`<img${addAttribute(isPublic ? url(src) : src, "src")}${addAttribute(alt || "", "alt")}${addAttribute(imageClass, "class")}${addAttribute(imageStyle, "style")}${addAttribute(loading, "loading")} decoding="async" data-cover-img data-remote="true"${addAttribute(remoteReferrerPolicy, "referrerpolicy")} data-astro-cid-q3lybnyu>`}</div>${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/components/common/CoverImage.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/common/CoverImage.astro", void 0);
//#endregion
//#region src/components/layout/PostMeta.astro
createAstro("https://fengqiyunxing.github.io");
var $$PostMeta = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostMeta;
	const { published, updated, category, tags, hideUpdateDate, hideTagsForMobile, isHome, className = "", id, showPublished = true, showCategory = true, showTags = true, maxTags, showNoTags = true, customPath, pinned, words, minutes, showWords = false, showReadingTime = false, password, variant = "default" } = Astro.props;
	const path = customPath || (id ? `/posts/${id}` : "");
	const visibleTags = typeof maxTags === "number" ? tags?.slice(0, maxTags) : tags;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"post-meta-root flex flex-wrap items-center gap-4 gap-x-4 gap-y-2",
		{
			"text-neutral-500 dark:text-neutral-400": variant === "default",
			"post-meta-cover text-white/90": variant === "cover"
		},
		className
	], "class:list")} data-astro-cid-g5no53fi>${pinned && renderTemplate`<div class="pinned-btn flex items-center gap-1 bg-(--btn-regular-bg) text-(--btn-content) rounded-md px-2 py-1.5 font-bold" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:pinboard",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}<span class="text-sm" data-astro-cid-g5no53fi>${i18n(I18nKey.pinned)}</span></div>`}${showPublished && renderTemplate`<div class="flex items-center" data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:calendar-today-outline-rounded",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><span class="text-50 text-sm font-medium" data-astro-cid-g5no53fi>${formatDateToYYYYMMDD(published)}</span></div>`}${showPublished && !hideUpdateDate && updated && updated.getTime() !== published.getTime() && renderTemplate`<div class="flex items-center" data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:edit-calendar-outline-rounded",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><span class="text-50 text-sm font-medium" data-astro-cid-g5no53fi>${formatDateToYYYYMMDD(updated)}</span></div>`}${showCategory && renderTemplate`<div class="flex items-center" data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:book-2-outline-rounded",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><div class="flex flex-row flex-nowrap items-center" data-astro-cid-g5no53fi><a${addAttribute(getCategoryUrl(category || ""), "href")}${addAttribute(`View all posts in the ${category || i18n(I18nKey.uncategorized)} category`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
              hover:text-(--primary) dark:hover:text-(--primary) whitespace-nowrap" data-astro-cid-g5no53fi>${category || i18n(I18nKey.uncategorized)}</a></div></div>`}${showTags && renderTemplate`<div${addAttribute(["post-meta-tags items-center", {
		flex: !hideTagsForMobile,
		"hidden md:flex": hideTagsForMobile
	}], "class:list")} data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:tag-rounded",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><div class="flex flex-row flex-nowrap items-center" data-astro-cid-g5no53fi>${visibleTags && visibleTags.length > 0 && visibleTags.map((tag, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div${addAttribute([{ hidden: i === 0 }, "meta-divider mx-1.5 text-(--meta-divider) text-sm"], "class:list")} data-astro-cid-g5no53fi>/</div><a${addAttribute(getTagUrl(tag), "href")}${addAttribute(`View all posts with the ${tag.trim()} tag`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                    hover:text-(--primary) dark:hover:text-(--primary) whitespace-nowrap" data-astro-cid-g5no53fi>${tag.trim()}</a>` })}`)}${showNoTags && !(visibleTags && visibleTags.length > 0) && renderTemplate`<div class="transition text-50 text-sm font-medium" data-astro-cid-g5no53fi>${i18n(I18nKey.noTags)}</div>`}</div></div>`}${!isHome && commentConfig.type === "twikoo" && commentConfig.twikoo?.visitorCount && id && renderTemplate`<div class="flex items-center" data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:visibility-outline-rounded",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><span class="text-50 text-sm font-medium mr-1" data-astro-cid-g5no53fi>${i18n(I18nKey.pageViews)}</span><span class="text-50 text-sm font-medium" id="twikoo_visitors" data-astro-cid-g5no53fi>${i18n(I18nKey.pageViewsLoading)}</span></div>`}${!isHome && commentConfig.type === "waline" && commentConfig.waline?.visitorCount && id && renderTemplate`<div class="flex items-center" data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:visibility-outline-rounded",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><span class="text-50 text-sm font-medium mr-1" data-astro-cid-g5no53fi>${i18n(I18nKey.pageViews)}</span><span class="text-50 text-sm font-medium waline-pageview-count"${addAttribute(path, "data-path")} data-astro-cid-g5no53fi>${i18n(I18nKey.pageViewsLoading)}</span></div>`}${!isHome && commentConfig.type === "artalk" && commentConfig.artalk?.visitorCount && id && renderTemplate`<div class="flex items-center" data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:visibility-outline-rounded",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><span class="text-50 text-sm font-medium mr-1" data-astro-cid-g5no53fi>${i18n(I18nKey.pageViews)}</span><span class="text-50 text-sm font-medium artalk-pv-count"${addAttribute(path, "data-path")} data-astro-cid-g5no53fi>${i18n(I18nKey.pageViewsLoading)}</span></div>`}${showWords && typeof words === "number" && renderTemplate`<div class="flex items-center" data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:notes-rounded",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><span class="text-50 text-sm font-medium" data-astro-cid-g5no53fi>${words} ${i18n(words === 1 ? I18nKey.wordCount : I18nKey.wordsCount)}</span></div>`}${showReadingTime && typeof minutes === "number" && renderTemplate`<div class="flex items-center" data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:schedule-outline-rounded",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><span class="text-50 text-sm font-medium" data-astro-cid-g5no53fi>${minutes} ${i18n(minutes === 1 ? I18nKey.minuteCount : I18nKey.minutesCount)}</span></div>`}${password && renderTemplate`<div class="flex items-center" data-astro-cid-g5no53fi><div class="meta-icon" data-astro-cid-g5no53fi>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:lock-outline",
		"class": "text-xl",
		"data-astro-cid-g5no53fi": true
	})}</div><span class="text-50 text-sm font-medium" data-astro-cid-g5no53fi>${i18n(I18nKey.postEncrypted)}</span></div>`}</div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/layout/PostMeta.astro", void 0);
//#endregion
export { $$CoverImage as n, $$PostMeta as t };
