---
title: "位运算符的使用"
published: 2020-01-20T19:40:00+08:00
description: "在处理整形数值时，可以直接对组成整形数值的各个位进行操作。这意味着可以使用屏蔽技术获得整数中的各个位包括：&（与）、|（或）、^（异或）、~（非/取反）（与：两个数都为1结果为1，或：两个数有一个为1结果为1，异或：二者"
category: "旧文档案"
tags: ["旧文"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608564.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608564.html) · 原文发布于 `2020-01-20 19:40:00`（UTC+8）
> 旧文归档，保留当时的记录。

在处理整形数值时，可以直接对组成整形数值的各个位进行操作。这意味着可以使用屏蔽技术获得整数中的各个位  
**包括：**&（与）、|（或）、^（异或）、~（非/取反）（与：两个数都为1结果为1，或：两个数有一个为1结果为1，异或：二者不同时结果为1***异或，可以理解为不进位加法：1+1=0，0+0=0，1+0=1***

***性质：  
1、交换律可任意交换运算因子的位置，结果不变***

***2、结合律（即（a^b）Ac==a^（bAc））  
3、对于任何数x，都有xQx=0，x0=x，同自己求异或为0，同0求异或为自己***

***4、自反性AABAB=AA0=A，连续和同一个因子做异或运算，最终结果为自己***）  
2.>>和<<运算符将二进制位进行右移或者左移操作  
3.>>>运算符将用0填充高位；>>运算符用符号位填充高位，没有<<<运算符

对于int型，1<<35与1<<3是相同的（int型只有位AND: both are 1 and the result is 1, or: one is 1 and the result is 1, XOR: the result is 1 when the two are not the same），而左边的操作数是long型时需对右侧操作数模64

## 用法示例：

判断奇偶数  
>获取二进制位是1还是0（两种解决方案）  
交换两个整数变量的值  
>不用判断语句，求整数的绝对值

```java
package 算法.位运算;
//题目：请实现一个函数，输入一个整数，输出该数二进制表示中1的个数。
//例：9的二进制表示为1001，有2位是1
//思路：1.将数逐位左移，并与1进行与运算，并将结果为零的数进行次数统计
       //2.每次消去最低位的一
import java.util.Scanner;
public class test1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N =sc.nextInt();
        System.out.println(Integer.toString(N,2));
        //Integer与int区别https://blog.csdn.net/teacher_lee_zzsxt/article/details/79230501
        int count=0;
        for(int i=0;i<32;i++){
            if((N&(1<<i))==(1<<i)){
            count++;
            }
        }
        System.out.println(count);
        //方法二：
         count = 0;
        while(N!=0){
            N=((N-1)&N);
            count++;
        }
         System.out.println(count);

    }

}
```

```java
package 算法.位运算;
//题目：用一条语句判断一个整数是不是二的整数次方
//思路：将这个整数转换为二进制，假如这个数是二的整数次方，那么这个数只有最左边是一
//其他的位置都是零。
import java.util.Scanner;
public class test2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N =sc.nextInt();
        System.out.println(Integer.toString(N,2));//将N转化为二进制数
       if(((N-1)&N)==0){
           System.out.println("这个整数是二的整数次方");
       }
       else
           System.out.println("这个整数不是二的整数次方");
    }
}
```

```java
package 算法.位运算;
//题目：将二进制数的奇偶位互换
//思路：1.将整数分别与0101010101....和1010101010....做与运算，可以分别保留
//奇数位和偶数位。然后将保留的奇数左移一位，将保留的偶数右移一位，就能得到转换后的数。
//2.常规的解法可以将输入的数转换为数组，然后将数组中奇偶数位互换
import java.util.Scanner;

public class test3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        System.out.println("原来的数是："+N);
        int M=transform(N);
        System.out.println("转换后的数是的数是："+M);
    }
    public static int transform(int i){
        int even = i&0xaaaaaaaa;//和10101010....做与运算提取偶数位
        //这里为了方便使用了16进制的八个a.
        int odd = i&0x55555555;//和0101010101....做与运算提取奇数位
        return(even>>1)^(odd<<1);
    }
}
```

```java
package 算法.位运算;
//题目：给定一个介于0和1之间的实数，（如0.625），类型为double，打印它的二进制表示（0.101，因为小数点后的二进制分别表示0.5，0.25.0.125......）。
//如果该数字无法精确地用32位以内的二进制表示，则打印“ERR OR”
//思路：
public class test4 {
    public static void main(String[] args) {
        double num = 0.5;
        StringBuilder sb = new StringBuilder("0.");
        while(num>0){
            //乘二：挪整
            double r = num*2;
            //判断整数部分
           if(r>1){
               sb.append("1");
               //消掉整数部分
               num=r-1;
           }else{
               sb.append("0");
               num=r;
           }
           if(sb.length()>34){
               System.out.println("ERROR");
               return;
           }
        }
        System.out.println(sb.toString());
    }
}
```
