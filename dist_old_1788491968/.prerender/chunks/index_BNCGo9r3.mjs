import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, m as Fragment, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, r as getLqipProps, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey, s as url } from "./url-utils_Cr7cEKDY.mjs";
import { n as scanAlbumPhotos, r as galleryConfig, t as getAlbumCover } from "./gallery-utils_4Qszqp9r.mjs";
//#region src/components/pages/gallery/AlbumCard.astro
createAstro("https://fengqiyunxing.github.io");
var $$AlbumCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AlbumCard;
	const { id, name, cover, description, date, location, tags, photoCount, encrypted } = Astro.props;
	const lqipProps = cover ? getLqipProps(cover, void 0, true) : { style: "" };
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(url(`/gallery/${id}/`), "href")}${addAttribute(tags?.join(",") || "", "data-tags")} class="album-card group relative block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"><!-- Cover Image --><div class="aspect-4/3 relative overflow-hidden">${cover ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="lqip-placeholder absolute inset-0 pointer-events-none"${addAttribute(lqipProps.style, "style")} aria-hidden="true"></div><img${addAttribute(cover, "src")}${addAttribute(name, "alt")} class="w-full h-full object-cover pointer-events-none opacity-0 transition-all duration-500 ease-out group-hover:scale-105" loading="lazy" decoding="async">` })}` : renderTemplate`<div class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"><div class="text-gray-400 text-5xl">&#x1f4f7;</div></div>`}<!-- Photo count badge --><div class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs text-white font-medium bg-black/50 backdrop-blur-sm">${photoCount} ${i18n(I18nKey.galleryPhotos)}</div>${encrypted && renderTemplate`<div class="absolute top-2 left-2 px-2 py-1 rounded-full text-xs text-white font-medium bg-black/50 backdrop-blur-sm flex items-center gap-1"><svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"></path></svg></div>`}<!-- Gradient overlay + info --><div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div><div class="absolute bottom-0 left-0 right-0 p-4"><h3 class="font-bold text-base text-white line-clamp-1 drop-shadow-lg">${name}</h3>${description && renderTemplate`<p class="text-xs text-white/75 line-clamp-1 mt-1 leading-relaxed"${addAttribute(description, "title")}>${description}</p>`}<div class="flex items-center gap-3 text-xs text-white/70 mt-1.5 flex-wrap">${date && renderTemplate`<span>${date}</span>`}${location && renderTemplate`<span class="inline-flex items-center gap-0.5"><svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path></svg>${location}</span>`}</div>${tags && tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mt-2">${tags.slice(0, 4).map((tag) => renderTemplate`<span class="text-[0.6rem] px-1.5 py-0.5 rounded bg-white/20 text-white/90 backdrop-blur-sm">${tag}</span>`)}</div>`}</div></div></a>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/pages/gallery/AlbumCard.astro", void 0);
//#endregion
//#region src/pages/gallery/index.astro
var gallery_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	if (!siteConfig.pages.gallery) return Astro.redirect("/404/");
	const title = i18n(I18nKey.gallery);
	const description = i18n(I18nKey.galleryDescription);
	const albums = galleryConfig.albums.map((album) => {
		const photos = scanAlbumPhotos(album.id);
		const cover = getAlbumCover(album, photos);
		return {
			...album,
			cover,
			photoCount: photos.length
		};
	});
	const allTags = [...new Set(albums.flatMap((a) => a.tags || []))].sort();
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": title,
		"description": description
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"><div class="card-base z-10 px-9 py-6 relative w-full"><!-- 页面标题和描述 --><div class="mb-4"><div class="flex items-center gap-3 mb-3"><div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:photo-library",
			"class": "text-[1.5rem]"
		})}</div><div class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">${title}</div></div>${description && renderTemplate`<p class="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">${description}</p>`}</div><!-- 搜索框 + 标签筛选 -->${albums.length > 0 && renderTemplate`${renderComponent($$result, "gallery-filter", "gallery-filter", { "class": "mb-6" }, { "default": ($$result) => renderTemplate`<div class="relative mb-3">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:search",
			"class": "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 text-lg pointer-events-none"
		})}<input type="text" data-search${addAttribute(i18n(I18nKey.searchAlbums), "placeholder")} class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-(--line-divider) bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-(--primary) focus:ring-1 focus:ring-(--primary) outline-none transition-all duration-200 text-sm"></div>${allTags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2"><button data-tag="all" class="category-pill px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200" data-active>${i18n(I18nKey.all)}</button>${allTags.map((tag) => renderTemplate`<button${addAttribute(tag, "data-tag")} class="category-pill px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200">${tag}</button>`)}</div>`}` })}`}<!-- 相册卡片网格 -->${albums.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">${albums.map((album) => renderTemplate`${renderComponent($$result, "AlbumCard", $$AlbumCard, {
			"id": album.id,
			"name": album.name,
			"cover": album.cover,
			"description": album.description,
			"date": album.date,
			"location": album.location,
			"tags": album.tags,
			"photoCount": album.photoCount,
			"encrypted": !!album.password
		})}`)}</div><div class="albums-empty hidden flex-col items-center justify-center py-12 text-neutral-400 dark:text-neutral-500">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:search-off-rounded",
			"class": "text-4xl mb-3"
		})}<div class="text-sm">${i18n(I18nKey.searchNoResults)}</div></div>` })}` : renderTemplate`<div class="flex flex-col items-center justify-center py-16 text-neutral-400 dark:text-neutral-500">${renderComponent($$result, "Icon", $$Icon, {
			"name": "material-symbols:photo-library",
			"class": "text-6xl mb-4 opacity-50"
		})}<p class="text-lg">${i18n(I18nKey.galleryNoAlbums)}</p></div>`}</div></div>`,
		"head": ($$result) => renderTemplate`<script>
    if (!customElements.get("gallery-filter")) {
      class GalleryFilter extends HTMLElement {
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
          const cards = container.querySelectorAll(".album-card");

          let hasVisible = false;

          cards.forEach((card) => {
            const cardEl = card;
            const tags = (cardEl.dataset.tags || "").split(",");
            const name = (cardEl.querySelector("h3")?.textContent || "").toLowerCase();
            const desc = (cardEl.querySelector("p")?.textContent || "").toLowerCase();
            const location = (cardEl.querySelector(".inline-flex")?.textContent || "").toLowerCase();

            const tagMatch =
              this.selectedTag === "all" ||
              (this.selectedTag && tags.includes(this.selectedTag));
            const searchMatch =
              !query ||
              name.includes(query) ||
              desc.includes(query) ||
              location.includes(query) ||
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

          const emptyEl = container.querySelector(".albums-empty");
          if (emptyEl) {
            emptyEl.classList.toggle("hidden", hasVisible);
            emptyEl.classList.toggle("flex", !hasVisible);
          }
        }
      }
      customElements.define("gallery-filter", GalleryFilter);
    }
  <\/script>`
	})}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/gallery/index.astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/gallery/index.astro";
var $$url = "/gallery/";
//#endregion
//#region \0virtual:astro:page:src/pages/gallery/index@_@astro
var page = () => gallery_exports;
//#endregion
export { page };
