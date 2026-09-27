import { C as renderHead, E as createRenderInstruction, M as unescapeHTML, P as createAstro, S as maybeRenderHead, T as defineScriptVars, a as spreadAttributes, f as renderComponent, i as defineStyleVars, v as renderSlot, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { $ as AstroError, d as FontFamilyNotFound, v as ImageMissingAlt } from "./errors-data_BVsUkJU2.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import { a as inferRemoteSize$1, c as isESMImportedImage, l as isRemoteImage, n as getImage$1, t as getConfiguredImageService, u as resolveSrc } from "./assets_CExCKp2F.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { c as i18n, d as displaySettingsConfig, f as siteConfig, i as getSearchUrl, l as navbarMode, p as I18nKey, s as url } from "./url-utils_Cr7cEKDY.mjs";
import { t as profileConfig } from "./profileConfig_DSpSrIO7.mjs";
import * as path$1 from "node:path";
import * as mime from "mrmime";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/astro/dist/runtime/server/render/template-depth.js
function templateEnter(_result) {
	return createRenderInstruction({ type: "template-enter" });
}
function templateExit(_result) {
	return createRenderInstruction({ type: "template-exit" });
}
//#endregion
//#region src/config/analyticsConfig.ts
var analyticsConfig = {
	googleAnalyticsId: "",
	microsoftClarityId: "",
	umamiAnalytics: {
		websiteId: "",
		scriptUrl: "https://cloud.umami.is/script.js",
		replaysScriptUrl: "https://cloud.umami.is/recorder.js",
		trackOutboundLinks: true,
		collectWebVitals: false,
		replays: {
			enabled: false,
			sampleRate: .15,
			maskLevel: "moderate",
			maxDuration: 3e5,
			blockSelector: ""
		}
	},
	la51Analytics: {
		Id: "",
		sdkUrl: "",
		ck: "",
		autoTrack: false,
		hashMode: false,
		screenRecord: true
	}
};
//#endregion
//#region src/config/backgroundWallpaper.ts
var backgroundWallpaper = {
	mode: "banner",
	playerEnable: true,
	/**
	* 背景图片配置
	* 图片路径支持三种格式：
	* 1. public 目录（以 "/" 开头，不优化）："/assets/images/banner.avif"
	* 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/banner.avif"
	* 3. 远程 URL："https://example.com/banner.jpg"
	* 注意：远程URL和public目录的图片不会被优化，请确保图片体积足够小以免影响加载速度
	*
	* 建议不要替换d1-d6，m1-m6这些默认示例图片，但你可以删除掉节省空间
	* 因为以后可能会更换示例图片，导致你自定义的图片被覆盖
	* 所以建议使用自己的图片的时候命名为其他名称，不要使用d1-d6，m1-m6这些名称
	*
	* 如果只使用一张图片或者使用随机图API，推荐直接使用字符串格式：
	* desktop: "https://t.alcy.cc/pc",   // 随机图API
	* desktop: "assets/images/DesktopWallpaper/d1.avif", // 单张图片
	*
	* mobile: "https://t.alcy.cc/mp", // 随机图API
	* mobile: "assets/images/MobileWallpaper/m1.avif", // 单张图片
	*
	* 支持配置多张图片（数组），每次刷新页面随机显示一张：
	* desktop: [
	* "assets/images/DesktopWallpaper/d1.avif",
	* "assets/images/DesktopWallpaper/d2.avif",
	* ],
	*
	* mobile:[
	*   "assets/images/MobileWallpaper/m1.avif",
	*   "assets/images/MobileWallpaper/m2.avif",
	* ],
	*/
	src: {
		desktop: [
			"assets/images/DesktopWallpaper/cyber-skyline.avif",
			"assets/images/DesktopWallpaper/cyber-neon.avif",
			"assets/images/DesktopWallpaper/cyber-trails.avif"
		],
		mobile: [
			"assets/images/MobileWallpaper/cyber-skyline-m.avif",
			"assets/images/MobileWallpaper/cyber-neon-m.avif",
			"assets/images/MobileWallpaper/cyber-trails-m.avif"
		],
		playerUrl: "https://bed.twoleaf.cn/file/1785658612716_firefly.mp4"
	},
	common: {
		dimOpacity: .2,
		playerMode: "random",
		homeText: {
			enable: true,
			title: "写代码，也写快乐。",
			titleSize: "4.5rem",
			subtitle: [
				"爱折腾的技术人，问题拆开就不难",
				"今天改 bug，明天上 feature",
				"把复杂留给自己，把简单交给用户",
				"代码跑通的那一刻，世界都安静了",
				"技术路长，但每一步都算数"
			],
			subtitleSize: "1.5rem",
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2e3
			},
			linksEnable: true,
			links: [{
				name: "RSS",
				icon: "fa7-solid:rss",
				url: "/rss/"
			}]
		},
		carousel: {
			enable: false,
			interval: 5e3,
			transitionEffect: "zoom"
		},
		waves: { enable: {
			desktop: true,
			mobile: true
		} },
		gradient: {
			enable: {
				desktop: true,
				mobile: true
			},
			height: "10%"
		}
	},
	banner: {
		position: "0% 20%",
		postInfo: { mode: "description" },
		navbar: {
			transparentMode: "semi",
			blur: 12
		}
	},
	overlay: {
		zIndex: -1,
		opacity: .8,
		blur: 10,
		cardOpacity: .6
	},
	fullscreen: {
		layout: "classic",
		position: "center",
		navbar: {
			transparentMode: "semifull",
			blur: 12
		},
		blurRamp: { enable: {
			desktop: true,
			mobile: true
		} }
	}
};
//#endregion
//#region src/config/dynamicConfig.ts
var dynamicConfig = {
	title: "",
	description: "",
	profileUrl: "/about/",
	showComment: true,
	itemsPerPage: 20,
	apiUrl: "/api/dynamic.json",
	memos: {
		enable: false,
		apiUrl: "https://memos.example.com",
		parent: ""
	}
};
//#endregion
//#region src/config/expressiveCodeConfig.ts
/**
* expressive-code配置
* @see https://expressive-code.com/
* 修改本配置后需要重启Astro开发服务器才能生效
*/
var expressiveCodeConfig = {
	darkTheme: "one-dark-pro",
	lightTheme: "one-light",
	pluginCollapsible: {
		enable: true,
		lineThreshold: 15,
		previewLines: 8,
		defaultCollapsed: true
	},
	pluginLanguageBadge: { enable: true },
	pluginLanguageLogo: {
		enable: false,
		color: "mono",
		excludedLangs: []
	}
};
//#endregion
//#region src/config/fontConfig.ts
var fontConfig = {
	enable: true,
	selected: ["system"],
	bannerTitleFont: "",
	bannerSubtitleFont: "",
	navbarTitleFont: "",
	codeFont: "",
	subsetFonts: { "--font-greatvibes": { extraChars: "" } }
};
//#endregion
//#region src/config/musicConfig.ts
var musicPlayerConfig = {
	showInNavbar: true,
	showInSidebar: true,
	mode: "local",
	volume: .7,
	playMode: "list",
	showLyrics: false,
	meting: {
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		server: "netease",
		type: "playlist",
		id: "10046455237",
		auth: "",
		fallbackApis: ["https://api.injahow.cn/meting/?server=:server&type=:type&id=:id", "https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id"]
	},
	local: { playlist: [{
		name: "使一颗心免于哀伤",
		artist: "知更鸟 / HOYO-MiX / Chevy",
		url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
		cover: "/assets/music/cover/109951169585655912.webp",
		lrc: ""
	}] }
};
//#endregion
//#region node_modules/astro/components/Image.astro
createAstro("https://fengqiyunxing.github.io");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Image;
	const props = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	if (typeof props.width === "string") props.width = Number.parseInt(props.width);
	if (typeof props.height === "string") props.height = Number.parseInt(props.height);
	if ((props.layout ?? imageConfig.layout ?? "none") !== "none") {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	const image = await getImage(props);
	const additionalAttributes = {};
	if (image.srcSet.values.length > 0) additionalAttributes.srcset = image.srcSet.attribute;
	const { class: className, ...attributes } = {
		...additionalAttributes,
		...image.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/components/Image.astro", void 0);
//#endregion
//#region node_modules/astro/components/Picture.astro
createAstro("https://fengqiyunxing.github.io");
var $$Picture = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Picture;
	const defaultFormats = ["webp"];
	const defaultFallbackFormat = "png";
	const specialFormatsFallback = [
		"gif",
		"svg",
		"jpg",
		"jpeg"
	];
	const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
	if (scopedStyleClass) {
		if (pictureAttributes.class) pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
		else pictureAttributes.class = scopedStyleClass;
	}
	const useResponsive = (props.layout ?? imageConfig.layout ?? "none") !== "none";
	if (useResponsive) {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	for (const key in props) if (key.startsWith("data-astro-cid")) pictureAttributes[key] = props[key];
	const originalSrc = await resolveSrc(props.src);
	if (props.inferSize && isRemoteImage(originalSrc)) {
		const remoteSize = await inferRemoteSize(originalSrc);
		delete props.inferSize;
		props.width ??= remoteSize.width;
		props.height ??= remoteSize.height;
	}
	const optimizedImages = await Promise.all(formats.map(async (format) => await getImage({
		...props,
		src: originalSrc,
		format,
		widths: props.widths,
		densities: props.densities
	})));
	const clonedSrc = isESMImportedImage(originalSrc) ? originalSrc.clone ?? originalSrc : originalSrc;
	let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
	if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) resultFallbackFormat = clonedSrc.format;
	const fallbackImage = await getImage({
		...props,
		format: resultFallbackFormat,
		widths: props.widths,
		densities: props.densities
	});
	const imgAdditionalAttributes = {};
	const sourceAdditionalAttributes = {};
	if (props.sizes) sourceAdditionalAttributes.sizes = props.sizes;
	if (fallbackImage.srcSet.values.length > 0) imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
	const { class: className, ...attributes } = {
		...imgAdditionalAttributes,
		...fallbackImage.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
		const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
		return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
	})}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}></picture>`;
}, "D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/components/Picture.astro", void 0);
//#endregion
//#region \0virtual:astro:assets/fonts/internal
var componentDataByCssVariable = /* @__PURE__ */ new Map([]);
//#endregion
//#region node_modules/astro/dist/assets/fonts/core/filter-preloads.js
function filterPreloads(data, preload) {
	if (!preload) return null;
	if (preload === true) return data;
	return data.filter(({ weight, style, subset }) => preload.some((p) => {
		if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) return false;
		if (p.style !== void 0 && p.style !== style) return false;
		if (p.subset !== void 0 && p.subset !== subset) return false;
		return true;
	}));
}
function checkWeight(input, target) {
	const trimmedInput = input.trim();
	if (trimmedInput.includes(" ")) return trimmedInput === target;
	if (target.includes(" ")) {
		const [a, b] = target.split(" ");
		const parsedInput = Number.parseInt(input);
		return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
	}
	return input === target;
}
//#endregion
//#region node_modules/astro/components/Font.astro
createAstro("https://fengqiyunxing.github.io");
var $$Font = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Font;
	const { cssVariable, preload = false } = Astro.props;
	const data = componentDataByCssVariable.get(cssVariable);
	if (!data) throw new AstroError({
		...FontFamilyNotFound,
		message: FontFamilyNotFound.message(cssVariable)
	});
	const filteredPreloadData = filterPreloads(data.preloads, preload);
	return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/components/Font.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/fonts/infra/remote-runtime-font-file-url-resolver.js
var RemoteRuntimeFontFileUrlResolver = class {
	#urls;
	#address;
	constructor({ urls, address }) {
		this.#urls = urls;
		this.#address = address;
	}
	resolve(url) {
		if (!this.#urls.has(url)) return null;
		if (!this.#address) throw new Error("Server address unavailable, this should not happen. Open an issue.");
		if (!url.startsWith("/")) url = new URL(url).pathname;
		return `http://${this.#address.family === "IPv6" ? `[${this.#address.address}]` : this.#address.address}:${this.#address.port}${url}`;
	}
};
new RemoteRuntimeFontFileUrlResolver({
	urls: /* @__PURE__ */ new Set([]),
	address: null
});
//#endregion
//#region \0astro:assets
var assetQueryParams = void 0;
var imageConfig = {
	"endpoint": { "route": "/_image/" },
	"service": {
		"entrypoint": "astro/assets/services/sharp",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"layout": "none",
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: assetQueryParams,
	enumerable: false,
	configurable: true
});
var inferRemoteSize = async (url) => {
	return (await getConfiguredImageService()).getRemoteSize?.(url, imageConfig) ?? inferRemoteSize$1(url, imageConfig);
};
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
//#region src/constants/constants.ts
var LIGHT_MODE = "light";
var DARK_MODE = "dark";
var SYSTEM_MODE = "system";
var DEFAULT_THEME = LIGHT_MODE;
var WALLPAPER_BANNER = "banner";
var WALLPAPER_FULLSCREEN = "fullscreen";
var WALLPAPER_OVERLAY = "overlay";
//#endregion
//#region src/utils/layout-utils.ts
var toArray = (src) => {
	if (!src) return [];
	if (Array.isArray(src)) return src;
	return [src];
};
var getBackgroundImages = () => {
	const bgSrc = backgroundWallpaper.src;
	if (typeof bgSrc === "object" && bgSrc !== null && !Array.isArray(bgSrc) && ("desktop" in bgSrc || "mobile" in bgSrc)) {
		const srcObj = bgSrc;
		const desktopImages = toArray(srcObj.desktop);
		const mobileImages = toArray(srcObj.mobile);
		return {
			desktop: desktopImages.length > 0 ? desktopImages : mobileImages,
			mobile: mobileImages.length > 0 ? mobileImages : desktopImages,
			isMultiple: desktopImages.length > 1 || mobileImages.length > 1
		};
	}
	const images = toArray(bgSrc);
	return {
		desktop: images,
		mobile: images,
		isMultiple: images.length > 1
	};
};
var isHomePage = (pathname) => {
	const baseUrl = "/";
	const baseUrlNoSlash = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
	if (pathname === baseUrl) return true;
	if (pathname === baseUrlNoSlash) return true;
	if (pathname === "/") return true;
	return false;
};
//#endregion
//#region src/components/analytics/GoogleAnalytics.astro
createAstro("https://fengqiyunxing.github.io");
var $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$GoogleAnalytics;
	const { analyticsId } = Astro.props;
	return renderTemplate`<!-- Google tag (gtag.js) --><script data-swup-ignore-script async${addAttribute(`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`, "src")}><\/script><script>(function(){${defineScriptVars({ analyticsId })}window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', analyticsId);
})();<\/script>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/analytics/GoogleAnalytics.astro", void 0);
//#endregion
//#region src/components/analytics/La51Analytics.astro
createAstro("https://fengqiyunxing.github.io");
var $$La51Analytics = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$La51Analytics;
	const { analyticsId, sdkUrl, ck, autoTrack = true, hashMode = false, screenRecord = true } = Astro.props;
	return renderTemplate`<script>(function(){${defineScriptVars({
		analyticsId,
		sdkUrl,
		ck,
		autoTrack,
		hashMode,
		screenRecord
	})}
	!(function (p) {
		"use strict";
		!(function () {
			var s = window,
				e = document,
				i = p,
				c = sdkUrl || "".concat(
					"https:" === e.location.protocol ? "https://" : "http://",
					"sdk.51.la/js-sdk-pro.min.js"
				),
				n = e.createElement("script"),
				r = e.getElementsByTagName("script")[0];
			(n.type = "text/javascript"),
				n.setAttribute("charset", "UTF-8"),
				(n.async = !0),
				(n.src = c),
				(n.id = "LA_COLLECT"),
				(i.d = n);
			var o = function () {
				s.LA.ids.push(i);
			};
			s.LA
				? s.LA.ids && o()
				: ((s.LA = p), (s.LA.ids = []), o()),
				r.parentNode.insertBefore(n, r);
		})();
	})({ id: analyticsId, ck: ck || analyticsId, autoTrack: autoTrack, hashMode: hashMode, screenRecord: screenRecord });
})();<\/script>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/analytics/La51Analytics.astro", void 0);
//#endregion
//#region src/components/analytics/MicrosoftClarity.astro
createAstro("https://fengqiyunxing.github.io");
var $$MicrosoftClarity = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MicrosoftClarity;
	const { clarityId } = Astro.props;
	return renderTemplate`<script>(function(){${defineScriptVars({ clarityId })}
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", clarityId);
})();<\/script>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/analytics/MicrosoftClarity.astro", void 0);
//#endregion
//#region src/components/analytics/UmamiAnalytics.astro
createAstro("https://fengqiyunxing.github.io");
var $$UmamiAnalytics = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$UmamiAnalytics;
	const { websiteId, scriptUrl, replaysScriptUrl, trackOutboundLinks = true, collectWebVitals = false, replays } = Astro.props;
	const replaysEnabled = replays?.enabled ?? false;
	const replaysSampleRate = replays?.sampleRate ?? .15;
	const replaysMaskLevel = replays?.maskLevel ?? "moderate";
	const replaysMaxDuration = replays?.maxDuration ?? 3e5;
	const replaysBlockSelector = replays?.blockSelector?.trim();
	return renderTemplate`<script data-swup-ignore-script defer${addAttribute(scriptUrl, "src")}${addAttribute(websiteId, "data-website-id")}${addAttribute(collectWebVitals ? "true" : void 0, "data-performance")}><\/script>${replaysEnabled && renderTemplate`<script data-swup-ignore-script defer${addAttribute(replaysScriptUrl, "src")}${addAttribute(websiteId, "data-website-id")}${addAttribute(String(replaysSampleRate), "data-sample-rate")}${addAttribute(replaysMaskLevel, "data-mask-level")}${addAttribute(String(replaysMaxDuration), "data-max-duration")}${addAttribute(replaysBlockSelector || void 0, "data-block-selector")}><\/script>`}${trackOutboundLinks && renderTemplate`<script data-swup-ignore-script>
			;(() => {
				const name = 'outbound-link-click'

				const applyOutboundTracking = () => {
					document.querySelectorAll('a').forEach((a) => {
						if (
							a.host !== window.location.host &&
							!a.getAttribute('data-umami-event')
						) {
							a.setAttribute('data-umami-event', name)
							a.setAttribute('data-umami-event-url', a.href)
						}
					})
				}

				if (document.readyState === 'loading') {
					document.addEventListener('DOMContentLoaded', applyOutboundTracking, {
						once: true,
					})
				} else {
					applyOutboundTracking()
				}

				document.addEventListener('astro:page-load', applyOutboundTracking)
			})()
		<\/script>`}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/analytics/UmamiAnalytics.astro", void 0);
//#endregion
//#region src/components/features/CodeGroupManager.astro
var $$CodeGroupManager = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/CodeGroupManager.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/CodeGroupManager.astro", void 0);
//#endregion
//#region src/components/features/FancyboxManager.astro
var $$FancyboxManager = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/FancyboxManager.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/FancyboxManager.astro", void 0);
//#endregion
//#region src/utils/fontHelper.ts
/**
* 从 fontConfig 中收集所有实际使用的字体 CSS 变量名。
*
* 包括：
* - selected 中的非 "system" 值
* - bannerTitleFont / bannerSubtitleFont / navbarTitleFont 区域覆盖
* - codeFont 代码块字体
*
* @returns 去重后的 CSS 变量名集合（如 "--font-inter"）
*/
function collectUsedFontCssVars(config) {
	const used = /* @__PURE__ */ new Set();
	const sel = config.selected;
	if (Array.isArray(sel)) {
		for (const v of sel) if (v !== "system") used.add(v);
	} else if (sel !== "system") used.add(sel);
	if (config.bannerTitleFont) used.add(config.bannerTitleFont);
	if (config.bannerSubtitleFont) used.add(config.bannerSubtitleFont);
	if (config.navbarTitleFont) used.add(config.navbarTitleFont);
	if (config.codeFont) used.add(config.codeFont);
	return used;
}
//#endregion
//#region src/components/features/FontSetup.astro
var $$FontSetup = createComponent(($$result, $$props, $$slots) => {
	const allCssVars = fontConfig.enable ? collectUsedFontCssVars(fontConfig) : /* @__PURE__ */ new Set();
	const selectedIds = fontConfig.enable && fontConfig.selected ? Array.isArray(fontConfig.selected) ? fontConfig.selected : [fontConfig.selected] : [];
	const SYSTEM_FONT_STACK = "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
	const MONO_FONT_STACK = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace";
	const selectedFontVars = selectedIds.filter((v) => v !== "system");
	const bodyFontFamily = selectedFontVars.length > 0 ? [...selectedFontVars.map((v) => `var(${v})`), SYSTEM_FONT_STACK].join(", ") : SYSTEM_FONT_STACK;
	const bannerTitleFontVar = fontConfig.enable ? fontConfig.bannerTitleFont || "" : "";
	const bannerSubtitleFontVar = fontConfig.enable ? fontConfig.bannerSubtitleFont || "" : "";
	const navbarTitleFontVar = fontConfig.enable ? fontConfig.navbarTitleFont || "" : "";
	const codeFontVar = fontConfig.enable ? fontConfig.codeFont || "" : "";
	const codeFontFamily = codeFontVar ? `var(${codeFontVar}, ${MONO_FONT_STACK})` : MONO_FONT_STACK;
	return renderTemplate`<!-- Astro Font API: 自动下载、缓存并生成优化的 @font-face -->${Array.from(allCssVars).map((cssVar) => renderTemplate`${renderComponent($$result, "Font", $$Font, {
		"cssVariable": cssVar,
		"preload": selectedFontVars.includes(cssVar)
	})}`)}<!-- 区域字体 CSS 变量 + body 字体 --><!-- --font-code 无条件输出，即使关闭自定义字体，行内代码和代码块也要保持等宽字体 --><style>${unescapeHTML(`
  :root {
    --font-code: ${codeFontFamily};
    ${bannerTitleFontVar ? `--font-banner-title: var(${bannerTitleFontVar}, inherit);` : ""}
    ${bannerSubtitleFontVar ? `--font-banner-subtitle: var(${bannerSubtitleFontVar}, inherit);` : ""}
    ${navbarTitleFontVar ? `--font-navbar-title: var(${navbarTitleFontVar}, inherit);` : ""}
  }

  ${fontConfig.enable && (bannerTitleFontVar || bannerSubtitleFontVar || navbarTitleFontVar || selectedFontVars.length > 0) ? `body {
      font-family: ${bodyFontFamily};
    }` : ""}
`)}</style>${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/FontSetup.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/FontSetup.astro", void 0);
//#endregion
//#region src/components/features/GithubCardManager.astro
var $$GithubCardManager = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/GithubCardManager.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/GithubCardManager.astro", void 0);
//#endregion
//#region src/components/features/MusicManager.astro
var $$MusicManager = createComponent(($$result, $$props, $$slots) => {
	const config = musicPlayerConfig;
	const localPlaylist = config.mode === "local" && config.local?.playlist ? config.local.playlist.map((song) => {
		const isFullUrl = (path) => /^https?:\/\//.test(path);
		return {
			name: song.name,
			artist: song.artist,
			url: isFullUrl(song.url) ? song.url : url(song.url),
			pic: song.cover ? isFullUrl(song.cover) ? song.cover : url(song.cover) : void 0,
			lrc: song.lrc ? isFullUrl(song.lrc) ? song.lrc : url(song.lrc) : void 0
		};
	}) : [];
	const managerConfigStr = JSON.stringify({
		mode: config.mode,
		meting: config.meting,
		localPlaylist,
		volume: config.volume ?? .7,
		playMode: config.playMode ?? "list",
		showLyrics: config.showLyrics ?? true,
		i18n: {
			noPlaying: i18n(I18nKey.musicNoPlaying),
			lyrics: i18n(I18nKey.musicLyrics),
			volume: i18n(I18nKey.musicVolume),
			playMode: i18n(I18nKey.musicPlayMode),
			prev: i18n(I18nKey.musicPrev),
			next: i18n(I18nKey.musicNext),
			playlist: i18n(I18nKey.musicPlaylist),
			noLyrics: i18n(I18nKey.musicNoLyrics),
			loadingLyrics: i18n(I18nKey.musicLoadingLyrics),
			failedLyrics: i18n(I18nKey.musicFailedLyrics),
			noSongs: i18n(I18nKey.musicNoSongs),
			error: i18n(I18nKey.musicError),
			play: i18n(I18nKey.musicPlay),
			pause: i18n(I18nKey.musicPause),
			progress: i18n(I18nKey.musicProgress),
			noCover: i18n(I18nKey.musicNoCover)
		}
	});
	return renderTemplate`<script>(function(){${defineScriptVars({ managerConfigStr })}
(function () {
    // Singleton guard – only create once
    if (window.__fireflyMusic) return;

    var config = JSON.parse(managerConfigStr);

    // ── Helpers ──────────────────────────────────────────────
    function formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        var min = Math.floor(seconds / 60);
        var sec = Math.floor(seconds % 60);
        return min + ':' + (sec < 10 ? '0' : '') + sec;
    }

    function parseLRC(lrc) {
        if (!lrc) return [];
        var lines = lrc.split('\\n');
        var result = [];
        var timeReg = /\\[(\\d{2}):(\\d{2})\\.(\\d{2,3})\\]/g;
        lines.forEach(function (line) {
            var matches = Array.from(line.matchAll(timeReg));
            if (matches.length > 0) {
                var text = line.replace(timeReg, '').trim();
                if (text) {
                    matches.forEach(function (match) {
                        var m = parseInt(match[1]);
                        var s = parseInt(match[2]);
                        var ms = parseInt(match[3]);
                        var time = m * 60 + s + ms / (match[3].length === 3 ? 1000 : 100);
                        result.push({ time: time, text: text });
                    });
                }
            }
        });
        return result.sort(function (a, b) { return a.time - b.time; });
    }

    // ── Audio element (persistent, attached to body) ────────
    var audio = document.createElement('audio');
    audio.crossOrigin = 'anonymous';
    audio.style.display = 'none';
    audio.preload = 'none'; // 阻止浏览器预加载和自动恢复播放
    document.body.appendChild(audio);
    audio.pause(); // 确保不自动播放

    // ── State ────────────────────────────────────────────────
    var loadVersion = 0; // incremented on each loadTrack to discard stale play() results
    var state = {
        playlist: [],
        currentIndex: 0,
        isPlaying: false,
        playMode: 0, // 0: list, 1: one, 2: random
        volume: localStorage.getItem('music-player-volume') !== null
            ? parseFloat(localStorage.getItem('music-player-volume'))
            : (config.volume || 0.7),
        isMuted: false,
        lyrics: [],
        currentLrcIndex: -1,
        initialized: false,
        initializing: false,
        error: null
    };

    // Map config playMode string to number
    if (config.playMode === 'random') state.playMode = 2;
    else if (config.playMode === 'one') state.playMode = 1;
    else state.playMode = 0;

    // ── Event helpers ────────────────────────────────────────
    function emit(name, detail) {
        window.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));
    }

    // ── Meting fetch ─────────────────────────────────────────
    async function fetchMetingData() {
        if (!config.meting) return;
        var m = config.meting;
        var apis = [m.api].concat(m.fallbackApis || []);

        for (var i = 0; i < apis.length; i++) {
            var baseApi = apis[i];
            if (!baseApi) continue;
            try {
                var fetchUrl = baseApi
                    .replace(':server', m.server)
                    .replace(':type', m.type)
                    .replace(':id', m.id)
                    .replace(':r', Math.random());
                if (m.auth) fetchUrl += '&auth=' + m.auth;

                var res = await fetch(fetchUrl);
                if (!res.ok) throw new Error('HTTP ' + res.status);
                var data = await res.json();

                if (Array.isArray(data) && data.length > 0) {
                    state.playlist = data.map(function (item) {
                        return {
                            name: item.title || item.name || 'Unknown',
                            artist: item.author || item.artist || 'Unknown',
                            url: item.url,
                            pic: item.pic || item.cover || '',
                            lrc: item.lrc
                        };
                    });
                    return;
                }
            } catch (e) {
                console.warn('Meting API failed for ' + baseApi, e);
            }
        }
        throw new Error('All Meting APIs failed');
    }

    // ── Lyrics ───────────────────────────────────────────────
    function loadLyrics(track) {
        state.lyrics = [];
        state.currentLrcIndex = -1;

        if (!track.lrc) {
            emit('fm:lyrics', { lyrics: [], status: 'none' });
            return;
        }

        var isLrcUrl = /^(https?:)?\\/\\//.test(track.lrc)
            || track.lrc.startsWith('/')
            || /\\.(lrc|txt)(\\?|#|$)/i.test(track.lrc);

        if (isLrcUrl) {
            emit('fm:lyrics', { lyrics: [], status: 'loading' });
            fetch(track.lrc)
                .then(function (r) { return r.text(); })
                .then(function (text) {
                    state.lyrics = parseLRC(text);
                    emit('fm:lyrics', { lyrics: state.lyrics, status: 'loaded' });
                })
                .catch(function () {
                    state.lyrics = [];
                    emit('fm:lyrics', { lyrics: [], status: 'failed' });
                });
        } else {
            state.lyrics = parseLRC(track.lrc);
            emit('fm:lyrics', { lyrics: state.lyrics, status: state.lyrics.length > 0 ? 'loaded' : 'none' });
        }
    }

    var currentTrackUrls = [];
    var currentTrackUrlIndex = 0;
    var errorSkipTimeout = null;

    function tryPlayCurrentTrackUrl(autoPlay, ver) {
        if (ver !== loadVersion) return;
        var playUrl = currentTrackUrls[currentTrackUrlIndex];
        audio.src = playUrl;

        if (autoPlay) {
            audio.play().then(function () {
                if (ver !== loadVersion) return; // stale, discard
                state.isPlaying = true;
                state.error = null;
                emit('fm:play-state', { isPlaying: true });
            }).catch(function (e) {
                if (ver !== loadVersion) return; // stale, discard
                if (e.name === 'AbortError') return; // interrupted by new load
                console.warn('Autoplay blocked:', e);
            });
        } else {
            state.isPlaying = false;
            emit('fm:play-state', { isPlaying: false });
        }
    }

    // ── Track loading ────────────────────────────────────────
    function loadTrack(index, autoPlay) {
        if (index < 0 || index >= state.playlist.length) return;
        state.currentIndex = index;
        var track = state.playlist[index];
        var ver = ++loadVersion;

        if (errorSkipTimeout) {
            clearTimeout(errorSkipTimeout);
            errorSkipTimeout = null;
        }

        currentTrackUrls = [track.url];
        currentTrackUrlIndex = 0;

        var matchId = track.url.match(/[?&]id=([^&]+)/);
        var matchServer = track.url.match(/[?&]server=([^&]+)/);
        if (matchId && matchServer && config.meting && config.meting.fallbackApis) {
            config.meting.fallbackApis.forEach(function (fallback) {
                var fallbackUrl = fallback
                    .replace(':server', matchServer[1])
                    .replace(':type', 'url')
                    .replace(':id', matchId[1]);
                if (currentTrackUrls.indexOf(fallbackUrl) === -1) {
                    currentTrackUrls.push(fallbackUrl);
                }
            });
        }

        loadLyrics(track);

        emit('fm:track', { index: index, track: track, autoPlay: !!autoPlay });

        tryPlayCurrentTrackUrl(autoPlay, ver);
    }

    // ── Playback controls ────────────────────────────────────
    function togglePlay() {
        if (audio.paused) {
            audio.play().then(function () {
                state.isPlaying = true;
                emit('fm:play-state', { isPlaying: true });
            }).catch(function (e) {
                if (e.name === 'AbortError') return;
                console.warn('Playback failed:', e);
            });
        } else {
            audio.pause();
            state.isPlaying = false;
            emit('fm:play-state', { isPlaying: false });
        }
    }

    function playNext(auto) {
        if (state.playMode === 1 && auto) {
            audio.currentTime = 0;
            audio.play();
            return;
        }
        var nextIndex;
        if (state.playMode === 2) {
            nextIndex = Math.floor(Math.random() * state.playlist.length);
        } else {
            nextIndex = (state.currentIndex + 1) % state.playlist.length;
        }
        loadTrack(nextIndex, true);
    }

    function playPrev() {
        var prevIndex;
        if (state.playMode === 2) {
            prevIndex = Math.floor(Math.random() * state.playlist.length);
        } else {
            prevIndex = (state.currentIndex - 1 + state.playlist.length) % state.playlist.length;
        }
        loadTrack(prevIndex, true);
    }

    function setPlayMode(mode) {
        state.playMode = mode;
        emit('fm:mode', { playMode: mode });
    }

    function cyclePlayMode() {
        setPlayMode((state.playMode + 1) % 3);
    }

    function setVolume(val) {
        val = Math.max(0, Math.min(1, val));
        state.volume = val;
        state.isMuted = false;
        audio.volume = val;
        audio.muted = false;
        localStorage.setItem('music-player-volume', val.toString());
        emit('fm:volume', { volume: val, isMuted: false });
    }

    function toggleMute() {
        state.isMuted = !state.isMuted;
        audio.muted = state.isMuted;
        emit('fm:volume', { volume: state.volume, isMuted: state.isMuted });
    }

    function seek(percent) {
        if (!audio.duration) return;
        audio.currentTime = Math.max(0, Math.min(1, percent)) * audio.duration;
    }

    function seekToTime(time) {
        if (!audio.duration) return;
        audio.currentTime = Math.max(0, Math.min(time, audio.duration));
    }

    function playTrackByIndex(index) {
        if (index === state.currentIndex && !audio.paused) {
            togglePlay();
        } else {
            loadTrack(index, true);
        }
    }

    // ── Audio events → broadcast ─────────────────────────────
    audio.addEventListener('timeupdate', function () {
        if (isNaN(audio.duration)) return;
        var ct = audio.currentTime;
        var dur = audio.duration;
        var pct = (ct / dur) * 100;

        emit('fm:time', {
            currentTime: ct,
            duration: dur,
            progress: pct,
            currentTimeStr: formatTime(ct),
            durationStr: formatTime(dur)
        });

        // Lyrics sync
        if (state.lyrics.length > 0) {
            var idx = -1;
            for (var i = 0; i < state.lyrics.length; i++) {
                if (ct >= state.lyrics[i].time) idx = i;
                else break;
            }
            if (idx !== state.currentLrcIndex) {
                state.currentLrcIndex = idx;
                emit('fm:lrc-index', { index: idx });
            }
        }
    });

    audio.addEventListener('ended', function () {
        playNext(true);
    });

    audio.addEventListener('error', function () {
        var ver = loadVersion;
        if (currentTrackUrlIndex < currentTrackUrls.length - 1) {
            currentTrackUrlIndex++;
            console.warn('Playback failed, trying fallback URL: ' + currentTrackUrls[currentTrackUrlIndex]);
            tryPlayCurrentTrackUrl(true, ver);
        } else {
            state.error = 'Audio playback error';
            emit('fm:error', { message: '播放失败，即将自动跳过...' });

            if (errorSkipTimeout) clearTimeout(errorSkipTimeout);
            errorSkipTimeout = setTimeout(function () {
                if (ver === loadVersion) {
                    playNext(true);
                }
            }, 2000);
        }
    });

    // ── Init (idempotent) ────────────────────────────────────
    async function init() {
        if (state.initialized || state.initializing) return;
        state.initializing = true;

        try {
            if (config.mode === 'meting' && config.meting) {
                await fetchMetingData();
            } else if (config.mode === 'local') {
                state.playlist = config.localPlaylist || [];
            }

            if (state.playlist.length > 0) {
                // Apply volume
                audio.volume = state.volume;

                var startIndex = 0;
                if (state.playMode === 2) {
                    startIndex = Math.floor(Math.random() * state.playlist.length);
                }

                state.initialized = true;

                emit('fm:init', {
                    playlist: state.playlist,
                    playMode: state.playMode,
                    volume: state.volume,
                    isMuted: state.isMuted
                });

                loadTrack(startIndex, false);
            } else {
                state.initialized = true;
                emit('fm:init', {
                    playlist: [],
                    playMode: state.playMode,
                    volume: state.volume,
                    isMuted: state.isMuted
                });
                emit('fm:error', { message: config.i18n.noSongs });
            }
        } catch (e) {
            console.error('Music Manager init error:', e);
            state.initialized = true;
            emit('fm:init', {
                playlist: [],
                playMode: state.playMode,
                volume: state.volume,
                isMuted: state.isMuted
            });
            emit('fm:error', { message: config.i18n.error });
        } finally {
            state.initializing = false;
        }
    }

    // ── Public API ───────────────────────────────────────────
    window.__fireflyMusic = {
        init: init,
        getState: function () {
            var track = state.playlist[state.currentIndex] || null;
            return {
                playlist: state.playlist,
                currentIndex: state.currentIndex,
                track: track,
                isPlaying: state.isPlaying,
                playMode: state.playMode,
                volume: state.volume,
                isMuted: state.isMuted,
                currentTime: audio.currentTime,
                duration: audio.duration || 0,
                progress: audio.duration ? (audio.currentTime / audio.duration) * 100 : 0,
                currentTimeStr: formatTime(audio.currentTime),
                durationStr: formatTime(audio.duration),
                lyrics: state.lyrics,
                currentLrcIndex: state.currentLrcIndex,
                initialized: state.initialized,
                error: state.error,
                config: config
            };
        },
        togglePlay: togglePlay,
        playNext: function () { playNext(false); },
        playPrev: playPrev,
        cyclePlayMode: cyclePlayMode,
        setVolume: setVolume,
        toggleMute: toggleMute,
        seek: seek,
        seekToTime: seekToTime,
        playTrackByIndex: playTrackByIndex,
        loadTrack: loadTrack
    };
})();
})();<\/script>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/MusicManager.astro", void 0);
//#endregion
//#region src/components/features/MusicPlayerView.astro
var $$MusicPlayerView = createComponent(($$result, $$props, $$slots) => {
	const viewConfigStr = JSON.stringify({
		showLyrics: musicPlayerConfig.showLyrics ?? true,
		i18n: {
			noPlaying: i18n(I18nKey.musicNoPlaying),
			lyrics: i18n(I18nKey.musicLyrics),
			noLyrics: i18n(I18nKey.musicNoLyrics),
			loadingLyrics: i18n(I18nKey.musicLoadingLyrics),
			failedLyrics: i18n(I18nKey.musicFailedLyrics),
			noSongs: i18n(I18nKey.musicNoSongs),
			error: i18n(I18nKey.musicError),
			play: i18n(I18nKey.musicPlay),
			pause: i18n(I18nKey.musicPause),
			noCover: i18n(I18nKey.musicNoCover),
			music: i18n(I18nKey.music)
		}
	});
	return renderTemplate`<!-- 播放列表条目模板：所有 widget 共用一份 --><template id="playlist-item-template" data-astro-cid-xfxzjgof>${templateEnter($$result)}${maybeRenderHead($$result)}<div class="playlist-item flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors group" data-astro-cid-xfxzjgof><div class="w-8 h-8 rounded-md overflow-hidden shrink-0 relative bg-neutral-200 dark:bg-neutral-700" data-astro-cid-xfxzjgof><img src="" class="item-cover w-full h-full object-cover" loading="lazy" alt="" data-astro-cid-xfxzjgof><!-- Active Indicator overlay with animated equalizer / play icon --><div class="item-active-overlay absolute inset-0 bg-(--primary)/20 hidden items-center justify-center" data-astro-cid-xfxzjgof><div class="eq-bars flex items-end gap-[2px] h-3.5" data-astro-cid-xfxzjgof><span class="eq-bar w-[3px] bg-(--primary) rounded-sm" data-astro-cid-xfxzjgof></span><span class="eq-bar w-[3px] bg-(--primary) rounded-sm" data-astro-cid-xfxzjgof></span><span class="eq-bar w-[3px] bg-(--primary) rounded-sm" data-astro-cid-xfxzjgof></span></div><svg class="eq-play-icon text-(--primary) hidden" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-xfxzjgof><path d="M8 5v14l11-7z" data-astro-cid-xfxzjgof></path></svg></div></div><div class="flex-1 min-w-0" data-astro-cid-xfxzjgof><div class="item-title text-xs font-bold text-neutral-700 dark:text-neutral-200 truncate group-hover:text-(--primary) transition-colors" data-astro-cid-xfxzjgof></div><div class="item-artist text-[10px] text-neutral-400 truncate" data-astro-cid-xfxzjgof></div></div></div>${templateExit($$result)}</template><script>(function(){${defineScriptVars({ viewConfigStr })}
(function () {
    var cfg = JSON.parse(viewConfigStr);

    var mgr = window.__fireflyMusic;
    if (!mgr) return;

    var initScheduled = false;
    function scheduleInit() {
        if (initScheduled) return;
        initScheduled = true;

        var fired = false;
        function go() {
            if (fired) return;
            fired = true;
            document.removeEventListener('pointerdown', go, true);
            document.removeEventListener('keydown', go, true);
            mgr.init();
        }
        document.addEventListener('pointerdown', go, true);
        document.addEventListener('keydown', go, true);

        function afterLoad() {
            if (window.requestIdleCallback) window.requestIdleCallback(go, { timeout: 2000 });
            else setTimeout(go, 800);
        }
        if (document.readyState === 'complete') afterLoad();
        else window.addEventListener('load', afterLoad, { once: true });
    }

    function initWidget(widget) {
        // ── UI element refs ──────────────────────────────────────
        var ui = {
            widget: widget,
            loading: widget.querySelector('.music-loading'),
            cover: widget.querySelector('.music-cover'),
            title: widget.querySelector('.music-title'),
            artist: widget.querySelector('.music-artist'),
            progressBar: widget.querySelector('.progress-bar'),
            progressThumb: widget.querySelector('.progress-thumb'),
            progressContainer: widget.querySelector('.progress-container'),
            currentTime: widget.querySelector('.current-time'),
            totalTime: widget.querySelector('.total-time'),
            btnPlay: widget.querySelector('.btn-play'),
            iconPlay: widget.querySelector('.icon-play'),
            iconPause: widget.querySelector('.icon-pause'),
            btnPrev: widget.querySelector('.btn-prev'),
            btnNext: widget.querySelector('.btn-next'),
            btnRepeat: widget.querySelector('.btn-repeat'),
            iconRepeat: widget.querySelector('.icon-repeat'),
            iconRepeatOne: widget.querySelector('.icon-repeat-one'),
            iconShuffle: widget.querySelector('.icon-shuffle'),
            btnMute: widget.querySelector('.btn-mute'),
            iconVolHigh: widget.querySelector('.icon-vol-high'),
            iconVolMute: widget.querySelector('.icon-vol-mute'),
            volContainer: widget.querySelector('.vol-container'),
            volBar: widget.querySelector('.vol-bar'),
            btnLrc: widget.querySelector('.btn-lrc-toggle'),
            iconLrcOn: widget.querySelector('.icon-lrc-on'),
            iconLrcOff: widget.querySelector('.icon-lrc-off'),
            lrcDrawer: widget.querySelector('.lrc-drawer'),
            lrcContainer: widget.querySelector('.lrc-container'),
            btnDrawer: widget.querySelector('.btn-drawer-toggle'),
            playlistDrawer: widget.querySelector('.playlist-drawer'),
            playlistContainer: widget.querySelector('.playlist-container'),
            itemTemplate: document.getElementById('playlist-item-template')
        };

        // Verify critical elements
        var _critical = [ui.btnPlay, ui.btnRepeat, ui.btnMute, ui.volContainer,
            ui.btnDrawer, ui.btnLrc, ui.lrcDrawer, ui.lrcContainer,
            ui.progressContainer, ui.btnNext, ui.btnPrev, ui.loading,
            ui.cover, ui.title, ui.artist, ui.playlistContainer, ui.itemTemplate];
        if (_critical.some(function(el) { return !el; })) return;

        // ── Local state (drawers, user scrolling, virtual scroll) ──
        var ITEM_H = 42;
        var OVERSCAN = 8;
        var local = {
            isUserScrolling: false,
            scrollTimeout: null,
            currentLrcIndex: -1,
            vs: {
                playlist: [],
                currentIndex: -1,
                renderedStart: -1,
                renderedEnd: -1,
                renderedEls: {},
                scrollRaf: 0,
                drawerOpen: false
            }
        };

        // ── UI update functions ──────────────────────────────────
        function setLoading(bool) {
            if (bool) {
                ui.loading.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                ui.loading.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        function updatePlayStateUI(isPlaying) {
            if (isPlaying) {
                ui.btnPlay.classList.add('bg-(--primary)', 'text-white', 'hover:brightness-110');
                ui.btnPlay.classList.remove('bg-(--btn-regular-bg)', 'hover:bg-(--btn-regular-bg-hover)', 'active:bg-(--btn-regular-bg-active)', 'text-(--primary)');
                ui.iconPlay.classList.add('hidden');
                ui.iconPause.classList.remove('hidden');
                ui.cover.style.animationPlayState = 'running';
                ui.btnPlay.setAttribute('aria-label', cfg.i18n.pause);
                ui.btnPlay.title = cfg.i18n.pause;
            } else {
                ui.btnPlay.classList.remove('bg-(--primary)', 'text-white', 'hover:brightness-110');
                ui.btnPlay.classList.add('bg-(--btn-regular-bg)', 'hover:bg-(--btn-regular-bg-hover)', 'active:bg-(--btn-regular-bg-active)', 'text-(--primary)');
                ui.iconPlay.classList.remove('hidden');
                ui.iconPause.classList.add('hidden');
                ui.cover.style.animationPlayState = 'paused';
                ui.btnPlay.setAttribute('aria-label', cfg.i18n.play);
                ui.btnPlay.title = cfg.i18n.play;
            }
            // Toggle eq-bars / play icon in playlist
            var activeItems = ui.playlistContainer.querySelectorAll('.playlist-item[aria-current="true"]');
            activeItems.forEach(function (item) {
                var eqBars = item.querySelector('.eq-bars');
                var playIcon = item.querySelector('.eq-play-icon');
                if (isPlaying) {
                    eqBars.classList.remove('hidden');
                    eqBars.classList.add('flex');
                    playIcon.classList.add('hidden');
                } else {
                    eqBars.classList.add('hidden');
                    eqBars.classList.remove('flex');
                    playIcon.classList.remove('hidden');
                }
            });
        }

        function updateModeUI(playMode) {
            var primaryColor = 'text-(--primary)';
            if (playMode === 0) {
                ui.btnRepeat.className = 'p-2 active:scale-95 transition-colors text-neutral-300 dark:text-neutral-600 hover:text-(--primary)';
                ui.iconRepeat.classList.remove('hidden');
                ui.iconRepeatOne.classList.add('hidden');
                ui.iconShuffle.classList.add('hidden');
            } else if (playMode === 1) {
                ui.btnRepeat.className = 'p-2 active:scale-95 transition-colors ' + primaryColor;
                ui.iconRepeat.classList.add('hidden');
                ui.iconRepeatOne.classList.remove('hidden');
                ui.iconShuffle.classList.add('hidden');
            } else {
                ui.btnRepeat.className = 'p-2 active:scale-95 transition-colors ' + primaryColor;
                ui.iconRepeat.classList.add('hidden');
                ui.iconRepeatOne.classList.add('hidden');
                ui.iconShuffle.classList.remove('hidden');
            }
        }

        function updateVolumeUI(volume, isMuted) {
            var pct = isMuted ? 0 : volume * 100;
            ui.volBar.style.width = pct + '%';
            ui.volContainer.setAttribute('aria-valuenow', Math.round(pct).toString());
            if (isMuted || volume === 0) {
                ui.iconVolHigh.classList.add('hidden');
                ui.iconVolMute.classList.remove('hidden');
            } else {
                ui.iconVolHigh.classList.remove('hidden');
                ui.iconVolMute.classList.add('hidden');
            }
        }

        function updateTrackUI(track) {
            if (!track) return;
            ui.title.innerText = track.name;
            ui.title.title = track.name;
            ui.artist.innerText = track.artist;
            ui.artist.title = track.artist;

            if (track.pic) {
                ui.cover.classList.add('opacity-0');
                ui.cover.src = track.pic;
                ui.cover.alt = track.name + ' - ' + track.artist;
            } else {
                ui.cover.src = '';
                ui.cover.classList.add('opacity-0');
                ui.cover.alt = cfg.i18n.noCover;
            }

            // Reset cover rotation
            ui.cover.classList.remove('animate-spin-slow');
            void ui.cover.offsetWidth;
            ui.cover.classList.add('animate-spin-slow');
            ui.cover.style.animationPlayState = 'paused';

            // Reset progress
            ui.progressBar.style.width = '0%';
            ui.progressThumb.style.left = '0%';
            ui.progressContainer.setAttribute('aria-valuenow', '0');
            ui.currentTime.innerText = '0:00';
            ui.totalTime.innerText = '0:00';
        }

        // ── Virtual scroll helpers (absolute-position based) ──────
        var PRIMARY_COLOR = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#6366f1';

        function vsApplyActiveStyle(el, isActive) {
            var overlay = el.querySelector('.item-active-overlay');
            var title = el.querySelector('.item-title');
            var eqBars = el.querySelector('.eq-bars');
            var playIcon = el.querySelector('.eq-play-icon');
            var isPlaying = mgr.getState().isPlaying;
            if (isActive) {
                el.classList.add('bg-neutral-100', 'dark:bg-white/10');
                el.setAttribute('aria-current', 'true');
                overlay.classList.remove('hidden');
                overlay.classList.add('flex');
                title.style.color = PRIMARY_COLOR;
                if (isPlaying) {
                    eqBars.classList.remove('hidden');
                    eqBars.classList.add('flex');
                    playIcon.classList.add('hidden');
                } else {
                    eqBars.classList.add('hidden');
                    eqBars.classList.remove('flex');
                    playIcon.classList.remove('hidden');
                }
            } else {
                el.classList.remove('bg-neutral-100', 'dark:bg-white/10');
                el.removeAttribute('aria-current');
                overlay.classList.add('hidden');
                overlay.classList.remove('flex');
                title.style.color = '';
            }
        }

        function vsCreateItemEl(idx) {
            var vs = local.vs;
            var track = vs.playlist[idx];
            var clone = ui.itemTemplate.content.cloneNode(true);
            var itemEl = clone.querySelector('.playlist-item');
            var img = clone.querySelector('.item-cover');
            var title = clone.querySelector('.item-title');
            var artist = clone.querySelector('.item-artist');

            img.src = track.pic || '';
            img.alt = track.name + ' - ' + track.artist;
            title.innerText = track.name;
            artist.innerText = track.artist;

            itemEl.dataset.index = idx;
            itemEl.setAttribute('role', 'option');
            itemEl.setAttribute('aria-label', track.name + ' - ' + track.artist);
            itemEl.onclick = function () { mgr.playTrackByIndex(idx); };

            // Absolute positioning for virtual scroll
            itemEl.style.position = 'absolute';
            itemEl.style.left = '0';
            itemEl.style.right = '0';
            itemEl.style.top = (idx * ITEM_H) + 'px';
            itemEl.style.height = ITEM_H + 'px';

            if (idx === vs.currentIndex) {
                vsApplyActiveStyle(itemEl, true);
            }
            return clone;
        }

        function vsCommitRange() {
            var vs = local.vs;
            if (vs.playlist.length === 0 || !vs.drawerOpen) return;

            var container = ui.playlistContainer;
            var scrollTop = container.scrollTop;
            var viewHeight = container.clientHeight;
            var start = Math.max(0, Math.floor(scrollTop / ITEM_H) - OVERSCAN);
            var end = Math.min(vs.playlist.length, Math.ceil((scrollTop + viewHeight) / ITEM_H) + OVERSCAN);

            if (start === vs.renderedStart && end === vs.renderedEnd) return;

            if (vs.renderedStart === -1) {
                // First render: batch via fragment
                var frag = document.createDocumentFragment();
                for (var i = start; i < end; i++) {
                    frag.appendChild(vsCreateItemEl(i));
                }
                container.appendChild(frag);
            } else {
                // Incremental: remove out-of-range, add new items
                var oldEls = vs.renderedEls;
                for (var ri = vs.renderedStart; ri < vs.renderedEnd; ri++) {
                    if (ri < start || ri >= end) {
                        if (oldEls[ri]) { oldEls[ri].remove(); delete oldEls[ri]; }
                    }
                }
                for (var ai = start; ai < end; ai++) {
                    if (!oldEls[ai]) {
                        var newEl = vsCreateItemEl(ai);
                        var inserted = false;
                        for (var ni = ai + 1; ni < end; ni++) {
                            if (oldEls[ni]) {
                                container.insertBefore(newEl, oldEls[ni]);
                                inserted = true;
                                break;
                            }
                        }
                        if (!inserted) container.appendChild(newEl);
                        oldEls[ai] = newEl;
                    }
                }
            }

            // Rebuild reference map
            vs.renderedEls = {};
            var children = container.children;
            for (var ci = 0; ci < children.length; ci++) {
                var idx = parseInt(children[ci].dataset.index);
                if (!isNaN(idx)) vs.renderedEls[idx] = children[ci];
            }

            vs.renderedStart = start;
            vs.renderedEnd = end;
        }

        function vsRequestUpdate() {
            var vs = local.vs;
            if (vs.scrollRaf) return;
            vs.scrollRaf = requestAnimationFrame(function () {
                vs.scrollRaf = 0;
                vsCommitRange();
            });
        }

        function vsSetContainerHeight() {
            ui.playlistContainer.style.height = (local.vs.playlist.length * ITEM_H) + 'px';
        }

        function renderPlaylist(playlist, currentIndex) {
            var vs = local.vs;
            vs.playlist = playlist;
            vs.currentIndex = currentIndex;
            vs.renderedStart = -1;
            vs.renderedEnd = -1;
            vs.renderedEls = {};
            vs.drawerOpen = ui.playlistDrawer.style.gridTemplateRows === '1fr';
            ui.playlistContainer.innerHTML = '';
            if (vs.drawerOpen) {
                vsSetContainerHeight();
                vsCommitRange();
            }
        }

        function updatePlaylistActiveUI(currentIndex) {
            var vs = local.vs;
            var oldIndex = vs.currentIndex;
            vs.currentIndex = currentIndex;

            if (vs.renderedEls[oldIndex]) {
                vsApplyActiveStyle(vs.renderedEls[oldIndex], false);
            }

            if (currentIndex >= 0 && currentIndex < vs.playlist.length) {
                if (currentIndex < vs.renderedStart || currentIndex >= vs.renderedEnd) {
                    ui.playlistContainer.scrollTop = currentIndex * ITEM_H;
                    vsCommitRange();
                }
                if (vs.renderedEls[currentIndex]) {
                    vsApplyActiveStyle(vs.renderedEls[currentIndex], true);
                }
            }
        }

        function renderLyricsUI(lyrics, status) {
            local.currentLrcIndex = -1;
            ui.lrcContainer.innerHTML = '';
            if (status === 'loading') {
                ui.lrcContainer.innerHTML = '<div class="text-neutral-400 text-sm py-10">' + cfg.i18n.loadingLyrics + '</div>';
                return;
            }
            if (status === 'failed') {
                ui.lrcContainer.innerHTML = '<div class="text-neutral-400 text-sm py-10">' + cfg.i18n.failedLyrics + '</div>';
                return;
            }
            if (!lyrics || lyrics.length === 0) {
                ui.lrcContainer.innerHTML = '<div class="text-neutral-400 text-sm py-10" role="option">' + cfg.i18n.noLyrics + '</div>';
                return;
            }
            lyrics.forEach(function (line, index) {
                var lineEl = document.createElement('div');
                lineEl.className = 'lrc-line transition-all duration-300 text-sm text-neutral-400 py-1 cursor-pointer hover:text-(--primary)';
                lineEl.innerText = line.text;
                lineEl.dataset.index = index;
                lineEl.setAttribute('role', 'option');
                lineEl.setAttribute('aria-label', line.text);
                lineEl.onclick = function () {
                    mgr.seekToTime(line.time);
                };
                ui.lrcContainer.appendChild(lineEl);
            });
        }

        function updateLrcHighlight(index) {
            if (index === local.currentLrcIndex) return;
            local.currentLrcIndex = index;

            var lines = ui.lrcContainer.querySelectorAll('.lrc-line');
            lines.forEach(function (line, i) {
                if (i === index) {
                    line.classList.add('text-(--primary)', 'font-bold', 'text-base');
                    line.classList.remove('text-neutral-400', 'text-sm');
                } else {
                    line.classList.remove('text-(--primary)', 'font-bold', 'text-base');
                    line.classList.add('text-neutral-400', 'text-sm');
                }
            });

            // Auto-scroll unless user is scrolling
            if (index !== -1 && !local.isUserScrolling) {
                var line = ui.lrcContainer.querySelector('.lrc-line[data-index="' + index + '"]');
                if (line) {
                    var containerHeight = ui.lrcContainer.clientHeight;
                    var lineOffset = line.offsetTop;
                    var lineHeight = line.offsetHeight;
                    var targetScroll = lineOffset - (containerHeight / 2) + (lineHeight / 2);
                    ui.lrcContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }
            }
        }

        // ── Full sync from manager state (for late-mount) ────────
        function syncAll() {
            var s = mgr.getState();
            if (!s.initialized) return;

            // Loading off
            setLoading(false);

            if (s.playlist.length === 0) {
                ui.title.innerText = s.error || cfg.i18n.noSongs;
                return;
            }

            renderPlaylist(s.playlist, s.currentIndex);
            if (s.track) updateTrackUI(s.track);
            updatePlayStateUI(s.isPlaying);
            updateModeUI(s.playMode);
            updateVolumeUI(s.volume, s.isMuted);

            // Progress
            if (s.duration > 0) {
                ui.progressBar.style.width = s.progress + '%';
                ui.progressThumb.style.left = s.progress + '%';
                ui.progressContainer.setAttribute('aria-valuenow', Math.round(s.progress).toString());
                ui.currentTime.innerText = s.currentTimeStr;
                ui.totalTime.innerText = s.durationStr;
            }

            // Lyrics
            renderLyricsUI(s.lyrics, s.lyrics.length > 0 ? 'loaded' : 'none');
            if (s.currentLrcIndex >= 0) updateLrcHighlight(s.currentLrcIndex);

            // Cover image: if already set, show it
            if (s.track && s.track.pic && ui.cover.src && ui.cover.complete && ui.cover.naturalWidth > 0) {
                ui.cover.classList.remove('opacity-0');
            }
            // Update cover animation state to match play state
            ui.cover.style.animationPlayState = s.isPlaying ? 'running' : 'paused';
        }

        // ── Event listeners (fm:* from manager) ──────────────────
        var handlers = {};

        function on(name, fn) {
            handlers[name] = fn;
            window.addEventListener(name, fn);
        }

        on('fm:init', function (e) {
            var d = e.detail;
            setLoading(false);
            if (d.playlist.length > 0) {
                renderPlaylist(d.playlist, 0);
                updateModeUI(d.playMode);
                updateVolumeUI(d.volume, d.isMuted);
            } else {
                ui.title.innerText = cfg.i18n.noSongs;
            }
        });

        on('fm:track', function (e) {
            var d = e.detail;
            updateTrackUI(d.track);
            updatePlaylistActiveUI(d.index);
        });

        on('fm:play-state', function (e) {
            updatePlayStateUI(e.detail.isPlaying);
        });

        on('fm:time', function (e) {
            var d = e.detail;
            ui.progressBar.style.width = d.progress + '%';
            ui.progressThumb.style.left = d.progress + '%';
            ui.progressContainer.setAttribute('aria-valuenow', Math.round(d.progress).toString());
            ui.currentTime.innerText = d.currentTimeStr;
            ui.totalTime.innerText = d.durationStr;
        });

        on('fm:volume', function (e) {
            updateVolumeUI(e.detail.volume, e.detail.isMuted);
        });

        on('fm:mode', function (e) {
            updateModeUI(e.detail.playMode);
        });

        on('fm:lyrics', function (e) {
            renderLyricsUI(e.detail.lyrics, e.detail.status);
        });

        on('fm:lrc-index', function (e) {
            updateLrcHighlight(e.detail.index);
        });

        on('fm:error', function (e) {
            ui.title.innerText = e.detail.message || cfg.i18n.error;
        });

        // ── Button click delegates ───────────────────────────────
        ui.btnPlay.addEventListener('click', function () { mgr.togglePlay(); });
        ui.btnNext.addEventListener('click', function () { mgr.playNext(); });
        ui.btnPrev.addEventListener('click', function () { mgr.playPrev(); });
        ui.btnRepeat.addEventListener('click', function () { mgr.cyclePlayMode(); });
        ui.btnMute.addEventListener('click', function () { mgr.toggleMute(); });

        ui.volContainer.addEventListener('click', function (e) {
            var rect = ui.volContainer.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var val = Math.max(0, Math.min(1, x / rect.width));
            mgr.setVolume(val);
        });

        ui.progressContainer.addEventListener('click', function (e) {
            var rect = ui.progressContainer.getBoundingClientRect();
            var clickX = e.clientX - rect.left;
            var percent = Math.min(Math.max(clickX / rect.width, 0), 1);
            mgr.seek(percent);
        });

        // ── Drawer logic (local state) ───────────────────────────
        ui.btnLrc.addEventListener('click', function () {
            var isOpen = ui.lrcDrawer.style.gridTemplateRows === '1fr';
            if (isOpen) {
                ui.lrcDrawer.style.gridTemplateRows = '0fr';
                ui.lrcDrawer.classList.remove('opacity-100');
                ui.lrcDrawer.classList.add('opacity-0');
                ui.btnLrc.classList.remove('text-(--primary)');
                ui.btnLrc.classList.add('text-neutral-400');
                ui.iconLrcOn.classList.add('hidden');
                ui.iconLrcOff.classList.remove('hidden');
            } else {
                // Close playlist if open
                ui.playlistDrawer.style.gridTemplateRows = '0fr';
                ui.playlistDrawer.classList.remove('opacity-100');
                ui.playlistDrawer.classList.add('opacity-0');
                ui.btnDrawer.classList.remove('text-(--primary)');
                ui.btnDrawer.classList.add('text-neutral-400');

                ui.lrcDrawer.style.gridTemplateRows = '1fr';
                ui.lrcDrawer.classList.add('opacity-100');
                ui.lrcDrawer.classList.remove('opacity-0');
                ui.btnLrc.classList.add('text-(--primary)');
                ui.btnLrc.classList.remove('text-neutral-400');
                ui.iconLrcOn.classList.remove('hidden');
                ui.iconLrcOff.classList.add('hidden');
            }
        });

        ui.btnDrawer.addEventListener('click', function () {
            var isOpen = ui.playlistDrawer.style.gridTemplateRows === '1fr';
            if (isOpen) {
                ui.playlistDrawer.style.gridTemplateRows = '0fr';
                ui.playlistDrawer.classList.remove('opacity-100');
                ui.playlistDrawer.classList.add('opacity-0');
                ui.btnDrawer.classList.add('text-neutral-400');
                ui.btnDrawer.classList.remove('text-(--primary)');
                local.vs.drawerOpen = false;
            } else {
                // Close lyrics if open
                ui.lrcDrawer.style.gridTemplateRows = '0fr';
                ui.lrcDrawer.classList.remove('opacity-100');
                ui.lrcDrawer.classList.add('opacity-0');
                ui.btnLrc.classList.remove('text-(--primary)');
                ui.btnLrc.classList.add('text-neutral-400');
                ui.iconLrcOn.classList.add('hidden');
                ui.iconLrcOff.classList.remove('hidden');

                ui.playlistDrawer.style.gridTemplateRows = '1fr';
                ui.playlistDrawer.classList.add('opacity-100');
                ui.playlistDrawer.classList.remove('opacity-0');
                ui.btnDrawer.classList.remove('text-neutral-400');
                ui.btnDrawer.classList.add('text-(--primary)');
                local.vs.drawerOpen = true;

                // Render playlist after drawer transition settles
                if (local.vs.playlist.length > 0) {
                    requestAnimationFrame(function () {
                        vsSetContainerHeight();
                        vsCommitRange();
                    });
                }
            }
        });

        // ── Playlist virtual scroll listener ──────────────────────
        ui.playlistContainer.addEventListener('scroll', function () {
            vsRequestUpdate();
        });

        // ── Lyrics user scroll detection ─────────────────────────
        function resetScrollTimeout() {
            clearTimeout(local.scrollTimeout);
            local.scrollTimeout = setTimeout(function () {
                local.isUserScrolling = false;
                // Snap back to current lyric
                var s = mgr.getState();
                if (s.currentLrcIndex >= 0) {
                    var line = ui.lrcContainer.querySelector('.lrc-line[data-index="' + s.currentLrcIndex + '"]');
                    if (line) {
                        var containerHeight = ui.lrcContainer.clientHeight;
                        var lineOffset = line.offsetTop;
                        var lineHeight = line.offsetHeight;
                        var targetScroll = lineOffset - (containerHeight / 2) + (lineHeight / 2);
                        ui.lrcContainer.scrollTo({ top: targetScroll, behavior: 'auto' });
                    }
                }
            }, 3000);
        }

        ui.lrcContainer.addEventListener('wheel', function () {
            local.isUserScrolling = true;
            resetScrollTimeout();
        });
        ui.lrcContainer.addEventListener('touchstart', function () {
            local.isUserScrolling = true;
            resetScrollTimeout();
        });

        // ── Cover image events ───────────────────────────────────
        ui.cover.addEventListener('load', function () {
            ui.cover.classList.remove('opacity-0');
        });
        ui.cover.addEventListener('error', function () {
            ui.cover.classList.add('opacity-0');
        });

        // ── Cleanup on DOM removal ───────────────────────────────
        var observer = new MutationObserver(function (mutations) {
            for (var i = 0; i < mutations.length; i++) {
                var removed = mutations[i].removedNodes;
                for (var j = 0; j < removed.length; j++) {
                    if (removed[j] === widget || (removed[j].contains && removed[j].contains(widget))) {
                        // Widget removed from DOM – clean up event listeners
                        Object.keys(handlers).forEach(function (name) {
                            window.removeEventListener(name, handlers[name]);
                        });
                        observer.disconnect();
                        clearTimeout(local.scrollTimeout);
                        return;
                    }
                }
            }
        });
        if (widget.parentNode) {
            observer.observe(widget.parentNode, { childList: true });
        }

        // ── Init: either sync existing state or trigger init ─────
        var currentState = mgr.getState();
        if (currentState.initialized) {
            // Manager already initialized (late mount) – sync all UI
            syncAll();
        } else {
            // First widget to mount – show loading and trigger init
            setLoading(true);
            scheduleInit();
        }
    }

    // 每个 widget 只初始化一次。导航栏那份 widget 在 swup 容器之外、DOM 不会被
    // 替换，而本脚本每次导航都会被重跑；侧栏 widget 会被整体替换，新 DOM 上没有
    // 这个标记，因此仍会正常重新初始化（旧实例由内部的 MutationObserver 清理）。
    function initAll() {
        var widgets = document.querySelectorAll('.music-player-widget');
        for (var i = 0; i < widgets.length; i++) {
            var w = widgets[i];
            if (w.dataset.musicInit === '1') continue;
            w.dataset.musicInit = '1';
            initWidget(w);
        }
    }

    initAll();
})();
})();<\/script>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/MusicPlayerView.astro", void 0);
//#endregion
//#region src/components/features/SakuraEffect.astro
var $$SakuraEffect = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/SakuraEffect.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/SakuraEffect.astro", void 0);
//#endregion
//#region src/components/features/WavesEffect.astro
var $$WavesEffect = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/WavesEffect.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/features/WavesEffect.astro", void 0);
//#endregion
//#region src/components/layout/ConfigCarrier.astro
var $$ConfigCarrier = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- 全局配置载体 --><div id="config-carrier"${addAttribute(siteConfig.themeColor.hue, "data-hue")}${addAttribute(backgroundWallpaper.mode, "data-wallpaper-mode")}></div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/layout/ConfigCarrier.astro", void 0);
//#endregion
//#region src/constants/icon.ts
var defaultFavicons = [
	{
		src: "/favicon/favicon-light-32.png",
		theme: "light",
		sizes: "32x32"
	},
	{
		src: "/favicon/favicon-light-128.png",
		theme: "light",
		sizes: "128x128"
	},
	{
		src: "/favicon/favicon-light-180.png",
		theme: "light",
		sizes: "180x180"
	},
	{
		src: "/favicon/favicon-light-192.png",
		theme: "light",
		sizes: "192x192"
	},
	{
		src: "/favicon/favicon-dark-32.png",
		theme: "dark",
		sizes: "32x32"
	},
	{
		src: "/favicon/favicon-dark-128.png",
		theme: "dark",
		sizes: "128x128"
	},
	{
		src: "/favicon/favicon-dark-180.png",
		theme: "dark",
		sizes: "180x180"
	},
	{
		src: "/favicon/favicon-dark-192.png",
		theme: "dark",
		sizes: "192x192"
	}
];
//#endregion
//#region src/utils/schema-image.ts
var projectImages = /* #__PURE__ */ Object.assign({
	"/src/assets/images/DesktopWallpaper/cyber-neon.avif": () => import("./cyber-neon_IveW0Izd.mjs").then((m) => m["default"]),
	"/src/assets/images/DesktopWallpaper/cyber-skyline.avif": () => import("./cyber-skyline_CYQxUO-c.mjs").then((m) => m["default"]),
	"/src/assets/images/DesktopWallpaper/cyber-trails.avif": () => import("./cyber-trails_DPHKKjJq.mjs").then((m) => m["default"]),
	"/src/assets/images/DesktopWallpaper/d1.avif": () => import("./d1_CH_z7P5c.mjs").then((m) => m["default"]),
	"/src/assets/images/DesktopWallpaper/d2.avif": () => import("./d2_DnC2L5-X.mjs").then((m) => m["default"]),
	"/src/assets/images/DesktopWallpaper/d3.avif": () => import("./d3_gf0P6Q1e.mjs").then((m) => m["default"]),
	"/src/assets/images/DesktopWallpaper/d4.avif": () => import("./d4_BH2FuCg8.mjs").then((m) => m["default"]),
	"/src/assets/images/DesktopWallpaper/d5.avif": () => import("./d5_CKco2dmT.mjs").then((m) => m["default"]),
	"/src/assets/images/DesktopWallpaper/d6.avif": () => import("./d6_BRgwE_A4.mjs").then((m) => m["default"]),
	"/src/assets/images/MobileWallpaper/cyber-neon-m.avif": () => import("./cyber-neon-m_B825-W0C.mjs").then((m) => m["default"]),
	"/src/assets/images/MobileWallpaper/cyber-skyline-m.avif": () => import("./cyber-skyline-m_CdvuxWOe.mjs").then((m) => m["default"]),
	"/src/assets/images/MobileWallpaper/cyber-trails-m.avif": () => import("./cyber-trails-m_CjXO43Tz.mjs").then((m) => m["default"]),
	"/src/assets/images/MobileWallpaper/m1.avif": () => import("./m1_Ii3ZDsX2.mjs").then((m) => m["default"]),
	"/src/assets/images/MobileWallpaper/m2.avif": () => import("./m2_DFv9G9D1.mjs").then((m) => m["default"]),
	"/src/assets/images/MobileWallpaper/m3.avif": () => import("./m3_D5Q_wsN6.mjs").then((m) => m["default"]),
	"/src/assets/images/MobileWallpaper/m4.avif": () => import("./m4_Dqff63Fj.mjs").then((m) => m["default"]),
	"/src/assets/images/MobileWallpaper/m5.avif": () => import("./m5_DoHnDYjZ.mjs").then((m) => m["default"]),
	"/src/assets/images/MobileWallpaper/m6.avif": () => import("./m6_COFYmjok.mjs").then((m) => m["default"]),
	"/src/assets/images/avatar-cyber.png": () => import("./avatar-cyber_DiDx7kwC.mjs").then((m) => m["default"]),
	"/src/assets/images/avatar.avif": () => import("./avatar_D39OPFV0.mjs").then((m) => m["default"]),
	"/src/assets/images/logo/cyber-dark.png": () => import("./cyber-dark_CHVe1rGW.mjs").then((m) => m["default"]),
	"/src/assets/images/logo/cyber-light.png": () => import("./cyber-light_gvImXQ-5.mjs").then((m) => m["default"]),
	"/src/content/posts/guide/cover.avif": () => import("./cover_Bb3jgh4e.mjs").then((m) => m["default"]),
	"/src/content/posts/images/1.avif": () => import("./1_Djdv2BXp.mjs").then((m) => m["default"]),
	"/src/content/posts/images/both-grid.avif": () => import("./both-grid_AnmpDUev.mjs").then((m) => m["default"]),
	"/src/content/posts/images/both-list.avif": () => import("./both-list_BREf4zZh.mjs").then((m) => m["default"]),
	"/src/content/posts/images/docusaurus.avif": () => import("./docusaurus_DXlMABwp.mjs").then((m) => m["default"]),
	"/src/content/posts/images/firefly1.avif": () => import("./firefly1_Bd98qkNU.mjs").then((m) => m["default"]),
	"/src/content/posts/images/firefly2.avif": () => import("./firefly2_BB5ASKFB.mjs").then((m) => m["default"]),
	"/src/content/posts/images/firefly3.avif": () => import("./firefly3_CIGrNrC2.mjs").then((m) => m["default"]),
	"/src/content/posts/images/github.avif": () => import("./github_CBto4ITG.mjs").then((m) => m["default"]),
	"/src/content/posts/images/left-grid3.avif": () => import("./left-grid3_Bnru7Ixr.mjs").then((m) => m["default"]),
	"/src/content/posts/images/left-list.avif": () => import("./left-list_dNOjnXNu.mjs").then((m) => m["default"]),
	"/src/content/posts/images/masonry.avif": () => import("./masonry_CMZobU5V.mjs").then((m) => m["default"]),
	"/src/content/posts/images/obsidian.avif": () => import("./obsidian_DZx2aQkD.mjs").then((m) => m["default"]),
	"/src/content/posts/images/right-grid2.avif": () => import("./right-grid2_B-D54lQq.mjs").then((m) => m["default"]),
	"/src/content/posts/images/vitepress.avif": () => import("./vitepress_CMq4h_id.mjs").then((m) => m["default"])
});
async function loadLocalImage(src, basePath) {
	const rel = src.replace(/^\.\//, "");
	const key = `/src/${path$1.normalize(path$1.join(basePath || "", rel)).replace(/\\/g, "/")}`;
	const loader = projectImages[key];
	if (!loader) {
		console.error(`[schema-image] 图片资源未找到: ${key}（src="${src}", basePath="${basePath}"）`);
		return null;
	}
	return loader();
}
/**
* 把文章封面 / 头像等图片源解析为绝对 URL + 宽高（用于 Article image / Person.image 的 ImageObject）。
* - public(/...)、远程、data: 直接返回（无宽高信息）；
* - src 内相对路径：用源图 img.src（Astro 已复制的源资产真实 URL），不再额外 getImage 生成优化图，
*   避免多产出未使用的源副产物/优化变体。
*/
async function toAbsoluteImageInfo(src, basePath, base) {
	if (!src) return null;
	if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//") || src.startsWith("data:")) return { url: src };
	if (src.startsWith("/")) return { url: new URL(url(src), base).toString() };
	return getLocalImageInfo(src, basePath, base);
}
/**
* 把文章封面 / 头像等图片源解析为绝对 URL。
* - public(/...)、远程、data: 直接按原样解析（与主题渲染一致，无需优化）；
* - src 内相对路径：用源图 img.src 的真实 URL。
*/
async function toAbsoluteImageUrl(src, basePath, base) {
	return (await toAbsoluteImageInfo(src, basePath, base))?.url ?? null;
}
async function getLocalImageInfo(src, basePath, base) {
	const img = await loadLocalImage(src, basePath);
	if (!img) return null;
	return {
		url: new URL(url(img.src), base).toString(),
		width: img.width,
		height: img.height
	};
}
/**
* 作者头像绝对 URL（Person.image / ProfilePage 用）。
* 固定用 profileConfig.avatar + basePath=""（相对 src/）。
*/
async function getAuthorAvatarUrl() {
	return toAbsoluteImageUrl(profileConfig.avatar, "", siteConfig.site_url);
}
function parseSizes(sizes) {
	if (!sizes) return null;
	const m = sizes.match(/^(\d+)x(\d+)$/);
	return m ? {
		width: Number(m[1]),
		height: Number(m[2])
	} : null;
}
async function getFaviconAsLogo() {
	const candidates = [...siteConfig.favicon || [], ...defaultFavicons];
	if (candidates.length === 0) return null;
	const areas = candidates.map((f) => {
		const d = parseSizes(f.sizes);
		return {
			f,
			w: d?.width ?? 0,
			h: d?.height ?? 0,
			raster: /\.(png|jpe?g|gif)$/i.test(f.src)
		};
	});
	const rasters = areas.filter((c) => c.raster);
	rasters.sort((a, b) => b.w * b.h - a.w * a.h);
	const favicon = rasters[0]?.f || [...areas].sort((a, b) => b.w * b.h - a.w * a.h)[0]?.f || candidates[0];
	if (!favicon) return null;
	let logoUrl;
	if (/^https?:|^\/\//.test(favicon.src) || favicon.src.startsWith("data:")) logoUrl = favicon.src;
	else if (favicon.src.startsWith("/")) logoUrl = new URL(url(favicon.src), siteConfig.site_url).toString();
	else logoUrl = await toAbsoluteImageUrl(favicon.src, "", siteConfig.site_url);
	if (!logoUrl) return null;
	const dims = parseSizes(favicon.sizes);
	return {
		url: logoUrl,
		...dims ? {
			width: dims.width,
			height: dims.height
		} : {}
	};
}
var _siteLogoPromise;
/**
* 站点 publisher 的 logo（Organization.logo）。
* 优先用 siteConfig.navbar.logo（主题真实 logo，image / url 类型）；
* 若 navbar 用图标库 icon（无图片 URL）或未配置，则回退到站点 favicon。
*/
function getSiteLogo() {
	if (!_siteLogoPromise) _siteLogoPromise = computeSiteLogo();
	return _siteLogoPromise;
}
async function computeSiteLogo() {
	const logo = siteConfig.navbar?.logo;
	if (logo) {
		if (logo.type === "url") return { url: logo.value };
		if (logo.type === "image") {
			const info = await getLocalImageInfo(logo.value, "", siteConfig.site_url);
			return info ? {
				url: info.url,
				width: info.width,
				height: info.height
			} : null;
		}
	}
	return getFaviconAsLogo();
}
//#endregion
//#region src/utils/schema-utils.ts
/**
* 把 src 解析成绝对 URL 字符串。
* - http/https、协议相对（//）、data: 原样返回；
* - 以 `/` 开头的 public 路径先经 url()（BASE_URL 感知）得到相对源路径，再对 base 求绝对；
* - src 为空、或非 `/` 开头的 src 相对资源（会被 Astro 优化并哈希，本函数无法解析）返回 null。
* 仅适用于"按原样可访问"的来源（public / 远程 / data）；src 内图片请用 schema-image 的 toAbsoluteImageUrl。
*/
function toAbsoluteUrl(src, base) {
	if (!src) return null;
	if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//") || src.startsWith("data:")) return src;
	if (!src.startsWith("/")) {
		console.warn(`[schema-utils] toAbsoluteUrl 收到 src 相对路径 "${src}"，无法解析成可访问 URL，已跳过；请改用 toAbsoluteImageUrl`);
		return null;
	}
	const baseUrl = base instanceof URL ? base : new URL(base);
	return new URL(url(src), baseUrl).toString();
}
function buildBreadcrumbList(items) {
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}
function filterAbsoluteLinks(links) {
	return (links ?? []).map((l) => l?.url).filter((u) => !!u && (u.startsWith("http://") || u.startsWith("https://") || u.startsWith("//")));
}
function resolveSiteRoot(site) {
	const baseUrl = site instanceof URL ? site : new URL(site);
	return new URL(url("/"), baseUrl).toString();
}
function buildPersonEntity(opts) {
	const siteUrl = resolveSiteRoot(opts.site);
	const sameAs = filterAbsoluteLinks(opts.profileConfig.links);
	return {
		"@type": "Person",
		"@id": `${siteUrl}#person`,
		name: opts.profileConfig.name,
		url: opts.authorUrl,
		...opts.avatarUrl ? { image: opts.avatarUrl } : {},
		...opts.description ? { description: opts.description } : {},
		...sameAs.length ? { sameAs } : {}
	};
}
/**
* 作者简介页（/about/）结构化数据：ProfilePage + mainEntity Person。
*/
function buildProfilePage(opts) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		mainEntity: buildPersonEntity(opts)
	};
}
/**
* 站点发布者（publisher）实体：Organization。
* 带稳定 @id（${siteRoot}#organization），BlogPosting.publisher 用它引用，便于跨页合并实体。
*/
function buildPublisherEntity(opts) {
	const siteUrl = resolveSiteRoot(opts.site);
	const logo = opts.logo ?? null;
	return {
		"@type": "Organization",
		"@id": `${siteUrl}#organization`,
		name: opts.siteConfig.title,
		url: siteUrl,
		...logo ? { logo: {
			"@type": "ImageObject",
			url: logo.url,
			contentUrl: logo.url,
			...logo.width ? { width: logo.width } : {},
			...logo.height ? { height: logo.height } : {}
		} } : {}
	};
}
/**
* 站点级 @graph：WebSite + Person（作者） + Organization（发布者）。仅首页注入。
* 个人博客用 Person 表示作者，头像作为其 image（而非 Organization 的 logo）。
* avatarUrl 需由调用方先经 getAuthorAvatarUrl 解析成真实存在的绝对 URL。
*/
function buildSiteGraph(opts) {
	const siteUrl = resolveSiteRoot(opts.site);
	const person = buildPersonEntity({
		site: siteUrl,
		profileConfig: opts.profileConfig,
		authorUrl: opts.authorUrl,
		avatarUrl: opts.avatarUrl,
		description: opts.profileConfig.bio
	});
	const publisher = buildPublisherEntity({
		site: siteUrl,
		siteConfig: opts.siteConfig,
		logo: opts.logo
	});
	const searchTarget = `${new URL(getSearchUrl(""), siteUrl).toString()}{search_term_string}`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${siteUrl}#website`,
				url: siteUrl,
				name: opts.siteConfig.title,
				description: opts.siteConfig.description,
				inLanguage: opts.lang,
				publisher: { "@id": `${siteUrl}#person` },
				potentialAction: {
					"@type": "SearchAction",
					target: {
						"@type": "EntryPoint",
						urlTemplate: searchTarget
					},
					"query-input": "required name=search_term_string"
				}
			},
			person,
			publisher
		]
	};
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://fengqiyunxing.github.io");
var $$Layout = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Layout;
	let { title, description, lang, setOGTypeArticle, postSlug, postCoverImage, hasWallpaper = false } = Astro2.props;
	const isHomePageCheck = isHomePage(Astro2.url.pathname);
	const configHue = siteConfig.themeColor.hue;
	const shouldShowTopHighlight = (backgroundWallpaper.banner?.navbar?.transparentMode || "semi") === "semifull";
	const fullscreenLayout = backgroundWallpaper.fullscreen?.layout ?? "classic";
	const navbarPanelBlur = Math.max(backgroundWallpaper.banner?.navbar?.blur ?? 20, 2);
	let pageTitle;
	if (title) pageTitle = `${title} - ${siteConfig.title}`;
	else pageTitle = siteConfig.subtitle ? `${siteConfig.title} - ${siteConfig.subtitle}` : siteConfig.title;
	let ogImageUrl;
	if (siteConfig.post.generateOgImages && postSlug) ogImageUrl = new URL(`/og/${postSlug}.png`, Astro2.site).toString();
	else if (postCoverImage) ogImageUrl = postCoverImage;
	const favicons = siteConfig.favicon.length > 0 ? siteConfig.favicon : defaultFavicons;
	if (!lang) lang = `${siteConfig.lang}`;
	const siteLang = lang.replace("_", "-");
	const avatarUrl = await getAuthorAvatarUrl();
	const aboutUrl = toAbsoluteUrl("/about/", siteConfig.site_url) ?? siteConfig.site_url;
	const siteLogo = await getSiteLogo();
	const $$definedVars = defineStyleVars([{
		configHue,
		"page-width": `${siteConfig.pageWidth ?? 100}rem`,
		"navbar-panel-blur": `${navbarPanelBlur}px`,
		"banner-height-home": `65vh`,
		"banner-height-non-home": `max(45vh, 380px)`,
		"banner-height": `35vh`
	}]);
	return renderTemplate`<html${addAttribute(siteLang, "lang")} class="bg-(--page-bg) text-[14px] md:text-[16px]"${addAttribute(backgroundWallpaper.mode, "data-wallpaper-mode")}${addAttribute(fullscreenLayout, "data-fullscreen-layout")}${addAttribute(hasWallpaper ? "" : void 0, "data-has-wallpaper")}${addAttribute(siteConfig.tagStyle ?? "pill", "data-tag-style")}${addAttribute(siteConfig.categoryStyle ?? "rectangle", "data-category-style")}${addAttribute($$definedVars, "style")} data-astro-cid-ju4pidww><head><meta charset="UTF-8"><style>
			@layer properties, theme, base, components, utilities;
		</style>${analyticsConfig?.googleAnalyticsId && renderTemplate`${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, {
		"analyticsId": analyticsConfig.googleAnalyticsId,
		"data-astro-cid-ju4pidww": true
	})}`}${analyticsConfig?.microsoftClarityId && renderTemplate`${renderComponent($$result, "MicrosoftClarity", $$MicrosoftClarity, {
		"clarityId": analyticsConfig.microsoftClarityId,
		"data-astro-cid-ju4pidww": true
	})}`}${analyticsConfig?.umamiAnalytics?.websiteId && renderTemplate`${renderComponent($$result, "UmamiAnalytics", $$UmamiAnalytics, {
		"websiteId": analyticsConfig.umamiAnalytics.websiteId,
		"scriptUrl": analyticsConfig.umamiAnalytics.scriptUrl,
		"replaysScriptUrl": analyticsConfig.umamiAnalytics.replaysScriptUrl,
		"trackOutboundLinks": analyticsConfig.umamiAnalytics.trackOutboundLinks,
		"collectWebVitals": analyticsConfig.umamiAnalytics.collectWebVitals,
		"replays": analyticsConfig.umamiAnalytics.replays,
		"data-astro-cid-ju4pidww": true
	})}`}${analyticsConfig?.la51Analytics?.Id && renderTemplate`${renderComponent($$result, "La51Analytics", $$La51Analytics, {
		"analyticsId": analyticsConfig.la51Analytics.Id,
		"sdkUrl": analyticsConfig.la51Analytics?.sdkUrl,
		"ck": analyticsConfig.la51Analytics?.ck,
		"autoTrack": analyticsConfig.la51Analytics?.autoTrack,
		"hashMode": analyticsConfig.la51Analytics?.hashMode,
		"screenRecord": analyticsConfig.la51Analytics?.screenRecord,
		"data-astro-cid-ju4pidww": true
	})}`}<title>${pageTitle}</title><meta name="description"${addAttribute(description || siteConfig.description || pageTitle, "content")}>${siteConfig.keywords && siteConfig.keywords.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(siteConfig.keywords.join(", "), "content")}>`}<meta name="author"${addAttribute(profileConfig.name, "content")}><link rel="canonical"${addAttribute(Astro2.url, "href")}><meta property="og:site_name"${addAttribute(siteConfig.title, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(description || siteConfig.description || pageTitle, "content")}>${ogImageUrl && renderTemplate`<meta property="og:image"${addAttribute(ogImageUrl, "content")}>`}${ogImageUrl && renderTemplate`<meta name="twitter:image"${addAttribute(ogImageUrl, "content")}>`}${setOGTypeArticle ? renderTemplate`<meta property="og:type" content="article">` : renderTemplate`<meta property="og:type" content="website">`}<meta name="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description"${addAttribute(description || siteConfig.description || pageTitle, "content")}>${isHomePageCheck && renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(buildSiteGraph({
		site: siteConfig.site_url,
		siteConfig,
		profileConfig,
		lang: siteLang,
		authorUrl: aboutUrl,
		avatarUrl,
		logo: siteLogo
	})))}<\/script>`}<meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${favicons.map((favicon) => renderTemplate`<link rel="icon"${addAttribute(favicon.src.startsWith("/") ? url(favicon.src) : favicon.src, "href")}${addAttribute(favicon.sizes, "sizes")}${addAttribute(favicon.theme && `(prefers-color-scheme: ${favicon.theme})`, "media")}>`)}<!-- 为特定域名的图片添加 referrerpolicy 以解决 403 问题 --><!-- 注：静态图片（ImageWrapper 组件、Markdown 正文图）已在构建期加好 referrerpolicy；
         此脚本仅作为运行时兜底，处理动态注入的图片（解密内容、第三方评论/统计部件等）。 -->${siteConfig.imageOptimization?.noReferrerDomains && siteConfig.imageOptimization.noReferrerDomains.length > 0 && renderTemplate`<script>(function(){${defineScriptVars({ noReferrerDomains: JSON.stringify(siteConfig.imageOptimization.noReferrerDomains) })}
        (function() {
          const domains = JSON.parse(noReferrerDomains);

          // 域名匹配函数，支持通配符
          function matchesDomain(urlStr, patterns) {
            try {
              const urlObj = new URL(urlStr);
              const hostname = urlObj.hostname;

              return patterns.some(function(pattern) {
                const regexPattern = pattern.replace(/\\./g, '\\\\.').replace(/\\*/g, '.*');
                const regex = new RegExp('^' + regexPattern + '$');
                return regex.test(hostname);
              });
            } catch (e) {
              return false;
            }
          }

          // 处理单个图片元素
          function processImage(img) {
            if (!img.src || img.hasAttribute('referrerpolicy')) return;

            if (matchesDomain(img.src, domains)) {
              img.setAttribute('referrerpolicy', 'no-referrer');
            }
          }

          // 兜底扫描一次当前页面（构建期已处理的图片会因已有属性而快速跳过）
          document.querySelectorAll('img').forEach(processImage);

          // 使用 MutationObserver 监听动态加载/注入的图片
          const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
              mutation.addedNodes.forEach(function(node) {
                if (node.nodeName === 'IMG') {
                  processImage(node);
                }
                if (node.querySelectorAll) {
                  node.querySelectorAll('img').forEach(processImage);
                }
              });
            });
          });

          observer.observe(document.documentElement, {
            childList: true,
            subtree: true
          });
        })();
      })();<\/script>`}<!-- Set the theme before the page is rendered to avoid a flash --><script>(function(){${defineScriptVars({
		PAGE_WIDTH: 100,
		configHue,
		defaultMode: siteConfig.themeColor.defaultMode ?? "light",
		defaultWallpaperMode: backgroundWallpaper.mode,
		isWallpaperSwitchable: displaySettingsConfig.wallpaperModeSwitchable,
		darkTheme: expressiveCodeConfig.darkTheme,
		lightTheme: expressiveCodeConfig.lightTheme,
		baseUrl: "/",
		cardTransparentOpacity: backgroundWallpaper.overlay?.cardOpacity ?? .6,
		fullscreenLayout
	})}
      // 主题初始化 - 与setting-utils.ts保持一致
      const LIGHT_MODE = "light";
      const DARK_MODE = "dark";
      const SYSTEM_MODE = "system";

      // 获取存储的主题，如果没有则使用默认值
      const theme = localStorage.getItem("theme") || defaultMode;

      // 获取系统主题
      function getSystemTheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? DARK_MODE
          : LIGHT_MODE;
      }

      // 解析主题（如果是system模式，则获取系统主题）
      function resolveTheme(themeValue) {
        if (themeValue === SYSTEM_MODE) {
          return getSystemTheme();
        }
        return themeValue;
      }

      const resolvedTheme = resolveTheme(theme);
      const isDark = resolvedTheme === DARK_MODE;

      // 应用主题
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      // Set the theme for Expressive Code
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? darkTheme : lightTheme
      );

      // Load the hue from local storage
      const hue = localStorage.getItem("hue") || configHue;
      document.documentElement.style.setProperty("--hue", hue);

      // 设置卡片透明度（全屏透明模式下使用），优先使用用户自定义值
      const storedCardOpacity = localStorage.getItem("overlayCardOpacity");
      const parsedCardOpacity = storedCardOpacity === null ? NaN : Number.parseFloat(storedCardOpacity);
      const resolvedCardOpacity = Number.isFinite(parsedCardOpacity)
        ? Math.min(1, Math.max(0, parsedCardOpacity))
        : cardTransparentOpacity;
      document.documentElement.style.setProperty("--card-transparent-opacity", String(resolvedCardOpacity));

      // 初始化全屏布局：优先使用设置面板保存的运行时选择
      const storedFullscreenLayout = localStorage.getItem("fullscreenLayout");
      const resolvedFullscreenLayout =
        storedFullscreenLayout === "hero" || storedFullscreenLayout === "classic"
          ? storedFullscreenLayout
          : fullscreenLayout;
      document.documentElement.setAttribute(
        "data-fullscreen-layout",
        resolvedFullscreenLayout,
      );

      // 内容定位已由 --content-top 纯 CSS 决定（layout-base.css），无需 --banner-height-extend 变量/计算

      // 初始化壁纸模式 - 在页面渲染前同步应用（其余布局由 CSS 属性选择器接管）
      const wallpaperMode = isWallpaperSwitchable
        ? localStorage.getItem("wallpaperMode") || defaultWallpaperMode
        : defaultWallpaperMode;

      // 设置data-wallpaper-mode属性
      document.documentElement.setAttribute(
        "data-wallpaper-mode",
        wallpaperMode
      );

      // 初始化期间禁用 content-panel/wrapper 过渡，避免加载时布局/变量变化产生内容移动动画；
      // load 后移除（仅首次设置，swup 切页重跑脚本时不再重复）。布局已由 CSS 接管，无需 rAF 校正
      if (!window.__fireflyLayoutTransitionGuard) {
        window.__fireflyLayoutTransitionGuard = true;
        document.documentElement.setAttribute("data-layout-init", "");
        const removeLayoutInit = () =>
          document.documentElement.removeAttribute("data-layout-init");
        if (document.readyState === "complete") {
          requestAnimationFrame(removeLayoutInit);
        } else {
          window.addEventListener("load", removeLayoutInit, { once: true });
        }
      }

      // 初始化水波纹动画状态 - 在 html 元素上设置属性，CSS 会立即生效
      (function applyWavesEnabled() {
        const wavesEnabled = localStorage.getItem("wavesEnabled");
        if (wavesEnabled !== null) {
          document.documentElement.setAttribute("data-waves-enabled", wavesEnabled);
        }
      })();

      // 初始化渐变过渡状态 - 在 html 元素上设置属性，CSS 会立即生效
      (function applyGradientEnabled() {
        const gradientEnabled = localStorage.getItem("gradientEnabled");
        if (gradientEnabled !== null) {
          document.documentElement.setAttribute("data-gradient-enabled", gradientEnabled);
        }
      })();

      // 初始化横幅标题显示状态 - 在 html 元素上设置属性，CSS 会立即生效
      (function applyBannerTitleEnabled() {
        const bannerTitleEnabled = localStorage.getItem("bannerTitleEnabled");
        if (bannerTitleEnabled !== null) {
          document.documentElement.setAttribute("data-banner-title-enabled", bannerTitleEnabled);
        }
      })();
    })();<\/script><!-- defines global css variables. This will be applied to <html> <body> and some other elements idk why -->${renderSlot($$result, $$slots["head"])}<link rel="alternate" type="application/rss+xml"${addAttribute(profileConfig.name, "title")}${addAttribute(`${Astro2.site}rss.xml`, "href")}><!-- Font Setup (Astro Font API) -->${renderComponent($$result, "FontSetup", $$FontSetup, { "data-astro-cid-ju4pidww": true })}${renderHead($$result)}</head><body${addAttribute(["min-h-screen", [{
		"is-home": isHomePageCheck,
		"sticky-navbar": navbarMode === "fixed",
		"dynamic-navbar": navbarMode === "dynamic"
	}]], "class:list")}${addAttribute($$definedVars, "style")} data-astro-cid-ju4pidww><!-- 首帧前按运行时壁纸模式翻转卡片透明类（布局已由 data-wallpaper-mode 属性规则接管） --><script>
      (function () {
        const wm = document.documentElement.getAttribute("data-wallpaper-mode");
        if (!wm) return;
        document.body.classList.toggle(
          "wallpaper-transparent",
          wm === "overlay" ||
            (wm === "fullscreen" &&
              document.documentElement.getAttribute("data-fullscreen-layout") === "hero"),
        );
      })();
    <\/script><div id="progress-bar"${addAttribute($$definedVars, "style")} data-astro-cid-ju4pidww></div><script>(function(){${defineScriptVars({
		defaultBorder: siteConfig.card?.border ?? false,
		defaultFollowTheme: siteConfig.card?.followTheme ?? false
	})}
      (function() {
        var stored = localStorage.getItem("cardBorderEnabled");
        var border = stored !== null ? stored === "true" : defaultBorder;
        if (border) document.documentElement.classList.add("enable-card-border");
        else document.documentElement.classList.remove("enable-card-border");

        stored = localStorage.getItem("cardFollowThemeEnabled");
        var follow = stored !== null ? stored === "true" : defaultFollowTheme;
        if (follow) document.body.classList.add("card-follow-theme-hue");
        else document.body.classList.remove("card-follow-theme-hue");
      })();
    })();<\/script><!-- 页面顶部渐变高光效果 - 只在full和semifull模式下显示 -->${shouldShowTopHighlight && renderTemplate`<div class="top-gradient-highlight"${addAttribute($$definedVars, "style")} data-astro-cid-ju4pidww></div>`}${renderComponent($$result, "ConfigCarrier", $$ConfigCarrier, { "data-astro-cid-ju4pidww": true })}${renderComponent($$result, "MusicManager", $$MusicManager, { "data-astro-cid-ju4pidww": true })}${renderSlot($$result, $$slots["default"])}<!-- 播放器视图脚本：必须在 <slot /> 之后（解析到它时所有 widget 的 DOM 要已存在），
         且在 MusicManager 之后（swup 重跑按文档顺序，window.__fireflyMusic 得先就位） -->${(musicPlayerConfig.showInNavbar || musicPlayerConfig.showInSidebar !== false) && renderTemplate`${renderComponent($$result, "MusicPlayerView", $$MusicPlayerView, { "data-astro-cid-ju4pidww": true })}`}<!-- Sakura Effect -->${renderComponent($$result, "SakuraEffect", $$SakuraEffect, { "data-astro-cid-ju4pidww": true })}<!-- Water Waves Effect -->${renderComponent($$result, "WavesEffect", $$WavesEffect, { "data-astro-cid-ju4pidww": true })}<!-- Fancybox Manager -->${renderComponent($$result, "FancyboxManager", $$FancyboxManager, { "data-astro-cid-ju4pidww": true })}<!-- Tab 代码块交互 -->${renderComponent($$result, "CodeGroupManager", $$CodeGroupManager, { "data-astro-cid-ju4pidww": true })}<!-- GitHub 卡片客户端实时补全（forks/stars） -->${renderComponent($$result, "GithubCardManager", $$GithubCardManager, { "data-astro-cid-ju4pidww": true })}</body></html>${renderScript($$result, "D:/求职/存储/fengqiyunxing.github.io/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/layouts/Layout.astro", void 0);
//#endregion
export { dynamicConfig as C, renderScript as D, templateExit as E, expressiveCodeConfig as S, templateEnter as T, WALLPAPER_FULLSCREEN as _, buildPublisherEntity as a, $$Image as b, getSiteLogo as c, isHomePage as d, DARK_MODE as f, WALLPAPER_BANNER as g, SYSTEM_MODE as h, buildProfilePage as i, toAbsoluteImageInfo as l, LIGHT_MODE as m, buildBreadcrumbList as n, toAbsoluteUrl as o, DEFAULT_THEME as p, buildPersonEntity as r, getAuthorAvatarUrl as s, $$Layout as t, getBackgroundImages as u, WALLPAPER_OVERLAY as v, backgroundWallpaper as w, musicPlayerConfig as x, $$Picture as y };
