---
title: "JavaScript学习（三）"
published: 2019-09-23T18:25:00+08:00
description: "事件： HTML 事件是发生在 HTML 元素上的事情。 当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。 HTML 事件可以是浏览器行为，也可以是用户行为。例如HTML页"
category: "旧文档案"
tags: ["旧文", "JavaScript"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608574.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608574.html) · 原文发布于 `2019-09-23 18:25:00`（UTC+8）
> 旧文归档，保留当时的记录。

### 事件：

HTML 事件是发生在 HTML 元素上的事情。

当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。

HTML 事件可以是浏览器行为，也可以是用户行为。例如HTML页面加载完成、HTML按钮被点击；

JavaScript事件列表：[HTML DOM 事件](https://www.runoob.com/jsref/dom-obj-event.html)

### 字符串：

字符串可以存储一系列字符，如 "Hello World"。

字符串可以是插入到引号中的任何字符。你可以使用单引号或双引号：

var carname = "123456abc";  
var carname = '123456abc';

可以使用索引位置来访问字符串的的每个字符：

var character = new name[7];

字符串的索引从 0 开始，这意味着第一个字符索引值为 [0],第二个为 [1], 以此类推。

你可以在字符串中使用引号，字符串中的引号不要与字符串的引号相同:

var answer = "It's alright";  
var answer = "He is called 'Johnny'";  
var answer = 'He is called "Johnny"';

你也可以在字符串添加转义字符来使用引号：

var x = 'It\'s alright';  
var y = "He is called \"Johnny\"";

可以使用内置属性 **length** 来计算字符串的长度：

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
var sln = txt.length;

### 特殊字符

在 JavaScript 中，字符串写在单引号或双引号中。

因为这样，以下实例 JavaScript 无法解析：

 "We are the so-called "Vikings" from the north."

字符串 "We are the so-called " 被截断。

如何解决以上的问题呢？可以使用反斜杠 (\) 来转义 "Vikings" 字符串中的双引号，如下:

 "We are the so-called \"Vikings\" from the north."

 反斜杠是一个**转义字符**。 转义字符将特殊字符转换为字符串字符：

转义字符 (\) 可以用于转义撇号，换行，引号，等其他特殊字符。

下表中列举了在字符串中可以使用转义字符转义的特殊字符：

| 代码 | 输出 |
| --- | --- |
| \' | 单引号 |
| \" | 双引号 |
| \\ | 反斜杠 |
| \n | 换行 |
| \r | 回车 |
| \t | tab(制表符) |
| \b | 退格符 |
| \f | 换页符 |

### 字符串可以是对象

通常， JavaScript 字符串是原始值，可以使用字符创建： **var firstName = "John"**

但我们也可以使用 new 关键字将字符串定义为一个对象： **var firstName = new String("John")**

**例如：**var x = "John";  
var y = new String("John");  
typeof x // 返回 String  
typeof y // 返回 Object

#### PS：

不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用：

### 字符串属性和方法

原始值字符串，如 "John", 没有属性和方法(因为他们不是对象)。

原始值可以使用 JavaScript 的属性和方法，因为 JavaScript 在执行方法和属性时可以把原始值当作对象。

### 字符串属性

| 属性 | 描述 |
| --- | --- |
| constructor | 返回创建字符串属性的函数 |
| length | 返回字符串的长度 |
| prototype | 允许您向对象添加属性和方法 |

具体的实例方法如下：[JavaScript String 对象](https://www.runoob.com/jsref/jsref-obj-string.html)

### 运算符：

### 用于字符串的 + 运算符

+ 运算符用于把文本值或字符串变量加起来（连接起来）。

如需把两个或多个字符串变量连接起来，请使用 + 运算符。

例如：

txt1="What a very";  
txt2="nice day";  
txt3=txt1+txt2;

*txt3* 运算结果如下:

What a verynice day

**字符串中加入空格：**

1.要想在两个字符串之间增加空格，需要把空格插入一个字符串之中：

txt1="What a very ";  
txt2="nice day";  
txt3=txt1+txt2;

在以上语句执行后，变量 *txt3*包含的值是：

What a very nice day

2.或者把空格插入表达式中：

txt1="What a very";  
txt2="nice day";  
txt3=txt1+" "+txt2;

在以上语句执行后，变量*txt3* 包含的值是：

What a very nice day

### 对字符串和数字进行加法运算

两个数字相加，返回数字相加的和，如果数字与字符串相加，返回字符串，如下实例：

例如：

x=5+5;  
y="5"+5;  
z="Hello"+5;

*x*,*y*, 和 *z* 输出结果为:

10  
55  
Hello5

#### 比较和逻辑运算符：

具体有值和值的类型两种比较。

| 运算符 | 描述 | 比较 | 返回值 |  |
| --- | --- | --- | --- | --- |
| == | 等于 | x==8 | *false* |  |
| x==5 | *true* |  |
| === | 绝对等于（值和类型均相等） | x==="5" | *false* |  |
| x===5 | *true* |  |
| != | 不等于 | x!=8 | *true* |  |
| !== | 不绝对等于（值和类型有一个不相等，或两个都不相等） | x!=="5" | *true* |  |
| x!==5 | *false* |  |
| > | 大于 | x>8 | *false* |  |
| < | 小于 | x<8 | *true* |  |
| >= | 大于或等于 | x>=8 | *false* |  |
| <= | 小于或等于 | x<=8 | *true* |  |

#### 关于条件及循环控制语句等不再记录

### typeof 操作符：

可以使用 typeof 操作符来检测变量的数据类型。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>js学习</title>
</head>
<body>

<p> typeof 操作符返回变量或表达式的类型。</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
	//返回string
	typeof "john" + "<br>" + 
	//返回number
	typeof 3.14 + "<br>" +
	//返回boolen
	typeof false + "<br>" +
	//返回object
	typeof [1,2,3,4] + "<br>" +
	//返回object
	typeof {name:'john', age:34};
</script>

</body>
</html>
```

### null：

在 JavaScript 中 null 表示 "什么都没有"。

null是一个只有一个值的特殊类型。表示一个空对象引用。

用 typeof 检测 null 返回是object。

你可以设置为 null 来清空对象:

### undefined

在 JavaScript 中, **undefined** 是一个没有设置值的变量。

**typeof** 一个没有值的变量会返回  **undefined**。

例如

var person;                  // 值为 undefined(空), 类型是undefined

任何变量都可以通过设置值为 **undefined** 来清空。 类型为 **undefined**.

例如：person = undefined;          // 值为 undefined, 类型是undefined

### undefined 和 null 的区别

null 和 undefined 的值相等，但类型不等：

typeof undefined             // undefined  
typeof null                  // object  
null === undefined           // false  
null == undefined            // true

## JavaScript 类型转换：

### avaScript 数据类型

在 JavaScript 中有 5 种不同的数据类型：

- string
- number
- boolean
- object
- function

3 种对象类型：

- Object
- Date
- Array

2 个不包含任何值的数据类型：

- null
- undefined

### constructor 属性

**constructor** 属性返回所有 JavaScript 变量的构造函数。

例如:

"John".constructor                 // 返回函数 String()  { [native code] }  
(3.14).constructor                 // 返回函数 Number()  { [native code] }  
false.constructor                  // 返回函数 Boolean() { [native code] }  
[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }  
{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }  
new Date().constructor             // 返回函数 Date()    { [native code] }  
function () {}.constructor         // 返回函数 Function(){ [native code] }

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>js学习</title>
</head>
<body>

<p> constructor 属性返回变量或对象的构造函数。</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
    "john".constructor + "<br>" +
    (3.14).constructor + "<br>" +
    false.constructor + "<br>" +
    [1,2,3,4].constructor + "<br>" +
    {name:'john', age:34}.constructor + "<br>" +
    new Date().constructor + "<br>" +
    function () {}.constructor;
</script>

</body>
</html>
```

可以使用 constructor 属性来查看对象是否为数组 (包含字符串 "Array"):

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>js学习</title>
</head>
<body>

<p>判断是否为数组。</p>
<p id="demo"></p>
<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = isArray(fruits);
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
</script>

</body>
</html>
```

可以使用 constructor 属性来查看对象是否为日期 (包含字符串 "Date"):

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>js学习</title>
</head>
<body>

<p>判断是否为日期。</p>
<p id="demo"></p>
<script>
var myDate = new Date();
document.getElementById("demo").innerHTML = isDate(myDate);
function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}
</script>

</body>
</html>
```

### JavaScript 类型转换

JavaScript 变量可以转换为新变量或其他数据类型：

- 通过使用 JavaScript 函数
- 通过 JavaScript 自身自动转换

---

#### 将数字转换为字符串

全局方法 **String()** 可以将数字转换为字符串。

该方法可用于任何类型的数字，字母，变量，表达式：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>js学习</title>
</head>
<body>

<p> String() 方法可以将数字转换为字符串。</p>
<p id="demo"></p>
<script>
var x = 123;
document.getElementById("demo").innerHTML =
    String(x) + "<br>" +
    String(123) + "<br>" +
    String(100 + 23);
</script>
</body>
</html>
```

Number 方法 **toString()** 也是有同样的效果。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>js学习</title>
</head>
<body>

<p>toString() 方法将数字转换为字符串。</p>
<p id="demo"></p>
<script>
var x = 123;
document.getElementById("demo").innerHTML =
    x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();
</script>

</body>
</html>
```

### 将布尔值转换为字符串

全局方法 **String()** 可以将布尔值转换为字符串。

String(false)        // 返回 "false"  
String(true)         // 返回 "true"

Boolean 方法 **toString()** 也有相同的效果。

false.toString()     // 返回 "false"  
true.toString()      // 返回 "true"

### 将日期转换为字符串

Date() 返回字符串。

Date()      // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)

全局方法 String() 可以将日期对象转换为字符串。

String(new Date())      // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)

Date 方法 **toString()** 也有相同的效果。

例如：

obj = new Date()  
obj.toString()   // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)

### 将字符串转换为数字

全局方法 **Number()** 可以将字符串转换为数字。

字符串包含数字(如 "3.14") 转换为数字 (如 3.14).

空字符串转换为 0。

其他的字符串会转换为 NaN (不是个数字)。

Number("3.14")    // 返回 3.14  
Number(" ")       // 返回 0  
Number("")        // 返回 0  
Number("99 88")   // 返回 NaN

### 将日期转换为数字

全局方法 **Number()** 可将日期转换为数字。

d = new Date();  
Number(d)          // 返回 1404568027739

日期方法 **getTime()** 也有相同的效果。

d = new Date();

### 自动转换类型

当 JavaScript 尝试操作一个 "错误" 的数据类型时，会自动转换为 "正确" 的数据类型。

以下输出结果不是你所期望的：

5 + null    // 返回 5         null 转换为 0  
"5" + null  // 返回"5null"   null 转换为 "null"  
"5" + 1     // 返回 "51"      1 转换为 "1"   
"5" - 1     // 返回 4         "5" 转换为 5

---

### 自动转换为字符串

当你尝试输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法：

document.getElementById("demo").innerHTML = myVar;  
  
myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"  
myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"  
myVar = new Date()      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"

数字和布尔值也经常相互转换：

myVar = 123             // toString 转换为 "123"  
myVar = true            // toString 转换为 "true"  
myVar = false           // toString 转换为 "false"

d.getTime()        // 返回 1404568027739
