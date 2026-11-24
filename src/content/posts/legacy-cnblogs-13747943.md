---
title: "linux C++ 程序报错记录"
published: 2020-09-29T08:44:00+08:00
description: "warning: Source file is more recent than executable. 这个错误的原因是你的源文件已经被修改了, 但正在运行的程序是基于一个较早版本的源代码. 可能会导致gdb调试运行与"
category: "旧文档案"
tags: ["旧文", "C++", "Linux"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13747943.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13747943.html) · 原文发布于 `2020-09-29 08:44:00`（UTC+8）
> 旧文归档，保留当时的记录。

1. warning: Source file is more recent than executable.

这个错误的原因是你的源文件已经被修改了, 但正在运行的程序是基于一个较早版本的源代码. 可能会导致gdb调试运行与现有源代码逻辑不一致。需要重新编译一下程序。
