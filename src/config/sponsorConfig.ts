import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 打赏用途说明
	// R-510：原作者文案已清空，待用户确认后填写自己的说明
	usage: "",

	// 是否显示打赏者列表
	// R-510：原作者打赏者数据已清空
	showSponsorsList: false,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示打赏按钮
	// R-510：收款方式已清空，故暂不显示打赏按钮，待用户确认后再开启
	showButtonInPost: false,

	// 打赏方式列表
	// R-510：已清空原作者的支付宝/微信收款码、ko-fi、爱发电链接
	//        （否则站点会替原作者收款）。待用户确认后填入自己的收款方式
	methods: [],

	// 打赏者列表（可选）
	// R-510：已清空原作者的打赏者数据
	sponsors: [],
};
