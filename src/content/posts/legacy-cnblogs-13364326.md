---
title: "Linux C++向josn文件写入字符串"
published: 2020-07-23T09:01:00+08:00
description: "对C++了解的不多，我的需求是往JSON文件里写入字符串，这种方式不需要用开源的库，直接写文件就可以。附上代码需要包含studio.h头文件以计fstream long a=123456; char json[1024]"
category: "旧文档案"
tags: ["旧文", "C++", "Linux"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13364326.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13364326.html) · 原文发布于 `2020-07-23 09:01:00`（UTC+8）
> 旧文归档，保留当时的记录。

对C++了解的不多，我的需求是往JSON文件里写入字符串，这种方式不需要用开源的库，直接写文件就可以。附上代码需要包含studio.h头文件以计fstream  
`long a=123456; char json[1024]={0}; printf("[{ \"TXPerSecdata\":\"%ld\"} ]",a); sprintf(json,"[{ \"TXPerSecdata\":\"%ld\"} ]",a); ofstream fos; fos.open("D:/test.json",ios::trunc | ios::binary | ios::out); fos<<json; fos.close(); return 0;`

参考了这两篇  
<https://www.runoob.com/cprogramming/c-function-printf.html>  
<https://blog.csdn.net/zenail501129/article/details/22991485?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase>
