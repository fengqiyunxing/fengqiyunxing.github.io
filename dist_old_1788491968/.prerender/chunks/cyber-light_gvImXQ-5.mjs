//#region src/assets/images/logo/cyber-light.png
var cyber_light_default = new Proxy({
	"src": "/_astro/cyber-light.CNJRjINF.png",
	"width": 512,
	"height": 512,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/求职/存储/fengqiyunxing.github.io/src/assets/images/logo/cyber-light.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/求职/存储/fengqiyunxing.github.io/src/assets/images/logo/cyber-light.png");
	return target[name];
} });
//#endregion
export { cyber_light_default as default };
