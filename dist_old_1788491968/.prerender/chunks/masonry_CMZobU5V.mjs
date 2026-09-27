//#region src/content/posts/images/masonry.avif
var masonry_default = new Proxy({
	"src": "/_astro/masonry.CBfXsc0e.avif",
	"width": 1400,
	"height": 1050,
	"format": "avif"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/masonry.avif";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/masonry.avif");
	return target[name];
} });
//#endregion
export { masonry_default as default };
