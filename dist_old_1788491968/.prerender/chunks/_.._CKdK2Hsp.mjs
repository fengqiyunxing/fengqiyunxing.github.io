import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { M as unescapeHTML, P as createAstro, S as maybeRenderHead, f as renderComponent, m as Fragment, v as renderSlot, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import { D as renderScript, a as buildPublisherEntity, c as getSiteLogo, l as toAbsoluteImageInfo, n as buildBreadcrumbList, o as toAbsoluteUrl, r as buildPersonEntity, s as getAuthorAvatarUrl } from "./Layout_CfOzU-i2.mjs";
import { r as renderEntry } from "./_astro_content_jT1wG5gk.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { a as getApiUrlList, c as processCoverImageSync, d as licenseConfig, f as coverImageConfig, p as $$Icon, t as $$MainGridLayout, u as Icon } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, n as getFileDirFromPath, o as removeFileExtension, p as I18nKey, r as getPostUrlBySlug, s as url, t as getCategoryUrl } from "./url-utils_Cr7cEKDY.mjs";
import { t as profileConfig } from "./profileConfig_DSpSrIO7.mjs";
import { t as sponsorConfig } from "./sponsorConfig_DdggGDQo.mjs";
import { a as getSortedPosts, i as getSeriesPosts, n as getRelatedPosts } from "./content-utils_CacKqhZP.mjs";
import { n as formatDateToYYYYMMDD } from "./date-utils_DVmTBVcA.mjs";
import { n as $$CoverImage, t as $$PostMeta } from "./PostMeta_C5zTxvvI.mjs";
import { t as $$Markdown } from "./Markdown_CVggKuht.mjs";
import { t as $$Index } from "./comment_CqO4CP1n.mjs";
import { t as $$EncryptedContent } from "./EncryptedContent_CwM6YZtB.mjs";
import { onMount } from "svelte";
import * as $ from "svelte/internal/server";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
//#region src/components/features/EncryptedPost.astro
createAstro("https://fengqiyunxing.github.io");
var $$EncryptedPost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$EncryptedPost;
	return renderTemplate`${renderComponent($$result, "EncryptedContent", $$EncryptedContent, { ...Astro.props }, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/EncryptedPost.astro", void 0);
//#endregion
//#region src/components/features/KatexManager.astro
var $$KatexManager = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate``;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/KatexManager.astro", void 0);
//#endregion
//#region src/components/misc/License.astro
createAstro("https://fengqiyunxing.github.io");
var $$License = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$License;
	const { title, pubDate, author, sourceLink, licenseName, licenseUrl } = Astro.props;
	const className = Astro.props.class;
	const profileConf = profileConfig;
	const licenseConf = licenseConfig;
	const postUrl = sourceLink || decodeURIComponent(Astro.url.toString());
	function getLicenseIcon(name) {
		const n = name.toLowerCase();
		if (/cc0|creative commons zero/.test(n)) return "fa7-brands:creative-commons-zero";
		if (/public domain|公共领域/.test(n)) return "fa7-brands:creative-commons-pd";
		if (/^cc($|[\s-])|creative commons|知识共享/.test(n)) return "fa7-brands:creative-commons";
		if (/\b(mit|apache|bsd|isc|mulan|unlicense)\b|gpl|mpl\b/.test(n)) return "fa7-brands:osi";
		return "fa7-regular:copyright";
	}
	const licenseIcon = licenseName ? getLicenseIcon(licenseName) : licenseConf.icon || getLicenseIcon(licenseConf.name);
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`relative transition overflow-hidden bg-(--license-block-bg) py-5 px-6 ${className}`, "class")}><div class="transition font-bold text-black/75 dark:text-white/75">${title}</div><a${addAttribute(postUrl, "href")} class="link text-(--primary) break-all">${postUrl}</a><div class="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2"><div><div class="transition text-black/30 dark:text-white/30 text-sm">${i18n(I18nKey.author)}</div><div class="transition text-black/75 dark:text-white/75 line-clamp-2">${author || profileConf.name}</div></div><div><div class="transition text-black/30 dark:text-white/30 text-sm">${i18n(I18nKey.publishedAt)}</div><div class="transition text-black/75 dark:text-white/75 line-clamp-2">${formatDateToYYYYMMDD(pubDate)}</div></div><div><div class="transition text-black/30 dark:text-white/30 text-sm">${i18n(I18nKey.license)}</div><a${addAttribute(licenseName ? licenseUrl || void 0 : licenseConf.url, "href")} target="_blank" class="link text-(--primary) line-clamp-2">${licenseName || licenseConf.name}</a></div></div>${renderComponent($$result, "Icon", $$Icon, {
		"name": licenseIcon,
		"class": "transition text-[15rem] absolute pointer-events-none right-6 top-1/2 -translate-y-1/2 text-black/5 dark:text-white/5"
	})}</div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/misc/License.astro", void 0);
//#endregion
//#region src/components/misc/RecommendedPost.astro
createAstro("https://fengqiyunxing.github.io");
var $$RecommendedPost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RecommendedPost;
	const { relatedPosts, currentPostId } = Astro.props;
	const apiUrl = url("/api/allPostMeta.json");
	const relatedIds = JSON.stringify(relatedPosts.map((p) => p.id));
	const noRelatedPostsText = i18n(I18nKey.noRelatedPosts);
	const noRandomPostsText = i18n(I18nKey.noRandomPosts);
	return renderTemplate`${maybeRenderHead($$result)}<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"><div class="card-base p-5 md:p-6 flex flex-col"><div class="flex items-center gap-2 pb-3 mb-1 border-b border-(--line-divider)">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:signpost",
		"class": "text-xl text-(--primary)"
	})}<span class="text-base font-bold text-black/75 dark:text-white/75 transition">${i18n(I18nKey.relatedPosts)}</span><span class="ml-auto text-xs px-2 py-0.5 rounded-full bg-(--btn-regular-bg) text-(--btn-content) transition">${i18n(I18nKey.smartRecommend)}</span></div>${relatedPosts.length > 0 ? relatedPosts.map((post, idx) => renderTemplate`<a${addAttribute(getPostUrlBySlug(post.id), "href")}${addAttribute([
		"group flex items-center gap-3 px-3 py-3 -mx-1 rounded-lg",
		"transition-all hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]",
		idx < relatedPosts.length - 1 && "border-b border-dashed border-(--line-divider)"
	], "class:list")}><div class="shrink-0 w-6 h-6 rounded-md bg-(--enter-btn-bg) text-(--primary) flex items-center justify-center text-sm font-bold transition">${idx + 1}</div><div class="flex-1 min-w-0"><div class="font-bold text-sm text-black/75 dark:text-white/75 truncate transition group-hover:text-(--primary)">${post.data.title}</div><div class="flex items-center gap-1.5 text-xs text-black/30 dark:text-white/30 transition mt-0.5">${post.data.category && renderTemplate`<span class="shrink-0 px-1.5 py-0.5 rounded-sm bg-black/5 dark:bg-white/10 text-black/40 dark:text-white/40">${post.data.category}</span>`}<span class="truncate">${post.data.description || formatDateToYYYYMMDD(post.data.published)}</span></div></div>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:chevron-right-rounded",
		"class": "shrink-0 text-xl text-black/15 dark:text-white/15 transition group-hover:text-(--primary) group-hover:translate-x-0.5"
	})}</a>`) : renderTemplate`<div class="flex-1 flex flex-col items-center justify-center min-h-40 text-black/30 dark:text-white/30 transition">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:article-outline",
		"class": "text-4xl mb-3 opacity-50"
	})}<span class="text-sm">${noRelatedPostsText}</span></div>`}</div><div class="card-base p-5 md:p-6 flex flex-col"><div class="flex items-center gap-2 pb-3 mb-1 border-b border-(--line-divider)">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:recommend",
		"class": "text-xl text-(--primary)"
	})}<span class="text-base font-bold text-black/75 dark:text-white/75 transition">${i18n(I18nKey.randomPosts)}</span><span class="ml-auto text-xs px-2 py-0.5 rounded-full bg-(--btn-regular-bg) text-(--btn-content) transition">${i18n(I18nKey.randomRecommend)}</span></div><div id="random-posts-list" class="flex-1 flex items-center justify-center"${addAttribute(apiUrl, "data-api-url")}${addAttribute(currentPostId, "data-current-id")}${addAttribute(relatedIds, "data-related-ids")}><div id="random-posts-empty" style="display:none" class="flex flex-col items-center text-black/30 dark:text-white/30 transition">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:article-outline",
		"class": "text-4xl mb-3 opacity-50"
	})}<span class="text-sm">${noRandomPostsText}</span></div></div></div></div><script>
function renderRandomPosts() {
  var container = document.getElementById('random-posts-list');
  if (!container) return;

  var apiUrl = container.dataset.apiUrl;
  var currentId = container.dataset.currentId;
  var relatedIds = JSON.parse(container.dataset.relatedIds || '[]');
  var excludeSet = {};
  excludeSet[currentId] = true;
  for (var i = 0; i < relatedIds.length; i++) excludeSet[relatedIds[i]] = true;

  function render(allPosts) {
    var emptyTemplate = document.getElementById('random-posts-empty');
    container.innerHTML = '';
    var candidates = allPosts.filter(function(p) {
      return !excludeSet[p.id] && !p.password;
    });

    // Fisher-Yates shuffle
    for (var i = candidates.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = candidates[i];
      candidates[i] = candidates[j];
      candidates[j] = tmp;
    }

    var picked = candidates.slice(0, 5);

    if (picked.length === 0) {
      container.className = 'flex-1 flex items-center justify-center';
      if (emptyTemplate) {
        var emptyEl = emptyTemplate.cloneNode(true);
        emptyEl.style.display = '';
        container.appendChild(emptyEl);
      }
      return;
    }

    container.className = 'flex-1';

    var fragment = document.createDocumentFragment();
    var base = apiUrl.replace(/\\/api\\/allPostMeta\\.json$/, '');

    picked.forEach(function(post, idx) {
      var href = base + '/posts/' + post.id + '/';

      var a = document.createElement('a');
      a.href = href;
      a.className = 'group flex items-center gap-3 px-3 py-3 -mx-1 rounded-lg transition-all hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]'
        + (idx < picked.length - 1 ? ' border-b border-dashed border-(--line-divider)' : '');

      var num = document.createElement('div');
      num.className = 'shrink-0 w-6 h-6 rounded-md bg-(--enter-btn-bg) text-(--primary) flex items-center justify-center text-sm font-bold transition';
      num.textContent = String(idx + 1);

      var content = document.createElement('div');
      content.className = 'flex-1 min-w-0';

      var title = document.createElement('div');
      title.className = 'font-bold text-sm text-black/75 dark:text-white/75 truncate transition group-hover:text-(--primary)';
      title.textContent = post.title;

      var meta = document.createElement('div');
      meta.className = 'flex items-center gap-1.5 text-xs text-black/30 dark:text-white/30 transition mt-0.5';

      if (post.category) {
        var cat = document.createElement('span');
        cat.className = 'shrink-0 px-1.5 py-0.5 rounded-sm bg-black/5 dark:bg-white/10 text-black/40 dark:text-white/40';
        cat.textContent = post.category;
        meta.appendChild(cat);
      }

      var desc = document.createElement('span');
      desc.className = 'truncate';
      desc.textContent = post.description || new Date(post.published).toISOString().substring(0, 10);
      meta.appendChild(desc);

      content.appendChild(title);
      content.appendChild(meta);

      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('class', 'shrink-0 text-xl text-black/15 dark:text-white/15 transition group-hover:text-(--primary) group-hover:translate-x-0.5');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('fill', 'currentColor');
      path.setAttribute('d', 'M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 1 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z');
      svg.appendChild(path);

      a.appendChild(num);
      a.appendChild(content);
      a.appendChild(svg);
      fragment.appendChild(a);
    });

    container.appendChild(fragment);
  }

  // 使用缓存避免 swup 导航时重复请求
  if (window.__allPostMetaCache) {
    render(window.__allPostMetaCache);
  } else {
    fetch(apiUrl)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        window.__allPostMetaCache = data;
        render(data);
      });
  }
}

renderRandomPosts();
// 防止 Swup 切页重跑脚本时重复注册监听器（renderRandomPosts 每次切页仍需立即执行以渲染新页面）
if (!window.__recommendedPostInit) {
  window.__recommendedPostInit = true;
  document.addEventListener('swup:contentReplaced', renderRandomPosts);
}
<\/script>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/misc/RecommendedPost.astro", void 0);
//#endregion
//#region src/components/misc/SeriesNav.astro
createAstro("https://fengqiyunxing.github.io");
var $$SeriesNav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SeriesNav;
	const { seriesName, posts, currentPostId } = Astro.props;
	return renderTemplate`${posts.length > 0 && renderTemplate`${maybeRenderHead($$result)}<div class="series-nav my-3 rounded-xl border border-(--primary)/25 overflow-hidden" data-pagefind-ignore data-astro-cid-jq7o7yxf><button type="button" aria-expanded="false" class="series-nav-toggle flex w-full items-center gap-2 px-3 py-1.5 rounded-lg bg-(--btn-plain-bg-hover) group cursor-pointer select-none text-left" data-astro-cid-jq7o7yxf>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:format-list-bulleted",
		"aria-hidden": "true",
		"class": "shrink-0 text-lg text-(--primary)",
		"data-astro-cid-jq7o7yxf": true
	})}<span class="font-bold text-base text-black/80 dark:text-white/80 transition group-hover:text-(--primary)" data-astro-cid-jq7o7yxf>${i18n(I18nKey.seriesPartOf)}：${seriesName}</span><span class="ml-auto shrink-0 text-xs px-2 py-0.5 rounded-full bg-(--btn-regular-bg) text-(--btn-content) transition" data-astro-cid-jq7o7yxf>${posts.length}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:keyboard-arrow-down-rounded",
		"aria-hidden": "true",
		"class": "details-arrow shrink-0 text-[1.25rem] text-(--primary) transition-transform duration-300",
		"data-astro-cid-jq7o7yxf": true
	})}</button><div class="series-nav-content overflow-hidden max-h-0 transition-[max-height,opacity] duration-300 ease-in-out" data-astro-cid-jq7o7yxf><ol class="flex flex-col mt-1" data-astro-cid-jq7o7yxf>${posts.map((post, idx) => {
		const part = i18n(I18nKey.seriesPart).replace("{n}", String(idx + 1));
		const isCurrent = !!currentPostId && post.id === currentPostId;
		const rowClass = [
			"group flex items-center gap-3 px-3 py-1.5 rounded-lg transition-all",
			!isCurrent && "hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]",
			idx < posts.length - 1 && "border-b border-dashed border-(--line-divider)"
		];
		return isCurrent ? renderTemplate`<li${addAttribute(rowClass, "class:list")} data-astro-cid-jq7o7yxf><span class="shrink-0 w-6 h-6 rounded-md bg-(--enter-btn-bg) text-(--primary) flex items-center justify-center text-sm font-bold transition" data-astro-cid-jq7o7yxf>${idx + 1}</span><span class="flex-1 min-w-0 font-bold text-sm text-black/75 dark:text-white/75 truncate transition group-hover:text-(--primary)" data-astro-cid-jq7o7yxf>${post.data.title}</span><span aria-current="page"${addAttribute(part, "title")} class="ml-auto shrink-0 text-xs px-1.5 py-0.5 rounded-sm bg-(--enter-btn-bg) text-(--primary)" data-astro-cid-jq7o7yxf>${i18n(I18nKey.seriesThisArticle)}</span></li>` : renderTemplate`<li data-astro-cid-jq7o7yxf><a${addAttribute(getPostUrlBySlug(post.id), "href")}${addAttribute(part, "title")}${addAttribute(part, "aria-label")}${addAttribute(rowClass, "class:list")} data-astro-cid-jq7o7yxf><span class="shrink-0 w-6 h-6 rounded-md bg-(--enter-btn-bg) text-(--primary) flex items-center justify-center text-sm font-bold transition" data-astro-cid-jq7o7yxf>${idx + 1}</span><span class="flex-1 min-w-0 font-bold text-sm text-black/75 dark:text-white/75 truncate transition group-hover:text-(--primary)" data-astro-cid-jq7o7yxf>${post.data.title}</span>${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:chevron-right-rounded",
			"aria-hidden": "true",
			"class": "shrink-0 text-xl text-black/15 dark:text-white/15 transition group-hover:text-(--primary) group-hover:translate-x-0.5",
			"data-astro-cid-jq7o7yxf": true
		})}</a></li>`;
	})}</ol></div></div>`}<script>
  function onSeriesNavToggle(e) {
    var btn = e.target && e.target.closest ? e.target.closest('.series-nav-toggle') : null;
    if (!btn) return;
    var box = btn.closest('.series-nav');
    var content = box ? box.querySelector('.series-nav-content') : null;
    if (!content) return;

    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    var next = !isOpen;
    btn.setAttribute('aria-expanded', String(next));
    content.setAttribute('data-open', String(next));
    content.style.maxHeight = next ? content.scrollHeight + 'px' : '0px';

    if (next) {
      box.classList.add('is-expanded');
    } else {
      // 收起动画走完后再恢复圆角（与 max-height 过渡时长一致）
      setTimeout(function () {
        if (box && btn.getAttribute('aria-expanded') !== 'true') {
          box.classList.remove('is-expanded');
        }
      }, 300);
    }
  }

  // 事件委托，Swup 切页后新内容也能直接工作；避免重复注册（@swup/scripts-plugin 会重跑内联脚本）
  if (!window.__seriesNavInit) {
    window.__seriesNavInit = true;
    document.addEventListener('click', onSeriesNavToggle);
  }
<\/script>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/misc/SeriesNav.astro", void 0);
//#endregion
//#region src/components/misc/SharePoster.svelte
function SharePoster($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let title = $$props["title"];
		let author = $$props["author"];
		let description = $.fallback($$props["description"], "");
		let pubDate = $$props["pubDate"];
		let coverImage = $.fallback($$props["coverImage"], null);
		let coverImageSelector = $.fallback($$props["coverImageSelector"], null);
		let url = $$props["url"];
		let siteTitle = $$props["siteTitle"];
		let avatar = $.fallback($$props["avatar"], null);
		let avatarSelector = $.fallback($$props["avatarSelector"], null);
		onMount(() => {
			const temp = document.createElement("div");
			temp.style.color = "var(--primary)";
			temp.style.display = "none";
			document.body.appendChild(temp);
			const computedColor = getComputedStyle(temp).color;
			document.body.removeChild(temp);
			if (computedColor);
		});
		$$renderer.push(`<button class="btn-regular rounded-lg h-12 px-6 gap-2 hover:scale-105 active:scale-95 whitespace-nowrap" aria-label="Generate Share Poster">`);
		Icon($$renderer, { icon: "material-symbols:share" });
		$$renderer.push(`<!----> <span>${$.escape(i18n(I18nKey.shareArticle))}</span></button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		$.bind_props($$props, {
			title,
			author,
			description,
			pubDate,
			coverImage,
			coverImageSelector,
			url,
			siteTitle,
			avatar,
			avatarSelector
		});
	});
}
//#endregion
//#region src/pages/posts/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
async function getStaticPaths() {
	return (await getSortedPosts()).map((entry) => {
		return {
			params: { slug: removeFileExtension(entry.id) },
			props: { entry }
		};
	});
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { entry } = Astro.props;
	const { Content, headings } = await renderEntry(entry);
	const { remarkPluginFrontmatter } = await renderEntry(entry);
	const bannerPostMeta = {
		title: entry.data.title,
		description: entry.data.description,
		published: entry.data.published,
		updated: entry.data.updated,
		words: remarkPluginFrontmatter.words,
		minutes: remarkPluginFrontmatter.minutes
	};
	const processedImage = processCoverImageSync(entry.data.image, entry.id);
	const apiUrls = getApiUrlList(entry.data.image, entry.id);
	const showPostCover = Boolean(processedImage && coverImageConfig.enableInPost);
	const usePostCoverOverlay = showPostCover && (coverImageConfig.enableInPostOverlay ?? true);
	const getDirectImageUrl = (src) => {
		if (!src) return null;
		if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//") || src.startsWith("data:")) return src;
		return src.startsWith("/") ? url(src) : null;
	};
	const posterCoverUrl = showPostCover ? null : getDirectImageUrl(processedImage);
	const posterCoverSelector = showPostCover ? "#post-cover img" : null;
	const posterAvatarUrl = getDirectImageUrl(profileConfig.avatar);
	const posterAvatarSelector = profileConfig.avatar ? ".profile-avatar-image img" : null;
	dayjs.extend(utc);
	const coverBasePath = getFileDirFromPath(entry.filePath || "");
	const coverImage = await toAbsoluteImageInfo(processedImage, coverBasePath, siteConfig.site_url) ?? void 0;
	const aboutUrl = toAbsoluteUrl("/about/", siteConfig.site_url) ?? siteConfig.site_url;
	const authorAvatarUrl = await getAuthorAvatarUrl();
	const authorPerson = buildPersonEntity({
		site: siteConfig.site_url,
		profileConfig,
		authorUrl: aboutUrl,
		avatarUrl: authorAvatarUrl,
		description: profileConfig.bio
	});
	const publisher = buildPublisherEntity({
		site: siteConfig.site_url,
		siteConfig,
		logo: await getSiteLogo()
	});
	const breadcrumbItems = [{
		name: i18n(I18nKey.home),
		url: toAbsoluteUrl("/", siteConfig.site_url) ?? siteConfig.site_url
	}];
	if (entry.data.category) breadcrumbItems.push({
		name: entry.data.category,
		url: toAbsoluteUrl(getCategoryUrl(entry.data.category), siteConfig.site_url) ?? siteConfig.site_url
	});
	breadcrumbItems.push({
		name: entry.data.title,
		url: Astro.url.toString()
	});
	const breadcrumbList = buildBreadcrumbList(breadcrumbItems);
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "BlogPosting",
				headline: entry.data.title,
				description: entry.data.description || entry.data.title,
				keywords: entry.data.tags.length ? entry.data.tags.join(", ") : void 0,
				author: { "@id": authorPerson["@id"] },
				publisher: { "@id": publisher["@id"] },
				...coverImage ? { image: {
					"@type": "ImageObject",
					url: coverImage.url,
					contentUrl: coverImage.url,
					...coverImage.width ? { width: coverImage.width } : {},
					...coverImage.height ? { height: coverImage.height } : {}
				} } : {},
				datePublished: entry.data.published.toISOString(),
				...entry.data.category ? { articleSection: entry.data.category } : {},
				...remarkPluginFrontmatter.words ? { wordCount: remarkPluginFrontmatter.words } : {},
				...entry.data.updated ? { dateModified: entry.data.updated.toISOString() } : {},
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": Astro.url.toString()
				},
				url: Astro.url.toString(),
				inLanguage: entry.data.lang ? entry.data.lang.replace("_", "-") : siteConfig.lang.replace("_", "-")
			},
			authorPerson,
			publisher,
			breadcrumbList
		]
	};
	const relatedPosts = await getRelatedPosts(entry, 5);
	const seriesData = await getSeriesPosts(entry);
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": entry.data.title,
		"description": entry.data.description,
		"lang": entry.data.lang,
		"setOGTypeArticle": true,
		"postSlug": entry.id,
		"postCoverImage": coverImage?.url,
		"postCategory": entry.data.category || void 0,
		"headings": headings,
		"encrypted": !!entry.data.password,
		"bannerPostMeta": bannerPostMeta
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative mb-4"><div id="post-container"${addAttribute(["card-base z-10 px-6 md:px-9 pt-6 pb-4 relative w-full ", {}], "class:list")}>${usePostCoverOverlay && processedImage && renderTemplate`<div class="-mx-6 md:-mx-9 -mt-6 mb-6 h-48 md:h-64 relative onload-animation">${renderComponent($$result, "CoverImage", $$CoverImage, {
			"id": "post-cover",
			"src": processedImage,
			"basePath": getFileDirFromPath(entry.filePath || ""),
			"class": "h-full",
			"preview": false,
			"apiUrls": apiUrls
		})}<div class="absolute inset-x-4 top-3 z-10 flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-xs font-medium text-white drop-shadow-[0_1px_2px_rgb(0_0_0/0.9)]"><div class="flex items-center gap-1 whitespace-nowrap">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:notes-rounded",
			"class": "text-base"
		})}<span>${remarkPluginFrontmatter.words}${" " + i18n(remarkPluginFrontmatter.words === 1 ? I18nKey.wordCount : I18nKey.wordsCount)}</span></div><div class="flex items-center gap-1 whitespace-nowrap">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:schedule-outline-rounded",
			"class": "text-base"
		})}<span>${remarkPluginFrontmatter.minutes}${" " + i18n(remarkPluginFrontmatter.minutes === 1 ? I18nKey.minuteCount : I18nKey.minutesCount)}</span></div>${entry.data.password && renderTemplate`<div class="flex items-center gap-1 whitespace-nowrap">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:lock-outline",
			"class": "text-base"
		})}<span>${i18n(I18nKey.postEncrypted)}</span></div>`}</div><div class="absolute inset-x-0 bottom-0 px-6 md:px-9 pt-10 pb-3 bg-gradient-to-t from-black/80 via-black/45 to-transparent"><div data-pagefind-body data-pagefind-weight="10" data-pagefind-meta="title" class="mb-2 text-xl md:text-2xl font-bold leading-tight text-white">${entry.data.title}</div>${renderComponent($$result, "PostMetadata", $$PostMeta, {
			"variant": "cover",
			"className": "gap-x-4 gap-y-1",
			"published": entry.data.published,
			"updated": entry.data.updated,
			"category": entry.data.category || void 0,
			"tags": entry.data.tags,
			"id": entry.id
		})}</div></div>`}<!-- word count and reading time -->${!usePostCoverOverlay && renderTemplate`<div class="flex flex-row text-black/30 dark:text-white/30 gap-5 mb-3 transition onload-animation"><div class="flex flex-row items-center"><div class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-2">${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:notes-rounded" })}</div><div class="text-sm">${remarkPluginFrontmatter.words}${" " + i18n(I18nKey.wordsCount)}</div></div><div class="flex flex-row items-center"><div class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-2">${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:schedule-outline-rounded" })}</div><div class="text-sm">${remarkPluginFrontmatter.minutes}${" " + i18n(remarkPluginFrontmatter.minutes === 1 ? I18nKey.minuteCount : I18nKey.minutesCount)}</div></div>${entry.data.password && renderTemplate`<div class="flex flex-row items-center"><div class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-2">${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:lock-outline" })}</div><div class="text-sm">${i18n(I18nKey.postEncrypted)}</div></div>`}</div>`}<!-- title -->${!usePostCoverOverlay && renderTemplate`<div class="relative onload-animation"><div data-pagefind-body data-pagefind-weight="10" data-pagefind-meta="title" class="transition w-full block font-bold mb-3
                        text-3xl md:text-[2.25rem]/[2.75rem]
                        text-black/90 dark:text-white/90
                        md:before:w-1 before:h-5 before:rounded-md before:bg-(--primary)
                        before:absolute before:top-3 before:-left-4.5">${entry.data.title}</div></div>`}<!-- metadata -->${!usePostCoverOverlay && renderTemplate`<div class="onload-animation">${renderComponent($$result, "PostMetadata", $$PostMeta, {
			"className": "mb-5",
			"published": entry.data.published,
			"updated": entry.data.updated,
			"tags": entry.data.tags,
			"category": entry.data.category || void 0,
			"id": entry.id
		})}${!showPostCover && renderTemplate`<div class="border-(--line-divider) border-dashed border-b mt-3 mb-5"></div>`}</div>`}${seriesData && renderTemplate`${renderComponent($$result, "SeriesNav", $$SeriesNav, {
			"seriesName": seriesData.seriesName,
			"posts": seriesData.posts,
			"currentPostId": entry.id
		})}`}${showPostCover && !usePostCoverOverlay && processedImage && renderTemplate`<div class="mt-4">${renderComponent($$result, "CoverImage", $$CoverImage, {
			"id": "post-cover",
			"src": processedImage,
			"basePath": getFileDirFromPath(entry.filePath || ""),
			"class": "mb-8 rounded-xl onload-animation",
			"preview": false,
			"naturalHeight": true,
			"apiUrls": apiUrls
		})}</div>`}${entry.data.password ? renderTemplate`${renderComponent($$result, "EncryptedPost", $$EncryptedPost, {
			"password": entry.data.password,
			"slug": entry.id,
			"hint": entry.data.passwordHint
		}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Markdown", $$Markdown, { "class": "mb-6 markdown-content onload-animation" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}${(siteConfig.post.sharePoster || sponsorConfig.showButtonInPost && siteConfig.pages.sponsor) && renderTemplate`<div class="mb-6 rounded-xl onload-animation"><div class="p-6 bg-(--license-block-bg) rounded-xl"><div class="flex flex-col sm:flex-row items-center justify-between gap-4"><div class="flex items-center gap-3 flex-1"><div class="h-12 w-12 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70 shrink-0">${renderComponent($$result, "Icon", $$Icon, {
			"name": sponsorConfig.showButtonInPost && siteConfig.pages.sponsor ? "material-symbols:favorite" : "material-symbols:share",
			"class": "text-2xl"
		})}</div><div><h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">${sponsorConfig.showButtonInPost && siteConfig.pages.sponsor ? i18n(I18nKey.sponsorButton) : i18n(I18nKey.shareOnSocial)}</h3><p class="text-sm text-neutral-600 dark:text-neutral-400">${sponsorConfig.showButtonInPost && siteConfig.pages.sponsor ? i18n(I18nKey.sponsorButtonText) : i18n(I18nKey.shareOnSocialDescription)}</p></div></div><div class="flex items-center gap-3">${siteConfig.post.sharePoster && renderTemplate`${renderComponent($$result, "SharePoster", SharePoster, {
			"client:load": true,
			"title": entry.data.title,
			"author": entry.data.author || profileConfig.name,
			"description": entry.data.description || entry.data.title,
			"pubDate": formatDateToYYYYMMDD(entry.data.published),
			"coverImage": posterCoverUrl,
			"coverImageSelector": posterCoverSelector,
			"url": Astro.url.href,
			"siteTitle": siteConfig.title,
			"avatar": posterAvatarUrl,
			"avatarSelector": posterAvatarSelector,
			"client:component-hydration": "load",
			"client:component-path": "@/components/misc/SharePoster.svelte",
			"client:component-export": "default"
		})}`}${sponsorConfig.showButtonInPost && siteConfig.pages.sponsor && renderTemplate`<a${addAttribute(url("/sponsor/"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-(--primary) text-white dark:text-black/70 rounded-lg font-medium hover:bg-(--primary)/80 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"><span>${i18n(I18nKey.sponsor)}</span>${renderComponent($$result, "Icon", $$Icon, {
			"name": "fa7-solid:arrow-right",
			"class": "text-sm"
		})}</a>`}</div></div></div></div>`}${licenseConfig.enable && renderTemplate`${renderComponent($$result, "License", $$License, {
			"title": entry.data.title,
			"id": entry.id,
			"pubDate": entry.data.published,
			"author": entry.data.author,
			"sourceLink": entry.data.sourceLink,
			"licenseName": entry.data.licenseName,
			"licenseUrl": entry.data.licenseUrl,
			"class": "mb-6 rounded-xl license-container onload-animation"
		})}`}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Markdown", $$Markdown, { "class": "mb-6 markdown-content onload-animation" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}${(siteConfig.post.sharePoster || sponsorConfig.showButtonInPost && siteConfig.pages.sponsor) && renderTemplate`<div class="mb-6 rounded-xl onload-animation"><div class="p-6 bg-(--license-block-bg) rounded-xl"><div class="flex flex-col sm:flex-row items-center justify-between gap-4"><div class="flex items-center gap-3 flex-1"><div class="h-12 w-12 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70 shrink-0">${renderComponent($$result, "Icon", $$Icon, {
			"name": sponsorConfig.showButtonInPost && siteConfig.pages.sponsor ? "material-symbols:favorite" : "material-symbols:share",
			"class": "text-2xl"
		})}</div><div><h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">${sponsorConfig.showButtonInPost && siteConfig.pages.sponsor ? i18n(I18nKey.sponsorButton) : i18n(I18nKey.shareOnSocial)}</h3><p class="text-sm text-neutral-600 dark:text-neutral-400">${sponsorConfig.showButtonInPost && siteConfig.pages.sponsor ? i18n(I18nKey.sponsorButtonText) : i18n(I18nKey.shareOnSocialDescription)}</p></div></div><div class="flex items-center gap-3">${siteConfig.post.sharePoster && renderTemplate`${renderComponent($$result, "SharePoster", SharePoster, {
			"client:load": true,
			"title": entry.data.title,
			"author": entry.data.author || profileConfig.name,
			"description": entry.data.description || entry.data.title,
			"pubDate": formatDateToYYYYMMDD(entry.data.published),
			"coverImage": posterCoverUrl,
			"coverImageSelector": posterCoverSelector,
			"url": Astro.url.href,
			"siteTitle": siteConfig.title,
			"avatar": posterAvatarUrl,
			"avatarSelector": posterAvatarSelector,
			"client:component-hydration": "load",
			"client:component-path": "@/components/misc/SharePoster.svelte",
			"client:component-export": "default"
		})}`}${sponsorConfig.showButtonInPost && siteConfig.pages.sponsor && renderTemplate`<a${addAttribute(url("/sponsor/"), "href")} class="inline-flex items-center gap-2 px-6 py-3 bg-(--primary) text-white dark:text-black/70 rounded-lg font-medium hover:bg-(--primary)/80 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"><span>${i18n(I18nKey.sponsor)}</span>${renderComponent($$result, "Icon", $$Icon, {
			"name": "fa7-solid:arrow-right",
			"class": "text-sm"
		})}</a>`}</div></div></div></div>`}${licenseConfig.enable && renderTemplate`${renderComponent($$result, "License", $$License, {
			"title": entry.data.title,
			"id": entry.id,
			"pubDate": entry.data.published,
			"author": entry.data.author,
			"sourceLink": entry.data.sourceLink,
			"licenseName": entry.data.licenseName,
			"licenseUrl": entry.data.licenseUrl,
			"class": "mb-6 rounded-xl license-container onload-animation"
		})}`}` })}`}</div></div>${siteConfig.post.showLastModified && (() => {
			const lastModified = dayjs(entry.data.updated || entry.data.published);
			const dateStr = lastModified.format("YYYY-MM-DD");
			const outdatedThreshold = siteConfig.post.outdatedThreshold ?? 1;
			return renderTemplate`<div id="outdated-card" class="card-base p-6 mb-4 hidden"${addAttribute(lastModified.toISOString(), "data-date")}${addAttribute(outdatedThreshold, "data-threshold")}><div class="flex items-center gap-2"><div class="transition h-9 w-9 rounded-lg overflow-hidden relative flex items-center justify-center mr-0">${renderComponent($$result, "Icon", $$Icon, {
				"name": "material-symbols:history-rounded",
				"class": "text-4xl text-(--primary) transition-transform group-hover:translate-x-0.5 bg-(--enter-btn-bg) p-2 rounded-md"
			})}</div><div class="flex flex-col gap-0.1"><div class="text-[1.0rem] leading-tight text-black/75 dark:text-white/75">${i18n(I18nKey.lastModifiedPrefix)}${dateStr}<span id="days-ago-text"${addAttribute(i18n(I18nKey.lastModifiedDaysAgo), "data-template")}></span></div><p id="outdated-warning" class="text-[0.8rem] leading-tight text-black/75 dark:text-white/75 hidden">${i18n(I18nKey.lastModifiedOutdated)}</p></div></div></div>`;
		})()}${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/pages/posts/[...slug].astro?astro&type=script&index=0&lang.ts")}<div class="flex flex-col md:flex-row justify-between mb-4 gap-4 overflow-hidden w-full"><a${addAttribute(entry.data.nextSlug ? getPostUrlBySlug(entry.data.nextSlug) : url("/"), "href")} class="w-full font-bold overflow-hidden active:scale-95"><div class="btn-card rounded-2xl w-full h-15 max-w-full px-4 flex items-center justify-start! gap-4">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:chevron-left-rounded",
			"class": "text-[2rem] text-(--primary)"
		})}<div class="overflow-hidden transition text-ellipsis whitespace-nowrap max-w-[calc(100%-3rem)] text-black/75 dark:text-white/75">${entry.data.nextTitle || i18n(I18nKey.home)}</div></div></a><a${addAttribute(entry.data.prevSlug ? getPostUrlBySlug(entry.data.prevSlug) : url("/"), "href")} class="w-full font-bold overflow-hidden active:scale-95"><div class="btn-card rounded-2xl w-full h-15 max-w-full px-4 flex items-center justify-end! gap-4"><div class="overflow-hidden transition text-ellipsis whitespace-nowrap max-w-[calc(100%-3rem)] text-black/75 dark:text-white/75">${entry.data.prevTitle || i18n(I18nKey.home)}</div>${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:chevron-right-rounded",
			"class": "text-[2rem] text-(--primary)"
		})}</div></a></div>${renderComponent($$result, "RecommendedPost", $$RecommendedPost, {
			"relatedPosts": relatedPosts,
			"currentPostId": entry.id
		})}${entry.data.comment && !entry.data.password && renderTemplate`${renderComponent($$result, "Comment", $$Index, { "post": entry })}`}`,
		"head": ($$result) => renderTemplate`${renderComponent($$result, "KatexManager", $$KatexManager, { "slot": "head" })}<script type="application/ld+json">${unescapeHTML(JSON.stringify(jsonLd))}<\/script>`
	})}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/posts/[...slug].astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/posts/[...slug].astro";
var $$url = "/posts/[...slug]/";
//#endregion
//#region \0virtual:astro:page:src/pages/posts/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
