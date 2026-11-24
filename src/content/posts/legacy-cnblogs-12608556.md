---
title: "栈"
published: 2020-03-21T11:52:00+08:00
description: "先进后出 接口设计： ◼ int size(); // 元素的数量 ◼ boolean isEmpty(); // 是否为空 ◼ void push(E element); // 入栈 ◼ E pop(); // 出栈 "
category: "旧文档案"
tags: ["旧文"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608556.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608556.html) · 原文发布于 `2020-03-21 11:52:00`（UTC+8）
> 旧文归档，保留当时的记录。

先进后出

接口设计：

◼ int size(); // 元素的数量  
◼ boolean isEmpty(); // 是否为空  
◼ void push(E element); // 入栈  
◼ E pop(); // 出栈  
◼ E top(); // 获取栈顶元素  
◼ void clear(); // 清空

```java
public class Stack<E> {
	private List<E> list = new ArrayList<>();
	
	public void clear() {
		list.clear();
	}
	
	public int size() {
		return list.size();
	}

	public boolean isEmpty() {
		return list.isEmpty();
	}

	public void push(E element) {
		list.add(element);
	}


	public E pop() {
		return list.remove(list.size() - 1);
	}


	public E top() {
		return list.get(list.size() - 1);
	}
}
```
