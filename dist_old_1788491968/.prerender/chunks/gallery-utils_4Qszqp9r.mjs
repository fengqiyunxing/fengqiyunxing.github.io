import { s as url } from "./url-utils_Cr7cEKDY.mjs";
import fs from "node:fs";
import path from "node:path";
//#region src/config/galleryConfig.ts
var galleryConfig = {
	albums: [{
		id: "firefly-2026",
		name: "可爱流萤",
		description: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		location: "崩坏：星穹铁道",
		date: "2026-01-01",
		tags: ["崩坏星穹铁道", "流萤"]
	}, {
		id: "encrypted-test",
		name: "加密相册示例",
		description: "这是一个加密相册的示例，设置了访问密码，只有输入正确的密码才能查看相册内容。",
		location: "崩坏：星穹铁道",
		date: "2026-02-01",
		tags: ["加密相册", "示例"],
		password: "123456",
		passwordHint: "示例密码123456"
	}],
	columnWidth: 240
};
//#endregion
//#region src/utils/gallery-utils.ts
function withBase(assetPath) {
	if (!assetPath) return "";
	if (/^(https?:)?\/\//i.test(assetPath) || /^(data|blob):/i.test(assetPath)) return assetPath;
	const normalizedPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
	return url(normalizedPath);
}
function scanAlbumPhotos(albumId) {
	const dir = path.join(process.cwd(), "public", "gallery", albumId);
	if (!fs.existsSync(dir)) return [];
	const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f)).sort();
	const coverIdx = files.findIndex((f) => /^cover\./i.test(f));
	if (coverIdx > 0) {
		const [coverFile] = files.splice(coverIdx, 1);
		files.unshift(coverFile);
	}
	const localPhotos = files.map((f) => withBase(`/gallery/${albumId}/${f}`));
	const urlsFile = path.join(dir, "urls.txt");
	let remotePhotos = [];
	if (fs.existsSync(urlsFile)) remotePhotos = fs.readFileSync(urlsFile, "utf-8").split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("#"));
	return [...localPhotos, ...remotePhotos];
}
function getAlbumCover(album, photos) {
	if (album.cover) return withBase(album.cover);
	return photos.find((p) => /\/cover\./i.test(p)) || photos[0] || "";
}
//#endregion
export { scanAlbumPhotos as n, galleryConfig as r, getAlbumCover as t };
