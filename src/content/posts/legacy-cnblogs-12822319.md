---
title: "java自动拆装箱"
published: 2020-05-03T16:55:00+08:00
description: "保留旧站《java自动拆装箱》的历史记录。"
category: "旧文档案"
tags: ["旧文", "Java"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12822319.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12822319.html) · 原文发布于 `2020-05-03 16:55:00`（UTC+8）
> 旧文归档，保留当时的记录。

## 介绍

Java 5增加了自动装箱与自动拆箱机制，方便基本类型与包装类型的相互转换操作。（关于基本类型与包装类型之前有记录过[https://www.cnblogs.com/xiuzhublog/p/12822045.html](/posts/legacy-cnblogs-12822045/)）

我们认为包装类是对基本类型的包装，所以，把基本数据类型转换成包装类的过程就是打包装，英文对应于boxing，中文翻译为装箱。

反之，把包装类转换成基本数据类型的过程就是拆包装，英文对应于unboxing，中文翻译为拆箱。

在Java 5之前，如果要将一个int型的值转换成对应的包装器类型Integer，必须显式的使用new创建一个新的Integer对象，或者调用静态方法Integer.valueOf()。

```
//在Java 5之前，只能这样做
Integer value = new Integer(10);
//或者这样做
Integer value = Integer.valueOf(10);
//直接赋值是错误的
//Integer value = 10;`
```

在Java 5中，可以直接将整型赋给Integer对象，由编译器来完成从int型到Integer类型的转换，这就叫自动装箱。

```
//在Java 5中，直接赋值是合法的，由编译器来完成转换`
`Integer value = 10;`
`与此对应的，自动拆箱就是可以将包装类型转换为基本类型，具体的转换工作由编译器来完成。`
`//在Java 5 中可以直接这么做`
`Integer value = new Integer(10);`
`int i = value;`
```

## 自动拆箱与自动装箱的原理

既然Java提供了自动拆装箱的能力，那么，我们就来看一下，到底是什么原理，Java是如何实现的自动拆装箱功能。

我们有以下自动拆装箱的代码：

```
    public static  void main(String[]args){
        Integer integer=1; //装箱
        int i=integer; //拆箱
    }
```

对以上代码进行反编译后可以得到以下代码：

```
    public static  void main(String[]args){
        Integer integer=Integer.valueOf(1); 
        int i=integer.intValue(); 
    }
```

从上面反编译后的代码可以看出，int的自动装箱都是通过`Integer.valueOf()`方法来实现的，Integer的自动拆箱都是通过`integer.intValue`来实现的。如果读者感兴趣，可以试着将八种类型都反编译一遍 ，你会发现以下规律：**自动装箱都是通过包装类的`valueOf()`方法来实现的.自动拆箱都是通过包装类对象的`xxxValue()`来实现的。**

## **哪些地方会自动拆装箱**

我们了解过原理之后，在来看一下，什么情况下，Java会帮我们进行自动拆装箱。前面提到的变量的初始化和赋值的场景就不介绍了，那是最简单的也最容易理解的。

我们主要来看一下，那些可能被忽略的场景。

### 场景一、将基本数据类型放入集合类

我们知道，Java中的集合类只能接收对象类型，那么以下代码为什么会不报错呢？

```
 List<Integer> li = new ArrayList<>();
    for (int i = 1; i < 50; i ++){
        li.add(i);
    }
```

将上面代码进行反编译，可以得到以下代码：

```
 List<Integer> li = new ArrayList<>();
    for (int i = 1; i < 50; i += 2){
        li.add(Integer.valueOf(i));
    }
```

以上，我们可以得出结论，当我们把基本数据类型放入集合类中的时候，会进行自动装箱。

### 场景二、包装类型和基本类型的大小比较

有没有人想过，当我们对Integer对象与基本类型进行大小比较的时候，实际上比较的是什么内容呢？看以下代码：

```
    Integer a=1;
    System.out.println(a==1?"等于":"不等于");
    Boolean bool=false;
    System.out.println(bool?"真":"假");
```

对以上代码进行反编译，得到以下代码：

```
    Integer a=1;
    System.out.println(a.intValue()==1?"等于":"不等于");
    Boolean bool=false;
    System.out.println(bool.booleanValue?"真":"假");
```

可以看到，包装类与基本数据类型进行比较运算，是先将包装类进行拆箱成基本数据类型，然后进行比较的。

### 场景三、包装类型的运算

有没有人想过，当我们对Integer对象进行四则运算的时候，是如何进行的呢？看以下代码：

```
    Integer i = 10;
    Integer j = 20;

    System.out.println(i+j);
```

反编译后代码如下：

```
    Integer i = Integer.valueOf(10);
    Integer j = Integer.valueOf(20);
    System.out.println(i.intValue() + j.intValue());
```

我们发现，两个包装类型之间的运算，会被自动拆箱成基本类型进行。

### 场景四、三目运算符的使用

这是很多人不知道的一个场景，看一个简单的三目运算符的代码：

```
    boolean flag = true;
    Integer i = 0;
    int j = 1;
    int k = flag ? i : j;
```

很多人不知道，其实在`int k = flag ? i : j;`这一行，会发生自动拆箱。反编译后代码如下：

```
    boolean flag = true;
    Integer i = Integer.valueOf(0);
    int j = 1;
    int k = flag ? i.intValue() : j;
    System.out.println(k);
```

这其实是三目运算符的语法规范。当第二，第三位操作数分别为基本类型和对象时，其中的对象就会拆箱为基本类型进行操作。

因为例子中，`flag ? i : j;`片段中，第二段的i是一个包装类型的对象，而第三段的j是一个基本类型，所以会对包装类进行自动拆箱。如果这个时候i的值为`null`，那么就会发生NPE。（[自动拆箱导致空指针异常](http://www.hollischuang.com/archives/435)）

### 场景五、函数参数与返回值

这个比较容易理解，直接上代码了：

```
    //自动拆箱
    public int getNum1(Integer num) {
     return num;
    }
    //自动装箱
    public Integer getNum2(int num) {
     return num;
    }
```

## 自动拆装箱与缓存

Java SE的自动拆装箱还提供了一个和缓存有关的功能，我们先来看以下代码，猜测一下输出结果：

```
    public static void main(String... strings) {

        Integer integer1 = 3;
        Integer integer2 = 3;

        if (integer1 == integer2)
            System.out.println("integer1 == integer2");
        else
            System.out.println("integer1 != integer2");

        Integer integer3 = 300;
        Integer integer4 = 300;

        if (integer3 == integer4)
            System.out.println("integer3 == integer4");
        else
            System.out.println("integer3 != integer4");
    }
```

我们普遍认为上面的两个判断的结果都是false。虽然比较的值是相等的，但是由于比较的是对象，而对象的引用不一样，所以会认为两个if判断都是false的。在Java中，==比较的是对象应用，而equals比较的是值。所以，在这个例子中，不同的对象有不同的引用，所以在进行比较的时候都将返回false。奇怪的是，这里两个类似的if条件判断返回不同的布尔值。

上面这段代码真正的输出结果：

```
integer1 == integer2
integer3 != integer4
```

原因就和Integer中的缓存机制有关。在Java 5中，在Integer的操作上引入了一个新功能来节省内存和提高性能。整型对象通过使用相同的对象引用实现了缓存和重用。

> 适用于整数值区间-128 至 +127。
>
> 只适用于自动装箱。使用构造函数创建对象不适用。

具体的代码实现可以阅读[Java中整型的缓存机制](http://www.hollischuang.com/archives/1174)一文，这里不再阐述。

我们只需要知道，当需要进行自动装箱时，如果数字在-128至127之间时，会直接使用缓存中的对象，而不是重新创建一个对象。

其中的javadoc详细的说明了缓存支持-128到127之间的自动装箱过程。最大值127可以通过`-XX:AutoBoxCacheMax=size`修改。

实际上这个功能在Java 5中引入的时候,范围是固定的-128 至 +127。后来在Java 6中，可以通过`java.lang.Integer.IntegerCache.high`设置最大值。

这使我们可以根据应用程序的实际情况灵活地调整来提高性能。到底是什么原因选择这个-128到127范围呢？因为这个范围的数字是最被广泛使用的。 在程序中，第一次使用Integer的时候也需要一定的额外时间来初始化这个缓存。

在Boxing Conversion部分的Java语言规范(JLS)规定如下：

如果一个变量p的值是：

```
-128至127之间的整数(§3.10.1)

true 和 false的布尔值 (§3.10.3)

‘\u0000’至 ‘\u007f’之间的字符(§3.10.4)
```

范围内的时，将p包装成a和b两个对象时，可以直接使用a==b判断a和b的值是否相等。

## 自动拆装箱带来的问题

自动拆装箱是一个很好的功能，大大节省了开发人员的精力，不再需要关心到底什么时候需要拆装箱。但是，它也会引入一些问题：

**包装对象的数值比较，不能简单的使用`==`，虽然-128到127之间的数字可以，但是这个范围之外还是需要使用`equals`比较。**

**前面提到，有些场景会进行自动拆装箱，同时也说过，由于自动拆箱，如果包装类对象为null，那么自动拆箱时就有可能抛出NPE。**

**如果一个for循环中有大量拆装箱操作，会浪费很多资源。**

为了避免这些陷阱，我们有必要去看一下各种包装类型的源码。

Integer源码

```
public final class Integer extends Number implements Comparable<Integer> {
    private final int value;
    

/*Integer的构造方法，接受一个整型参数,Integer对象表示的int值，保存在value中*/
 public Integer(int value) {
        this.value = value;
 }
 
/*equals()方法判断的是:所代表的int型的值是否相等*/
 public boolean equals(Object obj) {
        if (obj instanceof Integer) {
            return value == ((Integer)obj).intValue();
        }
        return false;
}
 
/*返回这个Integer对象代表的int值，也就是保存在value中的值*/
 public int intValue() {
        return value;
 }
 
 /**
  * 首先会判断i是否在[IntegerCache.low,Integer.high]之间
  * 如果是，直接返回Integer.cache中相应的元素
  * 否则，调用构造方法，创建一个新的Integer对象
  */
 public static Integer valueOf(int i) {
    assert IntegerCache.high >= 127;
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
 }

/**
  * 静态内部类，缓存了从[low,high]对应的Integer对象
  * low -128这个值不会被改变
  * high 默认是127，可以改变，最大不超过：Integer.MAX_VALUE - (-low) -1
  * cache 保存从[low,high]对象的Integer对象
 */
 private static class IntegerCache {
    static final int low = -128;
    static final int high;
    static final Integer cache[];
 
    static {
        // high value may be configured by property
        int h = 127;
        String integerCacheHighPropValue =
            sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
        if (integerCacheHighPropValue != null) {
            int i = parseInt(integerCacheHighPropValue);
            i = Math.max(i, 127);
            // Maximum array size is Integer.MAX_VALUE
            h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
        }
        high = h;
 
        cache = new Integer[(high - low) + 1];
        int j = low;
        for(int k = 0; k < cache.length; k++)
            cache[k] = new Integer(j++);
    }
 
    private IntegerCache() {}
}
```

以上是Oracle(Sun)公司JDK 1.7中Integer源码的一部分，通过分析上面的代码，得到：

1）Integer有一个实例域value，它保存了这个Integer所代表的int型的值，且它是final的，也就是说这个Integer对象一经构造完成，它所代表的值就不能再被改变。

2）Integer重写了equals()方法，它通过比较两个Integer对象的value，来判断是否相等。

3）重点是静态内部类IntegerCache，通过类名就可以发现：它是用来缓存数据的。它有一个数组，里面保存的是连续的Integer对象。  
(a) low：代表缓存数据中最小的值，固定是-128。

(b) high：代表缓存数据中最大的值，它可以被该改变，默认是127。high最小是127，最大是Integer.MAX\_VALUE-(-low)-1，如果high超过了这个值，那么cache[ ]的长度就超过Integer.MAX\_VALUE了，也就溢出了。

(c) cache[]：里面保存着从[low,high]所对应的Integer对象，长度是high-low+1(因为有元素0，所以要加1)。

4）调用valueOf(inti)方法时，首先判断i是否在[low,high]之间，如果是，则复用Integer.cache[i-low]。比如，如果Integer.valueOf(3)，直接返回Integer.cache[131]；如果i不在这个范围，则调用构造方法，构造出一个新的Integer对象。

5）调用intValue()，直接返回value的值。  
通过3）和4）可以发现，默认情况下，在使用自动装箱时，VM会复用[-128,127]之间的Integer对象。

```
Integer  a1 = 1;
Integer  a2 = 1;
Integer  a3 = new Integer(1);
//会打印true，因为a1和a2是同一个对象,都是Integer.cache[129]
System.out.println(a1 == a2);
//false，a3构造了一个新的对象，不同于a1,a2
System.out.println(a1 == a3);
```

 参考：<https://how2playlife.com/2019/09/02/2Java%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/>

<https://hollischuang.github.io/toBeTopJavaer/#/basics/java-basic/boxing-unboxing>
