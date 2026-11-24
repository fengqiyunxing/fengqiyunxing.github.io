---
title: "剑指offer数组中重复的数字"
published: 2020-03-29T17:58:00+08:00
description: "package 数组; /*在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。 也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为"
category: "旧文档案"
tags: ["旧文", "数据结构与算法"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608541.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608541.html) · 原文发布于 `2020-03-29 17:58:00`（UTC+8）
> 旧文归档，保留当时的记录。

```java
package 数组;

/*在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。
也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}
，那么对应的输出是第一个重复的数字2。*/
public class 数组中重复的数字 {
	public boolean duplicate(int nums[],int length,int [] duplication) {
		/*这道题常规的解法是使用hashmap，可以达到O（n)。后来看题解还有一种巧妙的算法，
	 复杂度为O（1）。原理是如果数组上每个位置的数值大小都与他们的位置相同，那么我们可以确定
	 这个数组中没有重复的数。具体实现就是通过循环进行对比和交换，来发现重复的数。一开始没法理解，
	 举例如下：
	 2 3 1 0 2 5 3
	 1 arr[0] = 2 != 0,所以arr[0]与arr[2]做交换，得1 3 2 0 2 5 3
	 2 arr[0] = 1 != 0，所以arr[0]和arr[1]交换，的3 1 2 0 2 5 3
	 3 arr[0] = 3 != 0,所以arr[0]和arr[3]交换，得0 1 2 3 2 5 3
	 4 arr[0]到arr[3]都符合要求,arr[4] = 2 != 4，所以arr[4]和arr[2]交换，发现两者相等，所以他就是第一个重复的数。*/
		//这次记得加非法输入情况了
        if(nums == null || length == 0){
            return false;
        }
        for(int i=0;i<length;i++){
            while(nums[i] != i){
                if(nums[i] == nums[nums[i]]){
                    duplication[0] = nums[i];
                    return true;
                }
                // swap
                int tmp = nums[i];
                nums[i] = nums[tmp];
                nums[tmp] = tmp;
            }
        }
        return false;
    }
}
```
