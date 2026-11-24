---
title: "JS中new Date（）用法及获取服务器时间"
published: 2020-07-14T08:56:00+08:00
description: "1.获取服务器时间： var now = new Date($.ajax().getResponseHeader(\"Date\")); 2.new Date()用法（获取客户端时间）： 获取年： var currentYe"
category: "旧文档案"
tags: ["旧文", "JavaScript"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13297181.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13297181.html) · 原文发布于 `2020-07-14 08:56:00`（UTC+8）
> 旧文归档，保留当时的记录。

1.获取服务器时间：  
var now = new Date($.ajax({async: false}).getResponseHeader("Date"));  
2.new Date()用法（获取客户端时间）：  
获取年：  
var currentYear = now.getFullYear();  
获取月：  
var currentMonth = now.getMonth();  
获取日：  
var currentDay = now.getDate();  
获取小时：  
var currentHours = now.getHours();  
获取分钟：  
var currentMinutes = now.getMinutes();  
获取秒：  
var currentSeconds = now.getSeconds();  
获取毫秒：  
var currentMilliseconds = now.getMilliseconds();  
获取当前日期：  
var currentDate = now.toLocaleDateString();  
获取当前时间：  
var currentTime = now.toLocaleTimeString();  
获取日期和时间：  
var dateTime = now.toLocaleString();  
获取当前星期几：  
var currentWeek = now.getDay();  
获取完成年份：  
var currentFullYear = now.getFullYear();
