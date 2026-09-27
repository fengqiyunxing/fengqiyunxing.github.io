//#region src/assets/images/logo/cyber-dark.png
var cyber_dark_default = new Proxy({
	"src": "/_astro/cyber-dark._BAQVTvE.png",
	"width": 512,
	"height": 512,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/求职/存储/fengqiyunxing.github.io/src/assets/images/logo/cyber-dark.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/求职/存储/fengqiyunxing.github.io/src/assets/images/logo/cyber-dark.png");
	return target[name];
} });
//#endregion
export { cyber_dark_default as default };
