---
title: "JavaScript学习（二）"
published: 2019-09-22T14:28:00+08:00
description: "对象： 可以说 \"JavaScript 对象是变量的容器\"。 但是，我们通常认为 \"JavaScript 对象是键值对的容器\"。 键值对通常写法为 name : value (键与值以冒号分割)。 键值对在 JavaSc"
category: "旧文档案"
tags: ["旧文", "JavaScript"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608575.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608575.html) · 原文发布于 `2019-09-22 14:28:00`（UTC+8）
> 旧文归档，保留当时的记录。

## 对象：

可以说 "JavaScript 对象是变量的容器"。

但是，我们通常认为 "JavaScript 对象是键值对的容器"。

键值对通常写法为 **name : value** (键与值以冒号分割)。

键值对在 JavaScript 对象通常称为 **对象属性**。

### 对象的定义:

可以使用字符来定义和创建 JavaScript 对象:

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

定义 JavaScript 对象可以跨越多行，空格跟换行不是必须的：

var person = {  
    firstName:"John",  
    lastName:"Doe",  
    age:50,  
    eyeColor:"blue"  
}

### 访问对象属性:

有两种方法访问对象的属性：

1.person.lastName;

2.person["lastName"];

## 对象方法：

对象的方法定义了一个函数，并作为对象的属性存储。

对象方法通过添加 () 调用 (作为一个函数)。

name = person.fullName();

如果要访问 person 对象的 fullName 属性，它将作为一个定义函数的字符串返回：

name = person.fullName;

## 函数：

函数是由事件驱动的或当它被调用时可重复使用的代码块。

### 函数语法：

函数就是包裹在花括号中的代码块，前面使用了关键词 function：

当调用该函数时，会执行函数内的代码。

可以在某事件发生时直接调用函数（比如当用户点击按钮时），并且可由 JavaScript 在任何位置进行调用。

function *functionname*()  
{  
    *// 执行代码*  
}

示例：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>js学习</title>
<script>
function myFunction()
{
    alert("警告出现了-_-");
}
</script>
</head>
 
<body>
<button οnclick="myFunction()">点我出现警告</button>
</body>
</html>
```

## 调用带参数的函数：

在调用函数时，可以向其传递值，这些值被称为参数。

这些参数可以在函数中使用。

可以发送任意多的参数，由逗号 (,) 分隔：

myFunction(*argument1,argument2*)

声明函数时，要把参数作为变量来声明：

function myFunction(*var1*,*var2*)  
{  
*代码*  
}

变量和参数必须以一致的顺序出现。第一个变量就是第一个被传递的参数的给定的值，以此类推。

```html
<!DOCTYPE html>
<html>	
<head> 
<meta charset="utf-8"> 
<title>js学习(runoob.com)</title> 
</head>
<body>

<p>点击这个按钮，来调用带参数的函数。</p>
<button οnclick="myFunction('Harry Potter','Wizard')">点击这里</button>
<script>
function myFunction(name,job){
	alert("Welcome " + name + ", the " + job);
}
</script>

</body>
</html>
```

### 带有返回值的函数：

有时，我们会希望函数将值返回调用它的地方。

通过使用 return 语句就可以实现。

在使用 return 语句时，函数会停止执行，并返回指定的值。

### 语法

function myFunction()  
{  
    var x=5;  
    return x;  
}

上面的函数会返回值 5。

**PS：** 整个 JavaScript 并不会停止执行，仅仅是函数。JavaScript 将继续执行代码，从调用函数的地方。

函数调用将被返回值取代：

## 局部 JavaScript 变量:

在 JavaScript 函数内部声明的变量（使用 var）是*局部*变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。

您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。

只要函数运行完毕，本地变量就会被删除。

## 全局 JavaScript 变量：

在函数外声明的变量是*全局*变量，网页上的所有脚本和函数都能访问它。

## JavaScript 变量的生存期：

JavaScript 变量的生命期从它们被声明的时间开始。

局部变量会在函数运行以后被删除。

全局变量会在页面关闭后被删除。

## 向未声明的 JavaScript 变量分配值：

如果您把值赋给尚未声明的变量，该变量将被自动作为 window 的一个属性。

这条语句：

carname="Volvo";

将声明 window 的一个属性 carname。

非严格模式下给未声明变量赋值创建的全局变量，是全局对象的可配置属性，可以删除。

```html
​
var var1 = 1; // 不可配置全局属性
var2 = 2; // 没有使用 var 声明，可配置全局属性

console.log(this.var1); // 1
console.log(window.var1); // 1

delete var1; // false 无法删除
console.log(var1); //1

delete var2; 
console.log(delete var2); // true
console.log(var2); // 已经删除 报错变量未定义

​
```

## 作用域：

作用域是可访问变量的集合。

## JavaScript 作用域

在 JavaScript 中, 对象和函数同样也是变量。

**在 JavaScript 中, 作用域为可访问变量，对象，函数的集合。**

JavaScript 函数作用域: 作用域在函数内修改。
