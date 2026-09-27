import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	// 【2026-09-03】R-510 原作者头像（流萤）已停用；改用站点统一的赛博朋克标识头像
	avatar: "assets/images/avatar-cyber.png",

	// 名字（R-508：对外署名一律使用 fengqiyunxing）
	name: "fengqiyunxing",

	// 个人签名
	// R-510：原作者签名已清空，待用户确认后填写
	bio: "",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	//
	// R-510：已移除原作者的 QQ 群、GitHub（CuteLeaf）、邮箱（xiaye@msn.com）链接
	//        仅保留站内 RSS（不含任何外部/原作者信息）
	//        待用户确认后逐项添加自己的链接
	links: [
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
