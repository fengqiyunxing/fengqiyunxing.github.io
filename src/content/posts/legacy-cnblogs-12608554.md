---
title: "队列"
published: 2020-03-21T12:04:00+08:00
description: "队列也是一种线性表，但是只能在头尾两端进行操作 队头（front）：只能从队头移除元素，叫做出队（deQueue） 队尾（rear）：只能从队尾添加元素，叫做入队（enQueue） 先进先出 接口设计： 队列的接口设计 "
category: "旧文档案"
tags: ["旧文"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608554.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608554.html) · 原文发布于 `2020-03-21 12:04:00`（UTC+8）
> 旧文归档，保留当时的记录。

队列也是一种线性表，但是只能在头尾两端进行操作

队头（front）：只能从队头移除元素，叫做出队（deQueue）

队尾（rear）：只能从队尾添加元素，叫做入队（enQueue）

先进先出

接口设计：

队列的接口设计  
◼ int size(); // 元素的数量  
◼ boolean isEmpty(); // 是否为空  
◼ void clear(); // 清空  
◼ void enQueue(E element); // 入队  
◼ E deQueue(); // 出队  
◼ E front(); // 获取队列的头元素

```java
public class Queue<E> {
	private List<E> list = new LinkedList<>();
	
	public int size() {
		return list.size();
	}

	public boolean isEmpty() {
		return list.isEmpty();
	}
	
	public void clear() {
		list.clear();
	}

	public void enQueue(E element) {
		list.add(element);
	}

	public E deQueue() {
		return list.remove(0);
	}

	public E front() {
		return list.get(0);
	}
}
```
