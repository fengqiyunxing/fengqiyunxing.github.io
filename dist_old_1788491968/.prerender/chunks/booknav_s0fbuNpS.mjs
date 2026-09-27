import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey } from "./url-utils_Cr7cEKDY.mjs";
//#region src/config/booknavConfig.ts
var booknavPageConfig = {
	title: "",
	description: "",
	favicon: {
		enabled: true,
		api: "https://a.favicon.im/{domain}"
	}
};
var booknavConfig = [
	{
		id: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		desc: "写代码时离不开的站点",
		weight: 100,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "全球最大的代码托管平台",
				icon: "fa7-brands:github",
				weight: 10
			},
			{
				title: "MDN Web Docs",
				url: "https://developer.mozilla.org",
				desc: "最权威的 Web 技术文档",
				weight: 9
			},
			{
				title: "Astro",
				url: "https://astro.build",
				desc: "内容驱动型网站的 Web 框架",
				weight: 8
			},
			{
				title: "Svelte",
				url: "https://svelte.dev",
				desc: "把组件编译成高效原生 JS 的框架",
				weight: 7
			},
			{
				title: "Tailwind CSS",
				url: "https://tailwindcss.com",
				desc: "一个功能强大且灵活的 CSS 框架",
				weight: 6
			}
		]
	},
	{
		id: "design",
		name: "设计",
		icon: "material-symbols:palette-outline-rounded",
		desc: "配色、图标与灵感来源",
		weight: 90,
		items: [{
			title: "Iconify",
			url: "https://icon-sets.iconify.design",
			desc: "海量开源图标集合搜索",
			weight: 10
		}, {
			title: "iconfont",
			url: "https://www.iconfont.cn",
			desc: "阿里巴巴矢量图标库",
			weight: 9
		}]
	},
	{
		id: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		desc: "顺手的在线小工具",
		weight: 80,
		items: [
			{
				title: "TinyPNG",
				url: "https://tinypng.com",
				desc: "在线压缩 PNG / JPEG 图片",
				weight: 10
			},
			{
				title: "Squoosh",
				url: "https://squoosh.app",
				desc: "Google 出品的图片压缩与格式转换",
				weight: 9
			},
			{
				title: "Carbon",
				url: "https://carbon.now.sh",
				desc: "把代码片段生成漂亮的图片",
				weight: 8
			}
		]
	}
];
//#endregion
//#region src/utils/booknav-utils.ts
var ICON_NAME_PATTERN = /^[\w-]+:[\w-]+$/;
function getBooknavDomain(url) {
	try {
		return new URL(url).hostname;
	} catch {
		return "";
	}
}
function buildFaviconUrl(api, domain) {
	if (!api || !domain) return "";
	return api.replaceAll("{domain}", encodeURIComponent(domain));
}
function getBooknavLetter(title) {
	return (title || "?").trim().charAt(0).toUpperCase() || "?";
}
function resolveBooknavIcon(item, favicon) {
	const icon = item.icon?.trim();
	if (icon) {
		if (/^https?:\/\//.test(icon) || icon.startsWith("/")) return {
			kind: "image",
			value: icon
		};
		if (ICON_NAME_PATTERN.test(icon)) return {
			kind: "icon",
			value: icon
		};
		return {
			kind: "image",
			value: icon
		};
	}
	if (favicon.enabled) {
		const faviconUrl = buildFaviconUrl(favicon.api, getBooknavDomain(item.url));
		if (faviconUrl) return {
			kind: "image",
			value: faviconUrl
		};
	}
	return {
		kind: "letter",
		value: getBooknavLetter(item.title)
	};
}
function getEnabledBooknavGroups() {
	return booknavConfig.filter((group) => group.enabled !== false).map((group) => ({
		...group,
		items: group.items.filter((item) => item.enabled !== false).sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0))
	})).filter((group) => group.items.length > 0).sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0));
}
//#endregion
//#region src/pages/booknav.astro
var booknav_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Booknav,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$Booknav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Booknav;
	if (!siteConfig.pages.booknav) return Astro.redirect("/404/");
	const resolvedGroups = getEnabledBooknavGroups().map((group) => ({
		...group,
		items: group.items.map((item) => ({
			...item,
			domain: getBooknavDomain(item.url),
			letter: getBooknavLetter(item.title),
			resolvedIcon: resolveBooknavIcon(item, booknavPageConfig.favicon)
		}))
	}));
	const totalCount = resolvedGroups.reduce((sum, g) => sum + g.items.length, 0);
	const title = booknavPageConfig.title || i18n(I18nKey.booknav);
	const description = booknavPageConfig.description || i18n(I18nKey.booknavDescription);
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": title,
		"description": description
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"><div class="card-base z-10 px-9 py-6 relative w-full"><!-- 页面标题和描述 --><div class="mb-4"><div class="flex items-center gap-3 mb-3"><div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:bookmarks",
			"class": "text-[1.5rem]"
		})}</div><div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">${title}</div></div>${description && renderTemplate`<p class="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">${description}</p>`}</div>${totalCount > 0 ? renderTemplate`${renderComponent($$result, "booknav-list", "booknav-list", {}, { "default": ($$result) => renderTemplate`<div class="relative mb-3">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:search",
			"class": "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 text-lg pointer-events-none"
		})}<input type="text" data-search${addAttribute(i18n(I18nKey.searchBooknav), "placeholder")} class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-(--line-divider) bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-(--primary) focus:ring-1 focus:ring-(--primary) outline-none transition-all duration-200 text-sm"></div><div class="flex flex-wrap gap-2 mb-6">${resolvedGroups.map((group) => renderTemplate`<button${addAttribute(group.id, "data-target")} class="category-pill px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 inline-flex items-center">${group.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			"name": group.icon,
			"class": "text-base"
		})}`}${group.name}<span class="pill-count">${group.items.length}</span></button>`)}</div><div class="booknav-groups">${resolvedGroups.map((group) => renderTemplate`<section${addAttribute(group.id, "id")} class="booknav-group mb-8 last:mb-2"${addAttribute(group.id, "data-group-id")}><div class="booknav-group-heading flex items-center gap-2 mb-3 pb-2 border-b border-(--line-divider)">${group.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			"name": group.icon,
			"class": "text-(--primary) text-xl shrink-0"
		})}`}<div class="flex items-baseline gap-2 min-w-0"><h2 class="text-lg font-bold text-neutral-900 dark:text-neutral-100 shrink-0">${group.name}</h2>${group.desc && renderTemplate`<span class="text-xs text-neutral-500 dark:text-neutral-400 truncate">${group.desc}</span>`}</div></div><div class="booknav-grid">${group.items.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(item.desc || item.title, "title")}${addAttribute(item.title.toLowerCase(), "data-title")}${addAttribute((item.desc || "").toLowerCase(), "data-desc")}${addAttribute(item.domain.toLowerCase(), "data-domain")} class="booknav-card group flex items-center gap-3 p-3 rounded-xl border border-(--line-divider) hover:border-(--primary) hover:bg-(--card-bg) transition-all duration-300 hover:shadow-lg relative overflow-hidden"><div class="absolute inset-0 bg-(--primary) opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div><div class="booknav-icon relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"${addAttribute(item.letter, "data-letter")}>${item.resolvedIcon.kind === "icon" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			"name": item.resolvedIcon.value,
			"class": "text-6xl text-neutral-700 dark:text-neutral-200"
		})}`}${item.resolvedIcon.kind === "image" && renderTemplate`<img${addAttribute(item.resolvedIcon.value, "src")}${addAttribute(item.title, "alt")} loading="lazy" decoding="async" referrerpolicy="no-referrer" class="w-full h-full object-contain">`}${item.resolvedIcon.kind === "letter" && renderTemplate`<span class="booknav-letter">${item.letter}</span>`}</div>${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:arrow-outward-rounded",
			"class": "absolute top-3 right-3 text-(--primary) text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
		})}<div class="grow min-w-0 flex flex-col justify-center"><div class="font-bold text-base text-neutral-900 dark:text-neutral-100 group-hover:text-(--primary) transition-colors truncate pr-4">${item.title}</div><div class="text-sm text-neutral-500 dark:text-neutral-400 truncate">${item.desc || item.domain}</div></div></a>`)}</div></section>`)}</div><div class="booknav-empty hidden flex-col items-center justify-center py-12 text-neutral-400 dark:text-neutral-500">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:search-off-rounded",
			"class": "text-4xl mb-3"
		})}<div class="text-sm">${i18n(I18nKey.searchNoResults)}</div></div>` })}` : renderTemplate`<div class="flex flex-col items-center justify-center py-16 text-neutral-400 dark:text-neutral-500">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:bookmarks",
			"class": "text-6xl mb-4 opacity-50"
		})}<p class="text-lg">${i18n(I18nKey.booknavEmpty)}</p></div>`}</div></div>`,
		"head": ($$result) => renderTemplate`<script>
    if (!customElements.get("booknav-list")) {
      class BooknavList extends HTMLElement {
        constructor() {
          super();
          this.handleClick = this.handleClick.bind(this);
          this.handleInput = this.handleInput.bind(this);
          this.handleIconError = this.handleIconError.bind(this);
        }

        connectedCallback() {
          this.addEventListener("click", this.handleClick);

          // 首屏时自定义元素会在子节点解析完成前升级，此刻 querySelector 取不到输入框，
          // 因此用事件委托监听冒泡上来的 input 事件
          this.addEventListener("input", this.handleInput);

          // error 事件不冒泡，必须用捕获阶段监听图标加载失败
          this.addEventListener("error", this.handleIconError, true);
        }

        disconnectedCallback() {
          this.removeEventListener("click", this.handleClick);
          this.removeEventListener("input", this.handleInput);
          this.removeEventListener("error", this.handleIconError, true);
        }

        // 搜索框输入时过滤书签
        handleInput(e) {
          if (!e.target.matches?.("[data-search]")) return;
          this.applyFilters();
        }

        // 图标加载失败时降级为首字母块
        handleIconError(e) {
          const img = e.target;
          if (!img || img.tagName !== "IMG") return;
          const wrapper = img.closest(".booknav-icon");
          if (!wrapper || wrapper.dataset.fallback === "done") return;
          wrapper.dataset.fallback = "done";
          const letter = wrapper.dataset.letter || "?";
          wrapper.innerHTML = \`<span class="booknav-letter">\${letter}</span>\`;
        }

        // 点击分类胶囊平滑滚动到对应分组
        handleClick(e) {
          const button = e.target.closest("button[data-target]");
          if (!button) return;

          const section = this.querySelector(
            \`[data-group-id="\${button.dataset.target}"]\`,
          );
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }

        // 按标题/描述/域名过滤书签，并隐藏变空的分组
        applyFilters() {
          const input = this.querySelector("[data-search]");
          const query = (input?.value || "").toLowerCase().trim();
          const sections = this.querySelectorAll("[data-group-id]");

          let hasVisible = false;

          sections.forEach((section) => {
            const cards = section.querySelectorAll(".booknav-card");
            let groupVisible = 0;

            cards.forEach((card) => {
              const match =
                !query ||
                (card.dataset.title || "").includes(query) ||
                (card.dataset.desc || "").includes(query) ||
                (card.dataset.domain || "").includes(query);

              if (match) {
                card.style.display = "";
                card.classList.add("animate-fade-in-up");
                groupVisible++;
              } else {
                card.style.display = "none";
                card.classList.remove("animate-fade-in-up");
              }
            });

            section.style.display = groupVisible > 0 ? "" : "none";
            if (groupVisible > 0) hasVisible = true;
          });

          const emptyEl = this.querySelector(".booknav-empty");
          if (emptyEl) {
            emptyEl.classList.toggle("hidden", hasVisible);
            emptyEl.classList.toggle("flex", !hasVisible);
          }
        }
      }
      customElements.define("booknav-list", BooknavList);
    }
  <\/script>`
	})}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/booknav.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/booknav.astro";
var $$url = "/booknav/";
//#endregion
//#region \0virtual:astro:page:src/pages/booknav@_@astro
var page = () => booknav_exports;
//#endregion
export { page };
