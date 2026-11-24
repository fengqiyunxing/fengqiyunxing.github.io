---
title: "C++ 结构体指针"
published: 2020-09-28T15:25:00+08:00
description: "总述： c++结构体指针，顾名思义就是指向结构体的一个指针，这篇博客作用是记录c++结构体指针的常用用法及我经常犯的一个错误。 定义结构体： struct My{ My *left; My *right; int val"
category: "旧文档案"
tags: ["旧文", "C++"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13744930.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13744930.html) · 原文发布于 `2020-09-28 15:25:00`（UTC+8）
> 旧文归档，保留当时的记录。

## 总述：

c++结构体指针，顾名思义就是指向结构体的一个指针，这篇博客作用是记录c++结构体指针的常用用法及我经常犯的一个错误。

定义结构体：

```cpp
1. struct My{
2. My *left;
3. My *right;
4. int val;
5. My(){}
6. My(int val):left(NULL),right(NULL),val(val){}
7. };
```

一般结构体变量的访问方式：

```cpp
1. void test1(){
2. My m;
3. m.val = 1;
4. cout<<m.val<<endl;
5. }
```

可见，结构体中的变量，可以直接通过点操作符来访问。

而对于结构体指针而言：必须通过->符号来访问指针所指结构体的变量。

```cpp
1. void test2(){
2. My m;
3. m.val = 1;
4. My *mm;
5. mm = &m;
6. cout<<mm->val<<endl;
7. }
```

## 注意事项：

声明一个结构体指针记得初始化，一定要初始化，不初始化会出事（重要的事情说三遍）

如下：

```cpp
1. void test3(){
2. My *m;
3. m->val = 1;
4. }
```

这份代码会报一个错：空指针访问异常，这是因为m这个指针还没有初始化，因此他没有内存空间，自然就不存在有val这个参数。正确打开方式：

```cpp
1. void test3(){
2. My *m;
3. m = new My(3);
4. m->val = 4;
5. cout<<m->val<<endl;
6. }
```

以上代码用new申请了内存空间。问题即可解决。
