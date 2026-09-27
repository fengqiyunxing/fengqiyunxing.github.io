//#region src/assets/images/avatar.avif
var avatar_default = new Proxy({
	"src": "/_astro/avatar.BcAu2wMi.avif",
	"width": 1024,
	"height": 1024,
	"format": "avif"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/求职/存储/fengqiyunxing.github.io/src/assets/images/avatar.avif";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/求职/存储/fengqiyunxing.github.io/src/assets/images/avatar.avif");
	return target[name];
} });
//#endregion
export { avatar_default as default };
