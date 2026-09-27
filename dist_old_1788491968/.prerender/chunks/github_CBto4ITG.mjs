//#region src/content/posts/images/github.avif
var github_default = new Proxy({
	"src": "/_astro/github.urcbElKG.avif",
	"width": 2144,
	"height": 1086,
	"format": "avif"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/github.avif";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/github.avif");
	return target[name];
} });
//#endregion
export { github_default as default };
