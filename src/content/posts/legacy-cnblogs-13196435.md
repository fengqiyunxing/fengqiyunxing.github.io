---
title: "编译原理复习"
published: 2020-06-26T21:27:00+08:00
description: "课程内容: 介绍程序设计语言编译程序构造的基本原理和基本实现技术 1.引论 什么是编译程序 什么是翻译程序？ 把某一种语言程序（称为源语言程序）等价地转换成另一种语言程序（称为目标语言程序）的程序 什么是编译程序？ 把某"
category: "旧文档案"
tags: ["旧文"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13196435.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13196435.html) · 原文发布于 `2020-06-26 21:27:00`（UTC+8）
> 旧文归档，保留当时的记录。

**课程内容**:  
介绍程序设计语言编译程序构造的基本原理和基本实现技术

## 1.引论

### 什么是编译程序

什么是翻译程序？

> 把某一种语言程序（称为源语言程序）等价地转换成另一种语言程序（称为目标语言程序）的程序  
> ![原文配图](./legacy-assets/legacy-cnblogs-13196435/01.png)

### 什么是编译程序？

> 把某一种高级语言程序等价地转换成另一种低级语言程序（如汇编语言或机器语言程序）的程序

![原文配图](./legacy-assets/legacy-cnblogs-13196435/02.png)

### 什么是解释程序？

> 把源语言写的源程序作为输入，但不产生目标程序，而是边解释边执行源程序。

### 抽象

保留最为重要的信息

### 编译过程

![原文配图](./legacy-assets/legacy-cnblogs-13196435/03.png)

#### 词法分析

![原文配图](./legacy-assets/legacy-cnblogs-13196435/04.png)

#### 语法分析

![原文配图](./legacy-assets/legacy-cnblogs-13196435/05.png)

#### 中间代码生成

![原文配图](./legacy-assets/legacy-cnblogs-13196435/06.png)

#### 优化

![原文配图](./legacy-assets/legacy-cnblogs-13196435/07.png)

#### 目标代码生成

![原文配图](./legacy-assets/legacy-cnblogs-13196435/08.png)

### 编译程序的结构

![原文配图](./legacy-assets/legacy-cnblogs-13196435/63.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/64.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/65.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/66.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/67.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/68.png)

### 编译程序的生成

![原文配图](./legacy-assets/legacy-cnblogs-13196435/69.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/70.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/71.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/72.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/09.png)

### 总结

![原文配图](./legacy-assets/legacy-cnblogs-13196435/10.png)

## 2.高级语言机器语法描述

### 程序语言的定义

![原文配图](./legacy-assets/legacy-cnblogs-13196435/73.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/74.png)

#### 语法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/11.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/12.png)

#### 语义

![原文配图](./legacy-assets/legacy-cnblogs-13196435/13.png)

### 高级语言的一般特性

![原文配图](./legacy-assets/legacy-cnblogs-13196435/75.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/76.png)

### 程序语言的语法描述

#### 文法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/14.png)  
句法单位用尖括号括起  
箭头表示定义  
整个句子代表语法规则

#### 语言描述的几个基本概念

![原文配图](./legacy-assets/legacy-cnblogs-13196435/15.png)

![原文配图](./legacy-assets/legacy-cnblogs-13196435/77.png)  
V的闭包和V的正规闭包的区别：  
如果V中没有空字，闭包当众会有空字，正规闭包中没有空字。  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/78.png)

### 上下文无关文法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/79.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/80.png)

##### 符号约定

![原文配图](./legacy-assets/legacy-cnblogs-13196435/81.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/82.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/16.png)

##### 例题

![原文配图](./legacy-assets/legacy-cnblogs-13196435/83.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/84.png)

### 文法生成语言

#### 中心思想

从文法的开始符号出发，反复连续使用产生式，对非终结符施行替换和展开。

#### 例子

![原文配图](./legacy-assets/legacy-cnblogs-13196435/17.png)

#### 推导与推出

![原文配图](./legacy-assets/legacy-cnblogs-13196435/18.png)

#### 句型句子语言

![原文配图](./legacy-assets/legacy-cnblogs-13196435/19.png)

##### 例题

![原文配图](./legacy-assets/legacy-cnblogs-13196435/20.png)

### 推导与语法树

#### 最左最右推导

![原文配图](./legacy-assets/legacy-cnblogs-13196435/85.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/86.png)

#### 语法分析树

![原文配图](./legacy-assets/legacy-cnblogs-13196435/87.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/88.png)

#### 文法的二义性

![原文配图](./legacy-assets/legacy-cnblogs-13196435/89.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/90.png)  
**注意**  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/21.png)

#### 语言的二义性

![原文配图](./legacy-assets/legacy-cnblogs-13196435/22.png)  
也就是说语言的二义性来源于语言本身，一个二义的语言中找不到无二义的文法。

### 形式语言概述

![原文配图](./legacy-assets/legacy-cnblogs-13196435/91.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/92.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/23.png)

### 总结

![原文配图](./legacy-assets/legacy-cnblogs-13196435/24.png)

## 3.词法分析

![原文配图](./legacy-assets/legacy-cnblogs-13196435/25.png)

### 对于词法分析器的要求

#### 功能和输出形式

![原文配图](./legacy-assets/legacy-cnblogs-13196435/93.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/94.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/95.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/96.png)  
例子：  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/26.png)

#### 接口设计

![原文配图](./legacy-assets/legacy-cnblogs-13196435/97.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/98.png)

### 词法分析器的设计

![原文配图](./legacy-assets/legacy-cnblogs-13196435/27.png)

#### 1.输入和预处理

![原文配图](./legacy-assets/legacy-cnblogs-13196435/99.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/100.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/101.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/102.png)

#### 2.单词符号的识别

![原文配图](./legacy-assets/legacy-cnblogs-13196435/103.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/104.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/105.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/106.png)

#### 3.状态转换图及实现

![原文配图](./legacy-assets/legacy-cnblogs-13196435/107.png)  
一张转换图只包含**有限个状态**，其中有一个为**初态**，**至少要有一个终态**  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/108.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/109.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/110.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/111.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/112.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/113.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/114.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/28.png)

### 正规表达式与有限自动机

![原文配图](./legacy-assets/legacy-cnblogs-13196435/115.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/116.png)

#### 一、单词符号的描述

##### 正规式与正规集

![原文配图](./legacy-assets/legacy-cnblogs-13196435/117.png)  
就像英文单词是由字母拼接而成，但单词字母拼接并不一定是单词。  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/118.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/29.png)

###### 正规式的运算

![原文配图](./legacy-assets/legacy-cnblogs-13196435/119.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/120.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/121.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/122.png)

###### 正规式的等价

![原文配图](./legacy-assets/legacy-cnblogs-13196435/123.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/124.png)

###### 正规式的性质

![原文配图](./legacy-assets/legacy-cnblogs-13196435/125.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/126.png)

##### 正规文法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/127.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/128.png)

#### 二、有限自动机

![原文配图](./legacy-assets/legacy-cnblogs-13196435/30.png)

##### 1.DFA

![原文配图](./legacy-assets/legacy-cnblogs-13196435/129.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/130.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/131.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/132.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/133.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/134.png)

##### 2.NFA

![原文配图](./legacy-assets/legacy-cnblogs-13196435/135.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/136.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/31.png)

###### 区别

![原文配图](./legacy-assets/legacy-cnblogs-13196435/137.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/138.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/32.png)

##### 3.DFA与NFA的等价

![原文配图](./legacy-assets/legacy-cnblogs-13196435/139.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/140.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/141.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/142.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/143.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/144.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/145.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/146.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/147.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/148.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/149.png)  
![在这里插入图片描述]( <https://img-blog.csdnimg.cn/20200624101328910.png?x-oss-process=image/watermark> ,type\_ZmFuZ3poZW5naGVpdGk,shadow\_10,text\_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hpZGVfb25fcnVzaA,size\_16,color\_FFFFFF,t\_70

##### 4.DFA的化简

#### 正规式与有限自动机的等价性

![原文配图](./legacy-assets/legacy-cnblogs-13196435/33.png)

##### 有限自动机=>正规式

![原文配图](./legacy-assets/legacy-cnblogs-13196435/150.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/151.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/152.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/153.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/154.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/155.png)

##### 正规式=>有限自动机

![原文配图](./legacy-assets/legacy-cnblogs-13196435/156.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/157.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/158.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/159.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/160.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/161.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/34.png)

#### 正规文法与有限自动机的等价性

## 4.语法分析-自上而下

![原文配图](./legacy-assets/legacy-cnblogs-13196435/35.png)

### 4.1语法分析器的功能

![原文配图](./legacy-assets/legacy-cnblogs-13196435/162.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/163.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/36.png)

### 4.2自上而下分析面临的问题

![原文配图](./legacy-assets/legacy-cnblogs-13196435/164.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/165.png)  
过程中可能出现问题，需要回溯。  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/166.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/167.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/168.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/169.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/37.png)

### 4.3LL（1）分析法

#### 一、左递归的消除

![原文配图](./legacy-assets/legacy-cnblogs-13196435/170.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/171.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/172.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/173.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/174.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/175.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/38.png)

#### 二、消除回溯，提取公共左因子

![原文配图](./legacy-assets/legacy-cnblogs-13196435/176.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/177.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/178.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/179.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/180.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/181.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/182.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/183.png)

### 4.3.2消除回溯、提左因子

![原文配图](./legacy-assets/legacy-cnblogs-13196435/184.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/185.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/186.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/187.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/188.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/189.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/190.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/191.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/39.png)

##### FIRST和FOLLOW集合的求法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/192.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/193.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/194.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/195.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/196.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/197.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/198.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/199.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/200.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/201.png)

##### LL（1）文法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/202.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/203.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/204.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/205.png)

### 4.4递归下降分析程序构造

![原文配图](./legacy-assets/legacy-cnblogs-13196435/206.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/207.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/208.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/209.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/210.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/211.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/212.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/213.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/214.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/215.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/216.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/217.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/218.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/219.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/40.png)

### 4.5预测分析程序

![原文配图](./legacy-assets/legacy-cnblogs-13196435/220.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/221.png)

#### 1.预测分析表的构造

![原文配图](./legacy-assets/legacy-cnblogs-13196435/222.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/223.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/41.png)

#### 2.预测分析程序

![原文配图](./legacy-assets/legacy-cnblogs-13196435/224.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/225.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/226.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/227.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/228.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/229.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/230.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/231.png)

#### 3.练习

![原文配图](./legacy-assets/legacy-cnblogs-13196435/232.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/233.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/234.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/235.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/236.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/237.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/238.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/239.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/240.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/241.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/42.png)

### 4.6LL（1）分析中的错误处理

![原文配图](./legacy-assets/legacy-cnblogs-13196435/43.png)

### 总结

![原文配图](./legacy-assets/legacy-cnblogs-13196435/44.png)

## 5.语法分析-自下而上

![原文配图](./legacy-assets/legacy-cnblogs-13196435/45.png)

### 5.1自下而上分析基本问题

#### 一、规约

![原文配图](./legacy-assets/legacy-cnblogs-13196435/242.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/243.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/244.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/245.png)

#### 二、规范规约简述

![原文配图](./legacy-assets/legacy-cnblogs-13196435/246.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/247.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/248.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/249.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/250.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/251.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/46.png)

#### 三、符号栈的使用

![原文配图](./legacy-assets/legacy-cnblogs-13196435/252.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/253.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/254.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/255.png)

### 5.2算符优先分析

![原文配图](./legacy-assets/legacy-cnblogs-13196435/256.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/257.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/47.png)

#### 1.算符优先文法及优先表构造

![原文配图](./legacy-assets/legacy-cnblogs-13196435/258.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/259.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/260.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/261.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/262.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/263.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/264.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/265.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/266.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/267.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/268.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/269.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/48.png)

#### 练习

![原文配图](./legacy-assets/legacy-cnblogs-13196435/270.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/271.png)

#### 2.算符优先分析算法

##### 1.最左素短语

![原文配图](./legacy-assets/legacy-cnblogs-13196435/272.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/273.png)

##### 练习

![原文配图](./legacy-assets/legacy-cnblogs-13196435/274.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/275.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/49.png)

##### 2.算法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/276.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/277.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/278.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/279.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/50.png)

#### 3.优先函数

![原文配图](./legacy-assets/legacy-cnblogs-13196435/51.png)

### 5.3LR分析法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/280.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/281.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/282.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/283.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/52.png)

##### 1.LR分析的逻辑结构

![原文配图](./legacy-assets/legacy-cnblogs-13196435/284.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/285.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/286.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/287.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/53.png)

##### 2.分析表的组成

![原文配图](./legacy-assets/legacy-cnblogs-13196435/288.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/289.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/290.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/291.png)

##### 3.LR分析过程

![原文配图](./legacy-assets/legacy-cnblogs-13196435/292.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/293.png)

##### 例题

![原文配图](./legacy-assets/legacy-cnblogs-13196435/294.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/295.png)

#### 二、LR（0）分析表的构造

![原文配图](./legacy-assets/legacy-cnblogs-13196435/296.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/297.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/298.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/299.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/300.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/301.png)

##### 构造识别活前缀的NFA

![原文配图](./legacy-assets/legacy-cnblogs-13196435/54.png)

##### 求文法对应的活前缀

![原文配图](./legacy-assets/legacy-cnblogs-13196435/302.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/303.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/55.png)

##### 构造识别活前缀的DFA

![原文配图](./legacy-assets/legacy-cnblogs-13196435/304.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/305.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/306.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/307.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/308.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/309.png)

##### 构造LR（0）项目集规范族

![原文配图](./legacy-assets/legacy-cnblogs-13196435/310.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/311.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/312.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/313.png)

##### 构造LR（0）分析表

![原文配图](./legacy-assets/legacy-cnblogs-13196435/314.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/315.png)

##### LR（0）文法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/316.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/317.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/318.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/319.png)

#### SLR分析表的构建

![原文配图](./legacy-assets/legacy-cnblogs-13196435/320.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/321.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/322.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/323.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/324.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/325.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/326.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/327.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/328.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/329.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/330.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/331.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/332.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/333.png)

#### 规范LR分析表的构建

![原文配图](./legacy-assets/legacy-cnblogs-13196435/334.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/335.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/336.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/337.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/338.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/339.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/340.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/341.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/342.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/343.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/344.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/345.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/346.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/347.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/348.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/349.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/350.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/351.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/56.png)

### 5.4语法分析器的自动产生工具YACC

## 6.属性文法和语法制导翻译

![原文配图](./legacy-assets/legacy-cnblogs-13196435/352.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/353.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/57.png)

### 6.1属性文法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/58.png)

#### 一、基本概念

![原文配图](./legacy-assets/legacy-cnblogs-13196435/354.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/355.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/356.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/357.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/358.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/359.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/360.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/361.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/362.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/363.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/364.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/365.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/366.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/367.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/368.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/369.png)

### 6.2基于属性文法的处理方法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/59.png)

#### 1.依赖图

![原文配图](./legacy-assets/legacy-cnblogs-13196435/370.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/371.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/372.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/373.png)

##### 例题

![原文配图](./legacy-assets/legacy-cnblogs-13196435/374.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/375.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/60.png)

#### 二、树遍历的属性计算方法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/376.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/377.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/378.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/379.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/380.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/381.png)

#### 一遍扫描的处理方法

![原文配图](./legacy-assets/legacy-cnblogs-13196435/382.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/383.png)

### 6.3S---属性文法的自下而上计算

![原文配图](./legacy-assets/legacy-cnblogs-13196435/384.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/385.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/61.png)

#### 例题

![原文配图](./legacy-assets/legacy-cnblogs-13196435/386.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/387.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/388.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/389.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/390.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/391.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/392.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/393.png)  
![原文配图](./legacy-assets/legacy-cnblogs-13196435/62.png)

### 6.4L---属性文法和自顶向下翻译

### 6.5自下而上计算继承属性
