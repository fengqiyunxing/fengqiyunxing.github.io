---
title: "java中charAt()方法的使用"
published: 2020-09-24T19:28:00+08:00
description: "1.描述 java.lang.String.charAt() 方法返回指定索引处的char值。索引范围是从0到length() - 1。对于数组索引，序列的第一个char值是在索引为0，索引1，依此类推 2.声明 以下是"
category: "旧文档案"
tags: ["旧文", "Java"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13726046.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13726046.html) · 原文发布于 `2020-09-24 19:28:00`（UTC+8）
> 旧文归档，保留当时的记录。

### 1.描述

java.lang.String.charAt() 方法返回指定索引处的char值。索引范围是从0到length() - 1。对于数组索引，序列的第一个char值是在索引为0，索引1，依此类推

## 2.声明

以下是声明java.lang.String.charAt()方法

```
public char charAt(int index)
```

## 3.参数

- index -- 这是该指数的char值

## 4.返回值

此方法返回这个字符串的指定索引处的char值。第一个char值的索引为0.

## 5.异常

- IndexOutOfBoundsException -- 如果index参数为负或不小于该字符串的长度.

## 6.实例

```html
1. public class Test {
2. public static void main(String[] args) {
3. String s ="abc";
4. System.out.println(s.charAt(1));
5. }
6. }
```

运行结果是：

b
