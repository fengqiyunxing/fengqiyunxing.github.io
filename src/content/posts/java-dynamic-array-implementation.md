---
title: "动态数组java实现"
published: 2020-03-17T22:05:00+08:00
description: "记录用 Java 实现动态数组、插入删除及扩容的过程。"
category: "数据结构与算法"
tags: ["Java", "动态数组"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608563.html"
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608563.html) · 原文发布于 `2020-03-17 22:05:00`（UTC+8）
> 同文另见 [CSDN版本](https://blog.csdn.net/hide_on_rush/article/details/104931624)。

数组是一种顺序存储的线性表，所有元素的内存地址是连续的。

动态数组相对于一般数组的优势是可以灵活地添加或删除元素。而一般数组则受限于固定的内存空间。只能有限的添加元素

## 动态数组（Dynamic Array）接口设计

◼ int size(); // 元素的数量  
◼ boolean isEmpty(); // 是否为空  
◼ boolean contains(E element); // 是否包含某个元素  
◼ void add(E element); // 添加元素到最后面  
◼ E get(int index); // 返回index位置对应的元素  
◼ E set(int index, E element); // 设置index位置的元素  
◼ void add(int index, E element); // 往index位置添加元素  
◼ E remove(int index); // 删除index位置对应的元素  
◼ int indexOf(E element); // 查看元素的位置  
◼ void clear(); // 清除所有元素

上代码：

动态数组类的实现：

```java
public class ArrayList<E> {
	//动态数组至少应该有数组的长度和元素的索引两个成员变量。
	/**
	 * 元素的数量
	 */
	private int size;
	/**
	 * 所有的元素
	 */
	private E[] elements;
	//在创建数组时要有一个初始的容量，容量的大小根据实际情况确定，避免重复申请或销毁内存。
	private static final int DEFAULT_CAPACITY = 10;
	//这里用来进行判定
	private static final int ELEMENT_NOT_FOUND = -1;
	
	public ArrayList(int capaticy) {
		//如果实际需要的容量比默认容量小，就使用默认容量
		
		capaticy = (capaticy < DEFAULT_CAPACITY) ? DEFAULT_CAPACITY : capaticy;
		elements = (E[]) new Object[capaticy];
	}
	
	public ArrayList() {
		this(DEFAULT_CAPACITY);
	}
	
	/**
	 * 清除所有元素
	 */
	public void clear() {
		//为了使动态数组可以存储多种类型的元素使用了泛型
		//这样的话new的数组里每个位置存储的是元素内存的索引
		//这样清空的时候需要将每个内存的索引都必须清除
		//否则内存中的元素依然可以被访问
		for (int i = 0; i < size; i++) {
			elements[i] = null;
		}
		//动态数组的使用过程中可能会反复的添加或删除元素，因此没有必要每次清空元素的时候都销毁数组所在的内存空间
		//因为申请和销毁内存空间都是需要时间的
		size = 0;
	}

	/**
	 * 元素的数量
	 * @return
	 */
	public int size() {
		return size;
	}

	/**
	 * 是否为空
	 * @return
	 */
	public boolean isEmpty() {
		 return size == 0;
	}

	/**
	 * 是否包含某个元素
	 * @param element
	 * @return
	 */
	public boolean contains(E element) {
		return indexOf(element) != ELEMENT_NOT_FOUND;
	}

	/**
	 * 添加元素到尾部
	 * @param element
	 */
	public void add(E element) {
		add(size, element);
	}

	/**
	 * 获取index位置的元素
	 * @param index
	 * @return
	 */
	public E get(int index) {
		rangeCheck(index);
		return elements[index];
	}

	/**
	 * 设置index位置的元素
	 * @param index
	 * @param element
	 * @return 原来的元素ֵ
	 */
	public E set(int index, E element) {
		rangeCheck(index);
		
		E old = elements[index];
		elements[index] = element;
		return old;
	}

	/**
	 * 在index位置插入一个元素
	 * @param index
	 * @param element
	 */
	public void add(int index, E element) {
		//加这一行不允许存空值
		//if(element==null)return;
		//在插入元素之前先要判断输入的索引位置
		rangeCheckForAdd(index);
		
		ensureCapacity(size + 1);
		
		for (int i = size; i > index; i--) {
			elements[i] = elements[i - 1];
		}
		elements[index] = element;
		size++;
	}

	/**
	 * 删除index位置的元素
	 * @param index
	 * @return
	 */
	public E remove(int index) {
		rangeCheck(index);
		
		E old = elements[index];
		//需要往前挪的元素是index后一个到数组的最后一个
		for (int i = index + 1; i < size; i++) {
			elements[i - 1] = elements[i];
		}
		//size-1，之后将末尾的元素清空
		elements[--size] = null;
		return old;
	}

	/**
	 * 查看元素的索引
	 * @param element
	 * @return
	 */
	public int indexOf(E element) {
		if (element == null) {  // 1
			for (int i = 0; i < size; i++) {
				if (elements[i] == null) return i; 
			}
		} else {
			for (int i = 0; i < size; i++) {
				//判断相等的时候使用==是比较内存地址是否相等
				if (element.equals(elements[i])) return i; // n
			}
		}
		return ELEMENT_NOT_FOUND;
	}
	
//	public int indexOf2(E element) {
//		for (int i = 0; i < size; i++) {
//			if (valEquals(element, elements[i])) return i; // 2n
//		}
//		return ELEMENT_NOT_FOUND;
//	}
//	
//	private boolean valEquals(Object v1, Object v2) {
//		return v1 == null ? v2 == null : v1.equals(v2);
//	}
	
	/**
	 * 保证要有capacity的容量
	 * @param capacity
	 */
	private void ensureCapacity(int capacity) {
		int oldCapacity = elements.length;
		if (oldCapacity >= capacity) return;
		
		// 新容量为旧容量的1.5倍
		int newCapacity = oldCapacity + (oldCapacity >> 1);
		E[] newElements = (E[]) new Object[newCapacity];
		for (int i = 0; i < size; i++) {
			newElements[i] = elements[i];
		}
		elements = newElements;
		
		System.out.println(oldCapacity + "扩容为" + newCapacity);
	}
	
	private void outOfBounds(int index) {
		throw new IndexOutOfBoundsException("Index:" + index + ", Size:" + size);
	}
	
	private void rangeCheck(int index) {
		if (index < 0 || index >= size) {
			outOfBounds(index);
		}
	}
	
	private void rangeCheckForAdd(int index) {
		//插入元素的时候可以大于数组的现有长度
		if (index < 0 || index > size) {
			outOfBounds(index);
		}
	}
	
	@Override
	public String toString() {
		// size=3, [99, 88, 77]
		StringBuilder string = new StringBuilder();
		string.append("size=").append(size).append(", [");
		for (int i = 0; i < size; i++) {
			if (i != 0) {
				string.append(", ");
			}
			
			string.append(elements[i]);
			
//			if (i != size - 1) {
//				string.append(", ");
//			}
		}
		string.append("]");
		return string.toString();
	}
}
```
