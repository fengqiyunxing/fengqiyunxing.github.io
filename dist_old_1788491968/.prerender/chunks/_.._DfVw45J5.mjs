import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { t as getCollection } from "./_astro_content_jT1wG5gk.mjs";
import { f as siteConfig, o as removeFileExtension } from "./url-utils_Cr7cEKDY.mjs";
import { t as profileConfig } from "./profileConfig_DSpSrIO7.mjs";
import * as fs$1 from "node:fs";
import { googleFonts } from "takumi-js/helpers";
import { ImageResponse } from "takumi-js/response";
//#region src/pages/og/[...slug].ts
var ____slug__exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	getStaticPaths: () => getStaticPaths,
	prerender: () => true
});
var getStaticPaths = async () => {
	if (!siteConfig.post.generateOgImages) return [];
	return (await getCollection("posts")).filter((post) => !post.data.draft).map((post) => {
		return {
			params: { slug: `${removeFileExtension(post.id)}.png` },
			props: { post }
		};
	});
};
var fontCache = /* @__PURE__ */ new Map();
var detectImageFormat = (buffer) => {
	if (buffer.length < 12) return null;
	if (buffer[0] === 137 && buffer[1] === 80 && buffer[2] === 78 && buffer[3] === 71 && buffer[4] === 13 && buffer[5] === 10 && buffer[6] === 26 && buffer[7] === 10) return "image/png";
	if (buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255) return "image/jpeg";
	if (buffer[0] === 71 && buffer[1] === 73 && buffer[2] === 70 && buffer[3] === 56 && (buffer[4] === 55 || buffer[4] === 57) && buffer[5] === 97) return "image/gif";
	if (buffer[0] === 82 && buffer[1] === 73 && buffer[2] === 70 && buffer[3] === 70 && buffer[8] === 87 && buffer[9] === 69 && buffer[10] === 66 && buffer[11] === 80) return "image/webp";
	return null;
};
var SUPPORTED_FORMATS = /* @__PURE__ */ new Set([
	"image/png",
	"image/jpeg",
	"image/gif",
	"image/webp"
]);
var sharpPromise = null;
function getSharp() {
	if (!sharpPromise) sharpPromise = import("sharp").then((m) => m.default);
	return sharpPromise;
}
var TRANSPARENT_PNG_BASE64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";
var transparentPngBuffer = null;
function getTransparentPngArrayBuffer() {
	if (!transparentPngBuffer) {
		const buf = Buffer.from(TRANSPARENT_PNG_BASE64, "base64");
		transparentPngBuffer = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
	}
	return transparentPngBuffer;
}
var warnAndFallback = (imagePath, detail) => {
	console.warn(`
 [33m[OG Image] Warning 
 无法加载或处理图片 "${imagePath}"，可能是文件缺失、网络错误或不被支持的格式。\n 已使用透明图片替代。
 Failed to load or process image "${imagePath}", possibly missing file, network error, or unsupported format.\n A transparent image was used instead.
 ${detail}\x1b[0m`);
	return getTransparentPngArrayBuffer();
};
var loadImageAsArrayBuffer = async (imagePath) => {
	try {
		let buffer;
		if (imagePath.startsWith("http")) {
			const res = await fetch(imagePath);
			if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`);
			buffer = Buffer.from(await res.arrayBuffer());
		} else {
			const normalized = imagePath.replace(/^\.\//, "");
			const candidatePaths = [`./src/${normalized}`, `./public/${normalized}`];
			const foundPath = candidatePaths.find((p) => fs$1.existsSync(p));
			if (!foundPath) return warnAndFallback(imagePath, `Tried paths: ${candidatePaths.join(", ")}`);
			buffer = fs$1.readFileSync(foundPath);
		}
		const detectedFormat = detectImageFormat(buffer);
		if (!detectedFormat || !SUPPORTED_FORMATS.has(detectedFormat)) {
			const sharp = await getSharp();
			buffer = Buffer.from(await sharp(buffer).png().toBuffer());
		}
		return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
	} catch (err) {
		return warnAndFallback(imagePath, `Error: ${err instanceof Error ? err.message : String(err)}`);
	}
};
async function GET({ props }) {
	const { post } = props;
	let iconPath = "/favicon/favicon-dark-192.png";
	if (siteConfig.favicon.length > 0) iconPath = (siteConfig.favicon.find((f) => f.src.toLowerCase().endsWith(".png")) ?? siteConfig.favicon[0]).src;
	const hue = siteConfig.themeColor.hue;
	const primaryColor = `hsl(${hue}, 90%, 65%)`;
	const textColor = "hsl(0, 0%, 95%)";
	const subtleTextColor = `hsl(${hue}, 10%, 75%)`;
	const backgroundColor = `hsl(${hue}, 15%, 12%)`;
	const pubDate = post.data.published.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
	const description = post.data.description;
	return new ImageResponse({
		type: "div",
		props: {
			style: {
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				backgroundColor,
				fontFamily: "\"Noto Sans SC\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
				padding: "60px"
			},
			children: [
				{
					type: "div",
					props: {
						style: {
							width: "100%",
							display: "flex",
							alignItems: "center",
							gap: "20px"
						},
						children: [{
							type: "img",
							props: {
								src: "og-icon",
								width: 48,
								height: 48,
								style: {
									borderRadius: "10px",
									width: 48,
									height: 48,
									objectFit: "cover"
								}
							}
						}, {
							type: "div",
							props: {
								style: {
									fontSize: "36px",
									fontWeight: 600,
									color: subtleTextColor
								},
								children: siteConfig.title
							}
						}]
					}
				},
				{
					type: "div",
					props: {
						style: {
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							flexGrow: 1,
							gap: "20px"
						},
						children: [{
							type: "div",
							props: {
								style: {
									display: "flex",
									alignItems: "flex-start"
								},
								children: [{
									type: "div",
									props: { style: {
										width: "10px",
										height: "68px",
										backgroundColor: primaryColor,
										borderRadius: "6px",
										marginTop: "14px",
										flexShrink: 0
									} }
								}, {
									type: "div",
									props: {
										style: {
											fontSize: "72px",
											fontWeight: 700,
											color: textColor,
											marginLeft: "25px",
											overflow: "hidden",
											textOverflow: "ellipsis",
											lineClamp: 3,
											WebkitLineClamp: 3,
											WebkitBoxOrient: "vertical",
											"text-fit": "grow per-line-all",
											display: "flex",
											flexDirection: "column"
										},
										children: post.data.title
									}
								}]
							}
						}, ...description ? [{
							type: "div",
							props: {
								style: {
									fontSize: "32px",
									color: subtleTextColor,
									paddingLeft: "35px",
									overflow: "hidden",
									textOverflow: "ellipsis",
									lineClamp: 2,
									WebkitLineClamp: 2,
									WebkitBoxOrient: "vertical",
									"text-fit": "grow per-line-all",
									display: "flex",
									flexDirection: "column"
								},
								children: description
							}
						}] : []]
					}
				},
				{
					type: "div",
					props: {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							width: "100%"
						},
						children: [{
							type: "div",
							props: {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "20px"
								},
								children: [{
									type: "img",
									props: {
										src: "og-avatar",
										width: 60,
										height: 60,
										style: {
											borderRadius: "50%",
											width: 60,
											height: 60,
											objectFit: "cover"
										}
									}
								}, {
									type: "div",
									props: {
										style: {
											fontSize: "28px",
											fontWeight: 600,
											color: textColor
										},
										children: profileConfig.name
									}
								}]
							}
						}, {
							type: "div",
							props: {
								style: {
									fontSize: "28px",
									color: subtleTextColor
								},
								children: pubDate
							}
						}]
					}
				}
			]
		}
	}, {
		width: 1200,
		height: 630,
		format: "png",
		images: {
			cache: "auto",
			sources: [{
				src: "og-avatar",
				data: () => loadImageAsArrayBuffer(profileConfig.avatar ?? "")
			}, {
				src: "og-icon",
				data: () => loadImageAsArrayBuffer(iconPath)
			}]
		},
		fonts: googleFonts({
			families: [{
				name: "Noto Sans SC",
				weight: "100..900",
				style: "normal"
			}],
			cache: fontCache
		}),
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable"
		}
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/og/[...slug]@_@ts
var page = () => ____slug__exports;
//#endregion
export { page };
