---
title: "（java）剑指offer二维数组中的查找"
published: 2020-03-28T18:25:00+08:00
description: "在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从 上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。 public class"
category: "旧文档案"
tags: ["旧文", "Java", "数据结构与算法"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608543.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608543.html) · 原文发布于 `2020-03-28 18:25:00`（UTC+8）
> 旧文归档，保留当时的记录。

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从  
上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

```java
public class 二维数组中的查找 {
	/*
	 * 最初反应是遍历一遍，但是数组从左到右和从上到下都是递增的，那么可以把二维数组的右上角
	 * 作为初始比较位置。比如从右上角开始，假设右上角的数为x，输入数值为y。如果y<x，那就直接往左找，如果 y>x,就向下一行。
	 */
    public static boolean Find(int target, int[][] array) {
    	/*二维数组可以理解成一个一维数组里的每个元素都是一个数组
		 * 定义一个整型数组:3行4列
		 * int a[][] = new int[3][4]; 
		 * 获取行数---3行 int lenY = a.length;
		 * 获取列数---4列 int lenX = a[0].length;
		 * 
		 */
    	int row=0;
        int col=array[0].length-1;
        int rowlength= array.length;
        int collength=array[0].length;
    	//这个地方一开始没有考虑到，实际写算法的时候应该考虑到各种输入值。
        if(rowlength==0 || collength==0){
            return false;
        }
		
        while(row<rowlength && col>=0){
            //while(row<array.length && col>=0){
                if(target>array[row][col]){
                    row++;
                }
                else if(target<array[row][col]){
                    col--;
                }
                else
                    return true;
            }
         return false;
    }
}
```
