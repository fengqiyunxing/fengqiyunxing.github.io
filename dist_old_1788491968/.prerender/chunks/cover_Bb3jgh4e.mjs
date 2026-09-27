//#region src/content/posts/guide/cover.avif
var cover_default = new Proxy({
	"src": "/_astro/cover.DbgBqV31.avif",
	"width": 1400,
	"height": 1749,
	"format": "avif"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/求职/存储/fengqiyunxing.github.io/src/content/posts/guide/cover.avif";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/求职/存储/fengqiyunxing.github.io/src/content/posts/guide/cover.avif");
	return target[name];
} });
//#endregion
export { cover_default as default };
