import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import { n as getEntry, r as renderEntry } from "./_astro_content_jT1wG5gk.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey } from "./url-utils_Cr7cEKDY.mjs";
import { t as commentConfig } from "./commentConfig_DQHjcw7q.mjs";
import { t as $$Markdown } from "./Markdown_CVggKuht.mjs";
import { t as $$Index } from "./comment_CqO4CP1n.mjs";
//#region src/config/friendsConfig.ts
var friendsPageConfig = {
	title: "",
	description: "",
	showCustomContent: false,
	showComment: true,
	randomizeSort: false
};
var friendsConfig = [];
var getEnabledFriends = () => {
	const friends = friendsConfig.filter((friend) => friend.enabled);
	if (friendsPageConfig.randomizeSort) return friends.sort(() => Math.random() - .5);
	return friends.sort((a, b) => b.weight - a.weight);
};
//#endregion
//#region src/pages/friends.astro
var friends_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Friends,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$Friends = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Friends;
	if (!siteConfig.pages.friends) return Astro.redirect("/404/");
	const friendsPost = await getEntry("spec", "friends");
	if (!friendsPost) throw new Error("friends page content not found");
	const { Content } = await renderEntry(friendsPost);
	const isCommentEnabled = commentConfig?.type && commentConfig.type !== "none" && friendsPageConfig.showComment !== false;
	const items = getEnabledFriends();
	const allTags = [...new Set(items.flatMap((item) => item.tags || []))].sort();
	const title = friendsPageConfig.title || i18n(I18nKey.friends);
	const description = friendsPageConfig.description || i18n(I18nKey.friendsDescription);
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": title,
		"description": description
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"><div class="card-base z-10 px-9 py-6 relative w-full"><!-- 页面标题和描述 --><div class="mb-4"><div class="flex items-center gap-3 mb-3"><div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:group",
			"class": "text-[1.5rem]"
		})}</div><div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">${title}</div></div>${description && renderTemplate`<p class="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">${description}</p>`}</div><!-- 搜索框 -->${items.length > 0 && renderTemplate`${renderComponent($$result, "friend-filter", "friend-filter", { "class": "mb-6" }, { "default": ($$result) => renderTemplate`<div class="relative mb-3">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:search",
			"class": "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 text-lg pointer-events-none"
		})}<input type="text" data-search${addAttribute(i18n(I18nKey.searchFriends) || "搜索友链...", "placeholder")} class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-(--line-divider) bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-(--primary) focus:ring-1 focus:ring-(--primary) outline-none transition-all duration-200 text-sm"></div><div class="flex flex-wrap gap-2"><button data-tag="all" class="category-pill px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200" data-active>${i18n(I18nKey.all)}</button>${allTags.map((tag) => renderTemplate`<button${addAttribute(tag, "data-tag")} class="category-pill px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200">${tag}</button>`)}</div>` })}`}<div class="friends-grid my-4">${items.length === 0 && renderTemplate`<div class="col-span-full flex flex-col items-center justify-center py-12 text-neutral-400 dark:text-neutral-500">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:group-off-outline",
			"class": "text-4xl mb-3"
		})}<div class="text-sm">${i18n(I18nKey.friendsEmpty)}</div></div>`}${items.map((item) => renderTemplate`<a${addAttribute(item.siteurl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(item.tags?.join(","), "data-tags")} class="friend-card group flex items-center gap-3 p-2.5 rounded-xl border border-(--line-divider) hover:border-(--primary) hover:bg-(--card-bg) transition-all duration-300 hover:shadow-lg relative overflow-hidden"><div class="absolute inset-0 bg-(--primary) opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:arrow-outward-rounded",
			"class": "absolute top-3 right-3 text-(--primary) text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
		})}<div class="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-black/5 dark:border-white/5 group-hover:scale-105 transition-transform duration-300"><img${addAttribute(item.imgurl, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover"></div><div class="grow min-w-0 flex flex-col justify-center gap-0.5"><div class="font-bold text-base text-neutral-900 dark:text-neutral-100 group-hover:text-(--primary) transition-colors truncate pr-4">${item.title}</div><div class="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1"${addAttribute(item.desc, "title")}>${item.desc}</div><div class="flex flex-wrap gap-1 mt-1">${item.tags && item.tags.length > 0 ? item.tags.slice(0, 3).map((tag) => renderTemplate`<span class="text-[0.65rem] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors duration-300">${tag}</span>`) : null}</div></div></a>`)}</div><div class="friends-empty hidden flex-col items-center justify-center py-12 text-neutral-400 dark:text-neutral-500">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:search-off-rounded",
			"class": "text-4xl mb-3"
		})}<div class="text-sm">${i18n(I18nKey.searchNoResults)}</div></div></div></div>${friendsPageConfig.showCustomContent !== false && renderTemplate`<div class="mt-4 card-base z-10 px-9 py-6 relative w-full">${renderComponent($$result, "Markdown", $$Markdown, { "class": "" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}</div>`}${isCommentEnabled && renderTemplate`<div class="mt-4">${renderComponent($$result, "Comment", $$Index, {
			"post": friendsPost,
			"customPath": "/friends/"
		})}</div>`}`,
		"head": ($$result) => renderTemplate`<script>
    if (!customElements.get("friend-filter")) {
      class FriendFilter extends HTMLElement {
        selectedTag = "all";

        constructor() {
          super();
        }

        connectedCallback() {
          this.addEventListener("click", this.handleClick);
          const input = this.querySelector("[data-search]");
          if (input) {
            input.addEventListener("input", () => this.applyFilters());
          }
        }

        disconnectedCallback() {
          this.removeEventListener("click", this.handleClick);
        }

        handleClick(e) {
          const target = e.target;
          const button = target.closest("button");
          if (!button) return;

          this.selectedTag = button.dataset.tag;
          const filters = this.querySelectorAll("button");

          filters.forEach((f) => {
            f.removeAttribute("data-active");
          });
          button.setAttribute("data-active", "");

          this.applyFilters();
        }

        applyFilters() {
          const container = this.closest(".card-base");
          if (!container) return;

          const input = this.querySelector("[data-search]");
          const query = (input?.value || "").toLowerCase().trim();
          const cards = container.querySelectorAll(".friend-card");

          let hasVisible = false;

          cards.forEach((card) => {
            const cardEl = card;
            const tags = (cardEl.dataset.tags || "").split(",");
            const name = (cardEl.querySelector(".font-bold")?.textContent || "").toLowerCase();
            const desc = (cardEl.querySelector(".line-clamp-1")?.textContent || "").toLowerCase();

            const tagMatch =
              this.selectedTag === "all" ||
              (this.selectedTag && tags.includes(this.selectedTag));
            const searchMatch =
              !query ||
              name.includes(query) ||
              desc.includes(query) ||
              tags.some((t) => t.toLowerCase().includes(query));

            if (tagMatch && searchMatch) {
              cardEl.style.display = "";
              cardEl.classList.add("animate-fade-in-up");
              hasVisible = true;
            } else {
              cardEl.style.display = "none";
              cardEl.classList.remove("animate-fade-in-up");
            }
          });

          const emptyEl = container.querySelector(".friends-empty");
          if (emptyEl) {
            emptyEl.classList.toggle("hidden", hasVisible);
            emptyEl.classList.toggle("flex", !hasVisible);
          }
        }
      }
      customElements.define("friend-filter", FriendFilter);
    }
  <\/script>`
	})}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/friends.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/friends.astro";
var $$url = "/friends/";
//#endregion
//#region \0virtual:astro:page:src/pages/friends@_@astro
var page = () => friends_exports;
//#endregion
export { page };
