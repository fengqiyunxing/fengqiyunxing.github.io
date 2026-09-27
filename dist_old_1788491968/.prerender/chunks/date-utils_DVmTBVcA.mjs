import { f as siteConfig } from "./url-utils_Cr7cEKDY.mjs";
//#region src/utils/date-utils.ts
function formatDateToYYYYMMDD(date) {
	return date.toISOString().substring(0, 10);
}
function formatDateI18n(dateInput, includeTime) {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const lang = siteConfig.lang || "en";
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric"
	};
	if (includeTime) {
		options.hour = "2-digit";
		options.minute = "2-digit";
		options.second = "2-digit";
	}
	if (siteConfig.timezone) options.timeZone = siteConfig.timezone;
	const locale = {
		zh_CN: "zh-CN",
		zh_TW: "zh-TW",
		en: "en-US",
		ja: "ja-JP",
		ko: "ko-KR",
		es: "es-ES",
		th: "th-TH",
		vi: "vi-VN",
		tr: "tr-TR",
		id: "id-ID",
		fr: "fr-FR",
		de: "de-DE",
		ru: "ru-RU",
		ar: "ar-SA"
	}[lang] || "en-US";
	return includeTime ? date.toLocaleString(locale, options) : date.toLocaleDateString(locale, options);
}
function formatDateI18nWithTime(dateInput) {
	return formatDateI18n(dateInput, true);
}
function formatDynamicDate(dateInput) {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const parts = new Intl.DateTimeFormat("en-CA", {
		timeZone: "UTC",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23"
	}).formatToParts(date);
	const get = (type) => parts.find((part) => part.type === type)?.value || "";
	return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
}
//#endregion
export { formatDateToYYYYMMDD as n, formatDynamicDate as r, formatDateI18nWithTime as t };
