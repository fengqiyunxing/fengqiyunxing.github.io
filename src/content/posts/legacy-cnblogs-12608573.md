---
title: "Cannot instantiate the type ......的解决"
published: 2019-09-24T16:22:00+08:00
description: "使用public abstract class MainWindow implements ActionListener{} 之后创建对象MainWindow window = new MainWindow();时出现此"
category: "旧文档案"
tags: ["旧文"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608573.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608573.html) · 原文发布于 `2019-09-24 16:22:00`（UTC+8）
> 旧文归档，保留当时的记录。

使用public abstract class MainWindow implements ActionListener{}

之后创建对象MainWindow window = new MainWindow();时出现此错误

错误的原因是MainWindow无法实例化

将 abstract去掉改为重写actionPerformed方法恢复正常
