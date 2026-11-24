---
title: "java中注解的使用"
published: 2019-09-13T17:27:00+08:00
description: "定义： 注解（Annotation），也叫元数据。一种代码级别的说明。它是JDK1.5及以后版本引入的一个特性，与类、接口、枚举是在同一个层次。它可以声明在包、类、字段、方法、局部变量、方法参数等的前面，用来对这些元素进"
category: "旧文档案"
tags: ["旧文", "Java"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608577.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608577.html) · 原文发布于 `2019-09-13 17:27:00`（UTC+8）
> 旧文归档，保留当时的记录。

### 定义：

注解（Annotation），也叫元数据。一种代码级别的说明。它是JDK1.5及以后版本引入的一个特性，与类、接口、枚举是在同一个层次。它可以声明在包、类、字段、方法、局部变量、方法参数等的前面，用来对这些元素进行说明，注释。使用注解：@注解名称

### 作用分类：

①编写文档：通过代码里标识的元数据生成文档【生成文档doc文档】

例如：

```java
package annotation;

/**
 * 注解演示
 * @author hide_on_rookies
 *@version 1.0
 *@since1.5
 */

public class AnnoDemo1 {
	
	/**
	 * 计算两数的和
	 *@param a 整数
	 *@param b 整数
	 *@return 两数的和
	 */
	public int add(int a,int b) {
		return a+b;
	}
}
```

② 代码分析：通过代码里标识的元数据对代码进行分析【使用反射】

③编译检查：通过代码里标识的元数据让编译器能够实现基本的编译检查【Override】

### JDK中预定义的一些注解

      @override：检查被该注解标注的方法是否是继承自父类（接口）的

      @Deprecated：该注解标注的内容，表示已过时

      @SuppressWarnings：压制警告

例如：

```java
package annotation;

/**
 * JDK中预定义的一些注解

      @override：检查被该注解标注的方法是否是继承自父类（接口）的
（如果想重写父类的方法，比如toString()方法的话，在方法前面加上@Override 系统可以帮你检查方法的正确性。）

      @Deprecated：该注解标注的内容，表示已过时

      @SuppressWarnings：压制警告(一般传递参数all）
 *
 */
public class AnnoDemo2 {

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
	@Deprecated
	public void show() {
		//假若此方法有缺陷
		//声明不建议使用此方法,声明后show方法上会有横线
	}
	@SuppressWarnings("all")
	public void show2() {
		//用于替代show（）方法
	}
     
}
```

### 自定义注解

        格式：

            元注解

        public @interface 注解名称{

                    属性列表

}

       本质：注解本质上就是一个接口，该接口默认继承Annotation接口

            \*public interface MyAnno extends java.lang.annotation.Annotation{}

```java
package annotation;

public @interface MyAnno {

}
```

      属性：接口中的抽象方法

                  要求：

                      1.属性的返回值类型有下列类型（其他的会报错）

                              \*基本数据类型

                              \*String

                              \*枚举

                              \*注解

                              \*以上类型的数组

使用示例

```java
​
package annotation;

public @interface MyAnno {

}

​
package annotation;

public @interface MyAnno2 {

}

package annotation;

public @interface MyAnno {
	int show1();
	String show2();
	
	Person per();
	MyAnno2 anno2();
	String[] strs();

}
```

                       2.定义了属性，在使用时需要给属性赋值。

                          1.如果定义属性时，使用default关键字给属性默认初始化值，则使用注解时，可以不进行属性的赋值。

                          2.如果只有一个属性需要赋值，并且属性的名称是value，则value可以省略，直接定义值即可。

                          3.数组赋值时，值使用{}包裹，如果数组中只有一个值，则{}可以省略

实例

```java
package annotation;

public @interface MyAnno {
	int show1();
	String show2();
	//String show2();default "张三"；如果不想在之后赋值，可以使用default设置默认值

    Person per();
	MyAnno2 anno2();
	String[] strs();

}


package annotation;
@MyAnno(show1=0000,show2="多个变量用逗号隔开",per=Person.P1,anno2=@MyAnno2,strs= {"adc,opc"})
public class test {

}
```

### 在程序中使用注解

### 拓展资料：

@ param标签可以归档方法或构造器的某个单一参数，或者归档类、接口以及泛型方法的类型参数。在使用@ param标签时，我们应该针对方法的每一个参数都使用一个该标签。每个段落的第一个词会被当作参数名，而余下的部分则会被当作是对它的描述:

[?](https://www.jb51.net/article/76762.htm)

|  |  |
| --- | --- |
| 1 | `@param` `max The maximum number of words to read.` |

　　当归档类型参数时，我们应该在类型参数名两边加上<和>:

[?](https://www.jb51.net/article/76762.htm)

|  |  |
| --- | --- |
| 1 | `@param``一e element type of` `this` `List` |

　　然而，类型参数通常并不需要显式的文档，因为它们的意义都很明显。

**@ see**  
@ see标签可以创建链接到其他javadoc文档的交叉引用。我们可以在该标签的后面命名任何标识符，尽管我们必须对它们进行充分的限定。例如，通常可以使用某个类的成员的简单名来命名它，但是如果该成员是一个重载方法，我们就必须通过列举各个参数的类型来指定该方法的重载版本。我们可以使用未限定的名字来指定当前包内的接口或类，但必须使用完全限定名来指定其他包中的类型。我们可以通过在成员名的前面使用#来指定类型的成员。下面是所有有效的@ see标签格式:

[?](https://www.jb51.net/article/76762.htm)

|  |  |
| --- | --- |
| 1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19 | `@see` `#getName`    `@see` `Attr`    `@see` `com.magic.attr.Attr`    `@see` `com.magic.attr.Deck#DECK-SIZE`    `@see` `com.magic.attr.Attr#getName`    `@see` `com.magic.attr.Attr#Attr(String)`    `@see` `com.magic.attr.Attr#Attr(String，Object)`    `@see` `com.magic.attr`    `@see` `Attribute Specification`    `@see` `"The Java Developer's Almanac"` |

　　第一种形式所指的是名为getName的方法，该方法与文档注释自身位于同一个类或接口中，或者位于某个包围类或包围接口中，这样的语法也可以应用于构造器和字段。第二种形式引用的是当前包中的类或某个导人包中的类。第三种形式使用完全限定名引用了某个类。

　　后4种形式的@see引用的是成员，其中，前两个是关于域(DECK-SIZ日和方法(getName)的形式。我们可以直接使用方法名，因为在Attr类中只定义了一个getName方法。后两种形式引用的是Attr类的构造器，其中一个构造器接受的是字符串引元，而另一个构造器接受的则是字符串和对象。当构造器或方法有重载版本时，我们必须指定想要引用的重载版本的引元。

　　接下来的@see形式将读者引向了一个特定的包:com.magic.attro

　　最后的两种形式使得我们可以引用其他的文档。其中，前一个使用了来定义链接，后一个使用引号将文档名括了起来。我们可以用这两种形式将读者引向其他文档，例如完整的说明书。

　　对语言实体进行命名的@ see形式(除上面的最后两种形式之外的所有形式)可以在实体的后面跟随一个标号(label)。在生成的文档中，这种标号的名字将会替代实体的名字。例如:

[?](https://www.jb51.net/article/76762.htm)

|  |  |
| --- | --- |
| 1 | `@ see #getNameAttribute Names` |

　　将创建一个指向getName的文档的链接，但它所显示的文本是”Attribute Names”而不是"getName"。通常我们应该使用成员的真实名字，但这里所展示的特性偶尔也会很有用。
