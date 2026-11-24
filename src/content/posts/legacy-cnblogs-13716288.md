---
title: "linux makeclean的用法"
published: 2020-09-23T09:13:00+08:00
description: "在使用makefile进行编程的时候，虽然在makefile里使用了clean命令用于清除生成的.o文件，但是在进行多次编译调试运行的时候，单纯的使用make命令进行编译可能会残留上一次的错误。 实际使用的时候必须执行以"
category: "旧文档案"
tags: ["旧文", "Linux"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13716288.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13716288.html) · 原文发布于 `2020-09-23 09:13:00`（UTC+8）
> 旧文归档，保留当时的记录。

在使用makefile进行编程的时候，虽然在makefile里使用了clean命令用于清除生成的.o文件，但是在进行多次编译调试运行的时候，单纯的使用make命令进行编译可能会残留上一次的错误。

实际使用的时候必须执行以下makeclean命令，否则会出现无法定位错误出现位置的问题，很长时间都找不到bug。
