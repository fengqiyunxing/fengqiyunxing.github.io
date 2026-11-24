---
title: "C/C++ typedef用法详解"
published: 2020-09-23T10:12:00+08:00
description: "第一、四个用途 用途一： 定义一种类型的别名，而不只是简单的宏替换。可以用作同时声明指针型的多个对象。比如：char* pa, pb; // 这多数不符合我们的意图，它只声明了一个指向字符变量的指针， // 和一个字符变"
category: "旧文档案"
tags: ["旧文", "C++"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13716612.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13716612.html) · 原文发布于 `2020-09-23 10:12:00`（UTC+8）
> 旧文归档，保留当时的记录。

第一、四个用途

用途一：

定义一种类型的别名，而不只是简单的宏替换。可以用作同时声明指针型的多个对象。比如：  
char\* pa, pb; // 这多数不符合我们的意图，它只声明了一个指向字符变量的指针，   
// 和一个字符变量；  
以下则可行：  
typedef char\* PCHAR; // 一般用大写  
PCHAR pa, pb; // 可行，同时声明了两个指向字符变量的指针  
虽然：  
char \*pa, \*pb;  
也可行，但相对来说没有用typedef的形式直观，尤其在需要大量指针的地方，typedef的方式更省事。

用途二：

用在旧的C的代码中（具体多旧没有查），帮助struct。以前的代码中，声明struct新对象时，必须要带上struct，即形式为： struct 结构名 对象名，如：

```
struct tagPOINT1  
{  
    int x;  
    int y;  
};  
struct tagPOINT1 p1;
```

而在C++中，则可以直接写：结构名 对象名，即：

tagPOINT1 p1;

估计某人觉得经常多写一个struct太麻烦了，于是就发明了：

```
typedef struct tagPOINT  
{  
    int x;  
    int y;  
}POINT;  
POINT p1; // 这样就比原来的方式少写了一个struct，比较省事，尤其在大量使用的时候
```

或许，在C++中，typedef的这种用途二不是很大，但是理解了它，对掌握以前的旧代码还是有帮助的，毕竟我们在项目中有可能会遇到较早些年代遗留下来的代码。

用途三：

用typedef来定义与平台无关的类型。  
比如定义一个叫 REAL 的浮点类型，在目标平台一上，让它表示最高精度的类型为：  
typedef long double REAL;   
在不支持 long double 的平台二上，改为：  
typedef double REAL;   
在连 double 都不支持的平台三上，改为：  
typedef float REAL;   
也就是说，当跨平台时，只要改下 typedef 本身就行，不用对其他源码做任何修改。  
标准库就广泛使用了这个技巧，比如size\_t。  
另外，因为typedef是定义了一种类型的新别名，不是简单的字符串替换，所以它比宏来得稳健（虽然用宏有时也可以完成以上的用途）。

用途四：

为复杂的声明定义一个新的简单的别名。方法是：在原来的声明里逐步用别名替换一部分复杂声明，如此循环，把带变量名的部分留到最后替换，得到的就是原声明的最简化版。举例：

1. 原声明：int \*(\*a[5])(int, char\*);  
变量名为a，直接用一个新别名pFun替换a就可以了：  
typedef int \*(\*pFun)(int, char\*);   
原声明的最简化版：  
pFun a[5];

2. 原声明：void (\*b[10]) (void (\*)());  
变量名为b，先替换右边部分括号里的，pFunParam为别名一：  
typedef void (\*pFunParam)();  
再替换左边的变量b，pFunx为别名二：  
typedef void (\*pFunx)(pFunParam);  
原声明的最简化版：  
pFunx b[10];

3. 原声明：doube(\*)() (\*e)[9];   
变量名为e，先替换左边部分，pFuny为别名一：  
typedef double(\*pFuny)();  
再替换右边的变量e，pFunParamy为别名二  
typedef pFuny (\*pFunParamy)[9];  
原声明的最简化版：  
pFunParamy e;

理解复杂声明可用的“右左法则”：  
从变量名看起，先往右，再往左，碰到一个圆括号就调转阅读的方向；括号内分析完就跳出括号，还是按先右后左的顺序，如此循环，直到整个声明分析完。举例：  
int (\*func)(int \*p);  
首 先找到变量名func，外面有一对圆括号，而且左边是一个\*号，这说明func是一个指针；然后跳出这个圆括号，先看右边，又遇到圆括号，这说明 (\*func)是一个函数，所以func是一个指向这类函数的指针，即函数指针，这类函数具有int\*类型的形参，返回值类型是int。  
int (\*func[5])(int \*);  
func 右边是一个[]运算符，说明func是具有5个元素的数组；func的左边有一个\*，说明func的元素是指针（注意这里的\*不是修饰func，而是修饰 func[5]的，原因是[]运算符优先级比\*高，func先跟[]结合）。跳出这个括号，看右边，又遇到圆括号，说明func数组的元素是函数类型的指 针，它指向的函数具有int\*类型的形参，返回值类型为int。

也可以记住2个模式：  
type (\*)(....)函数指针   
type (\*)[]数组指针

第二、两大陷阱

陷阱一：

记住，typedef是定义了一种类型的新别名，不同于宏，它不是简单的字符串替换。比如：  
先定义：  
typedef char\* PSTR;  
然后：  
int mystrcmp(const PSTR, const PSTR);

const PSTR实际上相当于const char\*吗？不是的，它实际上相当于char\* const。  
原因在于const给予了整个指针本身以常量性，也就是形成了常量指针char\* const。  
简单来说，记住当const和typedef一起出现时，typedef不会是简单的字符串替换就行。

陷阱二：

typedef在语法上是一个存储类的关键字（如auto、extern、mutable、static、register等一样），虽然它并不真正影响对象的存储特性，如：  
typedef static int INT2; //不可行  
编译将失败，会提示“指定了一个以上的存储类”。

原文：https://www.cnblogs.com/rednodel/p/9287851.html
