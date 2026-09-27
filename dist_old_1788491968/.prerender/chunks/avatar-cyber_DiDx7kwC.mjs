//#region src/assets/images/avatar-cyber.png
var avatar_cyber_default = new Proxy({
	"src": "/_astro/avatar-cyber.BFhTqAZr.png",
	"width": 512,
	"height": 512,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/求职/存储/fengqiyunxing.github.io/src/assets/images/avatar-cyber.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/求职/存储/fengqiyunxing.github.io/src/assets/images/avatar-cyber.png");
	return target[name];
} });
//#endregion
export { avatar_cyber_default as default };
