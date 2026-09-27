import { B as clientAddressSymbol, F as ASTRO_ERROR_HEADER, G as decodeKey, h as chunkToString, n as createVNode, p as renderStreaming, t as AstroJSX, z as REROUTABLE_STATUS_CODES } from "./chunks/jsx-runtime_DmRdA9YB.mjs";
import { $ as NOOP_MIDDLEWARE_FN, A as getDefaultRoutes, B as routeIsFallback, C as getLogger, D as getEnvironment, G as markFeatureUsed, H as ALL_FETCH_FEATURES, I as createStylesheetElementSet, J as getRenderOptions, K as createCrossOriginForbiddenResponse, L as RedirectSinglePageBuiltModule, M as createAsyncManifestMemo, N as createManifestMemo, O as setEnvironment, P as createAssetLink, Q as computePathnameFromDomain, R as getDefaultStatusCode, S as getRouteGenerator, U as FetchFeatures, V as routeIsRedirect, W as getUsedFeatures, X as AstroIntegrationLogger, Y as setRenderOptions, Z as getSetCookiesFromResponse, _ as handlePages, a as handleMiddleware, b as getI18n, d as provideSession, f as getRouteTable, g as routeComparator, h as updateRouteTable, i as FetchState, j as getPattern, k as findRouteToRewrite, l as renderErrorFromState, m as matchRoute, n as getActionContext, o as DisabledAstroCache, p as matchAllRoutes, q as isForbiddenCrossOriginRequest, r as serializeActionResult, s as NoopAstroCache, t as getParts, u as renderErrorPage, v as prepareResponse, w as getResolvedLogger, x as getRouteCache, y as finalizeI18n, z as getFallbackRoute } from "./chunks/parts_CtTkekGy.mjs";
import { $ as AstroError, P as NoManifestAvailable, T as LocalsNotAnObject, et as AstroUserError, i as CacheNotEnabled } from "./chunks/errors-data_BVsUkJU2.mjs";
import { f as removeLeadingForwardSlash, g as stripRequestBase, i as collapseDuplicateTrailingSlashes, m as removeTrailingForwardSlash, o as hasFileExtension, s as isInternalPath, t as appendForwardSlash, u as prependForwardSlash } from "./chunks/path_DW70cvEd.mjs";
import { n as matchPattern } from "./chunks/remote_BgpFkaRQ.mjs";
import { createRawSnippet } from "svelte";
import { render } from "svelte/server";
import { escape } from "html-escaper";
//#region node_modules/astro/dist/core/app/manifest.js
function deserializeManifest(serializedManifest, routesList) {
	const routes = [];
	if (serializedManifest.routes) for (const serializedRoute of serializedManifest.routes) {
		routes.push({
			...serializedRoute,
			routeData: deserializeRouteData(serializedRoute.routeData)
		});
		const route = serializedRoute;
		route.routeData = deserializeRouteData(serializedRoute.routeData);
	}
	if (routesList) for (const route of routesList?.routes) routes.push({
		file: "",
		links: [],
		scripts: [],
		styles: [],
		routeData: route
	});
	const assets = new Set(serializedManifest.assets);
	const componentMetadata = new Map(serializedManifest.componentMetadata);
	const inlinedScripts = new Map(serializedManifest.inlinedScripts);
	const clientDirectives = new Map(serializedManifest.clientDirectives);
	const key = decodeKey(serializedManifest.key);
	return {
		middleware() {
			return { onRequest: NOOP_MIDDLEWARE_FN };
		},
		...serializedManifest,
		rootDir: new URL(serializedManifest.rootDir),
		srcDir: new URL(serializedManifest.srcDir),
		publicDir: new URL(serializedManifest.publicDir),
		outDir: new URL(serializedManifest.outDir),
		cacheDir: new URL(serializedManifest.cacheDir),
		buildClientDir: new URL(serializedManifest.buildClientDir),
		buildServerDir: new URL(serializedManifest.buildServerDir),
		assets,
		componentMetadata,
		inlinedScripts,
		clientDirectives,
		routes,
		key
	};
}
function deserializeRouteData(rawRouteData) {
	return {
		route: rawRouteData.route,
		type: rawRouteData.type,
		pattern: new RegExp(rawRouteData.pattern),
		params: rawRouteData.params,
		component: rawRouteData.component,
		pathname: rawRouteData.pathname || void 0,
		segments: rawRouteData.segments,
		prerender: rawRouteData.prerender,
		redirect: rawRouteData.redirect,
		redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
		fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
			return deserializeRouteData(fallback);
		}),
		isIndex: rawRouteData.isIndex,
		origin: rawRouteData.origin,
		distURL: rawRouteData.distURL
	};
}
function deserializeRouteInfo(rawRouteInfo) {
	return {
		styles: rawRouteInfo.styles,
		file: rawRouteInfo.file,
		links: rawRouteInfo.links,
		scripts: rawRouteInfo.scripts,
		routeData: deserializeRouteData(rawRouteInfo.routeData)
	};
}
//#endregion
//#region node_modules/@astrojs/svelte/dist/context.js
var contexts = /* @__PURE__ */ new WeakMap();
var ID_PREFIX = "s";
function getContext(rendererContextResult) {
	if (contexts.has(rendererContextResult)) return contexts.get(rendererContextResult);
	const ctx = {
		currentIndex: 0,
		get id() {
			return ID_PREFIX + this.currentIndex.toString();
		}
	};
	contexts.set(rendererContextResult, ctx);
	return ctx;
}
function incrementId(rendererContextResult) {
	const ctx = getContext(rendererContextResult);
	const id = ctx.id;
	ctx.currentIndex++;
	return id;
}
//#endregion
//#region node_modules/@astrojs/svelte/dist/server.js
function check$1(Component) {
	if (typeof Component !== "function") return false;
	const componentString = Component.toString();
	return componentString.includes("$$payload") || componentString.includes("$$renderer");
}
function needsHydration(metadata) {
	return metadata?.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup$1(Component, props, slotted, metadata) {
	const tagName = needsHydration(metadata) ? "astro-slot" : "astro-static-slot";
	let children = void 0;
	let $$slots = void 0;
	let idPrefix;
	if (this && this.result) idPrefix = incrementId(this.result);
	const renderProps = {};
	for (const [key, value] of Object.entries(slotted)) {
		$$slots ??= {};
		if (key === "default") {
			$$slots.default = true;
			children = createRawSnippet(() => ({ render: () => `<${tagName}>${value}</${tagName}>` }));
		} else $$slots[key] = createRawSnippet(() => ({ render: () => `<${tagName} name="${key}">${value}</${tagName}>` }));
		const slotName = key === "default" ? "children" : key;
		renderProps[slotName] = createRawSnippet(() => ({ render: () => `<${tagName}${key !== "default" ? ` name="${key}"` : ""}>${value}</${tagName}>` }));
	}
	let html = (await render(Component, {
		props: {
			...props,
			children,
			$$slots,
			...renderProps
		},
		idPrefix
	})).body;
	html = html.replace(/\s+class=""/g, "");
	return { html };
}
var server_default$1 = {
	name: "@astrojs/svelte",
	check: check$1,
	renderToStaticMarkup: renderToStaticMarkup$1,
	supportsAstroStaticSlot: true
};
//#endregion
//#region node_modules/@astrojs/mdx/dist/server.js
var slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
	if (typeof Component !== "function") return false;
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = value;
	}
	try {
		return (await Component({
			...props,
			...slots,
			children
		}))[AstroJSX];
	} catch (e) {
		throwEnhancedErrorIfMdxComponent(e, Component);
	}
	return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = value;
	}
	const { result } = this;
	try {
		let html = "";
		const destination = { write(chunk) {
			if (chunk instanceof Response) return;
			html += chunkToString(result, chunk);
		} };
		await renderStreaming(createVNode(Component, {
			...props,
			...slots,
			children
		}), result, destination);
		return { html };
	} catch (e) {
		throwEnhancedErrorIfMdxComponent(e, Component);
		throw e;
	}
}
function throwEnhancedErrorIfMdxComponent(error, Component) {
	if (Component[/* @__PURE__ */ Symbol.for("mdx-component")]) {
		if (AstroUserError.is(error)) return;
		error.title = error.name;
		error.hint = `This issue often occurs when your MDX component encounters runtime errors.`;
		throw error;
	}
}
var server_default = {
	name: "astro:jsx",
	check,
	renderToStaticMarkup
};
//#endregion
//#region \0virtual:astro:renderers
var renderers = [Object.assign({
	"name": "@astrojs/svelte",
	"clientEntrypoint": "@astrojs/svelte/client.js",
	"serverEntrypoint": "@astrojs/svelte/server.js"
}, { ssr: server_default$1 }), Object.assign({
	"name": "astro:jsx",
	"serverEntrypoint": "file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/node_modules/@astrojs/mdx/dist/server.js"
}, { ssr: server_default })];
function getAmbientManifest() {
	const manifest$1 = manifest;
	if (!manifest$1) throw new AstroError(NoManifestAvailable);
	return manifest$1;
}
//#endregion
//#region node_modules/astro/dist/actions/handler.js
function handleAction(apiContext, state) {
	markFeatureUsed(state.manifest, FetchFeatures.actions);
	if (apiContext.isPrerendered) return;
	const { action, setActionResult } = getActionContext(apiContext);
	if (!action) return;
	if (state.manifest.checkOrigin && isForbiddenCrossOriginRequest(apiContext.request, apiContext.url, apiContext.isPrerendered)) return Promise.resolve(createCrossOriginForbiddenResponse(apiContext.request));
	return executeAction(action, setActionResult);
}
async function executeAction(action, setActionResult) {
	const actionResult = await action.handler();
	const serialized = serializeActionResult(actionResult);
	if (action.calledFrom === "rpc") {
		if (serialized.type === "empty") return new Response(null, { status: serialized.status });
		return new Response(serialized.body, {
			status: serialized.status,
			headers: { "Content-Type": serialized.contentType }
		});
	}
	setActionResult(action.name, serialized);
}
//#endregion
//#region node_modules/astro/dist/core/routing/3xx.js
function redirectTemplate({ status, absoluteLocation, relativeLocation, from }) {
	const delay = status === 302 ? 2 : 0;
	const rel = escape(String(relativeLocation));
	return `<!doctype html>
<title>Redirecting to: ${rel}</title>
<meta http-equiv="refresh" content="${delay};url=${rel}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${escape(String(absoluteLocation))}">
<body>
	<a href="${rel}">Redirecting ${from ? `from <code>${escape(from)}</code> ` : ""}to <code>${rel}</code></a>
</body>`;
}
//#endregion
//#region node_modules/astro/dist/core/routing/trailing-slash-handler.js
function handleTrailingSlash(state) {
	const url = new URL(state.request.url);
	const redirect = redirectTrailingSlash(state.manifest.trailingSlash, url.pathname);
	if (redirect === url.pathname) return;
	const addCookieHeader = state.renderOptions.addCookieHeader;
	const status = state.request.method === "GET" ? 301 : 308;
	const response = new Response(redirectTemplate({
		status,
		relativeLocation: url.pathname,
		absoluteLocation: redirect,
		from: state.request.url
	}), {
		status,
		headers: { location: redirect + url.search }
	});
	prepareResponse(response, { addCookieHeader });
	return response;
}
function redirectTrailingSlash(trailingSlash, pathname) {
	if (pathname === "/" || isInternalPath(pathname)) return pathname;
	const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
	if (path !== pathname) return path;
	if (trailingSlash === "ignore") return pathname;
	if (trailingSlash === "always" && !hasFileExtension(pathname)) return appendForwardSlash(pathname);
	if (trailingSlash === "never") return removeTrailingForwardSlash(pathname);
	return pathname;
}
//#endregion
//#region node_modules/astro/dist/core/cache/provider.js
var cacheProviderMemo = createAsyncManifestMemo(async (manifest) => {
	if (manifest.cacheProvider) {
		const factory = (await manifest.cacheProvider())?.default || null;
		return factory ? factory(manifest.cacheConfig?.options) : null;
	}
	return null;
});
function getCacheProvider(manifest) {
	return cacheProviderMemo.get(manifest);
}
//#endregion
//#region node_modules/astro/dist/core/cache/runtime/utils.js
function defaultSetHeaders(options) {
	const headers = new Headers();
	const directives = [];
	if (options.maxAge !== void 0) directives.push(`max-age=${options.maxAge}`);
	if (options.swr !== void 0) directives.push(`stale-while-revalidate=${options.swr}`);
	if (directives.length > 0) headers.set("CDN-Cache-Control", directives.join(", "));
	if (options.tags && options.tags.length > 0) headers.set("Cache-Tag", options.tags.join(", "));
	if (options.lastModified) headers.set("Last-Modified", options.lastModified.toUTCString());
	if (options.etag) headers.set("ETag", options.etag);
	return headers;
}
function isLiveDataEntry(value) {
	return value != null && typeof value === "object" && "id" in value && "data" in value && "cacheHint" in value;
}
//#endregion
//#region node_modules/astro/dist/core/cache/runtime/cache.js
var APPLY_HEADERS = /* @__PURE__ */ Symbol.for("astro:cache:apply");
var IS_ACTIVE = /* @__PURE__ */ Symbol.for("astro:cache:active");
var AstroCache = class {
	#options = {};
	#tags = /* @__PURE__ */ new Set();
	#disabled = false;
	#provider;
	enabled = true;
	constructor(provider) {
		this.#provider = provider;
	}
	set(input) {
		if (input === false) {
			this.#disabled = true;
			this.#tags.clear();
			this.#options = {};
			return;
		}
		this.#disabled = false;
		let options;
		if (isLiveDataEntry(input)) {
			if (!input.cacheHint) return;
			options = input.cacheHint;
		} else options = input;
		if ("maxAge" in options && options.maxAge !== void 0) this.#options.maxAge = options.maxAge;
		if ("swr" in options && options.swr !== void 0) this.#options.swr = options.swr;
		if ("etag" in options && options.etag !== void 0) this.#options.etag = options.etag;
		if (options.lastModified !== void 0) {
			if (!this.#options.lastModified || options.lastModified > this.#options.lastModified) this.#options.lastModified = options.lastModified;
		}
		if (options.tags) for (const tag of options.tags) this.#tags.add(tag);
	}
	get tags() {
		return [...this.#tags];
	}
	/**
	* Get the current cache options (read-only snapshot).
	* Includes all accumulated options: maxAge, swr, tags, etag, lastModified.
	*/
	get options() {
		return {
			...this.#options,
			tags: this.tags
		};
	}
	async invalidate(input) {
		if (!this.#provider) throw new AstroError(CacheNotEnabled);
		let options;
		if (isLiveDataEntry(input)) options = { tags: input.cacheHint?.tags ?? [] };
		else options = input;
		return this.#provider.invalidate(options);
	}
	/** @internal */
	[APPLY_HEADERS](response, request) {
		if (this.#disabled) return;
		const finalOptions = {
			...this.#options,
			tags: this.tags
		};
		if (finalOptions.maxAge === void 0 && !finalOptions.tags?.length) return;
		const headers = this.#provider?.setHeaders?.(finalOptions, request) ?? defaultSetHeaders(finalOptions);
		for (const [key, value] of headers) response.headers.set(key, value);
	}
	/** @internal */
	get [IS_ACTIVE]() {
		return !this.#disabled && (this.#options.maxAge !== void 0 || this.#tags.size > 0);
	}
};
function applyCacheHeaders(cache, response, request) {
	if (APPLY_HEADERS in cache) cache[APPLY_HEADERS](response, request);
}
//#endregion
//#region node_modules/astro/dist/core/cache/runtime/route-matching.js
function compileCacheRoutes(routes, base, trailingSlash) {
	const compiled = Object.entries(routes).map(([path, options]) => {
		const segments = removeLeadingForwardSlash(path).split("/").filter(Boolean).map((s) => getParts(s, path));
		return {
			pattern: getPattern(segments, base, trailingSlash),
			options,
			segments,
			route: path
		};
	});
	compiled.sort((a, b) => routeComparator({
		segments: a.segments,
		route: a.route,
		type: "page"
	}, {
		segments: b.segments,
		route: b.route,
		type: "page"
	}));
	return compiled;
}
function matchCacheRoute(pathname, compiledRoutes) {
	for (const route of compiledRoutes) if (route.pattern.test(pathname)) return route.options;
	return null;
}
//#endregion
//#region node_modules/astro/dist/core/cache/handler.js
var CACHE_KEY = "cache";
function provideCache(state) {
	const manifest = state.manifest;
	if (!manifest.cacheConfig) {
		state.provide(CACHE_KEY, { create: () => new DisabledAstroCache(state.logger) });
		return;
	}
	if (getEnvironment(manifest).runtimeMode === "development") {
		state.provide(CACHE_KEY, { create: () => new NoopAstroCache() });
		return;
	}
	return provideCacheAsync(state, manifest);
}
async function provideCacheAsync(state, manifest) {
	const cacheProvider = await getCacheProvider(manifest);
	state.provide(CACHE_KEY, { create() {
		const cache = new AstroCache(cacheProvider);
		if (manifest.cacheConfig?.routes) {
			const matched = matchCacheRoute(state.pathname, getCompiledCacheRoutes(manifest));
			if (matched) cache.set(matched);
		}
		return cache;
	} });
}
async function handleCache(state, next) {
	markFeatureUsed(state.manifest, FetchFeatures.cache);
	if (!state.manifest.cacheProvider) return next();
	const cache = state.resolve(CACHE_KEY);
	const cacheProvider = await getCacheProvider(state.manifest);
	if (cacheProvider?.onRequest) {
		const response2 = await cacheProvider.onRequest({
			request: state.request,
			url: new URL(state.request.url),
			waitUntil: state.renderOptions.waitUntil
		}, async () => {
			const res = await next();
			applyCacheHeaders(cache, res, state.request);
			return res;
		});
		response2.headers.delete("CDN-Cache-Control");
		response2.headers.delete("Cache-Tag");
		return response2;
	}
	const response = await next();
	applyCacheHeaders(cache, response, state.request);
	return response;
}
var compiledCacheRoutesMemo = createManifestMemo((manifest) => manifest.cacheConfig?.routes ? compileCacheRoutes(manifest.cacheConfig.routes, manifest.base, manifest.trailingSlash) : []);
function getCompiledCacheRoutes(manifest) {
	return compiledCacheRoutesMemo.get(manifest);
}
//#endregion
//#region node_modules/astro/dist/core/redirects/render.js
function isExternalURL(url) {
	return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//");
}
function redirectIsExternal(redirect) {
	if (typeof redirect === "string") return isExternalURL(redirect);
	else return isExternalURL(redirect.destination);
}
function computeRedirectStatus(method, redirect, redirectRoute) {
	return redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
}
function resolveRedirectTarget(params, redirect, redirectRoute, trailingSlash) {
	if (typeof redirectRoute !== "undefined") return getRouteGenerator(redirectRoute.segments, trailingSlash)(params) || redirectRoute?.pathname || "/";
	else if (typeof redirect === "string") {
		if (redirectIsExternal(redirect)) return redirect;
		else {
			let target = redirect;
			for (const param of Object.keys(params)) {
				const paramValue = params[param];
				target = target.replace(`[${param}]`, paramValue).replace(`[...${param}]`, paramValue);
			}
			return target;
		}
	} else if (typeof redirect === "undefined") return "/";
	return redirect.destination;
}
async function renderRedirect(state) {
	markFeatureUsed(state.manifest, FetchFeatures.redirects);
	const { redirect, redirectRoute } = state.routeData;
	const status = computeRedirectStatus(state.request.method, redirect, redirectRoute);
	const headers = { location: encodeURI(resolveRedirectTarget(state.params, redirect, redirectRoute, state.manifest.trailingSlash)) };
	if (redirect && redirectIsExternal(redirect)) {
		if (typeof redirect === "string") return Response.redirect(redirect, status);
		else return Response.redirect(redirect.destination, status);
	}
	return new Response(null, {
		status,
		headers
	});
}
//#endregion
//#region node_modules/astro/dist/core/routing/handler.js
function logRequestFromState(state, payload) {
	if (state.logRequest) state.logRequest(payload);
	else getEnvironment(state.manifest).logRequest(state.manifest, payload);
}
function actionsAndPages(state, ctx) {
	if (!state.skipMiddleware) {
		const actionResult = handleAction(ctx, state);
		if (actionResult) return actionResult.then((response) => response ?? handlePages(state, ctx));
	}
	return handlePages(state, ctx);
}
async function handleRequest(state) {
	await getResolvedLogger(state.manifest);
	markFeatureUsed(state.manifest, ALL_FETCH_FEATURES);
	if (state.invalidEncoding) return new Response(null, {
		status: 400,
		statusText: "Bad Request"
	});
	const trailingSlashRedirect = handleTrailingSlash(state);
	if (trailingSlashRedirect) return trailingSlashRedirect;
	if (!state.routeData) return renderErrorFromState(state, state.request, {
		...state.renderOptions,
		status: 404,
		pathname: state.pathname
	});
	return render$1(state);
}
async function render$1(state) {
	const routeData = state.routeData;
	const pathname = state.pathname;
	const request = state.request;
	const { addCookieHeader } = state.renderOptions;
	state.status = getDefaultStatusCode(state.manifest, routeData, pathname);
	let response;
	let finalizeError;
	try {
		const sessionP = state.manifest.sessionConfig ? provideSession(state) : void 0;
		const cacheP = provideCache(state);
		if (sessionP || cacheP) await Promise.all([sessionP, cacheP]);
		markFeatureUsed(state.manifest, FetchFeatures.sessions);
		if (routeData.type === "redirect") {
			const redirectResponse = await renderRedirect(state);
			logRequestFromState(state, {
				pathname,
				method: request.method,
				statusCode: redirectResponse.status,
				isRewrite: false,
				timeStart: state.timeStart
			});
			prepareResponse(redirectResponse, { addCookieHeader });
			state.logger.flush();
			return redirectResponse;
		}
		const i18n = getI18n(state.manifest);
		if (!state.manifest.cacheProvider) {
			markFeatureUsed(state.manifest, FetchFeatures.cache);
			response = await handleMiddleware(state, actionsAndPages);
			if (i18n) response = await finalizeI18n(i18n, state, response);
		} else {
			const runPipeline = async () => {
				let res = await handleMiddleware(state, actionsAndPages);
				if (i18n) res = await finalizeI18n(i18n, state, res);
				return res;
			};
			response = await handleCache(state, runPipeline);
		}
		logRequestFromState(state, {
			pathname,
			method: request.method,
			statusCode: response.status,
			isRewrite: state.isRewriting,
			timeStart: state.timeStart
		});
	} catch (err) {
		state.logger.error(null, err.stack || err.message || String(err));
		return renderErrorFromState(state, request, {
			...state.renderOptions,
			status: 500,
			error: err,
			pathname: state.pathname
		});
	} finally {
		try {
			const finalize = state.finalizeAll();
			if (finalize) await finalize;
		} catch (err) {
			finalizeError = err;
			state.logger.error(null, err.stack || err.message || String(err));
		}
	}
	if (finalizeError) return renderErrorFromState(state, request, {
		...state.renderOptions,
		status: 500,
		error: finalizeError,
		pathname: state.pathname
	});
	if (REROUTABLE_STATUS_CODES.includes(response.status) && response.body === null && !state.skipErrorReroute) return renderErrorFromState(state, request, {
		...state.renderOptions,
		response,
		status: response.status,
		error: response.status === 500 ? null : void 0,
		pathname: state.pathname
	});
	prepareResponse(response, { addCookieHeader });
	state.logger.flush();
	return response;
}
//#endregion
//#region node_modules/astro/dist/core/fetch/default-handler.js
var DefaultFetchHandler = class {
	#manifest;
	/**
	* `BaseApp` passes itself so states resolve that app's manifest ahead of
	* the ambient one; generated builds construct the handler with no
	* arguments and use the ambient manifest.
	*/
	constructor(app) {
		this.#manifest = app?.manifest;
	}
	fetch = (request) => {
		const options = getRenderOptions(request);
		const manifest = this.#manifest ?? getAmbientManifest();
		return handleRequest(new FetchState(manifest, request, options));
	};
};
//#endregion
//#region node_modules/astro/dist/core/routing/match-request.js
function safeDecodeURI(manifest, pathname) {
	try {
		return decodeURI(pathname);
	} catch (e) {
		new AstroIntegrationLogger(getLogger(manifest).options, manifest.adapterName).debug(e.toString());
		return pathname;
	}
}
function matchRequest(manifest, request, allowPrerenderedRoutes = false) {
	const url = new URL(request.url);
	if (manifest.assets.has(url.pathname)) return void 0;
	let pathname = computePathnameFromDomain(request, url, manifest.i18n, manifest.base, manifest.trailingSlash, getLogger(manifest));
	if (!pathname) pathname = prependForwardSlash(stripRequestBase(url.pathname, manifest.base));
	const routeData = matchRoute(manifest, safeDecodeURI(manifest, pathname));
	if (!routeData) return void 0;
	if (allowPrerenderedRoutes) return routeData;
	if (routeData.prerender) {
		if (routeData.params.length > 0) return matchAllRoutes(manifest, safeDecodeURI(manifest, pathname)).find((r) => !r.prerender);
		return;
	}
	return routeData;
}
//#endregion
//#region node_modules/astro/dist/core/app/base.js
var BaseApp = class BaseApp {
	manifest;
	#adapterLogger;
	baseWithoutTrailingSlash;
	/**
	* The streaming flag passed to the constructor, surfaced through the
	* protected `resolveStreaming()` hook and fed into the internal
	* `FetchState` facade hooks on the fast path.
	*/
	#streaming;
	/**
	* The handler that turns incoming `Request` objects into `Response`s.
	* Defaults to a `DefaultFetchHandler` pinned to this app and can be
	* overridden via `setFetchHandler` — typically by the bundled
	* entrypoint after importing `virtual:astro:fetchable`.
	*/
	#fetchHandler;
	#errorHandler;
	/**
	* Whether a custom fetch handler (from `src/fetch.ts`) has been set
	* via `setFetchHandler`. When false, the `DefaultFetchHandler` is
	* in use and all features are implicitly active.
	*/
	#hasCustomFetchHandler = false;
	/**
	* Whether the missing-feature check has already run. We only want
	* to warn once — after the first request in dev, or at build end.
	*/
	#featureCheckDone = false;
	get logger() {
		return getLogger(this.manifest);
	}
	/**
	* Route data derived from the manifest, used for route matching. Reads and
	* writes go through the single per-manifest route table, so HMR updates are
	* visible to every consumer at once.
	*/
	get manifestData() {
		return getRouteTable(this.manifest);
	}
	set manifestData(routesList) {
		updateRouteTable(this.manifest, routesList.routes);
	}
	get adapterLogger() {
		const currentOptions = this.logger.options;
		if (!this.#adapterLogger || this.#adapterLogger.options !== currentOptions) this.#adapterLogger = new AstroIntegrationLogger(currentOptions, this.manifest.adapterName);
		return this.#adapterLogger;
	}
	constructor(manifest, streaming = true) {
		this.manifest = manifest;
		this.baseWithoutTrailingSlash = removeTrailingForwardSlash(manifest.base);
		this.#streaming = streaming;
		getRouteTable(manifest);
		getLogger(manifest);
		this.#fetchHandler = new DefaultFetchHandler(this);
		this.#errorHandler = this.createErrorHandler();
	}
	/**
	* Resolves the user-configured logger destination from the manifest and
	* returns the logger. Lazy and only resolves once; safe to call before
	* the first render (adapters use this to log startup messages through
	* the configured destination).
	*/
	getLogger() {
		return getResolvedLogger(this.manifest);
	}
	/**
	* The streaming flag fed into the internal `FetchState` facade hooks on
	* the fast path. Returns the constructor flag by
	* default; `BuildApp` overrides this to return `undefined` so streaming
	* falls through to the environment default (`manifest.serverLike`).
	*/
	resolveStreaming() {
		return this.#streaming;
	}
	/**
	* Override the fetch handler used to dispatch requests. Entrypoints
	* call this with the default export of `virtual:astro:fetchable` to
	* plug in a user-authored handler from `src/fetch.ts`.
	*/
	setFetchHandler(handler) {
		this.#fetchHandler = handler;
		this.#hasCustomFetchHandler = !(handler instanceof DefaultFetchHandler);
	}
	/**
	* Returns the error handler used by this app. The default is a thin
	* bridge over the functional error API — strategy selection (production
	* default / dev / build) is environment-driven inside `renderErrorPage`.
	* External subclasses can override this to customize error rendering.
	*/
	createErrorHandler() {
		return { renderError: (request, options) => renderErrorPage(this.manifest, request, options) };
	}
	/**
	* Resets the cached adapter logger so it picks up a new logger instance.
	* Used by BuildApp when the logger is replaced via setOptions().
	*/
	resetAdapterLogger() {
		this.#adapterLogger = void 0;
	}
	getAllowedDomains() {
		return this.manifest.allowedDomains;
	}
	matchesAllowedDomains(forwardedHost, protocol) {
		return BaseApp.validateForwardedHost(forwardedHost, this.manifest.allowedDomains, protocol);
	}
	static validateForwardedHost(forwardedHost, allowedDomains, protocol) {
		if (!allowedDomains || allowedDomains.length === 0) return false;
		try {
			const testUrl = new URL(`${protocol || "https"}://${forwardedHost}`);
			return allowedDomains.some((pattern) => {
				return matchPattern(testUrl, pattern);
			});
		} catch {
			return false;
		}
	}
	set setManifestData(newManifestData) {
		updateRouteTable(this.manifest, newManifestData.routes);
	}
	removeBase(pathname) {
		return stripRequestBase(pathname, this.manifest.base);
	}
	/**
	* Decodes a pathname with `decodeURI`, falling back to the raw pathname when it
	* contains an invalid percent-sequence (e.g. `%C0%AF`, an overlong-UTF-8 encoding of
	* `/` commonly sent by path-traversal scanners). A raw `decodeURI()` would throw
	* `URIError: URI malformed`, and because `match()` runs before `render()` that error
	* escapes the adapter's request handler as an uncaught exception (HTTP 500) that user
	* middleware can't catch.
	*/
	safeDecodeURI(pathname) {
		try {
			return decodeURI(pathname);
		} catch (e) {
			this.adapterLogger.debug(e.toString());
			return pathname;
		}
	}
	/**
	* Extracts the base-stripped, decoded pathname from a request.
	* Used by adapters to compute the pathname for dev-mode route matching.
	*/
	getPathnameFromRequest(request) {
		const url = new URL(request.url);
		const pathname = prependForwardSlash(this.removeBase(url.pathname));
		return this.safeDecodeURI(pathname);
	}
	/**
	* Given a `Request`, it returns the `RouteData` that matches its `pathname`. By default, prerendered
	* routes aren't returned, even if they are matched.
	*
	* When `allowPrerenderedRoutes` is `true`, the function returns matched prerendered routes too.
	* @param request
	* @param allowPrerenderedRoutes
	*/
	match(request, allowPrerenderedRoutes = false) {
		return matchRequest(this.manifest, request, allowPrerenderedRoutes);
	}
	/**
	* A matching route function to use in the development server.
	* Contrary to the `.match` function, this function resolves props and params, returning the correct
	* route based on the priority, segments. It also returns the correct, resolved pathname.
	* @param pathname
	*/
	devMatch(pathname) {}
	computePathnameFromDomain(request) {
		return computePathnameFromDomain(request, new URL(request.url), this.manifest.i18n, this.manifest.base, this.manifest.trailingSlash, this.logger);
	}
	async render(request, { addCookieHeader = false, clientAddress = Reflect.get(request, clientAddressSymbol), locals, prerenderedErrorPageFetch = fetch, routeData, waitUntil } = {}) {
		await getResolvedLogger(this.manifest);
		if (routeData) {
			this.logger.debug("router", "The adapter " + this.manifest.adapterName + " provided a custom RouteData for ", request.url);
			this.logger.debug("router", "RouteData");
			this.logger.debug("router", routeData);
		}
		if (locals) {
			if (typeof locals !== "object") {
				const error = new AstroError(LocalsNotAnObject);
				this.logger.error(null, error.stack);
				return this.renderError(request, {
					addCookieHeader,
					clientAddress,
					prerenderedErrorPageFetch,
					locals: void 0,
					routeData,
					waitUntil,
					status: 500,
					error
				});
			}
		}
		if (!routeData) {
			const domainPathname = this.computePathnameFromDomain(request);
			if (domainPathname) routeData = matchRoute(this.manifest, this.safeDecodeURI(domainPathname));
		}
		const resolvedOptions = {
			addCookieHeader,
			clientAddress,
			prerenderedErrorPageFetch,
			locals,
			routeData,
			waitUntil
		};
		let response;
		if (this.#fetchHandler instanceof DefaultFetchHandler) response = await handleRequest(new FetchState(this.manifest, request, resolvedOptions, {
			streaming: this.resolveStreaming(),
			renderError: (req, opts) => this.renderError(req, opts),
			logRequest: (payload) => this.logThisRequest(payload)
		}));
		else {
			setRenderOptions(request, resolvedOptions);
			response = await this.#fetchHandler.fetch(request);
		}
		this.#warnMissingFeatures();
		if (response.headers.get("X-Astro-Error")) {
			response.headers.delete(ASTRO_ERROR_HEADER);
			return this.renderError(request, {
				addCookieHeader,
				clientAddress,
				prerenderedErrorPageFetch,
				locals,
				routeData,
				waitUntil,
				response,
				status: response.status,
				error: response.status === 500 ? null : void 0
			});
		}
		return response;
	}
	setCookieHeaders(response) {
		return getSetCookiesFromResponse(response);
	}
	/**
	* Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
	* For example,
	* ```ts
	* for (const cookie_ of App.getSetCookieFromResponse(response)) {
	*     const cookie: string = cookie_
	* }
	* ```
	* @param response The response to read cookies from.
	* @returns An iterator that yields key-value pairs as equal-sign-separated strings.
	*/
	static getSetCookieFromResponse = getSetCookiesFromResponse;
	/**
	* If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
	* This also handles pre-rendered /404 or /500 routes.
	*
	* Delegates to the app's configured `ErrorHandler`. To customize behavior
	* for a specific environment, override `createErrorHandler()` rather than
	* this method.
	*/
	async renderError(request, options) {
		return this.#errorHandler.renderError(request, options);
	}
	/**
	* One-shot check: after the first request with a custom `src/fetch.ts`,
	* compare `usedFeatures` against the manifest and warn about any
	* configured features the user's pipeline doesn't call.
	*/
	#warnMissingFeatures() {
		if (this.#featureCheckDone || !this.#hasCustomFetchHandler) return;
		this.#featureCheckDone = true;
		const manifest = this.manifest;
		const missing = [];
		const used = getUsedFeatures(this.manifest);
		if (manifest.routes.some((r) => r.routeData.type === "redirect") && !(used & FetchFeatures.redirects)) missing.push("redirects");
		if (manifest.sessionConfig && !(used & FetchFeatures.sessions)) missing.push("sessions");
		if (manifest.actions && !(used & FetchFeatures.actions)) missing.push("actions");
		if (manifest.middleware && !(used & FetchFeatures.middleware)) missing.push("middleware");
		if (manifest.i18n && manifest.i18n.strategy !== "manual" && !(used & FetchFeatures.i18n)) missing.push("i18n");
		if (manifest.cacheConfig && !(used & FetchFeatures.cache)) missing.push("cache");
		for (const feature of missing) this.logger.warn("router", `Your project uses ${feature}, but your custom src/fetch.ts does not call the ${feature}() handler. This feature will not work unless your fetch handler calls it.`);
	}
	getDefaultStatusCode(routeData, pathname) {
		return getDefaultStatusCode(this.manifest, routeData, pathname);
	}
	getManifest() {
		return this.manifest;
	}
	logThisRequest({ pathname, method, statusCode, isRewrite, timeStart }) {
		const timeEnd = performance.now();
		this.logRequest({
			pathname,
			method,
			statusCode,
			isRewrite,
			reqTime: timeEnd - timeStart
		});
	}
};
[
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/404",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/404\\/$",
			"segments": [[{
				"content": "404",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/404.astro",
			"pathname": "/404",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/about",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/about\\/$",
			"segments": [[{
				"content": "about",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/about.astro",
			"pathname": "/about",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/api/allPostMeta.json",
			"isIndex": false,
			"type": "endpoint",
			"pattern": "^\\/api\\/allPostMeta\\.json$",
			"segments": [[{
				"content": "api",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "allPostMeta.json",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/api/allPostMeta.json.ts",
			"pathname": "/api/allPostMeta.json",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/api/dynamic.json",
			"isIndex": false,
			"type": "endpoint",
			"pattern": "^\\/api\\/dynamic\\.json$",
			"segments": [[{
				"content": "api",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "dynamic.json",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/api/dynamic.json.ts",
			"pathname": "/api/dynamic.json",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/archive",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/archive\\/$",
			"segments": [[{
				"content": "archive",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/archive.astro",
			"pathname": "/archive",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/bangumi",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/bangumi\\/$",
			"segments": [[{
				"content": "bangumi",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/bangumi.astro",
			"pathname": "/bangumi",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/bilibili",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/bilibili\\/$",
			"segments": [[{
				"content": "bilibili",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/bilibili.astro",
			"pathname": "/bilibili",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/booknav",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/booknav\\/$",
			"segments": [[{
				"content": "booknav",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/booknav.astro",
			"pathname": "/booknav",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/categories",
			"isIndex": true,
			"type": "page",
			"pattern": "^\\/categories\\/$",
			"segments": [[{
				"content": "categories",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/categories/index.astro",
			"pathname": "/categories",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/dynamic/comments",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/dynamic\\/comments\\/$",
			"segments": [[{
				"content": "dynamic",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "comments",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/dynamic/comments.astro",
			"pathname": "/dynamic/comments",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/dynamic",
			"isIndex": true,
			"type": "page",
			"pattern": "^\\/dynamic\\/$",
			"segments": [[{
				"content": "dynamic",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/dynamic/index.astro",
			"pathname": "/dynamic",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/friends",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/friends\\/$",
			"segments": [[{
				"content": "friends",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/friends.astro",
			"pathname": "/friends",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/gallery/[album]",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/gallery\\/([^/]+?)\\/$",
			"segments": [[{
				"content": "gallery",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "album",
				"dynamic": true,
				"spread": false
			}]],
			"params": ["album"],
			"component": "src/pages/gallery/[album].astro",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/gallery",
			"isIndex": true,
			"type": "page",
			"pattern": "^\\/gallery\\/$",
			"segments": [[{
				"content": "gallery",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/gallery/index.astro",
			"pathname": "/gallery",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/guestbook",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/guestbook\\/$",
			"segments": [[{
				"content": "guestbook",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/guestbook.astro",
			"pathname": "/guestbook",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/myanimelist",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/myanimelist\\/$",
			"segments": [[{
				"content": "myanimelist",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/myanimelist.astro",
			"pathname": "/myanimelist",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/og/[...slug]",
			"isIndex": false,
			"type": "endpoint",
			"pattern": "^\\/og(?:\\/(.*?))?\\/$",
			"segments": [[{
				"content": "og",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "...slug",
				"dynamic": true,
				"spread": true
			}]],
			"params": ["...slug"],
			"component": "src/pages/og/[...slug].ts",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/posts/[...slug]",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/posts(?:\\/(.*?))?\\/$",
			"segments": [[{
				"content": "posts",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "...slug",
				"dynamic": true,
				"spread": true
			}]],
			"params": ["...slug"],
			"component": "src/pages/posts/[...slug].astro",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/robots.txt",
			"isIndex": false,
			"type": "endpoint",
			"pattern": "^\\/robots\\.txt$",
			"segments": [[{
				"content": "robots.txt",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/robots.txt.ts",
			"pathname": "/robots.txt",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/rss",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/rss\\/$",
			"segments": [[{
				"content": "rss",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/rss.astro",
			"pathname": "/rss",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/rss.xml",
			"isIndex": false,
			"type": "endpoint",
			"pattern": "^\\/rss\\.xml$",
			"segments": [[{
				"content": "rss.xml",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/rss.xml.ts",
			"pathname": "/rss.xml",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/search",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/search\\/$",
			"segments": [[{
				"content": "search",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/search.astro",
			"pathname": "/search",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/series",
			"isIndex": true,
			"type": "page",
			"pattern": "^\\/series\\/$",
			"segments": [[{
				"content": "series",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/series/index.astro",
			"pathname": "/series",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/sponsor",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/sponsor\\/$",
			"segments": [[{
				"content": "sponsor",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/sponsor.astro",
			"pathname": "/sponsor",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/tags",
			"isIndex": true,
			"type": "page",
			"pattern": "^\\/tags\\/$",
			"segments": [[{
				"content": "tags",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/tags/index.astro",
			"pathname": "/tags",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/vndb",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/vndb\\/$",
			"segments": [[{
				"content": "vndb",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/vndb.astro",
			"pathname": "/vndb",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/[...page]",
			"isIndex": false,
			"type": "page",
			"pattern": "^(?:\\/(.*?))?\\/$",
			"segments": [[{
				"content": "...page",
				"dynamic": true,
				"spread": true
			}]],
			"params": ["...page"],
			"component": "src/pages/[...page].astro",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "always" }
		}
	}
].map(deserializeRouteInfo);
//#endregion
//#region \0virtual:astro:pages
var _page0 = () => import("./chunks/404_CQAme5R5.mjs");
var _page1 = () => import("./chunks/about_gATApsps.mjs");
var _page2 = () => import("./chunks/allPostMeta_B0qJojgH.mjs");
var _page3 = () => import("./chunks/dynamic_tC25jZzx.mjs");
var _page4 = () => import("./chunks/archive_VYt9phNk.mjs");
var _page5 = () => import("./chunks/bangumi_CibrcJMb.mjs");
var _page6 = () => import("./chunks/bilibili_ChB9K8WS.mjs");
var _page7 = () => import("./chunks/booknav_s0fbuNpS.mjs");
var _page8 = () => import("./chunks/index_By1e9Ix-.mjs");
var _page9 = () => import("./chunks/comments_CoRxc59K.mjs");
var _page10 = () => import("./chunks/index_CqFjogs-.mjs");
var _page11 = () => import("./chunks/friends_BO4PLEYg.mjs");
var _page12 = () => import("./chunks/_album__LlQHFqKd.mjs");
var _page13 = () => import("./chunks/index_BNCGo9r3.mjs");
var _page14 = () => import("./chunks/guestbook_D3Q0CkZZ.mjs");
var _page15 = () => import("./chunks/myanimelist_DbDOne_8.mjs");
var _page16 = () => import("./chunks/_.._DfVw45J5.mjs");
var _page17 = () => import("./chunks/_.._CKdK2Hsp.mjs");
var _page18 = () => import("./chunks/robots_DFoaA-JV.mjs");
var _page19 = () => import("./chunks/rss_oSCdkTTQ.mjs");
var _page20 = () => import("./chunks/rss_Cqk5TF-O.mjs");
var _page21 = () => import("./chunks/search_BPQDMK22.mjs");
var _page22 = () => import("./chunks/index_r3bIkz8j.mjs");
var _page23 = () => import("./chunks/sponsor_CovsOeKZ.mjs");
var _page24 = () => import("./chunks/index_CB3UMgAP.mjs");
var _page25 = () => import("./chunks/vndb_CWY4KXHv.mjs");
var _page26 = () => import("./chunks/_.._CH-aumIi.mjs");
var pageMap = /* @__PURE__ */ new Map([
	["src/pages/404.astro", _page0],
	["src/pages/about.astro", _page1],
	["src/pages/api/allPostMeta.json.ts", _page2],
	["src/pages/api/dynamic.json.ts", _page3],
	["src/pages/archive.astro", _page4],
	["src/pages/bangumi.astro", _page5],
	["src/pages/bilibili.astro", _page6],
	["src/pages/booknav.astro", _page7],
	["src/pages/categories/index.astro", _page8],
	["src/pages/dynamic/comments.astro", _page9],
	["src/pages/dynamic/index.astro", _page10],
	["src/pages/friends.astro", _page11],
	["src/pages/gallery/[album].astro", _page12],
	["src/pages/gallery/index.astro", _page13],
	["src/pages/guestbook.astro", _page14],
	["src/pages/myanimelist.astro", _page15],
	["src/pages/og/[...slug].ts", _page16],
	["src/pages/posts/[...slug].astro", _page17],
	["src/pages/robots.txt.ts", _page18],
	["src/pages/rss.astro", _page19],
	["src/pages/rss.xml.ts", _page20],
	["src/pages/search.astro", _page21],
	["src/pages/series/index.astro", _page22],
	["src/pages/sponsor.astro", _page23],
	["src/pages/tags/index.astro", _page24],
	["src/pages/vndb.astro", _page25],
	["src/pages/[...page].astro", _page26]
]);
//#endregion
//#region \0virtual:astro:manifest
var _manifest = deserializeManifest({"rootDir":"file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/","cacheDir":"file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/node_modules/.astro/","outDir":"file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/","srcDir":"file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/src/","publicDir":"file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/public/","buildClientDir":"file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/client/","buildServerDir":"file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/server/","adapterName":"","assetsDir":"_astro","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":".card-base[data-astro-cid-ibpinaeu]{animation:.6s ease-out fadeInUp}@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}a[data-astro-cid-ibpinaeu]:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(var(--primary-rgb),.3)}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/markdown-extend.CV7FOiE_.css"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[],"routeData":{"route":"/api/allPostMeta.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/allPostMeta\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"allPostMeta.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/allPostMeta.json.ts","pathname":"/api/allPostMeta.json","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[],"routeData":{"route":"/api/dynamic.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/dynamic\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"dynamic.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/dynamic.json.ts","pathname":"/api/dynamic.json","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":"archive-panel[data-astro-cid-soajkds3]{display:block}.archive-arrow[data-astro-cid-soajkds3]{display:inline-flex}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/archive","isIndex":false,"type":"page","pattern":"^\\/archive\\/$","segments":[[{"content":"archive","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archive.astro","pathname":"/archive","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":".line-clamp-2.svelte-tojcup{display:-webkit-box;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-1.svelte-tojcup{display:-webkit-box;line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-2[data-astro-cid-avaugctc]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.responsive-pagination.svelte-ewpvbp{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.mobile-pagination.svelte-ewpvbp{display:flex;padding:0 1rem}.desktop-pagination.svelte-ewpvbp{display:none}@media(min-width:1024px){.mobile-pagination.svelte-ewpvbp{display:none}.desktop-pagination.svelte-ewpvbp{display:flex}}@media(max-width:640px){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}@media(max-width:480px){.mobile-pagination.svelte-ewpvbp{padding:0 .25rem}}.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:all .2s ease-in-out}@media(prefers-contrast:high){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){border:1px solid currentColor}}@media(prefers-reduced-motion:reduce){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:none}}@media(hover:none)and (pointer:coarse){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:44px;min-width:44px}.mobile-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:40px;min-width:40px}}@media(max-width:1024px)and (orientation:landscape){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/bangumi","isIndex":false,"type":"page","pattern":"^\\/bangumi\\/$","segments":[[{"content":"bangumi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bangumi.astro","pathname":"/bangumi","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":".responsive-pagination.svelte-ewpvbp{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.mobile-pagination.svelte-ewpvbp{display:flex;padding:0 1rem}.desktop-pagination.svelte-ewpvbp{display:none}@media(min-width:1024px){.mobile-pagination.svelte-ewpvbp{display:none}.desktop-pagination.svelte-ewpvbp{display:flex}}@media(max-width:640px){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}@media(max-width:480px){.mobile-pagination.svelte-ewpvbp{padding:0 .25rem}}.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:all .2s ease-in-out}@media(prefers-contrast:high){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){border:1px solid currentColor}}@media(prefers-reduced-motion:reduce){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:none}}@media(hover:none)and (pointer:coarse){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:44px;min-width:44px}.mobile-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:40px;min-width:40px}}@media(max-width:1024px)and (orientation:landscape){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}\n.line-clamp-1.svelte-13muzx4{display:-webkit-box;line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3.svelte-13muzx4{display:-webkit-box;line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}@keyframes svelte-1nu32y0-animate-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-in.svelte-1nu32y0{animation:svelte-1nu32y0-animate-in .2s ease-out}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/bilibili","isIndex":false,"type":"page","pattern":"^\\/bilibili\\/$","segments":[[{"content":"bilibili","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bilibili.astro","pathname":"/bilibili","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":"booknav-list{display:block}.booknav-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:.75rem}.booknav-group{scroll-margin-top:5.5rem}.booknav-letter{font-size:1.25rem;font-weight:700;line-height:1;color:var(--primary);background:color-mix(in srgb,var(--primary) 12%,transparent);width:100%;height:100%;display:flex;align-items:center;justify-content:center}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/booknav","isIndex":false,"type":"page","pattern":"^\\/booknav\\/$","segments":[[{"content":"booknav","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/booknav.astro","pathname":"/booknav","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/categories","isIndex":true,"type":"page","pattern":"^\\/categories\\/$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories/index.astro","pathname":"/categories","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":"html:has(.dynamic-comment-embed),body:has(.dynamic-comment-embed){overflow:hidden;background:transparent!important}.dynamic-comment-embed #post-comments{margin:0;border:0;box-shadow:none}\n"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/dynamic/comments","isIndex":false,"type":"page","pattern":"^\\/dynamic\\/comments\\/$","segments":[[{"content":"dynamic","dynamic":false,"spread":false}],[{"content":"comments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dynamic/comments.astro","pathname":"/dynamic/comments","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/markdown-extend.CV7FOiE_.css"},{"type":"inline","content":".responsive-pagination.svelte-ewpvbp{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.mobile-pagination.svelte-ewpvbp{display:flex;padding:0 1rem}.desktop-pagination.svelte-ewpvbp{display:none}@media(min-width:1024px){.mobile-pagination.svelte-ewpvbp{display:none}.desktop-pagination.svelte-ewpvbp{display:flex}}@media(max-width:640px){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}@media(max-width:480px){.mobile-pagination.svelte-ewpvbp{padding:0 .25rem}}.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:all .2s ease-in-out}@media(prefers-contrast:high){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){border:1px solid currentColor}}@media(prefers-reduced-motion:reduce){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:none}}@media(hover:none)and (pointer:coarse){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:44px;min-width:44px}.mobile-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:40px;min-width:40px}}@media(max-width:1024px)and (orientation:landscape){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}\n"},{"type":"external","src":"_astro/index.-wlTiOjc.css"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/dynamic","isIndex":true,"type":"page","pattern":"^\\/dynamic\\/$","segments":[[{"content":"dynamic","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dynamic/index.astro","pathname":"/dynamic","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/markdown-extend.CV7FOiE_.css"},{"type":"inline","content":".friends-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:.75rem}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/friends","isIndex":false,"type":"page","pattern":"^\\/friends\\/$","segments":[[{"content":"friends","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/friends.astro","pathname":"/friends","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/gallery/[album]","isIndex":false,"type":"page","pattern":"^\\/gallery\\/([^/]+?)\\/$","segments":[[{"content":"gallery","dynamic":false,"spread":false}],[{"content":"album","dynamic":true,"spread":false}]],"params":["album"],"component":"src/pages/gallery/[album].astro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/gallery","isIndex":true,"type":"page","pattern":"^\\/gallery\\/$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery/index.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/markdown-extend.CV7FOiE_.css"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/guestbook","isIndex":false,"type":"page","pattern":"^\\/guestbook\\/$","segments":[[{"content":"guestbook","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/guestbook.astro","pathname":"/guestbook","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":".responsive-pagination.svelte-ewpvbp{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.mobile-pagination.svelte-ewpvbp{display:flex;padding:0 1rem}.desktop-pagination.svelte-ewpvbp{display:none}@media(min-width:1024px){.mobile-pagination.svelte-ewpvbp{display:none}.desktop-pagination.svelte-ewpvbp{display:flex}}@media(max-width:640px){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}@media(max-width:480px){.mobile-pagination.svelte-ewpvbp{padding:0 .25rem}}.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:all .2s ease-in-out}@media(prefers-contrast:high){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){border:1px solid currentColor}}@media(prefers-reduced-motion:reduce){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:none}}@media(hover:none)and (pointer:coarse){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:44px;min-width:44px}.mobile-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:40px;min-width:40px}}@media(max-width:1024px)and (orientation:landscape){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/myanimelist","isIndex":false,"type":"page","pattern":"^\\/myanimelist\\/$","segments":[[{"content":"myanimelist","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/myanimelist.astro","pathname":"/myanimelist","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[],"routeData":{"route":"/og/[...slug]","isIndex":false,"type":"endpoint","pattern":"^\\/og(?:\\/(.*?))?\\/$","segments":[[{"content":"og","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/og/[...slug].ts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/markdown-extend.CV7FOiE_.css"},{"type":"external","src":"_astro/_..DIBwrrWL.css"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"inline","content":".cover-image-container[data-astro-cid-q3lybnyu]{min-height:150px}@media(width>=768px){.cover-image-container[data-astro-cid-q3lybnyu]{min-height:0}}.loading-spinner[data-astro-cid-q3lybnyu]{transition:opacity .3s ease-out}.cover-image-container[data-astro-cid-q3lybnyu][data-loading=false] .loading-spinner[data-astro-cid-q3lybnyu]{opacity:0;pointer-events:none}.cover-image-container[data-astro-cid-q3lybnyu][data-error=true] .loading-spinner[data-astro-cid-q3lybnyu]{display:none}.cover-image-container[data-astro-cid-q3lybnyu][data-error=true] .error-message[data-astro-cid-q3lybnyu]{display:flex}.cover-image-container[data-astro-cid-q3lybnyu][data-error=true] img[data-astro-cid-q3lybnyu][data-remote=true]{display:none}.spinner[data-astro-cid-q3lybnyu]{width:40px;height:40px;border:3px solid oklch(.9 .05 var(--hue));border-top-color:oklch(.6 .15 var(--hue));border-radius:50%;animation:.8s linear infinite spin}@keyframes spin{to{transform:rotate(360deg)}}.cover-image-container[data-astro-cid-q3lybnyu] img[data-astro-cid-q3lybnyu]{width:100%;object-fit:cover;height:100%!important}.cover-image-container[data-astro-cid-q3lybnyu][data-natural-height]{min-height:0}.cover-image-container[data-astro-cid-q3lybnyu][data-natural-height] img[data-astro-cid-q3lybnyu]{height:auto!important}.post-meta-cover[data-astro-cid-g5no53fi] .text-50[data-astro-cid-g5no53fi],.post-meta-cover[data-astro-cid-g5no53fi] .meta-divider[data-astro-cid-g5no53fi]{color:#ffffffe6!important}.post-meta-cover[data-astro-cid-g5no53fi] .meta-icon[data-astro-cid-g5no53fi]{width:1.125rem;height:1.125rem;margin-right:.375rem;background:none;color:#ffffffe6}.post-meta-cover[data-astro-cid-g5no53fi] .text-sm[data-astro-cid-g5no53fi]{font-size:.75rem;line-height:1rem}.post-meta-cover[data-astro-cid-g5no53fi] .text-xl[data-astro-cid-g5no53fi]{font-size:1rem}.post-meta-cover[data-astro-cid-g5no53fi] .post-meta-tags[data-astro-cid-g5no53fi]{min-width:0}.post-meta-cover[data-astro-cid-g5no53fi] .post-meta-tags[data-astro-cid-g5no53fi] .flex-nowrap[data-astro-cid-g5no53fi]{flex-wrap:wrap!important}.post-meta-cover[data-astro-cid-g5no53fi] a[data-astro-cid-g5no53fi]:hover{color:#fff!important}.post-meta-cover[data-astro-cid-g5no53fi] a[data-astro-cid-g5no53fi]:hover:before{background-color:#ffffff2e!important}.post-meta-cover[data-astro-cid-g5no53fi] a[data-astro-cid-g5no53fi]:active:before{background-color:#ffffff42!important}@media(width<=767px){.post-meta-cover[data-astro-cid-g5no53fi] .post-meta-tags[data-astro-cid-g5no53fi]{width:100%}}\n"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/posts/[...slug]","isIndex":false,"type":"page","pattern":"^\\/posts(?:\\/(.*?))?\\/$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/posts/[...slug].astro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/rss","isIndex":false,"type":"page","pattern":"^\\/rss\\/$","segments":[[{"content":"rss","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.astro","pathname":"/rss","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":"mark{background:transparent;color:var(--primary);font-weight:600;padding:0 .1em}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":".series-acc-header[data-astro-cid-patfotal][aria-expanded=true] .acc-arrow[data-astro-cid-patfotal]{transform:rotate(180deg)}.series-acc-content[data-astro-cid-patfotal]{opacity:0}.series-acc-content[data-astro-cid-patfotal][data-open=true]{opacity:1}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/series","isIndex":true,"type":"page","pattern":"^\\/series\\/$","segments":[[{"content":"series","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/series/index.astro","pathname":"/series","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":"body.wallpaper-transparent .usage-info-box{background-color:rgba(var(--primary-rgb, 70, 130, 180),.15)!important}:root.dark body.wallpaper-transparent .usage-info-box{background-color:oklch(from var(--primary) l c h / .15)!important}.sponsor-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.75rem}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/sponsor","isIndex":false,"type":"page","pattern":"^\\/sponsor\\/$","segments":[[{"content":"sponsor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sponsor.astro","pathname":"/sponsor","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"inline","content":".responsive-pagination.svelte-ewpvbp{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.mobile-pagination.svelte-ewpvbp{display:flex;padding:0 1rem}.desktop-pagination.svelte-ewpvbp{display:none}@media(min-width:1024px){.mobile-pagination.svelte-ewpvbp{display:none}.desktop-pagination.svelte-ewpvbp{display:flex}}@media(max-width:640px){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}@media(max-width:480px){.mobile-pagination.svelte-ewpvbp{padding:0 .25rem}}.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:all .2s ease-in-out}@media(prefers-contrast:high){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){border:1px solid currentColor}}@media(prefers-reduced-motion:reduce){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){transition:none}}@media(hover:none)and (pointer:coarse){.responsive-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:44px;min-width:44px}.mobile-pagination.svelte-ewpvbp button:where(.svelte-ewpvbp){min-height:40px;min-width:40px}}@media(max-width:1024px)and (orientation:landscape){.mobile-pagination.svelte-ewpvbp{padding:0 .5rem}}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/vndb","isIndex":false,"type":"page","pattern":"^\\/vndb\\/$","segments":[[{"content":"vndb","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vndb.astro","pathname":"/vndb","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.BXMBsE1h.js"}],"styles":[{"type":"external","src":"_astro/_..BulBwWNp.css"},{"type":"inline","content":".cover-image-container[data-astro-cid-q3lybnyu]{min-height:150px}@media(width>=768px){.cover-image-container[data-astro-cid-q3lybnyu]{min-height:0}}.loading-spinner[data-astro-cid-q3lybnyu]{transition:opacity .3s ease-out}.cover-image-container[data-astro-cid-q3lybnyu][data-loading=false] .loading-spinner[data-astro-cid-q3lybnyu]{opacity:0;pointer-events:none}.cover-image-container[data-astro-cid-q3lybnyu][data-error=true] .loading-spinner[data-astro-cid-q3lybnyu]{display:none}.cover-image-container[data-astro-cid-q3lybnyu][data-error=true] .error-message[data-astro-cid-q3lybnyu]{display:flex}.cover-image-container[data-astro-cid-q3lybnyu][data-error=true] img[data-astro-cid-q3lybnyu][data-remote=true]{display:none}.spinner[data-astro-cid-q3lybnyu]{width:40px;height:40px;border:3px solid oklch(.9 .05 var(--hue));border-top-color:oklch(.6 .15 var(--hue));border-radius:50%;animation:.8s linear infinite spin}@keyframes spin{to{transform:rotate(360deg)}}.cover-image-container[data-astro-cid-q3lybnyu] img[data-astro-cid-q3lybnyu]{width:100%;object-fit:cover;height:100%!important}.cover-image-container[data-astro-cid-q3lybnyu][data-natural-height]{min-height:0}.cover-image-container[data-astro-cid-q3lybnyu][data-natural-height] img[data-astro-cid-q3lybnyu]{height:auto!important}.post-meta-cover[data-astro-cid-g5no53fi] .text-50[data-astro-cid-g5no53fi],.post-meta-cover[data-astro-cid-g5no53fi] .meta-divider[data-astro-cid-g5no53fi]{color:#ffffffe6!important}.post-meta-cover[data-astro-cid-g5no53fi] .meta-icon[data-astro-cid-g5no53fi]{width:1.125rem;height:1.125rem;margin-right:.375rem;background:none;color:#ffffffe6}.post-meta-cover[data-astro-cid-g5no53fi] .text-sm[data-astro-cid-g5no53fi]{font-size:.75rem;line-height:1rem}.post-meta-cover[data-astro-cid-g5no53fi] .text-xl[data-astro-cid-g5no53fi]{font-size:1rem}.post-meta-cover[data-astro-cid-g5no53fi] .post-meta-tags[data-astro-cid-g5no53fi]{min-width:0}.post-meta-cover[data-astro-cid-g5no53fi] .post-meta-tags[data-astro-cid-g5no53fi] .flex-nowrap[data-astro-cid-g5no53fi]{flex-wrap:wrap!important}.post-meta-cover[data-astro-cid-g5no53fi] a[data-astro-cid-g5no53fi]:hover{color:#fff!important}.post-meta-cover[data-astro-cid-g5no53fi] a[data-astro-cid-g5no53fi]:hover:before{background-color:#ffffff2e!important}.post-meta-cover[data-astro-cid-g5no53fi] a[data-astro-cid-g5no53fi]:active:before{background-color:#ffffff42!important}@media(width<=767px){.post-meta-cover[data-astro-cid-g5no53fi] .post-meta-tags[data-astro-cid-g5no53fi]{width:100%}}\n"},{"type":"external","src":"_astro/MainGridLayout.CEIZb370.css"},{"type":"external","src":"_astro/Layout.D2VFyD7i.css"}],"routeData":{"route":"/[...page]","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/$","segments":[[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/[...page].astro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}}],"serverLike":false,"middlewareMode":"classic","site":"https://fengqiyunxing.github.io","base":"/","trailingSlash":"always","compressHTML":"jsx","componentMetadata":[["D:/求职/存储/fengqiyunxing.github.io/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/[...page].astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/archive.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/bangumi.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/bilibili.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/booknav.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/categories/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/dynamic/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/friends.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/gallery/[album].astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/gallery/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/guestbook.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/myanimelist.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/posts/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/rss.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/search.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/series/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/sponsor.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/vndb.astro",{"propagation":"in-tree","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/dynamic/comments.astro",{"propagation":"none","containsHead":true}],["D:/求职/存储/fengqiyunxing.github.io/src/content/spec/friends.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["D:\\求职\\存储\\fengqiyunxing.github.io\\.astro\\content-modules.mjs",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/dist/content/runtime.js",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/components/layout/PostCard.astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/components/layout/PostPage.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:pages",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:manifest",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/dist/core/manifest/ambient.js",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/dist/core/fetch/default-handler.js",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/dist/core/app/base.js",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/dist/core/app/app.js",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/dist/core/app/entrypoints/index.js",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:routes",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/dist/core/build/app.js",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/dist/entrypoints/prerender.js",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/api/dynamic.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/api/dynamic.json@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/friends@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/guestbook@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/og/[...slug].ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/og/[...slug]@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/posts/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/utils/content-utils.ts",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/components/controls/ArchivePanel.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/archive@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/components/layout/CategoryBar.astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/layouts/MainGridLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/bangumi@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/bilibili@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/booknav@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/categories/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/dynamic/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/gallery/[album]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/gallery/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/myanimelist@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/rss@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/search@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/series/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/sponsor@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/vndb@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/components/widget/Categories.astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/components/layout/SideBar.astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/components/layout/SidebarColumn.astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/components/widget/SiteStats.astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/components/widget/Tags.astro",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/pages/api/allPostMeta.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/api/allPostMeta.json@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/求职/存储/fengqiyunxing.github.io/src/content/posts/mdx-example.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"astro/entrypoints/prerender":"prerender-entry.BMpnp_8e.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/1.avif":"chunks/1_Djdv2BXp.mjs","\u0000virtual:astro:page:src/pages/404@_@astro":"chunks/404_CQAme5R5.mjs","\u0000virtual:astro:page:src/pages/[...page]@_@astro":"chunks/_.._CH-aumIi.mjs","\u0000virtual:astro:page:src/pages/posts/[...slug]@_@astro":"chunks/_.._CKdK2Hsp.mjs","\u0000virtual:astro:page:src/pages/og/[...slug]@_@ts":"chunks/_.._DfVw45J5.mjs","\u0000virtual:astro:page:src/pages/gallery/[album]@_@astro":"chunks/_album__LlQHFqKd.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content__1LTMRpk.mjs","\u0000noop-middleware":"chunks/_noop-middleware_CQ50ikAJ.mjs","\u0000virtual:astro:get-image":"chunks/_virtual_astro_get-image_CmiNxwMU.mjs","\u0000virtual:astro:server-island-manifest":"chunks/_virtual_astro_server-island-manifest_C1Q2srgE.mjs","\u0000virtual:astro:session-driver":"chunks/_virtual_astro_session-driver_C-PI1Pas.mjs","\u0000virtual:astro:page:src/pages/about@_@astro":"chunks/about_gATApsps.mjs","\u0000virtual:astro:page:src/pages/api/allPostMeta.json@_@ts":"chunks/allPostMeta_B0qJojgH.mjs","\u0000virtual:astro:page:src/pages/archive@_@astro":"chunks/archive_VYt9phNk.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/avatar-cyber.png":"chunks/avatar-cyber_DiDx7kwC.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/avatar.avif":"chunks/avatar_D39OPFV0.mjs","\u0000virtual:astro:page:src/pages/bangumi@_@astro":"chunks/bangumi_CibrcJMb.mjs","\u0000virtual:astro:page:src/pages/bilibili@_@astro":"chunks/bilibili_ChB9K8WS.mjs","\u0000virtual:astro:page:src/pages/booknav@_@astro":"chunks/booknav_s0fbuNpS.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/both-grid.avif":"chunks/both-grid_AnmpDUev.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/both-list.avif":"chunks/both-list_BREf4zZh.mjs","\u0000virtual:astro:page:src/pages/dynamic/comments@_@astro":"chunks/comments_CoRxc59K.mjs","D:\\求职\\存储\\fengqiyunxing.github.io\\.astro\\content-assets.mjs":"chunks/content-assets_CGKLlH-c.mjs","D:\\求职\\存储\\fengqiyunxing.github.io\\.astro\\content-modules.mjs":"chunks/content-modules_BX1Wvzkw.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/guide/cover.avif":"chunks/cover_Bb3jgh4e.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/logo/cyber-dark.png":"chunks/cyber-dark_CHVe1rGW.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/logo/cyber-light.png":"chunks/cyber-light_gvImXQ-5.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/MobileWallpaper/cyber-neon-m.avif":"chunks/cyber-neon-m_B825-W0C.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/DesktopWallpaper/cyber-neon.avif":"chunks/cyber-neon_IveW0Izd.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/MobileWallpaper/cyber-skyline-m.avif":"chunks/cyber-skyline-m_CdvuxWOe.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/DesktopWallpaper/cyber-skyline.avif":"chunks/cyber-skyline_CYQxUO-c.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/MobileWallpaper/cyber-trails-m.avif":"chunks/cyber-trails-m_CjXO43Tz.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/DesktopWallpaper/cyber-trails.avif":"chunks/cyber-trails_DPHKKjJq.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/DesktopWallpaper/d1.avif":"chunks/d1_CH_z7P5c.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/DesktopWallpaper/d2.avif":"chunks/d2_DnC2L5-X.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/DesktopWallpaper/d3.avif":"chunks/d3_gf0P6Q1e.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/DesktopWallpaper/d4.avif":"chunks/d4_BH2FuCg8.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/DesktopWallpaper/d5.avif":"chunks/d5_CKco2dmT.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/DesktopWallpaper/d6.avif":"chunks/d6_BRgwE_A4.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/docusaurus.avif":"chunks/docusaurus_DXlMABwp.mjs","\u0000virtual:astro:page:src/pages/api/dynamic.json@_@ts":"chunks/dynamic_tC25jZzx.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/firefly1.avif":"chunks/firefly1_Bd98qkNU.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/firefly2.avif":"chunks/firefly2_BB5ASKFB.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/firefly3.avif":"chunks/firefly3_CIGrNrC2.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/spec/friends.mdx?astroPropagatedAssets":"chunks/friends_BAIctN1F.mjs","\u0000virtual:astro:page:src/pages/friends@_@astro":"chunks/friends_BO4PLEYg.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/spec/friends.mdx":"chunks/friends_DejeNNb_.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/github.avif":"chunks/github_CBto4ITG.mjs","\u0000virtual:astro:page:src/pages/guestbook@_@astro":"chunks/guestbook_D3Q0CkZZ.mjs","\u0000virtual:astro:page:src/pages/gallery/index@_@astro":"chunks/index_BNCGo9r3.mjs","\u0000virtual:astro:page:src/pages/categories/index@_@astro":"chunks/index_By1e9Ix-.mjs","\u0000virtual:astro:page:src/pages/tags/index@_@astro":"chunks/index_CB3UMgAP.mjs","\u0000virtual:astro:page:src/pages/dynamic/index@_@astro":"chunks/index_CqFjogs-.mjs","\u0000virtual:astro:page:src/pages/series/index@_@astro":"chunks/index_r3bIkz8j.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/left-grid3.avif":"chunks/left-grid3_Bnru7Ixr.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/left-list.avif":"chunks/left-list_dNOjnXNu.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/MobileWallpaper/m1.avif":"chunks/m1_Ii3ZDsX2.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/MobileWallpaper/m2.avif":"chunks/m2_DFv9G9D1.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/MobileWallpaper/m3.avif":"chunks/m3_D5Q_wsN6.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/MobileWallpaper/m4.avif":"chunks/m4_Dqff63Fj.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/MobileWallpaper/m5.avif":"chunks/m5_DoHnDYjZ.mjs","D:/求职/存储/fengqiyunxing.github.io/src/assets/images/MobileWallpaper/m6.avif":"chunks/m6_COFYmjok.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/masonry.avif":"chunks/masonry_CMZobU5V.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/mdx-example.mdx?astroPropagatedAssets":"chunks/mdx-example_CVxjWd5t.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/mdx-example.mdx":"chunks/mdx-example_DZHNfyNm.mjs","\u0000virtual:astro:page:src/pages/myanimelist@_@astro":"chunks/myanimelist_DbDOne_8.mjs","\u0000virtual:astro:actions/noop-entrypoint":"chunks/noop-entrypoint_Z3zFhrGC.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/obsidian.avif":"chunks/obsidian_DZx2aQkD.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/right-grid2.avif":"chunks/right-grid2_B-D54lQq.mjs","\u0000virtual:astro:page:src/pages/robots.txt@_@ts":"chunks/robots_DFoaA-JV.mjs","\u0000virtual:astro:page:src/pages/rss.xml@_@ts":"chunks/rss_Cqk5TF-O.mjs","\u0000virtual:astro:page:src/pages/rss@_@astro":"chunks/rss_oSCdkTTQ.mjs","\u0000virtual:astro:page:src/pages/search@_@astro":"chunks/search_BPQDMK22.mjs","D:/求职/存储/fengqiyunxing.github.io/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DiAn-bUp.mjs","\u0000virtual:astro:page:src/pages/sponsor@_@astro":"chunks/sponsor_CovsOeKZ.mjs","D:/求职/存储/fengqiyunxing.github.io/src/content/posts/images/vitepress.avif":"chunks/vitepress_CMq4h_id.mjs","\u0000virtual:astro:page:src/pages/vndb@_@astro":"chunks/vndb_CWY4KXHv.mjs","@components/pages/AdvancedSearch.svelte":"_astro/AdvancedSearch.CV4mcsyV.js","@/components/pages/bangumi/BangumiGrid.svelte":"_astro/BangumiGrid.Dx3U8y1D.js","@/components/pages/bilibili/BilibiliGrid.svelte":"_astro/BilibiliGrid.B6c2Q8BC.js","D:/求职/存储/fengqiyunxing.github.io/src/components/layout/CategoryBar.astro?astro&type=script&index=0&lang.ts":"_astro/CategoryBar.astro_astro_type_script_index_0_lang.CE6LZULu.js","D:/求职/存储/fengqiyunxing.github.io/src/components/features/CodeGroupManager.astro?astro&type=script&index=0&lang.ts":"_astro/CodeGroupManager.astro_astro_type_script_index_0_lang.hvy0GRuC.js","D:/求职/存储/fengqiyunxing.github.io/src/components/common/CoverImage.astro?astro&type=script&index=0&lang.ts":"_astro/CoverImage.astro_astro_type_script_index_0_lang.q3EeJWNI.js","@/components/controls/DisplaySettingsIntegrated.svelte":"_astro/DisplaySettingsIntegrated.BDx9Mec0.js","D:/求职/存储/fengqiyunxing.github.io/src/components/layout/DropdownMenu.astro?astro&type=script&index=0&lang.ts":"_astro/DropdownMenu.astro_astro_type_script_index_0_lang.BmHLbx10.js","@/components/pages/dynamic/DynamicFeed.svelte":"_astro/DynamicFeed.Bo9u_FEL.js","@/components/widget/DynamicSidebar.svelte":"_astro/DynamicSidebar.uPRFArXS.js","D:/求职/存储/fengqiyunxing.github.io/src/components/features/FancyboxManager.astro?astro&type=script&index=0&lang.ts":"_astro/FancyboxManager.astro_astro_type_script_index_0_lang.BeliNf0d.js","D:/求职/存储/fengqiyunxing.github.io/src/components/controls/FloatingTOC.astro?astro&type=script&index=0&lang.ts":"_astro/FloatingTOC.astro_astro_type_script_index_0_lang.D5hNXlm-.js","D:/求职/存储/fengqiyunxing.github.io/src/components/features/FontSetup.astro?astro&type=script&index=0&lang.ts":"_astro/FontSetup.astro_astro_type_script_index_0_lang.C0z3U8_z.js","D:/求职/存储/fengqiyunxing.github.io/src/components/features/GithubCardManager.astro?astro&type=script&index=0&lang.ts":"_astro/GithubCardManager.astro_astro_type_script_index_0_lang.XvrB7021.js","D:/求职/存储/fengqiyunxing.github.io/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.Czn6_mnH.js","@/components/controls/LightDarkSwitch.svelte":"_astro/LightDarkSwitch.CD3RybnT.js","D:/求职/存储/fengqiyunxing.github.io/src/components/features/Live2DWidget.astro?astro&type=script&index=0&lang.ts":"_astro/Live2DWidget.astro_astro_type_script_index_0_lang.CjF8Oqa7.js","@/components/pages/mal/MalGrid.svelte":"_astro/MalGrid.Ctz2SYrH.js","D:/求职/存储/fengqiyunxing.github.io/src/components/layout/NavMenuPanel.astro?astro&type=script&index=0&lang.ts":"_astro/NavMenuPanel.astro_astro_type_script_index_0_lang.DPjCNxNv.js","D:/求职/存储/fengqiyunxing.github.io/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.GhQbs6LR.js","@/components/common/PageJump.svelte":"_astro/PageJump.COPNaTRd.js","D:/求职/存储/fengqiyunxing.github.io/src/components/common/PioMessageBox.astro?astro&type=script&index=0&lang.ts":"_astro/PioMessageBox.astro_astro_type_script_index_0_lang.TQmmDYg5.js","D:/求职/存储/fengqiyunxing.github.io/src/components/layout/PostPage.astro?astro&type=script&index=0&lang.ts":"_astro/PostPage.astro_astro_type_script_index_0_lang.DFO_5lkI.js","D:/求职/存储/fengqiyunxing.github.io/src/components/features/SakuraEffect.astro?astro&type=script&index=0&lang.ts":"_astro/SakuraEffect.astro_astro_type_script_index_0_lang.Bpe4OVuT.js","@/components/controls/Search.svelte":"_astro/Search._zD_HNFU.js","@/components/misc/SharePoster.svelte":"_astro/SharePoster.KvEn_Np4.js","D:/求职/存储/fengqiyunxing.github.io/src/components/widget/SidebarTOC.astro?astro&type=script&index=0&lang.ts":"_astro/SidebarTOC.astro_astro_type_script_index_0_lang.BNMUQGj1.js","D:/求职/存储/fengqiyunxing.github.io/src/components/widget/SiteInfo.astro?astro&type=script&index=0&lang.ts":"_astro/SiteInfo.astro_astro_type_script_index_0_lang.DE0tp96T.js","D:/求职/存储/fengqiyunxing.github.io/src/components/features/TypewriterText.astro?astro&type=script&index=0&lang.ts":"_astro/TypewriterText.astro_astro_type_script_index_0_lang.48s5hllK.js","@/components/pages/vndb/VndbGrid.svelte":"_astro/VndbGrid.St0c3df3.js","D:/求职/存储/fengqiyunxing.github.io/src/components/features/WavesEffect.astro?astro&type=script&index=0&lang.ts":"_astro/WavesEffect.astro_astro_type_script_index_0_lang.DwU8s_Lh.js","D:/求职/存储/fengqiyunxing.github.io/src/components/common/WidgetLayout.astro?astro&type=script&index=0&lang.ts":"_astro/WidgetLayout.astro_astro_type_script_index_0_lang._RcciAKu.js","D:/求职/存储/fengqiyunxing.github.io/src/pages/[...page].astro?astro&type=script&index=0&lang.ts":"_astro/_...page_.astro_astro_type_script_index_0_lang.DMKzQkFo.js","D:/求职/存储/fengqiyunxing.github.io/src/pages/posts/[...slug].astro?astro&type=script&index=0&lang.ts":"_astro/_...slug_.astro_astro_type_script_index_0_lang.BvR6r-On.js","@astrojs/svelte/client.js":"_astro/client.svelte.B49C2krs.js","D:/求职/存储/fengqiyunxing.github.io/src/pages/dynamic/comments.astro?astro&type=script&index=0&lang.ts":"_astro/comments.astro_astro_type_script_index_0_lang.CffrSACG.js","@components/firefly-mdx":"_astro/firefly-mdx.u9dm5F_G.js","astro:scripts/page.js":"_astro/page.BXMBsE1h.js","D:/求职/存储/fengqiyunxing.github.io/src/pages/rss.astro?astro&type=script&index=0&lang.ts":"_astro/rss.astro_astro_type_script_index_0_lang.B8XizQsE.js","D:/求职/存储/fengqiyunxing.github.io/node_modules/@swup/astro/dist/client/Swup.js":"_astro/Swup.ByGaaSd8.js","D:/求职/存储/fengqiyunxing.github.io/node_modules/@swup/astro/dist/client/SwupA11yPlugin.js":"_astro/SwupA11yPlugin.BG-jCd0-.js","D:/求职/存储/fengqiyunxing.github.io/node_modules/@swup/astro/dist/client/SwupHeadPlugin.js":"_astro/SwupHeadPlugin.CJV9x5S0.js","D:/求职/存储/fengqiyunxing.github.io/node_modules/@swup/astro/dist/client/SwupPreloadPlugin.js":"_astro/SwupPreloadPlugin.CTgY9PYx.js","D:/求职/存储/fengqiyunxing.github.io/node_modules/@swup/astro/dist/client/SwupScriptsPlugin.js":"_astro/SwupScriptsPlugin.KOkp8JHL.js","D:/求职/存储/fengqiyunxing.github.io/node_modules/qrcode/lib/browser.js":"_astro/browser.OQmkWRI_.js","D:/求职/存储/fengqiyunxing.github.io/src/styles/fancybox-custom.css?url":"_astro/fancybox-custom.D6Mls718.js","D:/求职/存储/fengqiyunxing.github.io/node_modules/@fancyapps/ui/dist/fancybox/fancybox.css?url":"_astro/fancybox.CHkUVtgl.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/求职/存储/fengqiyunxing.github.io/src/components/features/CodeGroupManager.astro?astro&type=script&index=0&lang.ts","var g=\".rehype-code-group\",i=\".rcg-tab\",b=\".rcg-block\",l=e=>Array.from(e.querySelectorAll(`:scope > .rcg-tab-container > ${i}`)),h=e=>Array.from(e.querySelectorAll(`:scope > ${b}`));function u(e,t,n=!1){const r=l(e),d=h(e);if(r.length===0)return;const a=Math.max(0,Math.min(t,r.length-1));r.forEach((c,s)=>{const o=s===a;c.classList.toggle(\"active\",o),c.setAttribute(\"aria-selected\",o?\"true\":\"false\")}),d.forEach((c,s)=>{const o=s===a;c.classList.toggle(\"active\",o),o?c.removeAttribute(\"hidden\"):c.setAttribute(\"hidden\",\"true\")}),n&&r[a].focus({preventScroll:!0})}function f(e){if(!(e instanceof Element))return null;const t=e.closest(i),n=t?.closest(g);if(!t||!n)return null;const r=l(n).indexOf(t);return r===-1?null:{group:n,index:r}}document.addEventListener(\"click\",e=>{const t=f(e.target);t&&u(t.group,t.index)});document.addEventListener(\"keydown\",e=>{if(e.altKey||e.ctrlKey||e.metaKey)return;const t=f(e.target);if(!t)return;const n=l(t.group).length;let r;switch(e.key){case\"ArrowRight\":r=(t.index+1)%n;break;case\"ArrowLeft\":r=(t.index-1+n)%n;break;case\"Home\":r=0;break;case\"End\":r=n-1;break;default:return}e.preventDefault(),u(t.group,r,!0)});"],["D:/求职/存储/fengqiyunxing.github.io/src/components/common/CoverImage.astro?astro&type=script&index=0&lang.ts","function l(){document.querySelectorAll(\".cover-image-container\").forEach(t=>{if(t.hasAttribute(\"data-initialized\"))return;t.setAttribute(\"data-initialized\",\"true\");const e=t.querySelector(\"img[data-cover-img]\");if(!e)return;let r=[],a=1;const s=t.getAttribute(\"data-api-urls\");if(s)try{r=JSON.parse(s)}catch{}const i=()=>{t.setAttribute(\"data-loading\",\"false\"),e.style.opacity=\"1\";const o=t.querySelector(\".lqip-placeholder\");o&&o.classList.add(\"loaded\")},n=()=>{t.setAttribute(\"data-loading\",\"false\"),t.setAttribute(\"data-error\",\"true\")},d=()=>{e.dataset.remote===\"true\"&&(a<r.length?(e.addEventListener(\"load\",i,{once:!0}),e.addEventListener(\"error\",d,{once:!0}),e.src=r[a],a++):n())};e.complete?e.naturalWidth>0?i():d():(e.addEventListener(\"load\",i,{once:!0}),e.addEventListener(\"error\",d,{once:!0}))})}window.__coverImageInit||(window.__coverImageInit=!0,l(),document.addEventListener(\"astro:page-load\",l));"],["D:/求职/存储/fengqiyunxing.github.io/src/components/layout/DropdownMenu.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const c=document.querySelectorAll(\"[data-dropdown]\");c.forEach(e=>{const t=e.querySelector(\"[data-dropdown-trigger]\"),o=e.querySelector(\"[data-dropdown-menu]\"),n=e.querySelectorAll(\".dropdown-item\");!t||!o||(t.addEventListener(\"keydown\",function(r){r.key===\"Enter\"||r.key===\" \"?(r.preventDefault(),d(e,t,o)):r.key===\"ArrowDown\"?(r.preventDefault(),s(e,t,o),n.length>0&&n[0].focus()):r.key===\"Escape\"&&u(e,t,o)}),n.forEach((r,f)=>{r.addEventListener(\"keydown\",function(a){if(a.key===\"ArrowDown\"){a.preventDefault();const i=(f+1)%n.length;n[i].focus()}else if(a.key===\"ArrowUp\"){a.preventDefault();const i=(f-1+n.length)%n.length;n[i].focus()}else a.key===\"Escape\"&&(u(e,t,o),t.focus())})}))}),document.addEventListener(\"click\",function(e){c.forEach(t=>{if(!t.contains(e.target)){const o=t.querySelector(\"[data-dropdown-trigger]\"),n=t.querySelector(\"[data-dropdown-menu]\");o&&n&&u(t,o,n)}})})});function d(c,e,t){e.getAttribute(\"aria-expanded\")===\"true\"?u(c,e,t):s(c,e,t)}function s(c,e,t){e.setAttribute(\"aria-expanded\",\"true\")}function u(c,e,t){e.setAttribute(\"aria-expanded\",\"false\")}"],["D:/求职/存储/fengqiyunxing.github.io/src/components/features/FontSetup.astro?astro&type=script&index=0&lang.ts","document.fonts&&typeof document.fonts.ready<\"u\"&&document.fonts.ready.then(()=>{document.dispatchEvent(new CustomEvent(\"fontsLoaded\"))}).catch(n=>{console.warn(\"Font loading failed:\",n)});"],["D:/求职/存储/fengqiyunxing.github.io/src/components/features/GithubCardManager.astro?astro&type=script&index=0&lang.ts","function u(t){return Intl.NumberFormat(\"en-us\",{notation:\"compact\",maximumFractionDigits:1}).format(t).replaceAll(\" \",\"\")}var m=\"github-card:\",h=864e5,c=new Map,l=new Set;function g(t){return m+t.toLowerCase()}function p(t){try{const e=localStorage.getItem(g(t));if(!e)return null;const r=JSON.parse(e),n=r.data;return!n||typeof r.fetchedAt!=\"number\"||typeof n.stargazers_count!=\"number\"||typeof n.forks!=\"number\"||Date.now()-r.fetchedAt>=h?null:n}catch{return null}}function y(t,e){try{localStorage.setItem(g(t),JSON.stringify({data:e,fetchedAt:Date.now()}))}catch{}}async function w(t){const[e,r]=t.split(\"/\"),n=`https://api.github.com/repos/${encodeURIComponent(e)}/${encodeURIComponent(r)}`,o=await fetch(n,{referrerPolicy:\"no-referrer\",signal:AbortSignal.timeout(5e3)});if(!o.ok)throw new Error(`GitHub API returned ${o.status}`);return await o.json()}function f(t,e){const r=(o,a)=>{const s=t.querySelector(o);s&&(s.textContent=a)};r(\".gc-stars\",u(e.stargazers_count)),r(\".gc-forks\",u(e.forks)),r(\".gc-description\",e.description?.replace(/:[a-zA-Z0-9_]+:/g,\"\")||\"Description not set\"),r(\".gc-language\",e.language??\"Unavailable\"),r(\".gc-license\",e.license?.spdx_id||\"no-license\");const n=t.querySelector(\".gc-avatar\");if(n&&e.owner?.avatar_url){const o=e.owner.avatar_url;n.style.backgroundImage=`url(\"${o}${o.includes(\"?\")?\"&\":\"?\"}s=32\")`,n.style.backgroundColor=\"transparent\"}t.classList.remove(\"fetch-waiting\",\"fetch-error\")}function C(t,e){const r=p(e);if(r){f(t,r);return}const n=e.toLowerCase();if(l.has(n))return;let o=c.get(n);o||(o=w(e).then(a=>(y(e,a),a)).catch(a=>(console.warn(\"[GITHUB-CARD] Failed to load\",e,a),null)).finally(()=>{c.delete(n),l.add(n)}),c.set(n,o)),o.then(a=>{a?f(t,a):t.classList.add(\"fetch-error\")})}function i(){document.querySelectorAll(\".card-github[repo]\").forEach(t=>{const e=t.getAttribute(\"repo\");e&&C(t,e)})}function d(){i(),document.addEventListener(\"swup:content:replace\",()=>{requestAnimationFrame(i)}),document.addEventListener(\"password:decrypted\",()=>{requestAnimationFrame(i)})}document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",d):d();"],["D:/求职/存储/fengqiyunxing.github.io/src/components/layout/NavMenuPanel.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.querySelectorAll(\"[data-mobile-dropdown]\");t.forEach(e=>{const a=e.querySelector(\"[data-mobile-dropdown-trigger]\"),n=e.querySelector(\"[data-mobile-submenu]\");!a||!n||a.addEventListener(\"click\",o=>{o.preventDefault();const l=e.getAttribute(\"data-expanded\")===\"true\";t.forEach(i=>{i!==e&&r(i,!1)}),r(e,!l)})}),c()});document.addEventListener(\"astro:page-load\",c);document.addEventListener(\"swup:contentReplaced\",c);document.addEventListener(\"click\",t=>{const e=t.target;e instanceof Element&&e.closest(\".mobile-menu-scrim, .mobile-menu-close\")&&document.getElementById(\"nav-menu-panel\")?.classList.add(\"float-panel-closed\")});function c(){const t=location.pathname;document.querySelectorAll(\".mobile-menu-item[data-nav-href]\").forEach(e=>{const a=e.getAttribute(\"data-nav-href\");let n=!1;if(a)try{n=new URL(a,location.href).pathname===t}catch{n=!1}if(e.setAttribute(\"data-active\",n?\"true\":\"false\"),n){const o=e.closest(\"[data-mobile-dropdown]\");o&&r(o,!0)}})}function r(t,e){t.setAttribute(\"data-expanded\",e.toString()),t.querySelector(\"[data-mobile-dropdown-trigger]\")?.setAttribute(\"aria-expanded\",e.toString());const a=t.querySelector(\"[data-mobile-submenu]\");a instanceof HTMLElement&&(a.inert=!e,a.setAttribute(\"aria-hidden\",(!e).toString()))}"],["D:/求职/存储/fengqiyunxing.github.io/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts","function g(){let l=document.getElementById(\"display-settings-switch\");l&&(l.onclick=function(){let e=document.getElementById(\"display-setting\");e&&e.classList.toggle(\"float-panel-closed\")});let o=document.getElementById(\"nav-menu-switch\");o&&(o.onclick=function(){let e=document.getElementById(\"nav-menu-panel\");e&&e.classList.toggle(\"float-panel-closed\")});let c=document.getElementById(\"music-player-switch\");c&&(c.onclick=function(){let e=document.getElementById(\"music-nav-panel\");e&&e.classList.toggle(\"float-panel-closed\")});let t=document.getElementById(\"bg-player-toggle\");if(t){let e=function(i){var n=t.querySelector(\".bg-player-icon-play\"),a=t.querySelector(\".bg-player-icon-pause\");n&&a&&(n.classList.toggle(\"hidden\",i),a.classList.toggle(\"hidden\",!i));var s=t.getAttribute(\"data-i18n-play\")??\"\",r=t.getAttribute(\"data-i18n-pause\")??\"\",f=i?r:s;t.setAttribute(\"title\",f),t.setAttribute(\"aria-label\",f)},d=function(){e(document.documentElement.hasAttribute(\"data-bg-video-playing\"))};var w=e,p=d;t.onclick=function(){window.dispatchEvent(new CustomEvent(\"bg-player-toggle\"))},window.addEventListener(\"bg-player-state-change\",function(i){var n=i;e(n.detail&&n.detail.playing)}),window.addEventListener(\"wallpaperModeChange\",function(i){var n=i,a=n.detail&&n.detail.mode;t.style.display=a===\"none\"?\"none\":\"\"}),window.swup&&window.swup.hooks?window.swup.hooks.on(\"content:replace\",d):document.addEventListener(\"swup:enable\",function(){window.swup.hooks.on(\"content:replace\",d)})}let m=document.getElementById(\"scheme-switch\");m&&(m.onclick=function(){let e=document.getElementById(\"theme-mode-panel\");e&&e.classList.toggle(\"float-panel-closed\")}),document.addEventListener(\"click\",function(e){const d=[\"display-setting\",\"music-nav-panel\",\"theme-mode-panel\"],i=[\"display-settings-switch\",\"music-player-switch\",\"scheme-switch\"];d.forEach((n,a)=>{const s=document.getElementById(n),r=document.getElementById(i[a]);s&&r&&!s.classList.contains(\"float-panel-closed\")&&e.target instanceof Node&&!s.contains(e.target)&&!r.contains(e.target)&&s.classList.add(\"float-panel-closed\")})})}g();function u(){const l=document.getElementById(\"navbar\");if(!l||l.getAttribute(\"data-transparent-mode\")!==\"semifull\")return;window.semifullScrollHandler&&(window.removeEventListener(\"scroll\",window.semifullScrollHandler),window.semifullScrollHandler=void 0),l.classList.remove(\"scrolled\");let o=!1;function c(){if(document.documentElement.classList.contains(\"is-page-transitioning\")){document.documentElement.getAttribute(\"data-wallpaper-mode\")!==\"fullscreen\"&&l.classList.remove(\"scrolled\"),o=!1;return}(window.pageYOffset||document.documentElement.scrollTop)>50?l.classList.add(\"scrolled\"):l.classList.remove(\"scrolled\"),o=!1}function t(){o||(requestAnimationFrame(c),o=!0)}window.semifullScrollHandler&&window.removeEventListener(\"scroll\",window.semifullScrollHandler),window.semifullScrollHandler=t,window.addEventListener(\"scroll\",t,{passive:!0}),c()}window.initSemifullScrollDetection=u;document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",u):u();"],["D:/求职/存储/fengqiyunxing.github.io/src/components/layout/PostPage.astro?astro&type=script&index=0&lang.ts","function a(){const e=document.getElementById(\"post-list-container\");if(!e)return;const t=localStorage.getItem(\"postListLayout\"),o=e.getAttribute(\"data-default-layout\")||\"list\",r=e.getAttribute(\"data-mobile-default-layout\")||o,s=window.innerWidth<780?r:o;let n=t||s;window.innerWidth<380&&(n=\"grid\"),m(n)}function m(e){const t=document.getElementById(\"post-list-container\");if(!t)return;const o=t.classList.contains(\"grid-mode\"),r=t.classList.contains(\"list-mode\"),s=o?\"grid\":r?\"list\":null,n=t.getAttribute(\"data-masonry-enabled\")===\"true\",l=()=>{t.classList.remove(\"list-mode\",\"grid-mode\",\"post-grid-auto\"),e===\"grid\"?(t.classList.add(\"grid-mode\"),t.classList.remove(\"flex\",\"flex-col\"),n?(t.classList.remove(\"post-grid-auto\"),c()):(t.classList.add(\"post-grid-auto\"),f())):(t.classList.add(\"list-mode\"),t.classList.add(\"flex\",\"flex-col\",\"gap-4\",\"md:gap-4\"),t.classList.remove(\"post-grid-auto\"),f())};if(!s){l();return}if(s===e){e===\"grid\"&&n&&c();return}t.classList.add(\"layout-switching\"),setTimeout(()=>{l(),requestAnimationFrame(()=>{t.classList.remove(\"layout-switching\")})},200)}function f(){const e=document.getElementById(\"post-list-container\");e&&(e.style.height=\"\",e.style.position=\"\",e.style.display=\"\",e.querySelectorAll(\".post-card-item\").forEach(t=>{t.style.position=\"\",t.style.top=\"\",t.style.left=\"\",t.style.width=\"\"}))}function c(){const e=document.getElementById(\"post-list-container\");if(!e||e.getAttribute(\"data-masonry-enabled\")!==\"true\"||!e.classList.contains(\"grid-mode\"))return;const t=Array.from(e.querySelectorAll(\".post-card-item\"));if(t.length===0)return;const o=16,r=parseInt(e.getAttribute(\"data-column-width\")||\"280\");e.style.position=\"relative\",e.style.display=\"block\";const s=e.offsetWidth,n=Math.max(1,Math.floor((s+o)/(r+o))),l=(s-(n-1)*o)/n,d=new Array(n).fill(0);t.forEach(i=>{const u=d.indexOf(Math.min(...d));i.style.position=\"absolute\",i.style.width=`${l}px`,i.style.setProperty(\"height\",\"auto\",\"important\");const y=i.offsetHeight,p=d[u],g=u*(l+o);i.style.top=`${p}px`,i.style.left=`${g}px`,d[u]+=y+o}),e.style.height=`${Math.max(...d)}px`}if(!window.__postPageInit){window.__postPageInit=!0,document.addEventListener(\"DOMContentLoaded\",function(){setTimeout(a,50),document.querySelectorAll(\"#post-list-container img\").forEach(t=>{t.complete||t.addEventListener(\"load\",()=>{c()})})}),document.addEventListener(\"visibilitychange\",function(){document.hidden||setTimeout(a,100)}),window.addEventListener(\"layoutChange\",function(t){const o=t.detail.layout;document.getElementById(\"post-list-container\")&&m(o)});let e;window.addEventListener(\"resize\",function(){clearTimeout(e),e=setTimeout(function(){a()},250)}),document.addEventListener(\"astro:page-load\",function(){setTimeout(a,50),document.querySelectorAll(\"#post-list-container img\").forEach(t=>{t.complete||t.addEventListener(\"load\",()=>{c()})})}),document.addEventListener(\"astro:after-swap\",function(){setTimeout(a,50)}),setTimeout(a,0)}"],["D:/求职/存储/fengqiyunxing.github.io/src/components/widget/SiteInfo.astro?astro&type=script&index=0&lang.ts","var c=class extends HTMLElement{constructor(){super();const s=this.querySelector(\".site-info-toggle-btn\"),o=this.querySelector(\".site-info-detail\"),e=this.querySelector(\".site-info-toggle-text\"),n=this.querySelector(\".site-info-toggle-icon\");if(!s||!o||!e)return;const l=this.dataset.expandText||\"展开构建信息\",i=this.dataset.collapseText||\"收起构建信息\";let t=!1;e.textContent=l,s.addEventListener(\"click\",()=>{t=!t,o.classList.toggle(\"collapsed\",!t),e.textContent=t?i:l,n?.classList.toggle(\"rotate-180\",t)})}};customElements.get(\"site-info-collapse\")||customElements.define(\"site-info-collapse\",c);"],["D:/求职/存储/fengqiyunxing.github.io/src/components/features/TypewriterText.astro?astro&type=script&index=0&lang.ts","var r=class{element;texts;currentTextIndex=0;speed;deleteSpeed;pauseTime;currentIndex=0;isDeleting=!1;timeoutId=null;constructor(t){this.element=t;const e=t.dataset.text||\"\";try{const i=JSON.parse(e);this.texts=Array.isArray(i)?i:[e]}catch{this.texts=[e]}this.speed=parseInt(t.dataset.speed||\"100\"),this.deleteSpeed=parseInt(t.dataset.deleteSpeed||\"50\"),this.pauseTime=parseInt(t.dataset.pauseTime||\"2000\"),this.texts.length>1&&!this.isTypewriterEnabled()?this.showRandomText():this.start()}isTypewriterEnabled(){return this.element.dataset.speed!==void 0||this.element.dataset.deleteSpeed!==void 0||this.element.dataset.pauseTime!==void 0}showRandomText(){const t=Math.floor(Math.random()*this.texts.length);this.element.textContent=this.texts[t]}start(){this.texts.length!==0&&this.type()}getCurrentText(){return this.texts[this.currentTextIndex]||\"\"}type(){const t=this.getCurrentText(),e=this.segmentText(t);this.isDeleting?this.currentIndex>0?(this.currentIndex--,this.element.textContent=e.slice(0,this.currentIndex).join(\"\"),this.timeoutId=window.setTimeout(()=>this.type(),this.deleteSpeed)):(this.isDeleting=!1,this.currentTextIndex=(this.currentTextIndex+1)%this.texts.length,this.timeoutId=window.setTimeout(()=>this.type(),this.speed)):this.currentIndex<e.length?(this.currentIndex++,this.element.textContent=e.slice(0,this.currentIndex).join(\"\"),this.timeoutId=window.setTimeout(()=>this.type(),this.speed)):this.texts.length>1&&(this.isDeleting=!0,this.timeoutId=window.setTimeout(()=>this.type(),this.pauseTime))}destroy(){this.timeoutId&&clearTimeout(this.timeoutId)}segmentText(t){const e=new Intl.Segmenter(void 0,{granularity:\"grapheme\"});return Array.from(e.segment(t),i=>i.segment)}};function n(){document.querySelectorAll(\".typewriter\").forEach(t=>{const e=t;e.__typewriterInstance&&e.__typewriterInstance.destroy(),e.textContent=\"\",e.__typewriterInstance=new r(e)})}function s(){n(),setTimeout(n,220)}window.__typewriterTextInit||(window.__typewriterTextInit=!0,document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",s):s(),document.addEventListener(\"swup:contentReplaced\",s),document.addEventListener(\"swup:content:replace\",s),document.addEventListener(\"swup:page:view\",s),typeof window<\"u\"&&window.swup?.hooks&&(window.swup.hooks.on(\"content:replace\",s),window.swup.hooks.on(\"page:view\",s)));"],["D:/求职/存储/fengqiyunxing.github.io/src/components/common/WidgetLayout.astro?astro&type=script&index=0&lang.ts","var c=class extends HTMLElement{constructor(){if(super(),this.dataset.isCollapsed!==\"true\")return;this.dataset.expanded=\"false\";const n=this.dataset.id,t=this.querySelector(\".expand-btn button\"),o=this.querySelector(`#${n}`);if(!t||!o)return;const a=t.querySelector(\".toggle-text\"),l=t.querySelector(\".toggle-icon-more\"),i=t.querySelector(\".toggle-icon-less\"),r=e=>{const s=e?t.dataset.showLess||\"\":t.dataset.showMore||\"\";t.dataset.expanded=String(e),this.dataset.expanded=String(e),t.title=s,t.setAttribute(\"aria-label\",s),a&&(a.textContent=s),l?.classList.toggle(\"hidden\",e),i?.classList.toggle(\"hidden\",!e)};t.addEventListener(\"click\",()=>{const e=t.dataset.expanded===\"true\";o.classList.toggle(\"collapsed\",e),r(!e)})}};customElements.get(\"widget-layout\")||customElements.define(\"widget-layout\",c);"],["D:/求职/存储/fengqiyunxing.github.io/src/pages/[...page].astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){{const e=d();document.body.classList.add(`device-${e}`);let t;window.addEventListener(\"resize\",function(){clearTimeout(t),t=setTimeout(function(){const n=d(),i=document.body.className.match(/device-(mobile|tablet|desktop)/)?.[1];i!==n&&(document.body.classList.remove(`device-${i}`),document.body.classList.add(`device-${n}`))},250)})}});function d(){if(typeof window>\"u\")return\"desktop\";const e=window.innerWidth;return e<768?\"mobile\":e<1024?\"tablet\":\"desktop\"}"],["D:/求职/存储/fengqiyunxing.github.io/src/pages/posts/[...slug].astro?astro&type=script&index=0&lang.ts","var e=document.getElementById(\"outdated-card\"),n=e?.dataset.date;if(e&&n){const o=new Date(n),a=Math.floor((Date.now()-o.getTime())/864e5);if(a>=Number(e.dataset.threshold)&&(e.classList.remove(\"hidden\"),a>=1)){const t=document.getElementById(\"days-ago-text\");t&&t.dataset.template&&(t.textContent=`，${t.dataset.template.replace(\"{days}\",a.toString())}`);const d=document.getElementById(\"outdated-warning\");d&&d.classList.remove(\"hidden\")}}"],["D:/求职/存储/fengqiyunxing.github.io/src/pages/dynamic/comments.astro?astro&type=script&index=0&lang.ts","window.addEventListener(\"message\",e=>{e.origin!==window.location.origin||e.data?.type!==\"dynamic-comment-theme\"||(document.documentElement.classList.toggle(\"dark\",!!e.data.dark),document.documentElement.dataset.theme=e.data.dark?\"dark\":\"light\")});var t=()=>{window.parent.postMessage({type:\"dynamic-comment-height\",height:document.documentElement.scrollHeight},window.location.origin)};new ResizeObserver(t).observe(document.body);window.addEventListener(\"load\",t);"],["D:/求职/存储/fengqiyunxing.github.io/src/pages/rss.astro?astro&type=script&index=0&lang.ts","function o(){const e=document.getElementById(\"copy-rss-btn\");if(!e)return;const r=e.cloneNode(!0);e.parentNode?.replaceChild(r,e),r.addEventListener(\"click\",async function(c){const t=c.currentTarget,i=t.getAttribute(\"data-url\");if(i)try{await navigator.clipboard.writeText(i);const n=t.textContent;t.textContent=t.getAttribute(\"data-copied-text\")||\"\",t.style.backgroundColor=\"var(--success-color, #10b981)\",setTimeout(()=>{t.textContent=n,t.style.backgroundColor=\"\"},2e3)}catch(n){console.error(\"Copy failed:\",n);const a=t.textContent;t.textContent=t.getAttribute(\"data-failed-text\")||\"\",setTimeout(()=>{t.textContent=a},2e3)}})}document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",o):setTimeout(o,0);typeof window<\"u\"&&window.swup&&window.swup.hooks.on(\"content:replace\",()=>{setTimeout(o,100)});"]],"assets":["/_astro/cyber-skyline.I30u8mOK.avif","/_astro/d5.z7QGp_dj.avif","/_astro/cyber-neon.Dc6frkMi.avif","/_astro/d6.DetxM4Sl.avif","/_astro/m1.DEh_M2ue.avif","/_astro/m4.DzLJp29g.avif","/_astro/cyber-trails.CUqpn9aN.avif","/_astro/m2.DdvPaSds.avif","/_astro/d3.CGCRs0-H.avif","/_astro/d4.Brgr35k-.avif","/_astro/cyber-neon-m.Dqk3J5md.avif","/_astro/m3.D3bdkV68.avif","/_astro/cyber-skyline-m.e9xNn-Qd.avif","/_astro/m5.UNwLEw9O.avif","/_astro/m6.Ca2EuEDu.avif","/_astro/d2.G7EObyHu.avif","/_astro/d1.v_J1gD3P.avif","/_astro/avatar.BcAu2wMi.avif","/_astro/avatar-cyber.BFhTqAZr.png","/_astro/cyber-dark._BAQVTvE.png","/_astro/cyber-trails-m.I9kFiank.avif","/_astro/cyber-light.CNJRjINF.png","/_astro/cover.DbgBqV31.avif","/_astro/docusaurus.Cu-On_k2.avif","/_astro/both-grid.Dr0o703Y.avif","/_astro/1.C7RKfYLg.avif","/_astro/firefly1.Bvhrpe3S.avif","/_astro/both-list.C6AFU0WN.avif","/_astro/github.urcbElKG.avif","/_astro/masonry.CBfXsc0e.avif","/_astro/firefly2.BOrVuFi_.avif","/_astro/obsidian.Cwb2iYzd.avif","/_astro/vitepress.D2YnjBWE.avif","/_astro/Layout.D2VFyD7i.css","/_astro/MainGridLayout.CEIZb370.css","/_astro/markdown-extend.CV7FOiE_.css","/_astro/mdx-example.CLJa-wWH.css","/_astro/_..BulBwWNp.css","/_astro/index.-wlTiOjc.css","/_astro/_..DIBwrrWL.css","/_astro/KaTeX_AMS-Regular.BQhdFMY1.woff2","/_astro/KaTeX_AMS-Regular.DMm9YOAa.woff","/_astro/KaTeX_AMS-Regular.DRggAlZN.ttf","/_astro/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2","/_astro/KaTeX_Caligraphic-Bold.BEiXGLvX.woff","/_astro/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf","/_astro/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2","/_astro/KaTeX_Caligraphic-Regular.CTRA-rTL.woff","/_astro/KaTeX_Caligraphic-Regular.wX97UBjC.ttf","/_astro/KaTeX_Fraktur-Bold.CL6g_b3V.woff2","/_astro/KaTeX_Fraktur-Bold.BsDP51OF.woff","/_astro/KaTeX_Fraktur-Bold.BdnERNNW.ttf","/_astro/KaTeX_Fraktur-Regular.CTYiF6lA.woff2","/_astro/KaTeX_Fraktur-Regular.Dxdc4cR9.woff","/_astro/KaTeX_Fraktur-Regular.CB_wures.ttf","/_astro/KaTeX_Main-Bold.Cx986IdX.woff2","/_astro/KaTeX_Main-Bold.Jm3AIy58.woff","/_astro/KaTeX_Main-Bold.waoOVXN0.ttf","/_astro/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2","/_astro/KaTeX_Main-BoldItalic.SpSLRI95.woff","/_astro/KaTeX_Main-BoldItalic.DzxPMmG6.ttf","/_astro/KaTeX_Main-Italic.NWA7e6Wa.woff2","/_astro/KaTeX_Main-Italic.BMLOBm91.woff","/_astro/KaTeX_Main-Italic.3WenGoN9.ttf","/_astro/KaTeX_Main-Regular.B22Nviop.woff2","/_astro/KaTeX_Main-Regular.Dr94JaBh.woff","/_astro/KaTeX_Main-Regular.ypZvNtVU.ttf","/_astro/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2","/_astro/KaTeX_Math-BoldItalic.iY-2wyZ7.woff","/_astro/KaTeX_Math-BoldItalic.B3XSjfu4.ttf","/_astro/KaTeX_Math-Italic.t53AETM-.woff2","/_astro/KaTeX_Math-Italic.DA0__PXp.woff","/_astro/KaTeX_Math-Italic.flOr_0UB.ttf","/_astro/KaTeX_SansSerif-Bold.D1sUS0GD.woff2","/_astro/KaTeX_SansSerif-Bold.DbIhKOiC.woff","/_astro/KaTeX_SansSerif-Bold.CFMepnvq.ttf","/_astro/KaTeX_SansSerif-Italic.C3H0VqGB.woff2","/_astro/KaTeX_SansSerif-Italic.DN2j7dab.woff","/_astro/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf","/_astro/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2","/_astro/KaTeX_SansSerif-Regular.CS6fqUqJ.woff","/_astro/KaTeX_SansSerif-Regular.BNo7hRIc.ttf","/_astro/KaTeX_Script-Regular.D3wIWfF6.woff2","/_astro/KaTeX_Script-Regular.D5yQViql.woff","/_astro/KaTeX_Script-Regular.C5JkGWo-.ttf","/_astro/KaTeX_Size1-Regular.mCD8mA8B.woff2","/_astro/KaTeX_Size1-Regular.C195tn64.woff","/_astro/KaTeX_Size1-Regular.Dbsnue_I.ttf","/_astro/KaTeX_Size2-Regular.Dy4dx90m.woff2","/_astro/KaTeX_Size2-Regular.oD1tc_U0.woff","/_astro/KaTeX_Size2-Regular.B7gKUWhC.ttf","/_astro/KaTeX_Size3-Regular.CTq5MqoE.woff","/_astro/KaTeX_Size3-Regular.DgpXs0kz.ttf","/_astro/KaTeX_Size4-Regular.Dl5lxZxV.woff2","/_astro/KaTeX_Size4-Regular.BF-4gkZK.woff","/_astro/KaTeX_Size4-Regular.DWFBv043.ttf","/_astro/KaTeX_Typewriter-Regular.CO6r4hn1.woff2","/_astro/KaTeX_Typewriter-Regular.C0xS9mPB.woff","/_astro/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf","/_astro/page.BXMBsE1h.js","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/404.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/about/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/api/allPostMeta.json","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/api/dynamic.json","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/archive/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/bangumi/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/bilibili/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/booknav/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/categories/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/dynamic/comments/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/dynamic/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/friends/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/gallery/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/guestbook/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/myanimelist/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/robots.txt","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/rss/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/rss.xml","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/search/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/series/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/sponsor/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/tags/index.html","/file:///D:/%E6%B1%82%E8%81%8C/%E5%AD%98%E5%82%A8/fengqiyunxing.github.io/dist/vndb/index.html"],"buildFormat":"directory","checkOrigin":false,"actionBodySizeLimit":1048576,"serverIslandBodySizeLimit":1048576,"allowedDomains":[],"key":"KUPG0K89NbRa0G1HuTP2M35F+u319O4CdY8bRU887EI=","image":{"layout":"none"},"devToolbar":{"enabled":false,"debugInfoOutput":""},"logLevel":"info","shouldInjectCspMetaTags":false});
var manifestRoutes = _manifest.routes;
var manifest = Object.assign(_manifest, {
	renderers,
	actions: () => import("./chunks/noop-entrypoint_Z3zFhrGC.mjs"),
	middleware: () => import("./chunks/_noop-middleware_CQ50ikAJ.mjs"),
	sessionDriver: () => import("./chunks/_virtual_astro_session-driver_C-PI1Pas.mjs"),
	serverIslandMappings: () => import("./chunks/_virtual_astro_server-island-manifest_C1Q2srgE.mjs"),
	routes: manifestRoutes,
	pageMap
});
//#endregion
//#region node_modules/astro/dist/vite-plugin-scripts/index.js
var SCRIPT_ID_PREFIX = `astro:scripts/`;
var BEFORE_HYDRATION_SCRIPT_ID = `${SCRIPT_ID_PREFIX}before-hydration.js`;
var PAGE_SCRIPT_ID = `${SCRIPT_ID_PREFIX}page.js`;
`${SCRIPT_ID_PREFIX}`;
//#endregion
//#region node_modules/astro/dist/core/build/plugins/util.js
var ASTRO_PAGE_KEY_SEPARATOR = "&";
function makePageDataKey(route, componentPath) {
	return route + ASTRO_PAGE_KEY_SEPARATOR + componentPath;
}
//#endregion
//#region node_modules/astro/dist/core/build/runtime.js
function getPageData(internals, route, component) {
	let pageData = internals.pagesByKeys.get(makePageDataKey(route, component));
	if (pageData) return pageData;
}
function cssOrder(a, b) {
	let depthA = a.depth, depthB = b.depth, orderA = a.order, orderB = b.order;
	if (orderA === -1 && orderB >= 0) return 1;
	else if (orderB === -1 && orderA >= 0) return -1;
	else if (orderA > orderB) return 1;
	else if (orderA < orderB) return -1;
	else if (depthA === -1) return -1;
	else if (depthB === -1) return 1;
	else return depthA > depthB ? -1 : 1;
}
function mergeInlineCss(acc, current) {
	const lastAdded = acc.at(acc.length - 1);
	const lastWasInline = lastAdded?.type === "inline";
	const currentIsInline = current?.type === "inline";
	if (lastWasInline && currentIsInline) {
		const currentHasImport = current.content.includes("@import");
		const lastHasImport = lastAdded.content.includes("@import");
		if (!currentHasImport && !lastHasImport) {
			const merged = {
				type: "inline",
				content: lastAdded.content + current.content
			};
			acc[acc.length - 1] = merged;
			return acc;
		}
	}
	acc.push(current);
	return acc;
}
//#endregion
//#region node_modules/astro/dist/core/build/environment.js
async function getModuleForRoute(manifest, route) {
	for (const defaultRoute of getDefaultRoutes(manifest)) if (route.component === defaultRoute.component) return { page: () => Promise.resolve(defaultRoute.instance) };
	let routeToProcess = route;
	if (routeIsRedirect(route)) {
		if (route.redirectRoute) routeToProcess = route.redirectRoute;
		else return RedirectSinglePageBuiltModule;
	} else if (routeIsFallback(route)) routeToProcess = getFallbackRoute(route, manifest.routes);
	if (manifest.pageMap) {
		const importComponentInstance = manifest.pageMap.get(routeToProcess.component);
		if (!importComponentInstance) throw new Error(`Unexpectedly unable to find a component instance for route ${route.route}`);
		return await importComponentInstance();
	} else if (manifest.pageModule) return manifest.pageModule;
	throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
}
async function getComponentByRoute(manifest, routeData) {
	return (await getModuleForRoute(manifest, routeData)).page();
}
function createBuildEnvironment() {
	let internals;
	let options;
	function getInternals() {
		if (!internals) throw new Error("No internals defined");
		return internals;
	}
	function getOptions() {
		if (!options) throw new Error("No options defined");
		return options;
	}
	function getSettings() {
		return getOptions().settings;
	}
	const resolveCache = /* @__PURE__ */ new Map();
	return {
		env: {
			name: "build",
			runtimeMode: "production",
			defaultStreaming: (manifest) => manifest.serverLike,
			async resolve(manifest, specifier) {
				if (resolveCache.has(specifier)) return resolveCache.get(specifier);
				const hashedFilePath = manifest.entryModules[specifier];
				if (typeof hashedFilePath !== "string" || hashedFilePath === "") {
					if (specifier === BEFORE_HYDRATION_SCRIPT_ID) {
						resolveCache.set(specifier, "");
						return "";
					}
					throw new Error(`Cannot find the built path for ${specifier}`);
				}
				const assetLink = createAssetLink(hashedFilePath, manifest.base, manifest.assetsPrefix);
				resolveCache.set(specifier, assetLink);
				return assetLink;
			},
			headElements(manifest, routeData) {
				const { assetsPrefix, base } = manifest;
				const settings = getSettings();
				const buildInternals = getInternals();
				const links = /* @__PURE__ */ new Set();
				const pageBuildData = getPageData(buildInternals, routeData.route, routeData.component);
				const scripts = /* @__PURE__ */ new Set();
				const sortedCssAssets = pageBuildData?.styles.sort(cssOrder).map(({ sheet }) => sheet).reduce(mergeInlineCss, []);
				const styles = createStylesheetElementSet(sortedCssAssets ?? [], base, assetsPrefix);
				if (settings.scripts.some((script) => script.stage === "page")) {
					const hashedFilePath = buildInternals.entrySpecifierToBundleMap.get(PAGE_SCRIPT_ID);
					if (typeof hashedFilePath !== "string") throw new Error(`Cannot find the built path for ${PAGE_SCRIPT_ID}`);
					const src = createAssetLink(hashedFilePath, base, assetsPrefix);
					scripts.add({
						props: {
							type: "module",
							src
						},
						children: ""
					});
				}
				for (const script of settings.scripts) if (script.stage === "head-inline") scripts.add({
					props: {},
					children: script.content
				});
				return {
					scripts,
					styles,
					links
				};
			},
			componentMetadata() {},
			getComponentByRoute,
			getModuleForRoute,
			async tryRewrite(manifest, payload, request) {
				const { routeData, pathname, newUrl } = findRouteToRewrite({
					payload,
					request,
					routes: manifest.routes.map((r) => r.routeData),
					trailingSlash: manifest.trailingSlash,
					buildFormat: manifest.buildFormat,
					base: manifest.base,
					outDir: manifest.serverLike ? manifest.buildClientDir : manifest.outDir
				});
				return {
					routeData,
					componentInstance: await getComponentByRoute(manifest, routeData),
					newUrl,
					pathname
				};
			},
			getRenderers(manifest) {
				return manifest.renderers;
			},
			errorStrategy: "build",
			injectCspMetaTagsOnErrorPages: false,
			logRequest() {}
		},
		setInternals(value) {
			internals = value;
		},
		setOptions(value) {
			options = value;
		},
		getInternals,
		getOptions,
		getSettings
	};
}
//#endregion
//#region node_modules/astro/dist/core/build/app.js
var BuildApp = class extends BaseApp {
	#buildEnv;
	constructor(manifest, buildEnv) {
		super(manifest);
		this.#buildEnv = buildEnv;
	}
	isDev() {
		return true;
	}
	/**
	* Streaming falls through to the environment default
	* (`manifest.serverLike` for the build environment) — we can skip
	* streaming in SSG for performance, as writing strings is faster.
	*/
	resolveStreaming() {}
	setInternals(internals) {
		this.#buildEnv.setInternals(internals);
	}
	setOptions(options) {
		this.#buildEnv.setOptions(options);
		this.logger.setDestination(options.logger.options.destination);
		this.resetAdapterLogger();
	}
	getOptions() {
		return this.#buildEnv.getOptions();
	}
	getSettings() {
		return this.#buildEnv.getSettings();
	}
	/**
	* Route cache and component loader for `StaticPaths`. Defined on the app
	* (rather than reached through the functional core at the call site) so
	* they execute inside the prerender bundle's module graph: the default
	* prerenderer constructs `StaticPaths` from a different bundle, whose
	* copies of the core modules hold separate per-manifest state.
	*/
	get routeCache() {
		return getRouteCache(this.manifest);
	}
	getComponentByRoute(routeData) {
		return getEnvironment(this.manifest).getComponentByRoute(this.manifest, routeData);
	}
	logRequest(_options) {}
};
//#endregion
//#region node_modules/astro/dist/entrypoints/prerender.js
var buildEnv = createBuildEnvironment();
setEnvironment(manifest, buildEnv.env);
var app = new BuildApp(manifest, buildEnv);
//#endregion
export { app, manifest };
