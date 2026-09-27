import { P as createAstro, S as maybeRenderHead, T as defineScriptVars, f as renderComponent, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import { c as i18n, f as siteConfig, o as removeFileExtension, p as I18nKey, s as url } from "./url-utils_Cr7cEKDY.mjs";
import { t as commentConfig } from "./commentConfig_DQHjcw7q.mjs";
//#region src/components/comment/Artalk.astro
createAstro("https://fengqiyunxing.github.io");
var $$Artalk = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Artalk;
	const config = {
		...commentConfig.artalk,
		el: "#artalk",
		site: siteConfig.title,
		pageKey: Astro.props.path,
		dark: "html.dark",
		pageTitle: "",
		...commentConfig.artalk?.visitorCount ? { pageview: true } : {}
	};
	return renderTemplate`${maybeRenderHead($$result)}<!-- Artalk --><div class="relative w-full"><!-- 挂载点 --><div id="artalk" style="--at-color-main: var(--primary); --at-color-bg: var(--card-bg); --at-color-border: var(--line-divider);"></div><!-- 引入 Artalk 样式 --><link rel="stylesheet" href="https://unpkg.com/artalk/dist/Artalk.css"><!-- 脚本逻辑 --><script type="module">${defineScriptVars({ config })}
        import Artalk from 'https://unpkg.com/artalk/dist/Artalk.mjs';
        const requestedPath = new URLSearchParams(window.location.search).get("path");
        const effectiveConfig = requestedPath
            ? { ...config, pageKey: requestedPath }
            : config;

        // 初始化 Artalk
        const artalk = Artalk.init(effectiveConfig);

        // 深色模式
        function updateTheme() {
            const isDark = document.documentElement.classList.contains('dark');
            artalk.setDarkMode(isDark);
        }

        updateTheme();

        const observer = new MutationObserver((_mutations) => {
            updateTheme();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });
    <\/script></div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/comment/Artalk.astro", void 0);
//#endregion
//#region src/components/comment/Disqus.astro
createAstro("https://fengqiyunxing.github.io");
var $$Disqus = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Disqus;
	const { identifier, url, title } = Astro.props;
	if (!commentConfig?.disqus) throw new Error("Disqus comments are not configured");
	const shortname = commentConfig.disqus.shortname;
	return renderTemplate`${maybeRenderHead($$result)}<div id="disqus_thread"></div><script>(function(){${defineScriptVars({
		shortname,
		identifier,
		url,
		title
	})}
  const requestedPath = new URLSearchParams(window.location.search).get("path")
  let effectiveIdentifier = identifier
  let effectiveUrl = url
  if (requestedPath) {
    effectiveIdentifier = requestedPath.replace(/^\\/+|\\/+$/g, "")
    effectiveUrl = new URL(requestedPath, window.location.origin).href
  }
  // @ts-ignore
  window.disqus_config = function () {
    this.page.url = effectiveUrl
    this.page.identifier = effectiveIdentifier
    this.page.title = title
  }

  ;(function () {
    var d = document,
      s = d.createElement('script')
    s.src = 'https://' + shortname + '.disqus.com/embed.js'
    s.setAttribute('data-timestamp', new Date().toString())
    ;(d.head || d.body).appendChild(s)
  })()
})();<\/script><noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/comment/Disqus.astro", void 0);
//#endregion
//#region src/components/comment/Giscus.astro
var $$Giscus = createComponent(($$result, $$props, $$slots) => {
	if (!commentConfig?.giscus) throw new Error("Giscus comments are not configured");
	const giscus = commentConfig.giscus;
	const lightTheme = "light";
	return renderTemplate`<!-- 
  Giscus 官方Web Component用法，兼容Astro静态输出，无需import包，无需NPM依赖！
  参考：https://giscus.app/ 详情配置说明
-->${renderComponent($$result, "giscus-widget", "giscus-widget", {
		"id": "comments",
		"repo": giscus.repo,
		"repoId": giscus.repoId,
		"category": giscus.category,
		"categoryId": giscus.categoryId,
		"mapping": giscus.mapping,
		"strict": giscus.strict,
		"reactionsEnabled": giscus.reactionsEnabled,
		"emitMetadata": giscus.emitMetadata,
		"inputPosition": giscus.inputPosition,
		"theme": lightTheme,
		"lang": giscus.lang,
		"loading": giscus.loading
	})}<script>(function(){${defineScriptVars({
		lightTheme,
		darkTheme: "dark"
	})}
  const requestedPath = new URLSearchParams(window.location.search).get("path");
  const widget = document.querySelector("giscus-widget");
  if (requestedPath && widget) {
    widget.setAttribute("mapping", "specific");
    widget.setAttribute("term", requestedPath);
  }

  import("https://esm.sh/giscus");

  function updateGiscusTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const theme = isDark ? darkTheme : lightTheme;
    if (widget) {
      widget.setAttribute('theme', theme);
    }
  }

  // Initial update
  updateGiscusTheme();

  // Clean up previous observer if exists
  if (window.giscusThemeObserver) {
    window.giscusThemeObserver.disconnect();
  }

  // Create new observer
  window.giscusThemeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        updateGiscusTheme();
      }
    });
  });

  window.giscusThemeObserver.observe(document.documentElement, { attributes: true });
})();<\/script>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/comment/Giscus.astro", void 0);
//#endregion
//#region src/components/comment/Twikoo.astro
createAstro("https://fengqiyunxing.github.io");
var $$Twikoo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Twikoo;
	const twikooConfig = commentConfig.twikoo ?? { envId: "" };
	const jsUrl = twikooConfig.jsUrl || "https://registry.npmmirror.com/twikoo/1.7.13/files/dist/twikoo.min.js";
	const cssUrl = twikooConfig.cssUrl;
	const config = {
		...twikooConfig,
		el: "#tcomment",
		path: Astro.props.path
	};
	return renderTemplate`${maybeRenderHead($$result)}<div id="tcomment"></div><script${addAttribute(jsUrl, "src")} defer><\/script>${cssUrl && renderTemplate`<link rel="stylesheet"${addAttribute(cssUrl.startsWith("http") ? cssUrl : url(cssUrl), "href")}>`}<script>(function(){${defineScriptVars({ config })}
  // 获取当前页面路径
  function getCurrentPath() {
    const requestedPath = new URLSearchParams(window.location.search).get("path");
    if (requestedPath) return requestedPath;
    const pathname = window.location.pathname;
    return pathname.endsWith("/") && pathname.length > 1
      ? pathname.slice(0, -1)
      : pathname;
  }

  // 动态创建配置对象
  function createTwikooConfig() {
    return {
      ...config,
      path: getCurrentPath(),
      el: "#tcomment",
    };
  }

  // 初始化 Twikoo
  function initTwikoo() {
    if (typeof twikoo !== "undefined") {
      const commentEl = document.getElementById("tcomment");
      if (commentEl) {
        commentEl.innerHTML = "";

        const dynamicConfig = createTwikooConfig();
        console.log("[Twikoo] Init config:", dynamicConfig);

        twikoo
          .init(dynamicConfig)
          .then(() => {
            console.log("[Twikoo] Init complete");
          })
          .catch((error) => {
            console.error("[Twikoo] Init failed:", error);
          });
      }
    } else {
      // 如果 Twikoo 未加载，稍后重试
      setTimeout(initTwikoo, 500);
    }
  }

  // 页面加载时初始化
  document.addEventListener("DOMContentLoaded", initTwikoo);

  // Swup 页面切换后重新初始化
  if (window.swup && window.swup.hooks) {
    window.swup.hooks.on("content:replace", function () {
      setTimeout(initTwikoo, 200);
    });
  } else {
    document.addEventListener("swup:enable", function () {
      if (window.swup && window.swup.hooks) {
        window.swup.hooks.on("content:replace", function () {
          setTimeout(initTwikoo, 200);
        });
      }
    });
  }

  // 自定义事件监听
  document.addEventListener("firefly:page:loaded", function () {
    const commentEl = document.getElementById("tcomment");
    if (commentEl) {
      console.log("[Twikoo] Re-initializing via custom event");
      initTwikoo();
    }
  });
})();<\/script>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/comment/Twikoo.astro", void 0);
//#endregion
//#region src/components/comment/Waline.astro
createAstro("https://fengqiyunxing.github.io");
var $$Waline = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Waline;
	const config = {
		...commentConfig.waline,
		el: "#waline",
		path: Astro.props.path,
		dark: "html.dark",
		wordLimit: ["2", "300"],
		...commentConfig.waline?.visitorCount ? { pageview: true } : {}
	};
	return renderTemplate`${maybeRenderHead($$result)}<!-- Waline --><div class="relative w-full"><div id="waline"></div><link rel="stylesheet" href="https://unpkg.com/@waline/client@v3/dist/waline.css"><script type="module">${defineScriptVars({ config })}
    import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
    const requestedPath = new URLSearchParams(window.location.search).get("path");
    const effectiveConfig = requestedPath
      ? { ...config, path: requestedPath }
      : config;
    try {
      init(effectiveConfig);
    } catch (error) {
      console.error("[Waline] Failed to initialize:", error);
    }
  <\/script></div>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/comment/Waline.astro", void 0);
//#endregion
//#region src/components/comment/index.astro
createAstro("https://fengqiyunxing.github.io");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { post, customPath, title: customTitle } = Astro.props;
	const slugFromPath = (customPath || "/").replace(/^\/+|\/+$/g, "") || "index";
	const slug = post ? removeFileExtension(post.id) : slugFromPath;
	const path = customPath ? customPath : post ? post.collection === "posts" ? `/posts/${slug}` : `/${slug}` : `/${slug}`;
	const url = `${Astro.site?.href}${path}`;
	const postTitle = post && "title" in post.data ? post.data.title : void 0;
	let commentService = commentConfig?.type || "none";
	return renderTemplate`${commentService !== "none" && renderTemplate`${maybeRenderHead($$result)}<div id="post-comments" class="card-base p-8 mb-6 relative overflow-hidden"><!-- 评论区装饰性背景 --><div class="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none"><svg viewBox="0 0 100 100" class="w-full h-full"><circle cx="50" cy="50" r="40" fill="currentColor" class="text-(--primary)"></circle><circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="2" class="text-(--primary)"></circle><circle cx="50" cy="50" r="10" fill="currentColor" class="text-(--primary)"></circle></svg></div><!-- 评论区标题 --><div class="relative z-10 mb-6"><div class="flex items-center gap-3 mb-2"><div class="w-1 h-6 bg-linear-to-b from-(--primary) to-transparent rounded-full"></div><h3 class="text-xl font-bold text-(--btn-content)">${i18n(I18nKey.commentSection)}</h3></div><p class="text-sm text-(--content-meta) ml-4">${i18n(I18nKey.commentSubtitle)}</p></div><!-- 评论内容区域 --><div class="relative z-10 pl-2 pr-2">${commentService === "twikoo" && renderTemplate`${renderComponent($$result, "Twikoo", $$Twikoo, { "path": path })}`}${commentService === "waline" && renderTemplate`${renderComponent($$result, "Waline", $$Waline, { "path": path })}`}${commentService === "giscus" && renderTemplate`${renderComponent($$result, "Giscus", $$Giscus, {})}`}${commentService === "disqus" && renderTemplate`${renderComponent($$result, "Disqus", $$Disqus, {
		"identifier": slug,
		"url": url,
		"title": customTitle || postTitle || slug
	})}`}${commentService === "artalk" && renderTemplate`${renderComponent($$result, "Artalk", $$Artalk, { "path": path })}`}${commentService === "none" && renderTemplate`<div class="text-center py-8 text-(--content-meta)"><div class="w-16 h-16 mx-auto mb-4 rounded-full bg-(--btn-regular-bg) flex items-center justify-center"><svg class="w-8 h-8 text-(--primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><p>${i18n(I18nKey.commentNotConfigured)}</p></div>`}</div></div>`}`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/comment/index.astro", void 0);
//#endregion
export { $$Index as t };
