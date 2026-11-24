---
title: "双端队列"
published: 2020-03-21T12:17:00+08:00
description: "头尾两端都可以进行添加和删除操作。 接口设计 ◼ int size(); // 元素的数量 ◼ boolean isEmpty(); // 是否为空 ◼ void clear(); // 清空 ◼ void enQueu"
category: "旧文档案"
tags: ["旧文"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608553.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608553.html) · 原文发布于 `2020-03-21 12:17:00`（UTC+8）
> 旧文归档，保留当时的记录。

头尾两端都可以进行添加和删除操作。

接口设计  
◼ int size(); // 元素的数量  
◼ boolean isEmpty(); // 是否为空  
◼ void clear(); // 清空  
◼ void enQueueRear(E element); // 从队尾入队  
◼ E deQueueFront(); // 从队头出队  
◼ void enQueueFront(E element); // 从队头入队  
◼ E deQueueRear(); // 从队尾出队  
◼ E front(); // 获取队列的头元素  
◼ E rear(); // 获取队列的尾元素

```java
public class Deque<E> {
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

	public void enQueueRear(E element) {
		list.add(element);
	}

	public E deQueueFront() {
		return list.remove(0);
	}

	public void enQueueFront(E element) {
		list.add(0, element);
	}

	public E deQueueRear() {
		return list.remove(list.size() - 1);
	}

	public E front() {
		return list.get(0);
	}

	public E rear() {
		return list.get(list.size() - 1);
	}
}
```
