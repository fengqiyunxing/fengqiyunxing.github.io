---
title: "C++ typedef"
published: 2020-10-23T09:38:00+08:00
description: "保留旧站《C++ typedef》的历史记录。"
category: "旧文档案"
tags: ["旧文", "C++"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13862370.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13862370.html) · 原文发布于 `2020-10-23 09:38:00`（UTC+8）
> 旧文归档，保留当时的记录。

<https://blog.csdn.net/superhoy/article/details/53504472>

- 定义一种类型的新别名，并不是类似宏的简单的字符串替换。
- typedef在t语法上是一个存储类的关键字（如auto、extern、mutable、static、register等一样），虽然它并不真正影响对象的存储特性，如：  
  typedef static int INT2; //不可行  
  编译将失败，会提示“指定了一个以上的存储类”。
- 不管什么时候，只要为指针声明 typedef，那么都要在最终的 typedef 名称中加一个 const，以使得该指针本身是常量，而不是对象。
- typedef 有另外一个重要的用途，那就是定义机器无关的类型，例如，你可以定义一个叫 REAL 的浮点类型，在目标机器上它可以i获得最高的精度：

typedef long double REAL;

- ## define只是简单的字符串替换而typedef则是为一个类型起新名字
