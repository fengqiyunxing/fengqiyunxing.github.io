---
title: "STL pair的使用"
published: 2020-12-21T14:37:00+08:00
description: "整理 std::pair 的定义、访问、比较和常见用法。"
category: "C++笔记"
tags: ["C++", "STL"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/14167762.html"
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/14167762.html) · 原文发布于 `2020-12-21 14:37:00`（UTC+8）

类模板：`template <class T1, class T2> struct pair`

参数：T1是第一个值的数据类型，T2是第二个值的数据类型。

功能：pair将一对值组合成一个值，这一对值可以具有不同的数据类型（T1和T2），两个值可以分别用pair的两个公有函数first和second访问。

具体用法：

1.定义（构造）：

```cpp
1. pair<int, double> p1;  //使用默认构造函数
2. pair<int, double> p2(1, 2.4);  //用给定值初始化
3. pair<int, double> p3(p2);  //拷贝构造函数
```

2.访问两个元素（通过first和second）：

```cpp
1. pair<int, double> p1;  //使用默认构造函数
2. p1.first = 1;
3. p1.second = 2.5;
4. cout << p1.first << ' ' << p1.second << endl;
```

输出结果：1    2.5

3.赋值operator = ：

（1）利用make\_pair：

```cpp
1. pair<int, double> p1;
2. p1 = make_pair(1, 1.2);
```

（2）变量间赋值：

```cpp
1. pair<int, double> p1(1, 1.2);
2. pair<int, double> p2 = p1;
```

pair的类型：   
 pair 是 一种模版类型。每个pair 可以存储两个值。这两种值无限制。也可以将自己写的struct的对象放进去。。

```cpp
1. pair<string,int> p;
2. pair<int ,int > p;
3. pair<double,int> p;
```

都可以。。。   
 应用：如果一个函数有两个返回值 的话，如果是相同类型，就可以用数组返回，如果是不同类型，就可以自己写个struct ，但为了方便就可以使用 c++ 自带的pair ，返回一个pair,其中带有两个值。除了返回值的应用，在一个对象有多个属性的时候 ，一般自己写一个struct ，如果就是两个属性的话，就可以用pair 进行操作。。。   
 应用pair 可以省的自己写一个struct 。。。如果有三个属性的话，其实也是可以用的pair 的 ，极端的写法

```cpp
pair <int ,pair<int ,int > >
```

写法极端。（后边的两个 > > 要有空格，否则就会是 >> 位移运算符）   
 make\_pair：

```cpp
1. pair<int ,int >p (5,6);
2. pair<int ,int > p1= make_pair(5,6);
3. pair<string,double> p2 ("aa",5.0);
4. pair <string ,double> p3 = make_pair("aa",5.0);
```

有这两种写法来生成一个pair。

如何取得pair的值呢。。   
 每个pair 都有两个属性值 first 和second

```cpp
cout<<p1.first<<p1.second;
```

注意是属性值而不是方法。   
 （补充：以下是网上搜的）   
 由于pair类型的使用比较繁琐，因为如果要定义多个形同的pair类型的时候，可以时候typedef简化声明：

```cpp
1. typedef pair<string, string>    author;
2. author pro("May", "Lily");
3. author joye("James", "Joyce");
```

make\_pair方法小结：   
 std::pair主要的作用是将两个数据组合成一个数据，两个数据可以是同一类型或者不同类型。例如`std::pair<int,float>` 或者 `std：：pair<double,double>`等。pair实质上是一个结构体，其主要的两个成员变量是first和second，这两个变量可以直接使用。初始化一个pair可以使用构造函数，也可以使用std::make\_pair函数，make\_pair函数的定义如下：

```cpp
template pair make_pair(T1 a, T2 b) { return pair(a, b); }
```

一般make\_pair都使用在需要pair做参数的位置，可以直接调用make\_pair生成pair对象。 另一个使用的方面就是pair可以接受隐式的类型转换，这样可以获得更高的灵活度。但是这样会出现如下问题：例如有如下两个定义：

```cpp
1. std::pair<int, float>(1, 1.1);

3. std::make_pair(1, 1.1);
```

其中第一个的second变量是float类型，而make\_pair函数会将second变量都转换成double类型。这个问题在编程是需要引起注意。下面是一段pair与make\_pair的例子程序：

```cpp
1. #include <iostream>
2. #include <utility>
3. #include <string>
4. usingnamespace std;
5. int main () {
6. pair <string,double> product1 ("tomatoes",3.25);
7. pair <string,double> product2;
8. pair <string,double> product3;

10. product2.first ="lightbulbs"; // type of first is string
11. product2.second =0.99; // type of second is double

13. product3 = make_pair ("shoes",20.0);

15. cout <<"The price of "<< product1.first <<" is $"<<product1.second <<"\n";
16. cout <<"The price of "<< product2.first <<" is $"<< product2.second <<"\n";
17. cout <<"The price of "<< product3.first <<" is $"<< product3.second <<"\n";
18. return 0;
19. }
```

其运行结果如下：

```cpp
1. 1The price of tomatoes is $3.25
2. 2The price of lightbulbs is $0.99
3. 3The price of shoes is $20
```

```cpp
1. pair  vs  make_pair
2. make_pair constructs a pair object.
3. template
4. pair make_pair(T1 x, T2 y)
5. {
6. return pair(x, y);
7. }

9. eg:  std::pair("sn001", 12.5);
10. std::make_pair("sn001", 12.5);
11. 两者效果一样。
12. 倘若：std::pair("sn002", 12.6);   // 12.6's datatype is float
13. std::make_pair("sn002",12.6);  // 12.6's datatype is double
14. 使用:
15. std::pair m_pairA;
16. m_pairA = std::make_pair("sn001", 12.5);
17. std::cout<<m_pairA.first<<"  "<<m_pairA.second<<std::endl;
18. 结合map的简单使用：
19. std::pair m_pairA;
20. m_pairA = std::make_pair("sn001", 12.5);
21. //std::cout<<m_pairA.first<<"  "<<m_pairA.second<<std::endl;
22. std::map m_mapA;
23. m_mapA.insert(m_pairA);
24. std::map::iterator iter = m_mapA.begin();
25. std::cout<<iter->first<<"  "<<iter->second<<std::endl;
```

小结:   
 　　make\_pair创建的是一个pair对象。使用都很方便，针对成对出现的数据，如书的ISBN对应一个书名。   
 　　pair是单个数据对的操作，pair是一struct类型，有两个成员变量，通过first,second来访问，用的是“.”访问。   
 　　map是一个关联容器，里面存放的是键值对，容器中每一元素都是pair类型，通过map的insert()方法来插入元素(pair类型)。
