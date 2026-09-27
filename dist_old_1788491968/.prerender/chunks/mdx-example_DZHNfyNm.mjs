import { M as unescapeHTML, P as createAstro, S as maybeRenderHead, m as Fragment, n as createVNode, r as __astro_tag_component__, v as renderSlot, w as addAttribute, x as renderTemplate } from "./jsx-runtime_DmRdA9YB.mjs";
import { a as createComponent } from "./consts_B65GORk9.mjs";
import "./compiler_CSCq9Wq8.mjs";
import * as $ from "svelte/internal/server";
//#region src/components/common/Badge.astro
createAstro("https://fengqiyunxing.github.io");
var $$Badge = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Badge;
	const { type = "default", class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute([
		"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap align-middle",
		{
			default: "bg-(--primary)/12 text-(--primary)",
			tip: "bg-(--admonitions-color-tip)/12 text-(--admonitions-color-tip)",
			note: "bg-(--admonitions-color-note)/12 text-(--admonitions-color-note)",
			important: "bg-(--admonitions-color-important)/12 text-(--admonitions-color-important)",
			warning: "bg-(--admonitions-color-warning)/12 text-(--admonitions-color-warning)",
			caution: "bg-(--admonitions-color-caution)/12 text-(--admonitions-color-caution)"
		}[type],
		className
	], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/common/Badge.astro", void 0);
//#endregion
//#region src/components/common/mdx-icons.ts
var ICONS = {
	star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
	rocket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`,
	git: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
	flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`,
	book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
	heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
	zap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
	bug: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 2 1.88 1.88"></path><path d="M14.12 3.88 16 2"></path><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"></path><path d="M12 20v-9"></path><path d="M6.53 9C4.6 8.8 3 7.1 3 5"></path><path d="M6 13H2"></path><path d="M3 21c0-2.1 1.7-3.9 3.8-4"></path><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></path><path d="M22 13h-4"></path><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"></path></svg>`,
	tag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`,
	calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
	code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
	edit: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>`
};
//#endregion
//#region src/components/common/StepItem.astro
createAstro("https://fengqiyunxing.github.io");
var $$StepItem = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StepItem;
	const { title, type = "default", icon } = Astro.props;
	const iconHtml = icon ? ICONS[icon] : void 0;
	return renderTemplate`${maybeRenderHead($$result)}<li class="step-item"${addAttribute(type, "data-type")} data-astro-cid-ppk3eakv><span class="step-marker" aria-hidden="true" data-astro-cid-ppk3eakv>${iconHtml && renderTemplate`<span class="step-marker-icon" data-astro-cid-ppk3eakv>${unescapeHTML(iconHtml)}</span>`}</span><div class="step-content" data-astro-cid-ppk3eakv>${title && renderTemplate`<div class="step-item-title" data-astro-cid-ppk3eakv>${title}</div>`}<div class="step-item-body" data-astro-cid-ppk3eakv>${renderSlot($$result, $$slots["default"])}</div></div></li>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/common/StepItem.astro", void 0);
//#endregion
//#region src/components/common/Steps.astro
var $$Steps = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<ol class="steps" data-astro-cid-ohj6tiyf>${renderSlot($$result, $$slots["default"])}</ol>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/common/Steps.astro", void 0);
//#endregion
//#region src/components/common/TabGroup.svelte
function TabGroup($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { labels, children } = $$props;
		let active = 0;
		const tabs = $.derived(() => Array.isArray(labels) ? labels : []);
		$$renderer.push(`<div class="code-group svelte-7vue54"><div class="code-group-tabs svelte-7vue54" role="tablist"><!--[-->`);
		const each_array = $.ensure_array_like(tabs());
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let label = each_array[i];
			$$renderer.push(`<button${$.attr_class("code-group-tab svelte-7vue54", void 0, { "active": i === active })} role="tab"${$.attr("aria-selected", i === active)} type="button">${$.escape(label)}</button>`);
		}
		$$renderer.push(`<!--]--></div> <div class="code-group-blocks">`);
		children?.($$renderer);
		$$renderer.push(`<!----></div></div>`);
	});
}
//#endregion
//#region src/components/common/Timeline.astro
var $$Timeline = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<ol class="timeline" data-astro-cid-ej3hckmv>${renderSlot($$result, $$slots["default"])}</ol>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/common/Timeline.astro", void 0);
//#endregion
//#region src/components/common/TimelineItem.astro
createAstro("https://fengqiyunxing.github.io");
var $$TimelineItem = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TimelineItem;
	const { date, title, type = "default", icon } = Astro.props;
	const iconHtml = icon ? ICONS[icon] : void 0;
	return renderTemplate`${maybeRenderHead($$result)}<li class="timeline-item"${addAttribute(type, "data-type")} data-astro-cid-3zqaxjvk><div class="timeline-marker" aria-hidden="true" data-astro-cid-3zqaxjvk>${iconHtml && renderTemplate`<span class="timeline-marker-icon" data-astro-cid-3zqaxjvk>${unescapeHTML(iconHtml)}</span>`}</div><div class="timeline-content" data-astro-cid-3zqaxjvk>${date && renderTemplate`<div class="timeline-item-date" data-astro-cid-3zqaxjvk>${date}</div>`}${title && renderTemplate`<div class="timeline-item-title" data-astro-cid-3zqaxjvk>${title}</div>`}<div class="timeline-item-body" data-astro-cid-3zqaxjvk>${renderSlot($$result, $$slots["default"])}</div></div></li>`;
}, "D:/求职/存储/fengqiyunxing.github.io/src/components/common/TimelineItem.astro", void 0);
//#endregion
//#region src/content/posts/mdx-example.mdx
var frontmatter = {
	"title": "MDX 格式文章示例",
	"published": "1970-01-02T00:00:00.000Z",
	"description": "这是一个 MDX 格式的示例文章，展示了如何在 Markdown 中使用 JSX。",
	"tags": [
		"MDX",
		"Markdown",
		"文章示例"
	],
	"category": "文章示例",
	"image": "api",
	"slug": "mdx-example",
	"series": "Firefly 功能示例2",
	"seriesOrder": 7,
	"minutes": 4,
	"words": 833,
	"excerpt": "这里列出 Firefly 内置的 MDX UI 组件，方便在 MDX 文章中直接使用。"
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "markdown-和-mdx-的区别",
			"text": "Markdown 和 MDX 的区别#"
		},
		{
			"depth": 2,
			"slug": "firefly-内置的专属-mdx-ui-组件",
			"text": "Firefly 内置的专属 MDX UI 组件#"
		},
		{
			"depth": 3,
			"slug": "tab分组tabgroup",
			"text": "Tab分组：TabGroup#"
		},
		{
			"depth": 3,
			"slug": "时间线timeline--timelineitem",
			"text": "时间线：Timeline / TimelineItem#"
		},
		{
			"depth": 3,
			"slug": "步骤条steps--stepitem",
			"text": "步骤条：Steps / StepItem#"
		},
		{
			"depth": 3,
			"slug": "徽章badge",
			"text": "徽章：Badge#"
		}
	];
}
function _createMdxContent(props) {
	const _components = {
		a: "a",
		button: "button",
		code: "code",
		div: "div",
		figcaption: "figcaption",
		figure: "figure",
		h2: "h2",
		h3: "h3",
		hr: "hr",
		li: "li",
		link: "link",
		p: "p",
		path: "path",
		pre: "pre",
		script: "script",
		section: "section",
		span: "span",
		strong: "strong",
		svg: "svg",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	};
	return createVNode(Fragment, { children: [
		createVNode(_components.div, {
			class: "callout",
			"data-callout": "tip",
			"data-collapsible": "false",
			children: [createVNode(_components.div, {
				class: "callout-title",
				children: [createVNode(_components.div, {
					class: "callout-title-icon",
					"aria-hidden": "true",
					children: createVNode(_components.svg, {
						xmlns: "http://www.w3.org/2000/svg",
						width: "1em",
						height: "1em",
						viewBox: "0 0 16 16",
						fill: "currentColor",
						children: createVNode(_components.path, { d: "M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" })
					})
				}), createVNode(_components.div, {
					class: "callout-title-text",
					children: "Tip"
				})]
			}), createVNode(_components.div, {
				class: "callout-content",
				children: createVNode(_components.p, { children: [
					"Firefly 支持 ",
					createVNode(_components.code, { children: "MDX" }),
					" 和 ",
					createVNode(_components.code, { children: "Markdown" }),
					" 两种类型的文章，你可以在文章中混合使用两种格式，如果没有特别复杂内容和需求，推荐使用 Markdown 格式就够了。"
				] })
			})]
		}),
		"\n",
		createVNode(_components.section, { children: [
			createVNode(_components.h2, {
				id: "markdown-和-mdx-的区别",
				children: ["Markdown 和 MDX 的区别", createVNode(_components.a, {
					class: "anchor",
					href: "#markdown-和-mdx-的区别",
					children: createVNode(_components.span, {
						class: "anchor-icon",
						"data-pagefind-ignore": true,
						children: "#"
					})
				})]
			}),
			createVNode(_components.ul, { children: [
				"\n",
				createVNode(_components.li, { children: "Markdown (MD) 是一种轻量级标记语言，允许用户使用纯文本格式编写文档，然后将其转换为格式化的HTML。它因其简洁易用的语法而广受欢迎，特别适合编写文档和博客文章。" }),
				"\n",
				createVNode(_components.li, { children: "MDX 是一种扩展了 Markdown 语法的格式，允许在 Markdown 文档中无缝地插入 JSX 代码。通过 MDX，用户可以在文档中嵌入 React 组件，从而实现更丰富的交互性和动态性。" }),
				"\n"
			] }),
			"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
			createVNode(_components.table, { children: [createVNode(_components.thead, { children: createVNode(_components.tr, { children: [
				createVNode(_components.th, {
					style: { textAlign: "left" },
					children: "特性"
				}),
				createVNode(_components.th, {
					style: { textAlign: "left" },
					children: "Markdown"
				}),
				createVNode(_components.th, {
					style: { textAlign: "left" },
					children: "MDX"
				})
			] }) }), createVNode(_components.tbody, { children: [
				createVNode(_components.tr, { children: [
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "基础语法"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "支持 (CommonMark)"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "支持 (CommonMark)"
					})
				] }),
				createVNode(_components.tr, { children: [
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "HTML 标签"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "支持"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "支持 (作为 JSX)"
					})
				] }),
				createVNode(_components.tr, { children: [
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "组件导入"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "不支持"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "支持 (import)"
					})
				] }),
				createVNode(_components.tr, { children: [
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "动态数据"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "不支持"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "支持 (JS 表达式)"
					})
				] }),
				createVNode(_components.tr, { children: [
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "样式定制"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "有限 (class/style)"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "灵活 (className/CSS-in-JS)"
					})
				] })
			] })] }),
			createVNode(_components.hr, {})
		] }),
		"\n",
		createVNode(_components.section, { children: [
			createVNode(_components.h2, {
				id: "firefly-内置的专属-mdx-ui-组件",
				children: ["Firefly 内置的专属 MDX UI 组件", createVNode(_components.a, {
					class: "anchor",
					href: "#firefly-内置的专属-mdx-ui-组件",
					children: createVNode(_components.span, {
						class: "anchor-icon",
						"data-pagefind-ignore": true,
						children: "#"
					})
				})]
			}),
			createVNode(_components.p, { children: "这里列出 Firefly 内置的 MDX UI 组件，方便在 MDX 文章中直接使用。" }),
			createVNode(_components.section, { children: [
				createVNode(_components.h3, {
					id: "tab分组tabgroup",
					children: [
						"Tab分组：",
						createVNode(_components.code, { children: "TabGroup" }),
						createVNode(_components.a, {
							class: "anchor",
							href: "#tab分组tabgroup",
							children: createVNode(_components.span, {
								class: "anchor-icon",
								"data-pagefind-ignore": true,
								children: "#"
							})
						})
					]
				}),
				createVNode(_components.p, { children: "用于创建可切换的标签页，方便在文章中展示不同语言或不同版本的代码等等。" }),
				createVNode(_components.div, {
					class: "expressive-code",
					children: [
						createVNode(_components.link, {
							rel: "stylesheet",
							href: "/_astro/ec.gtzw0.css"
						}),
						createVNode(_components.script, {
							type: "module",
							src: "/_astro/ec.xb3ii.js"
						}),
						createVNode(_components.figure, {
							class: "frame",
							children: [
								createVNode(_components.figcaption, { class: "header" }),
								createVNode(_components.pre, {
									"data-language": "mdx",
									children: createVNode(_components.code, { children: [
										createVNode(_components.div, {
											class: "ec-line",
											children: [createVNode(_components.div, {
												class: "gutter",
												children: createVNode(_components.div, {
													class: "ln",
													"aria-hidden": "true",
													children: "1"
												})
											}), createVNode(_components.div, {
												class: "code",
												children: [
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "<"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#E5C07B",
															"--1": "#885D01"
														},
														children: "TabGroup"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: " "
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#D19A66",
															"--0fs": "italic",
															"--1": "#875D01"
														},
														children: "labels"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#56B6C2",
															"--1": "#383A42"
														},
														children: "="
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#CD89E1",
															"--1": "#C71242"
														},
														children: "{"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "["
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#98C379",
															"--1": "#387138"
														},
														children: "\"test.js\""
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: ", "
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#98C379",
															"--1": "#387138"
														},
														children: "\"test.py\""
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "]"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#CD89E1",
															"--1": "#C71242"
														},
														children: "}"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: " "
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#D19A66",
															"--1": "#875D01"
														},
														children: "client"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: ":"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#D19A66",
															"--0fs": "italic",
															"--1": "#875D01"
														},
														children: "load"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: ">"
													})
												]
											})]
										}),
										createVNode(_components.div, {
											class: "ec-line",
											children: [createVNode(_components.div, {
												class: "gutter",
												children: createVNode(_components.div, {
													class: "ln",
													"aria-hidden": "true",
													children: "2"
												})
											}), createVNode(_components.div, {
												class: "code",
												children: [
													createVNode(_components.span, {
														class: "indent",
														children: "  "
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#98C379",
															"--1": "#387138"
														},
														children: "```"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#61AFEF",
															"--1": "#3360C1"
														},
														children: "js"
													})
												]
											})]
										}),
										createVNode(_components.div, {
											class: "ec-line",
											children: [createVNode(_components.div, {
												class: "gutter",
												children: createVNode(_components.div, {
													class: "ln",
													"aria-hidden": "true",
													children: "3"
												})
											}), createVNode(_components.div, {
												class: "code",
												children: [
													createVNode(_components.span, {
														class: "indent",
														children: createVNode(_components.span, {
															style: { "--1": "#383A42" },
															children: "  "
														})
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#E5C07B",
															"--1": "#383A42"
														},
														children: "console"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "."
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#61AFEF",
															"--1": "#3360C1"
														},
														children: "log"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "("
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#D19A66",
															"--1": "#875D01"
														},
														children: "1"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: ")"
													})
												]
											})]
										}),
										createVNode(_components.div, {
											class: "ec-line",
											children: [createVNode(_components.div, {
												class: "gutter",
												children: createVNode(_components.div, {
													class: "ln",
													"aria-hidden": "true",
													children: "4"
												})
											}), createVNode(_components.div, {
												class: "code",
												children: [createVNode(_components.span, {
													class: "indent",
													children: "  "
												}), createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "```"
												})]
											})]
										}),
										createVNode(_components.div, {
											class: "ec-line",
											children: [createVNode(_components.div, {
												class: "gutter",
												children: createVNode(_components.div, {
													class: "ln",
													"aria-hidden": "true",
													children: "5"
												})
											}), createVNode(_components.div, {
												class: "code",
												children: "\n"
											})]
										}),
										createVNode(_components.div, {
											class: "ec-line",
											children: [createVNode(_components.div, {
												class: "gutter",
												children: createVNode(_components.div, {
													class: "ln",
													"aria-hidden": "true",
													children: "6"
												})
											}), createVNode(_components.div, {
												class: "code",
												children: [
													createVNode(_components.span, {
														class: "indent",
														children: "  "
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#98C379",
															"--1": "#387138"
														},
														children: "```"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#61AFEF",
															"--1": "#3360C1"
														},
														children: "py"
													})
												]
											})]
										}),
										createVNode(_components.div, {
											class: "ec-line",
											children: [createVNode(_components.div, {
												class: "gutter",
												children: createVNode(_components.div, {
													class: "ln",
													"aria-hidden": "true",
													children: "7"
												})
											}), createVNode(_components.div, {
												class: "code",
												children: [
													createVNode(_components.span, {
														class: "indent",
														children: "  "
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#56B6C2",
															"--1": "#016C9A"
														},
														children: "print"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "("
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#98C379",
															"--1": "#387138"
														},
														children: "\"hello world\""
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: ")"
													})
												]
											})]
										}),
										createVNode(_components.div, {
											class: "ec-line",
											children: [createVNode(_components.div, {
												class: "gutter",
												children: createVNode(_components.div, {
													class: "ln",
													"aria-hidden": "true",
													children: "8"
												})
											}), createVNode(_components.div, {
												class: "code",
												children: [createVNode(_components.span, {
													class: "indent",
													children: "  "
												}), createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "```"
												})]
											})]
										}),
										createVNode(_components.div, {
											class: "ec-line",
											children: [createVNode(_components.div, {
												class: "gutter",
												children: createVNode(_components.div, {
													class: "ln",
													"aria-hidden": "true",
													children: "9"
												})
											}), createVNode(_components.div, {
												class: "code",
												children: [
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "</"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#E5C07B",
															"--1": "#885D01"
														},
														children: "TabGroup"
													}),
													createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: ">"
													})
												]
											})]
										})
									] })
								}),
								createVNode(_components.div, {
									class: "copy",
									children: [createVNode(_components.div, { "aria-live": "polite" }), createVNode(_components.button, {
										title: "Copy to clipboard",
										"data-copied": "Copied!",
										"data-code": "<TabGroup labels={[\"test.js\", \"test.py\"]} client:load>  ```js  console.log(1)  ```  ```py  print(\"hello world\")  ```</TabGroup>",
										children: createVNode(_components.div, {})
									})]
								})
							]
						})
					]
				}),
				createVNode(TabGroup, {
					labels: ["test.js", "test.py"],
					"client:load": true,
					"client:component-path": "@components/firefly-mdx",
					"client:component-export": "TabGroup",
					"client:component-hydration": true,
					children: [createVNode(_components.div, {
						class: "expressive-code",
						children: createVNode(_components.figure, {
							class: "frame",
							children: [
								createVNode(_components.figcaption, { class: "header" }),
								createVNode(_components.pre, {
									"data-language": "js",
									children: createVNode(_components.code, { children: createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "1"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													style: { "--1": "#383A42" },
													children: [createVNode(_components.span, {
														style: { "--0": "#E5C07B" },
														children: "console"
													}), createVNode(_components.span, {
														style: { "--0": "#ABB2BF" },
														children: "."
													})]
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#61AFEF",
														"--1": "#3360C1"
													},
													children: "log"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "("
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#D19A66",
														"--1": "#875D01"
													},
													children: "1"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ")"
												})
											]
										})]
									}) })
								}),
								createVNode(_components.div, {
									class: "copy",
									children: [createVNode(_components.div, { "aria-live": "polite" }), createVNode(_components.button, {
										title: "Copy to clipboard",
										"data-copied": "Copied!",
										"data-code": "console.log(1)",
										children: createVNode(_components.div, {})
									})]
								})
							]
						})
					}), createVNode(_components.div, {
						class: "expressive-code",
						children: createVNode(_components.figure, {
							class: "frame",
							children: [
								createVNode(_components.figcaption, { class: "header" }),
								createVNode(_components.pre, {
									"data-language": "py",
									children: createVNode(_components.code, { children: createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "1"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													style: {
														"--0": "#56B6C2",
														"--1": "#016C9A"
													},
													children: "print"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "("
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "\"hello world\""
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ")"
												})
											]
										})]
									}) })
								}),
								createVNode(_components.div, {
									class: "copy",
									children: [createVNode(_components.div, { "aria-live": "polite" }), createVNode(_components.button, {
										title: "Copy to clipboard",
										"data-copied": "Copied!",
										"data-code": "print(\"hello world\")",
										children: createVNode(_components.div, {})
									})]
								})
							]
						})
					})]
				}),
				createVNode(_components.hr, {})
			] }),
			createVNode(_components.section, { children: [
				createVNode(_components.h3, {
					id: "时间线timeline--timelineitem",
					children: [
						"时间线：",
						createVNode(_components.code, { children: "Timeline" }),
						" / ",
						createVNode(_components.code, { children: "TimelineItem" }),
						createVNode(_components.a, {
							class: "anchor",
							href: "#时间线timeline--timelineitem",
							children: createVNode(_components.span, {
								class: "anchor-icon",
								"data-pagefind-ignore": true,
								children: "#"
							})
						})
					]
				}),
				"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
				createVNode(_components.table, { children: [createVNode(_components.thead, { children: createVNode(_components.tr, { children: [
					createVNode(_components.th, {
						style: { textAlign: "left" },
						children: "属性"
					}),
					createVNode(_components.th, {
						style: { textAlign: "left" },
						children: "必填"
					}),
					createVNode(_components.th, {
						style: { textAlign: "left" },
						children: "说明"
					})
				] }) }), createVNode(_components.tbody, { children: [
					createVNode(_components.tr, { children: [
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: createVNode(_components.code, { children: "date" })
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "否"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "时间标签，如 “2024-03-10”"
						})
					] }),
					createVNode(_components.tr, { children: [
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: createVNode(_components.code, { children: "title" })
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "否"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "条目标题"
						})
					] }),
					createVNode(_components.tr, { children: [
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: createVNode(_components.code, { children: "type" })
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "否"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "节点颜色，default 为主题色，其余对应提示框色板（tip / note / important / warning / caution）"
						})
					] }),
					createVNode(_components.tr, { children: [
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: createVNode(_components.code, { children: "icon" })
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "否"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "内置图标名，显示在圆点内：star / rocket / git / flag / book / heart / zap / bug / tag / calendar / code / edit"
						})
					] }),
					createVNode(_components.tr, { children: [
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "正文"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "否"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: [createVNode(_components.code, { children: "<TimelineItem>" }), " 标签内的内容，支持 Markdown"]
						})
					] })
				] })] }),
				createVNode(_components.div, {
					class: "expressive-code",
					children: createVNode(_components.div, {
						class: "ec-collapse ec-collapse--collapsed",
						id: "collapse-5q05wrlrw",
						"data-collapse-preview-lines": "8",
						"data-expanded-announcement": "代码块已展开",
						"data-collapsed-announcement": "代码块已折叠",
						children: [createVNode(_components.div, {
							class: "ec-collapse__content",
							children: [createVNode(_components.figure, {
								class: "frame",
								children: [
									createVNode(_components.figcaption, { class: "header" }),
									createVNode(_components.pre, {
										"data-language": "mdx",
										children: createVNode(_components.code, { children: [
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "1"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "<"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#E5C07B",
																"--1": "#885D01"
															},
															children: "Timeline"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: ">"
														})
													]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "2"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [
														createVNode(_components.span, {
															class: "indent",
															children: createVNode(_components.span, {
																style: {
																	"--0": "#ABB2BF",
																	"--1": "#383A42"
																},
																children: "  "
															})
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "<"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#E5C07B",
																"--1": "#885D01"
															},
															children: "TimelineItem"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "date"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"2026-08-16\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "title"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"新版本发布\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "icon"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"rocket\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: ">"
														})
													]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "3"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [createVNode(_components.span, {
														class: "indent",
														children: createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "    "
														})
													}), createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "发布了全新版本，带来以下更新："
													})]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "4"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: "\n"
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "5"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [createVNode(_components.span, {
														class: "indent",
														children: createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "    "
														})
													}), createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "- 新增时间线组件"
													})]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "6"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [createVNode(_components.span, {
														class: "indent",
														children: createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "    "
														})
													}), createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "- 改进暗色主题"
													})]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "7"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: "\n"
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "8"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [
														createVNode(_components.span, {
															class: "indent",
															children: createVNode(_components.span, {
																style: {
																	"--0": "#ABB2BF",
																	"--1": "#383A42"
																},
																children: "    "
															})
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "正文里支持 "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "**"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "Markdown"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "**"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " 内容。"
														})
													]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "9"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [
														createVNode(_components.span, {
															class: "indent",
															children: createVNode(_components.span, {
																style: {
																	"--0": "#ABB2BF",
																	"--1": "#383A42"
																},
																children: "  "
															})
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "</"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#E5C07B",
																"--1": "#885D01"
															},
															children: "TimelineItem"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: ">"
														})
													]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "10"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [
														createVNode(_components.span, {
															class: "indent",
															children: createVNode(_components.span, {
																style: {
																	"--0": "#ABB2BF",
																	"--1": "#383A42"
																},
																children: "  "
															})
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "<"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#E5C07B",
																"--1": "#885D01"
															},
															children: "TimelineItem"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "date"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"2025-11-02\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "title"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"站点上线\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "type"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"tip\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "icon"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"flag\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: ">"
														})
													]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "11"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [createVNode(_components.span, {
														class: "indent",
														children: createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "    "
														})
													}), createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "欢迎来到我的博客。"
													})]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "12"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [
														createVNode(_components.span, {
															class: "indent",
															children: createVNode(_components.span, {
																style: {
																	"--0": "#ABB2BF",
																	"--1": "#383A42"
																},
																children: "  "
															})
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "</"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#E5C07B",
																"--1": "#885D01"
															},
															children: "TimelineItem"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: ">"
														})
													]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "13"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [
														createVNode(_components.span, {
															class: "indent",
															children: createVNode(_components.span, {
																style: {
																	"--0": "#ABB2BF",
																	"--1": "#383A42"
																},
																children: "  "
															})
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "<"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#E5C07B",
																"--1": "#885D01"
															},
															children: "TimelineItem"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "date"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"2025-06-15\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "title"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"项目立项\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: " "
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#D19A66",
																"--0fs": "italic",
																"--1": "#875D01"
															},
															children: "type"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#56B6C2",
																"--1": "#383A42"
															},
															children: "="
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#98C379",
																"--1": "#387138"
															},
															children: "\"note\""
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: ">"
														})
													]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "14"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [createVNode(_components.span, {
														class: "indent",
														children: createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "    "
														})
													}), createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "开始规划 Firefly 主题。"
													})]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "15"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [
														createVNode(_components.span, {
															class: "indent",
															children: createVNode(_components.span, {
																style: {
																	"--0": "#ABB2BF",
																	"--1": "#383A42"
																},
																children: "  "
															})
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "</"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#E5C07B",
																"--1": "#885D01"
															},
															children: "TimelineItem"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: ">"
														})
													]
												})]
											}),
											createVNode(_components.div, {
												class: "ec-line",
												children: [createVNode(_components.div, {
													class: "gutter",
													children: createVNode(_components.div, {
														class: "ln",
														"aria-hidden": "true",
														children: "16"
													})
												}), createVNode(_components.div, {
													class: "code",
													children: [
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: "</"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#E5C07B",
																"--1": "#885D01"
															},
															children: "Timeline"
														}),
														createVNode(_components.span, {
															style: {
																"--0": "#ABB2BF",
																"--1": "#383A42"
															},
															children: ">"
														})
													]
												})]
											})
										] })
									}),
									createVNode(_components.div, {
										class: "copy",
										children: [createVNode(_components.div, { "aria-live": "polite" }), createVNode(_components.button, {
											title: "Copy to clipboard",
											"data-copied": "Copied!",
											"data-code": "<Timeline>  <TimelineItem date=\"2026-08-16\" title=\"新版本发布\" icon=\"rocket\">    发布了全新版本，带来以下更新：    - 新增时间线组件    - 改进暗色主题    正文里支持 **Markdown** 内容。  </TimelineItem>  <TimelineItem date=\"2025-11-02\" title=\"站点上线\" type=\"tip\" icon=\"flag\">    欢迎来到我的博客。  </TimelineItem>  <TimelineItem date=\"2025-06-15\" title=\"项目立项\" type=\"note\">    开始规划 Firefly 主题。  </TimelineItem></Timeline>",
											children: createVNode(_components.div, {})
										})]
									})
								]
							}), createVNode(_components.div, {
								class: "ec-collapse__gradient",
								"aria-hidden": "true"
							})]
						}), createVNode(_components.button, {
							class: "ec-collapse__toggle",
							type: "button",
							"aria-expanded": "false",
							"aria-controls": "collapse-5q05wrlrw",
							children: [
								createVNode(_components.span, {
									class: "ec-collapse__text-expand",
									children: "展开"
								}),
								createVNode(_components.span, {
									class: "ec-collapse__text-collapse",
									children: "收起"
								}),
								createVNode(_components.svg, {
									class: "ec-collapse__icon",
									xmlns: "http://www.w3.org/2000/svg",
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									"aria-hidden": "true",
									children: createVNode(_components.path, {
										fill: "none",
										stroke: "currentColor",
										"stroke-width": "2",
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										d: "M6 9l6 6 6-6"
									})
								})
							]
						})]
					})
				}),
				createVNode($$Timeline, { children: [
					createVNode($$TimelineItem, {
						date: "2026-08-16",
						title: "新版本发布",
						icon: "rocket",
						children: [
							createVNode(_components.p, { children: "发布了全新版本，带来以下更新：" }),
							createVNode(_components.ul, { children: [
								"\n",
								createVNode(_components.li, { children: "新增时间线组件" }),
								"\n",
								createVNode(_components.li, { children: "改进暗色主题" }),
								"\n"
							] }),
							createVNode(_components.p, { children: [
								"正文里支持 ",
								createVNode(_components.strong, { children: "Markdown" }),
								" 内容。"
							] })
						]
					}),
					createVNode($$TimelineItem, {
						date: "2025-11-02",
						title: "站点上线",
						type: "tip",
						icon: "flag",
						children: createVNode(_components.p, { children: "欢迎来到我的博客。" })
					}),
					createVNode($$TimelineItem, {
						date: "2025-06-15",
						title: "项目立项",
						type: "note",
						children: createVNode(_components.p, { children: "开始规划 Firefly 主题。" })
					})
				] }),
				createVNode(_components.hr, {})
			] }),
			createVNode(_components.section, { children: [
				createVNode(_components.h3, {
					id: "步骤条steps--stepitem",
					children: [
						"步骤条：",
						createVNode(_components.code, { children: "Steps" }),
						" / ",
						createVNode(_components.code, { children: "StepItem" }),
						createVNode(_components.a, {
							class: "anchor",
							href: "#步骤条steps--stepitem",
							children: createVNode(_components.span, {
								class: "anchor-icon",
								"data-pagefind-ignore": true,
								children: "#"
							})
						})
					]
				}),
				createVNode(_components.p, { children: "编号步骤条，适合教程、部署流程。编号自动生成，无需手动传序号。" }),
				"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
				createVNode(_components.table, { children: [createVNode(_components.thead, { children: createVNode(_components.tr, { children: [
					createVNode(_components.th, {
						style: { textAlign: "left" },
						children: "属性"
					}),
					createVNode(_components.th, {
						style: { textAlign: "left" },
						children: "必填"
					}),
					createVNode(_components.th, {
						style: { textAlign: "left" },
						children: "说明"
					})
				] }) }), createVNode(_components.tbody, { children: [
					createVNode(_components.tr, { children: [
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: createVNode(_components.code, { children: "title" })
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "否"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "步骤标题"
						})
					] }),
					createVNode(_components.tr, { children: [
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: createVNode(_components.code, { children: "type" })
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "否"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "编号圆颜色，default 为主题色，其余对应提示框色板（tip / note / important / warning / caution）"
						})
					] }),
					createVNode(_components.tr, { children: [
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: createVNode(_components.code, { children: "icon" })
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "否"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "内置图标名，有图标时显示图标而非数字（star / rocket / git / flag / book / heart / zap / bug / tag / calendar / code / edit）"
						})
					] }),
					createVNode(_components.tr, { children: [
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "正文"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: "否"
						}),
						createVNode(_components.td, {
							style: { textAlign: "left" },
							children: [createVNode(_components.code, { children: "<StepItem>" }), " 标签内的内容，支持 Markdown"]
						})
					] })
				] })] }),
				createVNode(_components.div, {
					class: "expressive-code",
					children: createVNode(_components.figure, {
						class: "frame",
						children: [
							createVNode(_components.figcaption, { class: "header" }),
							createVNode(_components.pre, {
								"data-language": "mdx",
								children: createVNode(_components.code, { children: [
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "1"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "<"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#E5C07B",
														"--1": "#885D01"
													},
													children: "Steps"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ">"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "2"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													class: "indent",
													children: createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "  "
													})
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "<"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#E5C07B",
														"--1": "#885D01"
													},
													children: "StepItem"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: " "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#D19A66",
														"--0fs": "italic",
														"--1": "#875D01"
													},
													children: "title"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#56B6C2",
														"--1": "#383A42"
													},
													children: "="
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "\"安装依赖\""
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ">"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "3"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													class: "indent",
													children: createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "    "
													})
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "运行 "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#387138"
													},
													children: "pnpm install"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "。"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "4"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													class: "indent",
													children: createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "  "
													})
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "</"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#E5C07B",
														"--1": "#885D01"
													},
													children: "StepItem"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ">"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "5"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													class: "indent",
													children: createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "  "
													})
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "<"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#E5C07B",
														"--1": "#885D01"
													},
													children: "StepItem"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: " "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#D19A66",
														"--0fs": "italic",
														"--1": "#875D01"
													},
													children: "title"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#56B6C2",
														"--1": "#383A42"
													},
													children: "="
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "\"启动开发服务器\""
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: " "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#D19A66",
														"--0fs": "italic",
														"--1": "#875D01"
													},
													children: "type"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#56B6C2",
														"--1": "#383A42"
													},
													children: "="
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "\"tip\""
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: " "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#D19A66",
														"--0fs": "italic",
														"--1": "#875D01"
													},
													children: "icon"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#56B6C2",
														"--1": "#383A42"
													},
													children: "="
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "\"rocket\""
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ">"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "6"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													class: "indent",
													children: createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "    "
													})
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "运行 "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#387138"
													},
													children: "pnpm dev"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "，打开 "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#387138"
													},
													children: "localhost:4321"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "。"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "7"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													class: "indent",
													children: createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "  "
													})
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "</"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#E5C07B",
														"--1": "#885D01"
													},
													children: "StepItem"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ">"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "8"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													class: "indent",
													children: createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "  "
													})
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "<"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#E5C07B",
														"--1": "#885D01"
													},
													children: "StepItem"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: " "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#D19A66",
														"--0fs": "italic",
														"--1": "#875D01"
													},
													children: "title"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#56B6C2",
														"--1": "#383A42"
													},
													children: "="
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "\"编写文章\""
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ">"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "9"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													class: "indent",
													children: createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "    "
													})
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "在 "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#387138"
													},
													children: "src/content/posts/"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: " 新建 "
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#387138"
													},
													children: ".mdx"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#98C379",
														"--1": "#387138"
													},
													children: "`"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: " 文章。"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "10"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													class: "indent",
													children: createVNode(_components.span, {
														style: {
															"--0": "#ABB2BF",
															"--1": "#383A42"
														},
														children: "  "
													})
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "</"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#E5C07B",
														"--1": "#885D01"
													},
													children: "StepItem"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ">"
												})
											]
										})]
									}),
									createVNode(_components.div, {
										class: "ec-line",
										children: [createVNode(_components.div, {
											class: "gutter",
											children: createVNode(_components.div, {
												class: "ln",
												"aria-hidden": "true",
												children: "11"
											})
										}), createVNode(_components.div, {
											class: "code",
											children: [
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: "</"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#E5C07B",
														"--1": "#885D01"
													},
													children: "Steps"
												}),
												createVNode(_components.span, {
													style: {
														"--0": "#ABB2BF",
														"--1": "#383A42"
													},
													children: ">"
												})
											]
										})]
									})
								] })
							}),
							createVNode(_components.div, {
								class: "copy",
								children: [createVNode(_components.div, { "aria-live": "polite" }), createVNode(_components.button, {
									title: "Copy to clipboard",
									"data-copied": "Copied!",
									"data-code": "<Steps>  <StepItem title=\"安装依赖\">    运行 `pnpm install`。  </StepItem>  <StepItem title=\"启动开发服务器\" type=\"tip\" icon=\"rocket\">    运行 `pnpm dev`，打开 `localhost:4321`。  </StepItem>  <StepItem title=\"编写文章\">    在 `src/content/posts/` 新建 `.mdx` 文章。  </StepItem></Steps>",
									children: createVNode(_components.div, {})
								})]
							})
						]
					})
				}),
				createVNode($$Steps, { children: [
					createVNode($$StepItem, {
						title: "安装依赖",
						children: createVNode(_components.p, { children: [
							"运行 ",
							createVNode(_components.code, { children: "pnpm install" }),
							"。"
						] })
					}),
					createVNode($$StepItem, {
						title: "启动开发服务器",
						type: "tip",
						icon: "rocket",
						children: createVNode(_components.p, { children: [
							"运行 ",
							createVNode(_components.code, { children: "pnpm dev" }),
							"，打开 ",
							createVNode(_components.code, { children: "localhost:4321" }),
							"。"
						] })
					}),
					createVNode($$StepItem, {
						title: "编写文章",
						children: createVNode(_components.p, { children: [
							"在 ",
							createVNode(_components.code, { children: "src/content/posts/" }),
							" 新建 ",
							createVNode(_components.code, { children: ".mdx" }),
							" 文章。"
						] })
					})
				] }),
				createVNode(_components.hr, {})
			] }),
			createVNode(_components.section, { children: [
				createVNode(_components.h3, {
					id: "徽章badge",
					children: [
						"徽章：",
						createVNode(_components.code, { children: "Badge" }),
						createVNode(_components.a, {
							class: "anchor",
							href: "#徽章badge",
							children: createVNode(_components.span, {
								class: "anchor-icon",
								"data-pagefind-ignore": true,
								children: "#"
							})
						})
					]
				}),
				createVNode(_components.p, { children: "内联彩色小徽章，可嵌在段落或标题里。" }),
				"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
				createVNode(_components.table, { children: [createVNode(_components.thead, { children: createVNode(_components.tr, { children: [
					createVNode(_components.th, {
						style: { textAlign: "left" },
						children: "属性"
					}),
					createVNode(_components.th, {
						style: { textAlign: "left" },
						children: "必填"
					}),
					createVNode(_components.th, {
						style: { textAlign: "left" },
						children: "说明"
					})
				] }) }), createVNode(_components.tbody, { children: createVNode(_components.tr, { children: [
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: createVNode(_components.code, { children: "type" })
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "否"
					}),
					createVNode(_components.td, {
						style: { textAlign: "left" },
						children: "default 为主题色，其余对应提示框色板（tip / note / important / warning / caution）"
					})
				] }) })] }),
				createVNode(_components.div, {
					class: "expressive-code",
					children: createVNode(_components.figure, {
						class: "frame",
						children: [
							createVNode(_components.figcaption, { class: "header" }),
							createVNode(_components.pre, {
								"data-language": "mdx",
								children: createVNode(_components.code, { children: createVNode(_components.div, {
									class: "ec-line",
									children: [createVNode(_components.div, {
										class: "gutter",
										children: createVNode(_components.div, {
											class: "ln",
											"aria-hidden": "true",
											children: "1"
										})
									}), createVNode(_components.div, {
										class: "code",
										children: [
											createVNode(_components.span, {
												style: {
													"--0": "#ABB2BF",
													"--1": "#383A42"
												},
												children: "<"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#E5C07B",
													"--1": "#885D01"
												},
												children: "Badge"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#ABB2BF",
													"--1": "#383A42"
												},
												children: " "
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#D19A66",
													"--0fs": "italic",
													"--1": "#875D01"
												},
												children: "type"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#56B6C2",
													"--1": "#383A42"
												},
												children: "="
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#98C379",
													"--1": "#387138"
												},
												children: "\"tip\""
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#ABB2BF",
													"--1": "#383A42"
												},
												children: ">提示</"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#E5C07B",
													"--1": "#885D01"
												},
												children: "Badge"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#ABB2BF",
													"--1": "#383A42"
												},
												children: "> <"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#E5C07B",
													"--1": "#885D01"
												},
												children: "Badge"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#ABB2BF",
													"--1": "#383A42"
												},
												children: " "
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#D19A66",
													"--0fs": "italic",
													"--1": "#875D01"
												},
												children: "type"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#56B6C2",
													"--1": "#383A42"
												},
												children: "="
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#98C379",
													"--1": "#387138"
												},
												children: "\"warning\""
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#ABB2BF",
													"--1": "#383A42"
												},
												children: ">注意</"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#E5C07B",
													"--1": "#885D01"
												},
												children: "Badge"
											}),
											createVNode(_components.span, {
												style: {
													"--0": "#ABB2BF",
													"--1": "#383A42"
												},
												children: ">"
											})
										]
									})]
								}) })
							}),
							createVNode(_components.div, {
								class: "copy",
								children: [createVNode(_components.div, { "aria-live": "polite" }), createVNode(_components.button, {
									title: "Copy to clipboard",
									"data-copied": "Copied!",
									"data-code": "<Badge type=\"tip\">提示</Badge> <Badge type=\"warning\">注意</Badge>",
									children: createVNode(_components.div, {})
								})]
							})
						]
					})
				}),
				createVNode($$Badge, { children: "新功能" }),
				createVNode($$Badge, {
					type: "tip",
					children: "提示"
				}),
				createVNode($$Badge, {
					type: "note",
					children: "笔记"
				}),
				createVNode($$Badge, {
					type: "important",
					children: "重要"
				}),
				createVNode($$Badge, {
					type: "warning",
					children: "注意"
				}),
				createVNode($$Badge, {
					type: "caution",
					children: "危险"
				}),
				createVNode(_components.hr, {}),
				createVNode(_components.p, { children: ["更多信息，请查看 ", createVNode(_components.a, {
					href: "https://mdxjs.com/",
					target: "_blank",
					rel: "noopener noreferrer",
					children: "MDX 文档"
				})] })
			] })
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, {
		...props,
		children: createVNode(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var url = "src/content/posts/mdx-example.mdx/";
var file = "D:/求职/存储/fengqiyunxing.github.io/src/content/posts/mdx-example.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/求职/存储/fengqiyunxing.github.io/src/content/posts/mdx-example.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
