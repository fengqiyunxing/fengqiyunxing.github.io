import { t as __exportAll } from "./rolldown-runtime_8H4AJuhK.mjs";
import { W as createKey, g as SlotString } from "./jsx-runtime_DmRdA9YB.mjs";
import { $ as NOOP_MIDDLEWARE_FN, A as getDefaultRoutes, E as createConsoleLogger, F as createModuleScriptElement, I as createStylesheetElementSet, L as RedirectSinglePageBuiltModule, O as setEnvironment, T as setLogger, _ as handlePages, a as handleMiddleware, c as peekMiddleware, f as getRouteTable, i as FetchState, j as getPattern, k as findRouteToRewrite, t as getParts } from "./parts_CtTkekGy.mjs";
import { f as removeLeadingForwardSlash } from "./path_DW70cvEd.mjs";
import { r as renderEntry } from "./_astro_content_jT1wG5gk.mjs";
import { c as i18n, f as siteConfig, p as I18nKey, s as url } from "./url-utils_Cr7cEKDY.mjs";
import { a as getSortedPosts } from "./content-utils_CacKqhZP.mjs";
import { t as formatDateI18nWithTime } from "./date-utils_DVmTBVcA.mjs";
import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
//#region node_modules/astro/dist/virtual-modules/container.js
async function loadRenderers(renderers) {
	return (await Promise.all(renderers.map(async (renderer) => {
		const mod = await import(renderer.serverEntrypoint.toString());
		if (typeof mod.default !== "undefined") return {
			...renderer,
			ssr: mod.default
		};
	}))).filter((r) => Boolean(r));
}
//#endregion
//#region node_modules/@astrojs/mdx/dist/container-renderer.js
function getContainerRenderer$1() {
	return {
		name: "astro:jsx",
		serverEntrypoint: "@astrojs/mdx/server.js"
	};
}
//#endregion
//#region node_modules/@astrojs/svelte/dist/container-renderer.js
function getContainerRenderer() {
	return {
		name: "@astrojs/svelte",
		clientEntrypoint: "@astrojs/svelte/client.js",
		serverEntrypoint: "@astrojs/svelte/server.js"
	};
}
//#endregion
//#region node_modules/astro/dist/runtime/client/idle.prebuilt.js
var idle_prebuilt_default = `(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();`;
//#endregion
//#region node_modules/astro/dist/runtime/client/load.prebuilt.js
var load_prebuilt_default = `(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();`;
//#endregion
//#region node_modules/astro/dist/runtime/client/media.prebuilt.js
var media_prebuilt_default = `(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener("change",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event("astro:media"));})();`;
//#endregion
//#region node_modules/astro/dist/runtime/client/only.prebuilt.js
var only_prebuilt_default = `(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();`;
//#endregion
//#region node_modules/astro/dist/runtime/client/visible.prebuilt.js
var visible_prebuilt_default = `(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event("astro:visible"));})();`;
//#endregion
//#region node_modules/astro/dist/core/client-directive/default.js
function getDefaultClientDirectives() {
	return /* @__PURE__ */ new Map([
		["idle", idle_prebuilt_default],
		["load", load_prebuilt_default],
		["media", media_prebuilt_default],
		["only", only_prebuilt_default],
		["visible", visible_prebuilt_default]
	]);
}
//#endregion
//#region node_modules/astro/dist/core/config/schemas/defaults.js
var ASTRO_CONFIG_DEFAULTS = {
	root: ".",
	srcDir: "./src",
	publicDir: "./public",
	outDir: "./dist",
	cacheDir: "./node_modules/.astro",
	base: "/",
	trailingSlash: "ignore",
	build: {
		format: "directory",
		client: "./client/",
		server: "./server/",
		assets: "_astro",
		serverEntry: "entry.mjs",
		redirects: true,
		inlineStylesheets: "auto",
		concurrency: 1
	},
	image: {
		endpoint: {
			entrypoint: void 0,
			route: "/_image"
		},
		service: {
			entrypoint: "astro/assets/services/sharp",
			config: {}
		},
		dangerouslyProcessSVG: false,
		responsiveStyles: false
	},
	devToolbar: { enabled: true },
	compressHTML: "jsx",
	server: {
		host: false,
		port: 4321,
		open: false,
		allowedHosts: []
	},
	integrations: [],
	markdown: {
		syntaxHighlight: {
			type: "shiki",
			excludeLangs: ["math"]
		},
		shikiConfig: {
			langs: [],
			theme: "github-dark",
			themes: {},
			wrap: false,
			transformers: [],
			langAlias: {}
		},
		gfm: true,
		smartypants: true,
		remarkPlugins: [],
		rehypePlugins: [],
		remarkRehype: {}
	},
	vite: {},
	legacy: { collectionsBackwardsCompat: false },
	redirects: {},
	security: {
		checkOrigin: true,
		allowedDomains: [],
		csp: false,
		actionBodySizeLimit: 1048576,
		serverIslandBodySizeLimit: 1048576
	},
	env: {
		schema: {},
		validateSecrets: false
	},
	prerenderConflictBehavior: "warn",
	fetchFile: "fetch",
	experimental: {
		clientPrerender: false,
		contentIntellisense: false,
		chromeDevtoolsWorkspace: false,
		incrementalBuild: false,
		collectionStorage: "single-file"
	}
};
//#endregion
//#region node_modules/astro/dist/core/routing/segment.js
function validateSegment(segment, file = "") {
	if (!file) file = segment;
	if (segment.includes("][")) throw new Error(`Invalid route ${file} \u2014 parameters must be separated`);
	if (countOccurrences("[", segment) !== countOccurrences("]", segment)) throw new Error(`Invalid route ${file} \u2014 brackets are unbalanced`);
	if ((/.+\[\.\.\.[^\]]+\]/.test(segment) || /\[\.\.\.[^\]]+\].+/.test(segment)) && file.endsWith(".astro")) throw new Error(`Invalid route ${file} \u2014 rest parameter must be a standalone segment`);
}
function countOccurrences(needle, haystack) {
	let count = 0;
	for (const hay of haystack) if (hay === needle) count += 1;
	return count;
}
//#endregion
//#region node_modules/astro/dist/container/environment.js
async function getModuleForRoute(manifest, route) {
	for (const defaultRoute of getDefaultRoutes(manifest)) if (route.component === defaultRoute.component) return { page: () => Promise.resolve(defaultRoute.instance) };
	if (route.type === "redirect") return RedirectSinglePageBuiltModule;
	else {
		if (manifest.pageMap) {
			const importComponentInstance = manifest.pageMap.get(route.component);
			if (!importComponentInstance) throw new Error(`Unexpectedly unable to find a component instance for route ${route.route}`);
			return await importComponentInstance();
		} else if (manifest.pageModule) return manifest.pageModule;
		throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
	}
}
function createContainerEnvironment({ interner, resolve, renderers, streaming }) {
	async function getComponentByRoute(_manifest, routeData) {
		const page = interner.get(routeData);
		if (page) return page.page();
		throw new Error("Couldn't find component for route " + routeData.pathname);
	}
	return {
		name: "container",
		runtimeMode: "development",
		defaultStreaming: () => streaming,
		async resolve(_manifest, specifier) {
			return resolve(specifier);
		},
		headElements(manifest, routeData) {
			const routeInfo = manifest.routes.find((route) => route.routeData === routeData);
			const links = /* @__PURE__ */ new Set();
			const scripts = /* @__PURE__ */ new Set();
			const styles = createStylesheetElementSet(routeInfo?.styles ?? []);
			for (const script of routeInfo?.scripts ?? []) if ("stage" in script) {
				if (script.stage === "head-inline") scripts.add({
					props: {},
					children: script.children
				});
			} else scripts.add(createModuleScriptElement(script));
			return {
				links,
				styles,
				scripts
			};
		},
		componentMetadata() {},
		getComponentByRoute,
		getModuleForRoute,
		async tryRewrite(manifest, payload, request) {
			const { newUrl, pathname, routeData } = findRouteToRewrite({
				payload,
				request,
				routes: manifest.routes.map((r) => r.routeData),
				trailingSlash: manifest.trailingSlash,
				buildFormat: manifest.buildFormat,
				base: manifest.base,
				outDir: manifest.outDir
			});
			return {
				componentInstance: await getComponentByRoute(manifest, routeData),
				routeData,
				newUrl,
				pathname
			};
		},
		getRenderers() {
			return renderers;
		},
		errorStrategy: "default",
		injectCspMetaTagsOnErrorPages: false,
		logRequest() {}
	};
}
//#endregion
//#region node_modules/astro/dist/container/index.js
function createManifest(manifest, renderers, middleware, site) {
	function middlewareInstance() {
		return { onRequest: middleware ?? NOOP_MIDDLEWARE_FN };
	}
	let root;
	try {
		root = new URL(import.meta.url);
	} catch {
		root = new URL("file:///container/");
	}
	return {
		rootDir: root,
		srcDir: manifest?.srcDir ?? new URL(ASTRO_CONFIG_DEFAULTS.srcDir, root),
		buildClientDir: manifest?.buildClientDir ?? new URL(ASTRO_CONFIG_DEFAULTS.build.client, root),
		buildServerDir: manifest?.buildServerDir ?? new URL(ASTRO_CONFIG_DEFAULTS.build.server, root),
		publicDir: manifest?.publicDir ?? new URL(ASTRO_CONFIG_DEFAULTS.publicDir, root),
		outDir: manifest?.outDir ?? new URL(ASTRO_CONFIG_DEFAULTS.outDir, root),
		cacheDir: manifest?.cacheDir ?? new URL(ASTRO_CONFIG_DEFAULTS.cacheDir, root),
		trailingSlash: manifest?.trailingSlash ?? ASTRO_CONFIG_DEFAULTS.trailingSlash,
		buildFormat: manifest?.buildFormat ?? ASTRO_CONFIG_DEFAULTS.build.format,
		compressHTML: manifest?.compressHTML ?? ASTRO_CONFIG_DEFAULTS.compressHTML,
		assetsDir: manifest?.assetsDir ?? ASTRO_CONFIG_DEFAULTS.build.assets,
		serverLike: manifest?.serverLike ?? true,
		middlewareMode: manifest?.middlewareMode ?? "classic",
		assets: manifest?.assets ?? /* @__PURE__ */ new Set(),
		assetsPrefix: manifest?.assetsPrefix ?? void 0,
		entryModules: manifest?.entryModules ?? {},
		routes: manifest?.routes ?? [],
		adapterName: "",
		clientDirectives: manifest?.clientDirectives ?? getDefaultClientDirectives(),
		renderers: renderers ?? manifest?.renderers ?? [],
		base: manifest?.base ?? ASTRO_CONFIG_DEFAULTS.base,
		userAssetsBase: manifest?.userAssetsBase ?? "",
		componentMetadata: manifest?.componentMetadata ?? /* @__PURE__ */ new Map(),
		inlinedScripts: manifest?.inlinedScripts ?? /* @__PURE__ */ new Map(),
		i18n: manifest?.i18n,
		site: site ?? manifest?.site,
		checkOrigin: false,
		allowedDomains: manifest?.allowedDomains ?? [],
		actionBodySizeLimit: 1048576,
		serverIslandBodySizeLimit: 1048576,
		middleware: manifest?.middleware ?? middlewareInstance,
		key: createKey(),
		csp: manifest?.csp,
		image: manifest?.image ?? {},
		shouldInjectCspMetaTags: false,
		devToolbar: {
			enabled: false,
			latestAstroVersion: void 0,
			debugInfoOutput: "",
			placement: void 0
		},
		logLevel: "silent"
	};
}
var experimental_AstroContainer = class experimental_AstroContainer {
	/**
	* The container's fabricated manifest — the source of truth all the
	* functional-core accessors key off. The container never touches the
	* ambient manifest, so multiple containers in one process stay isolated.
	*/
	#manifest;
	/**
	* The route → module interner, shared between the environment record
	* (lookups) and the `insertRoute` writes below.
	*/
	#interner;
	/**
	* Internally used to check if the container was created with a manifest.
	* @private
	*/
	#withManifest = false;
	constructor({ streaming = false, manifest, renderers, resolve, site }) {
		const ssrManifest = createManifest(manifest, renderers, void 0, site);
		const containerRenderers = renderers ?? manifest?.renderers ?? [];
		const containerResolve = async (specifier) => {
			if (this.#withManifest) return this.#containerResolve(specifier, ssrManifest);
			else if (resolve) return resolve(specifier);
			return specifier;
		};
		const interner = /* @__PURE__ */ new WeakMap();
		setLogger(ssrManifest, createConsoleLogger({ level: "error" }));
		setEnvironment(ssrManifest, createContainerEnvironment({
			interner,
			resolve: containerResolve,
			renderers: containerRenderers,
			streaming
		}));
		getRouteTable(ssrManifest);
		this.#manifest = ssrManifest;
		this.#interner = interner;
	}
	async #containerResolve(specifier, manifest) {
		const found = manifest.entryModules[specifier];
		if (found) return new URL(found, manifest.buildClientDir).toString();
		return found;
	}
	/**
	* Creates a new instance of a container.
	*
	* @param {AstroContainerOptions=} containerOptions
	*/
	static async create(containerOptions = {}) {
		const { streaming = false, manifest, renderers = [], resolve, astroConfig } = containerOptions;
		return new experimental_AstroContainer({
			streaming,
			manifest,
			renderers,
			resolve,
			site: astroConfig?.site ?? manifest?.site
		});
	}
	/**
	* Use this function to manually add a **server** renderer to the container.
	*
	* This function is preferred when you require to use the container with a renderer in environments such as on-demand pages.
	*
	* ## Example
	*
	* ```js
	* import reactRenderer from "@astrojs/react/server.js";
	* import vueRenderer from "@astrojs/vue/server.js";
	* import customRenderer from "../renderer/customRenderer.js";
	* import { experimental_AstroContainer as AstroContainer } from "astro/container"
	*
	* const container = await AstroContainer.create();
	* container.addServerRenderer(reactRenderer);
	* container.addServerRenderer(vueRenderer);
	* container.addServerRenderer("customRenderer", customRenderer);
	* ```
	*
	* @param options {object}
	* @param options.name The name of the renderer. The name **isn't** arbitrary, and it should match the name of the package.
	* @param options.renderer The server renderer exported by integration.
	*/
	addServerRenderer(options) {
		const { renderer } = options;
		if (!renderer.check || !renderer.renderToStaticMarkup) throw new Error("The renderer you passed isn't valid. A renderer is usually an object that exposes the `check` and `renderToStaticMarkup` functions.\nUsually, the renderer is exported by a /server.js entrypoint e.g. `import renderer from '@astrojs/react/server.js'`");
		if (isNamedRenderer(renderer)) this.#manifest.renderers.push({
			name: renderer.name,
			ssr: renderer
		});
		else if ("name" in options) this.#manifest.renderers.push({
			name: options.name,
			ssr: renderer
		});
		else throw new Error("The renderer name must be provided when adding a server renderer that is not a named renderer.");
	}
	/**
	* Use this function to manually add a **client** renderer to the container.
	*
	* When rendering components that use the `client:*` directives, you need to use this function.
	*
	* ## Example
	*
	* ```js
	* import reactRenderer from "@astrojs/react/server.js";
	* import { experimental_AstroContainer as AstroContainer } from "astro/container"
	*
	* const container = await AstroContainer.create();
	* container.addServerRenderer(reactRenderer);
	* container.addClientRenderer({
	* 	name: "@astrojs/react",
	* 	entrypoint: "@astrojs/react/client.js"
	* });
	* ```
	*
	* @param options {object}
	* @param options.name The name of the renderer. The name **isn't** arbitrary, and it should match the name of the package.
	* @param options.entrypoint The entrypoint of the client renderer.
	*/
	addClientRenderer(options) {
		const { entrypoint, name } = options;
		const rendererIndex = this.#manifest.renderers.findIndex((r) => r.name === name);
		if (rendererIndex === -1) throw new Error("You tried to add the " + name + " client renderer, but its server renderer wasn't added. You must add the server renderer first. Use the `addServerRenderer` function.");
		const renderer = this.#manifest.renderers[rendererIndex];
		renderer.clientEntrypoint = entrypoint;
		this.#manifest.renderers[rendererIndex] = renderer;
	}
	static async createFromManifest(manifest) {
		const container = new experimental_AstroContainer({ manifest });
		container.#withManifest = true;
		return container;
	}
	/**
	* Associates a runtime-inserted route with its component module in the
	* interner shared with the container environment record. Snapshots the
	* already-resolved middleware synchronously via `peekMiddleware` —
	* `undefined` when `getMiddleware` has not settled yet.
	*/
	#internRoute(routeData, componentInstance) {
		this.#interner.set(routeData, {
			page() {
				return Promise.resolve(componentInstance);
			},
			onRequest: peekMiddleware(this.#manifest)
		});
	}
	#insertRoute({ path, componentInstance, params = {}, type = "page" }) {
		const pathUrl = new URL(path, "https://example.com");
		const routeData = this.#createRoute(pathUrl, params, type);
		this.#manifest.routes.push({
			routeData,
			file: "",
			links: [],
			styles: [],
			scripts: []
		});
		this.#internRoute(routeData, componentInstance);
		return routeData;
	}
	/**
	* @description
	* It renders a component and returns the result as a string.
	*
	* ## Example
	*
	* ```js
	* import Card from "../src/components/Card.astro";
	*
	* const container = await AstroContainer.create();
	* const result = await container.renderToString(Card);
	*
	* console.log(result); // it's a string
	* ```
	*
	*
	* @param {AstroComponentFactory} component The instance of the component.
	* @param {ContainerRenderOptions=} options Possible options to pass when rendering the component.
	*/
	async renderToString(component, options = {}) {
		if (options.slots) options.slots = markAllSlotsAsSlotString(options.slots);
		return await (await this.renderToResponse(component, options)).text();
	}
	/**
	* @description
	* It renders a component and returns the `Response` as result of the rendering phase.
	*
	* ## Example
	*
	* ```js
	* import Card from "../src/components/Card.astro";
	*
	* const container = await AstroContainer.create();
	* const response = await container.renderToResponse(Card);
	*
	* console.log(response.status); // it's a number
	* ```
	*
	*
	* @param {AstroComponentFactory} component The instance of the component.
	* @param {ContainerRenderOptions=} options Possible options to pass when rendering the component.
	*/
	async renderToResponse(component, options = {}) {
		const { routeType = "page", slots } = options;
		const request = options?.request ?? new Request("https://example.com/");
		const url = new URL(request.url);
		const componentInstance = routeType === "endpoint" ? component : this.#wrapComponent(component, options.params);
		const routeData = this.#insertRoute({
			path: request.url,
			componentInstance,
			params: options.params,
			type: routeType
		});
		const state = new FetchState(this.#manifest, request);
		state.routeData = routeData;
		state.pathname = url.pathname;
		state.clientAddress = "";
		state.partial = options?.partial ?? true;
		state.componentInstance = componentInstance;
		state.slots = slots ?? {};
		if (options.params) state.params = options.params;
		state.locals = options?.locals ?? {};
		if (options.props) state.initialProps = options.props;
		return handleMiddleware(state, handlePages);
	}
	/**
	* It stores an Astro **page** route. The first argument, `route`, gets associated to the `component`.
	*
	* This function can be useful when you want to render a route via `AstroContainer.renderToString`, where that
	* route eventually renders another route via `Astro.rewrite`.
	*
	* @param {string} route - The URL that will render the component.
	* @param {AstroComponentFactory} component - The component factory to be used for rendering the route.
	* @param {Record<string, string | undefined>} params - An object containing key-value pairs of route parameters.
	*/
	insertPageRoute(route, component, params) {
		const url = new URL(route, "https://example.com/");
		const routeData = this.#createRoute(url, params ?? {}, "page");
		this.#manifest.routes.push({
			routeData,
			file: "",
			links: [],
			styles: [],
			scripts: []
		});
		const componentInstance = this.#wrapComponent(component, params);
		this.#internRoute(routeData, componentInstance);
	}
	#createRoute(url, params, type) {
		const segments = removeLeadingForwardSlash(url.pathname).split("/").filter(Boolean).map((s) => {
			validateSegment(s);
			return getParts(s, url.pathname);
		});
		return {
			route: url.pathname,
			component: "",
			params: Object.keys(params),
			pattern: getPattern(segments, ASTRO_CONFIG_DEFAULTS.base, ASTRO_CONFIG_DEFAULTS.trailingSlash),
			prerender: false,
			segments,
			type,
			fallbackRoutes: [],
			isIndex: false,
			origin: "internal",
			distURL: []
		};
	}
	/**
	* If the provided component isn't a default export, the function wraps it in an object `{default: Component }` to mimic the default export.
	* @param componentFactory
	* @param params
	* @private
	*/
	#wrapComponent(componentFactory, params) {
		if (params) return {
			default: componentFactory,
			getStaticPaths() {
				return [{ params }];
			}
		};
		return { default: componentFactory };
	}
};
function isNamedRenderer(renderer) {
	return !!renderer?.name;
}
function markAllSlotsAsSlotString(slots) {
	const markedSlots = {};
	for (const slotName in slots) markedSlots[slotName] = new SlotString(slots[slotName], null);
	return markedSlots;
}
var package_default = {
	name: "firefly",
	type: "module",
	version: "6.16.6",
	engines: { "node": ">=22.23.0" },
	packageManager: "pnpm@11.22.0",
	scripts: {
		"dev": "astro dev",
		"start": "astro dev",
		"check": "astro check",
		"build": "npx tsx scripts/generate-github-card-data.ts && npx tsx scripts/generate-lqips.ts && npx tsx scripts/generate-vndb-covers.ts && astro build && npx tsx scripts/prune-pio-assets.ts && npx tsx scripts/subset-fonts.ts && npx tsx scripts/minify-inline-scripts.ts && npx tsx scripts/run-pagefind.ts",
		"preview": "astro preview",
		"astro": "astro",
		"type-check": "tsc --noEmit --isolatedDeclarations",
		"new-dynamic": "tsx scripts/new-dynamic.js",
		"new-d": "tsx scripts/new-dynamic.js",
		"new-post": "node scripts/new-post.js",
		"format": "biome format --write ./src ./scripts",
		"lint": "biome check --write ./src ./scripts",
		"preinstall": "npx only-allow pnpm",
		"lqips": "npx tsx scripts/generate-lqips.ts",
		"github-cards": "npx tsx scripts/generate-github-card-data.ts"
	},
	dependencies: {
		"@astrojs/check": "^0.9.10",
		"@astrojs/cloudflare": "^14.2.3",
		"@astrojs/markdown-remark": "^7.2.4",
		"@astrojs/markdown-satteri": "^0.3.7",
		"@astrojs/mdx": "^7.0.7",
		"@astrojs/rss": "^4.0.19",
		"@astrojs/sitemap": "^3.7.3",
		"@astrojs/svelte": "9.0.1",
		"@expressive-code/plugin-collapsible-sections": "^0.44.1",
		"@expressive-code/plugin-line-numbers": "^0.44.1",
		"@fancyapps/ui": "^6.1.14",
		"@iconify-json/fa7-brands": "^1.2.4",
		"@iconify-json/fa7-regular": "^1.2.3",
		"@iconify-json/fa7-solid": "^1.2.5",
		"@iconify-json/material-symbols": "^1.2.89",
		"@iconify-json/mingcute": "^1.2.8",
		"@iconify-json/simple-icons": "^1.2.93",
		"@iconify/svelte": "^5.2.2",
		"@iconify/types": "^2.0.0",
		"@iconify/utils": "^3.1.4",
		"@mermanjs/web": "0.8.0-alpha.3",
		"@napi-rs/wasm-runtime": "^1.2.2",
		"@swup/astro": "^1.8.0",
		"@tailwindcss/typography": "^0.5.20",
		"@types/hast": "^3.0.5",
		"@types/mdast": "^4.0.4",
		"astro": "7.2.4",
		"astro-expressive-code": "^0.44.1",
		"astro-icon": "^1.2.0",
		"ci-info": "^4.4.0",
		"dayjs": "^1.11.23",
		"ec-lang-logo": "^1.0.5",
		"expressive-code-collapsible": "^0.1.0",
		"expressive-code-language-badge": "^1.1.0",
		"github-slugger": "^2.0.0",
		"glob": "^13.0.6",
		"gray-matter": "^4.0.3",
		"hast-util-from-html": "^2.0.3",
		"hastscript": "^9.0.1",
		"katex": "^0.18.3",
		"l2d-widget": "^0.1.1",
		"marked": "^18.0.10",
		"mdast-util-to-string": "^4.0.0",
		"pagefind": "^1.5.2",
		"pako": "^3.0.1",
		"qrcode": "^1.5.4",
		"reading-time": "^1.5.0",
		"rehype-autolink-headings": "^7.1.0",
		"rehype-code-group": "^0.3.1",
		"rehype-components": "^0.3.0",
		"rehype-katex": "^7.0.1",
		"rehype-slug": "^6.0.0",
		"remark-admonition-to-blockquote-callout": "^1.0.0",
		"remark-directive": "^4.0.0",
		"remark-math": "^6.0.0",
		"remark-sectionize": "^2.1.0",
		"sanitize-html": "^2.17.6",
		"satteri": "^0.9.5",
		"sharp": "^0.35.3",
		"stylus": "^0.64.0",
		"svelte": "^5.56.10",
		"tailwindcss": "^4.3.3",
		"takumi-js": "^2.12.0",
		"tsx": "^4.23.12",
		"typescript": "^6.0.3",
		"unist-util-visit": "^5.1.0",
		"wrangler": "^4.124.0"
	},
	devDependencies: {
		"@astrojs/ts-plugin": "^1.10.11",
		"@biomejs/biome": "2.5.10",
		"@iconify-json/mdi": "^1.2.3",
		"@iconify-json/svg-spinners": "^1.2.4",
		"@tailwindcss/vite": "^4.3.3",
		"@types/qrcode": "^1.5.6",
		"@types/sanitize-html": "^2.16.1",
		"esbuild": "^0.28.2",
		"pinyin-pro": "^3.29.3",
		"postcss-import": "^16.1.1",
		"postcss-nesting": "^14.0.1",
		"rehype-callouts": "^2.2.0",
		"subset-font": "^2.5.0"
	}
};
//#endregion
//#region src/pages/rss.xml.ts
var rss_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
function stripInvalidXmlChars(str) {
	return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]/g, "");
}
async function GET(context) {
	const blog = await getSortedPosts();
	const renderers = await loadRenderers([getContainerRenderer$1(), getContainerRenderer()]);
	const container = await experimental_AstroContainer.create({ renderers });
	const feedItems = [];
	for (const post of blog) {
		if (post.data.password) {
			feedItems.push({
				title: post.data.title,
				pubDate: post.data.published,
				description: post.data.description || "",
				link: url(`/posts/${post.id}/`),
				content: i18n(I18nKey.passwordProtectedRss)
			});
			continue;
		}
		const { Content } = await renderEntry(post);
		const cleanedContent = stripInvalidXmlChars(await container.renderToString(Content));
		feedItems.push({
			title: post.data.title,
			pubDate: post.data.published,
			description: post.data.description || "",
			link: url(`/posts/${post.id}/`),
			content: sanitizeHtml(cleanedContent, { allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]) })
		});
	}
	return rss({
		title: siteConfig.title,
		description: siteConfig.subtitle || "No description",
		site: context.site ?? siteConfig.site_url,
		customData: `<templateTheme>Firefly</templateTheme>
		<templateThemeVersion>${package_default.version}</templateThemeVersion>
		<templateThemeUrl></templateThemeUrl>
		<lastBuildDate>${formatDateI18nWithTime(/* @__PURE__ */ new Date())}</lastBuildDate>`,
		items: feedItems
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/rss.xml@_@ts
var page = () => rss_xml_exports;
//#endregion
export { page };
