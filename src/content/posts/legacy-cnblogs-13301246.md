---
title: "springboot集成themeleaf报Namespace 'th' is not bound"
published: 2020-07-14T20:02:00+08:00
description: "保留旧站《springboot集成themeleaf报Namespace 'th' is not bound》的历史记录。"
category: "旧文档案"
tags: ["旧文", "Java"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13301246.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13301246.html) · 原文发布于 `2020-07-14 20:02:00`（UTC+8）
> 旧文归档，保留当时的记录。

在html标签中加入命名空间即可，如下

`<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:th="http://www.thymeleaf.org">`
