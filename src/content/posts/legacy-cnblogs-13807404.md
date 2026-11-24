---
title: "makefile加快编译速度的方法（make -j命令）"
published: 2020-10-13T10:50:00+08:00
description: "在编译大型项目的时候使用makefile，所需要的时间也比较长。尤其是在做测试的时候，需要使用很多次make指令，这需要耗费大量的时间。 使用make -j命令可以缩短这部分时间。 使用方法就是在-j后面加一个数字，比如"
category: "旧文档案"
tags: ["旧文", "Linux"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13807404.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13807404.html) · 原文发布于 `2020-10-13 10:50:00`（UTC+8）
> 旧文归档，保留当时的记录。

在编译大型项目的时候使用makefile，所需要的时间也比较长。尤其是在做测试的时候，需要使用很多次make指令，这需要耗费大量的时间。  
使用make -j命令可以缩短这部分时间。

使用方法就是在-j后面加一个数字，比如 -j10，意为在编译文件的时候用10个线程进行编译.
