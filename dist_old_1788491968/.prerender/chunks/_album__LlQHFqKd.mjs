import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { P as createAstro, S as maybeRenderHead, f as renderComponent, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { p as $$Icon, r as getLqipProps, t as $$MainGridLayout } from "./MainGridLayout_B9O8q-AA.mjs";
import { c as i18n, f as siteConfig, p as I18nKey, s as url } from "./url-utils_Cr7cEKDY.mjs";
import { n as scanAlbumPhotos, r as galleryConfig, t as getAlbumCover } from "./gallery-utils_4Qszqp9r.mjs";
import { t as $$EncryptedContent } from "./EncryptedContent_CwM6YZtB.mjs";
//#region src/components/pages/gallery/PhotoCard.astro
createAstro("https://fengqiyunxing.github.io");
var $$PhotoCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PhotoCard;
	const { src, albumId, alt = "" } = Astro.props;
	const lqipProps = getLqipProps(src, void 0, true);
	return renderTemplate`${maybeRenderHead($$result)}<div class="gallery-photo-card break-inside-avoid mb-3"><div${addAttribute(`gallery-${albumId}`, "data-fancybox")}${addAttribute(src, "data-src")} data-type="image" class="block rounded-xl overflow-hidden relative group cursor-pointer"><div class="lqip-placeholder absolute inset-0 pointer-events-none"${addAttribute(lqipProps.style, "style")} aria-hidden="true"></div><img${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async" class="w-full h-auto object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-105"></div></div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/pages/gallery/PhotoCard.astro", void 0);
//#endregion
//#region src/pages/gallery/[album].astro
var _album__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Album,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://fengqiyunxing.github.io");
function getStaticPaths() {
	return galleryConfig.albums.map((album) => ({ params: { album: album.id } }));
}
var $$Album = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Album;
	if (!siteConfig.pages.gallery) return Astro.redirect("/404/");
	const { album: albumId } = Astro.params;
	const albumMeta = galleryConfig.albums.find((a) => a.id === albumId);
	if (!albumMeta) return Astro.redirect("/404/");
	const photos = scanAlbumPhotos(albumMeta.id);
	const cover = getAlbumCover(albumMeta, photos);
	const columnWidth = galleryConfig.columnWidth || 240;
	const coverLqipProps = cover ? getLqipProps(cover, void 0, true) : { style: "" };
	return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {
		"title": albumMeta.name,
		"description": albumMeta.description || ""
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="w-full rounded-(--radius-large) overflow-hidden relative">${cover ? renderTemplate`<div class="relative w-full aspect-[3/1] min-h-[200px] max-h-[360px] overflow-hidden"><div class="lqip-placeholder absolute inset-0 pointer-events-none"${addAttribute(coverLqipProps.style, "style")} aria-hidden="true"></div><img${addAttribute(cover, "src")}${addAttribute(albumMeta.name, "alt")} class="w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-out"><div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div><!-- 返回按钮 --><a${addAttribute(url("/gallery/"), "href")} class="absolute top-4 left-4 inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg transition-colors">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:arrow-back",
		"class": "text-base"
	})}${i18n(I18nKey.galleryBackToAlbums)}</a><!-- 封面上的信息 --><div class="absolute bottom-0 left-0 right-0 p-6"><div class="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">${albumMeta.name}</div>${albumMeta.description && renderTemplate`<p class="text-sm text-white/75 leading-relaxed mb-2 max-w-2xl line-clamp-2">${albumMeta.description}</p>`}<div class="flex items-center gap-4 text-sm text-white/80 flex-wrap">${albumMeta.date && renderTemplate`<span class="inline-flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:calendar-today",
		"class": "text-sm"
	})}${albumMeta.date}</span>`}${albumMeta.location && renderTemplate`<span class="inline-flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:location-on",
		"class": "text-sm"
	})}${albumMeta.location}</span>`}<span class="inline-flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:photo-library",
		"class": "text-sm"
	})}${photos.length} ${i18n(I18nKey.galleryPhotos)}</span></div>${albumMeta.tags && albumMeta.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1.5 mt-2.5">${albumMeta.tags.map((tag) => renderTemplate`<span class="text-xs px-2 py-0.5 rounded bg-white/20 text-white/90 backdrop-blur-sm">${tag}</span>`)}</div>`}</div></div>` : renderTemplate`<div class="card-base px-6 py-4"><a${addAttribute(url("/gallery/"), "href")} class="inline-flex items-center gap-1 text-sm text-(--primary) hover:underline mb-3">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:arrow-back",
		"class": "text-base"
	})}${i18n(I18nKey.galleryBackToAlbums)}</a><div class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">${albumMeta.name}</div><div class="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mt-2 flex-wrap">${albumMeta.date && renderTemplate`<span class="inline-flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:calendar-today",
		"class": "text-sm"
	})}${albumMeta.date}</span>`}${albumMeta.location && renderTemplate`<span class="inline-flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:location-on",
		"class": "text-sm"
	})}${albumMeta.location}</span>`}<span>${photos.length} ${i18n(I18nKey.galleryPhotos)}</span></div></div>`}</div><div class="w-full rounded-(--radius-large) overflow-hidden relative mt-4"><div class="card-base z-10 px-6 py-6 relative w-full">${photos.length > 0 ? albumMeta.password ? renderTemplate`${renderComponent($$result, "EncryptedContent", $$EncryptedContent, {
		"password": albumMeta.password,
		"slug": albumMeta.id,
		"hint": albumMeta.passwordHint
	}, { "default": ($$result) => renderTemplate`<div class="gallery-masonry"${addAttribute(`column-count: 2; column-gap: 0.75rem; --col-width: ${columnWidth}px;`, "style")}>${photos.map((photo) => renderTemplate`${renderComponent($$result, "PhotoCard", $$PhotoCard, {
		"src": photo,
		"albumId": albumMeta.id
	})}`)}</div>` })}` : renderTemplate`<div class="gallery-masonry"${addAttribute(`column-count: 2; column-gap: 0.75rem; --col-width: ${columnWidth}px;`, "style")}>${photos.map((photo) => renderTemplate`${renderComponent($$result, "PhotoCard", $$PhotoCard, {
		"src": photo,
		"albumId": albumMeta.id
	})}`)}</div>` : renderTemplate`<div class="flex flex-col items-center justify-center py-16 text-neutral-400 dark:text-neutral-500">${renderComponent($$result, "Icon", $$Icon, {
		"name": "material-symbols:photo-library",
		"class": "text-6xl mb-4 opacity-50"
	})}<p class="text-lg">${i18n(I18nKey.galleryNoAlbums)}</p></div>`}</div></div>` })}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/pages/gallery/[album].astro", void 0);
var $$file = "D:/求职/存储/fengqiyunxing.github.io/src/pages/gallery/[album].astro";
var $$url = "/gallery/[album]/";
//#endregion
//#region \0virtual:astro:page:src/pages/gallery/[album]@_@astro
var page = () => _album__exports;
//#endregion
export { page };
