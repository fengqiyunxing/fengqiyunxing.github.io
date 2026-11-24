---
title: "Linux环境下C++调试的三板斧"
published: 2020-09-24T16:44:00+08:00
description: "调试解决程序的漏洞，是程序员最基本的技能之一。用惯了图形化IDE，在目前使用gtest框架进行单元测试，需要通过xshell远程连接Linux虚拟机进行C++代码的调试时，觉得很不适应。经过几天查资料，和实践，找到了几种"
category: "旧文档案"
tags: ["旧文", "C++", "Linux"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13724000.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13724000.html) · 原文发布于 `2020-09-24 16:44:00`（UTC+8）
> 旧文归档，保留当时的记录。

调试解决程序的漏洞，是程序员最基本的技能之一。用惯了图形化IDE，在目前使用gtest框架进行单元测试，需要通过xshell远程连接Linux虚拟机进行C++代码的调试时，觉得很不适应。经过几天查资料，和实践，找到了几种简单方便的调试方法。

## 1.gdb

GDB 是GNU开源组织发布的一个强大的UNIX下的程序调试工具。它没有图形化的界面，但是并没有想象的那么难用，甚至在某些方面比图形化的调试工具做得更好。

### 常用命令列表

| 命令 | 解释 | 简写 |
| --- | --- | --- |
| file | 装入想要调试的可执行文件 | 无 |
| list | 列出产生执行文件源代码的一部分 | l |
| next | 执行一行源代码但不进入函数内部 | n |
| step | 执行一行源代码而且进入函数内部 | s |
| run | run执行当前被调试的程序 | r |
| continue | 继续执行程序 | c |
| quit | 终止GDB | q |
| print | 输出当前指定变量的值 | p |
| break | 在代码里设置断点 | b |
| info break | 查看设置断点的信息i | ib |
| delete | 删除设置的断点 | $1600 |
| watch | 监视一个变量的值，一旦值有变化，程序停 | wa |
| help | GDB中的帮助命令 | h |

### 常用用法示例

#### 1.生成可执行文件

```cpp
gcc -g test.c -o test
```

**注意必须使用-g参数**，这样编译时会加入调试信息，否则无法调试执行文件。

#### 2.启动gdb

```cpp
gdb test 
gdb -q test //表示不打印gdb版本信息，界面较为干净；
```

两种命令的信息如下：

```cpp
root@ubuntu:/home/eit/c_test# gdb test
GNU gdb (Ubuntu 7.7-0ubuntu3) 7.7
Copyright (C) 2014 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.  Type "show copying"
and "show warranty" for details.
This GDB was configured as "x86_64-linux-gnu".
Type "show configuration" for configuration details.
For bug reporting instructions, please see:
<http://www.gnu.org/software/gdb/bugs/>.
Find the GDB manual and other documentation resources online at:
<http://www.gnu.org/software/gdb/documentation/>.
For help, type "help".
Type "apropos word" to search for commands related to "word"...
Reading symbols from test...done.
(gdb) q
```

```cpp
root@ubuntu:/home/eit/c_test# gdb -q test
Reading symbols from test...done.
(gdb)
```

#### 3.查看源文件

list(简写 l)： 查看源程序代码，默认显示10行，按回车键继续看余下的。

```cpp
(gdb) list 
9	#define MAX_SIZE
10	
11	int main()
12	{
13	    int i,fd,size1 ,size2 ,len;
14	    char *buf = "helo!I'm liujiangyong ";
15	    char buf_r[15];
16	    len = strlen(buf);
17	    fd = open("/home/hello.txt",O_CREAT | O_TRUNC | O_RDWR,0666);
18	    if (fd<0)
(gdb) 
19	        {
20	            perror("open :");
21	            exit(1);
22	        }
23	    else
24	        {
25	        printf("open file:hello.txt %d\n",fd);
26	        }
27	    size1 = write(fd,buf,len);
28	    if (fd<0)
(gdb) 
29	    {
30	        printf("writre erro;");
31	
32	    }
33	    else
34	    {
35	        printf("写入的长度：%d\n写入文本内容：%s\n",size1,buf);
36	
37	    }
38	    lseek(fd,0,SEEK_SET);
(gdb) 
39	    size2 = read(fd,buf_r,12);
40	    if (size2 <0)
41	    {
42	        printf("read  erro\n");
43	    }
44	    else
45	    {
46	        printf("读取长度：%d\n 文本内容是：%s\n",size2,buf_r);
47	    }
48	    close(fd);    
(gdb) 
49	
50	
51	}
(gdb) 
Line number 52 out of range; write.c has 51 lines.
(gdb)
```

#### 4.运行程序

run(简写 r) ：运行程序直到遇到 结束或者遇到断点等待下一个命令；

```cpp
(gdb) r
The program being debugged has been started already.
Start it from the beginning? (y or n) y
Starting program: /home/eit/c_test/test 
open file:hello.txt 3
写入的长度：22
写入文本内容：helo!I'm liujiangyong 
读取长度：12
 文本内容是：helo!I'm liu
[Inferior 1 (process 19987) exited normally]
(gdb)
```

#### 5.设置断点

break(简写 b) ：格式 b 行号，在某行设置断点；

```cpp
(gdb) b 5
Breakpoint 3 at 0x400836: file write.c, line 5.
(gdb) b 26 
Breakpoint 4 at 0x4008a6: file write.c, line 26.
(gdb) b 30
Breakpoint 5 at 0x4008c6: file write.c, line 30.
(gdb) info breakpoints 
Num     Type           Disp Enb Address            What
3       breakpoint     keep y   0x0000000000400836 in main at write.c:5
4       breakpoint     keep y   0x00000000004008a6 in main at write.c:26
5       breakpoint     keep y   0x00000000004008c6 in main at write.c:30
(gdb)
```

#### 6.单步执行

使用 continue、step、next命令

```cpp
(gdb) r
Starting program: /home/eit/c_test/test 

Breakpoint 3, main () at write.c:12
12	{
(gdb) n
14	    char *buf = "helo!I'm liujiangyong ";
(gdb) 
16	    len = strlen(buf);
(gdb) 
17	    fd = open("/home/hello.txt",O_CREAT | O_TRUNC | O_RDWR,0666);
(gdb) s
open64 () at ../sysdeps/unix/syscall-template.S:81
81	../sysdeps/unix/syscall-template.S: No such file or directory.
(gdb) 
main () at write.c:18
18	    if (fd<0)
(gdb) 
25	        printf("open file:hello.txt %d\n",fd);
(gdb) 
__printf (format=0x400a26 "open file:hello.txt %d\n") at printf.c:28
28	printf.c: No such file or directory.
(gdb) c
Continuing.
open file:hello.txt 3

Breakpoint 4, main () at write.c:27
27	    size1 = write(fd,buf,len);
(gdb) 
Continuing.
写入的长度：22
写入文本内容：helo!I'm liujiangyong 
读取长度：12
 文本内容是：helo!I'm liu
[Inferior 1 (process 20737) exited normally]
(gdb)
```

#### 6.查看变量

使用print、whatis命令

```cpp
main () at write.c:28
28	    if (fd<0)
(gdb) 
35	        printf("写入的长度：%d\n写入文本内容：%s\n",size1,buf);
(gdb) print fd
$10 = 3
(gdb) whatis fd
type = int
(gdb)
```

#### 7.退出gdb

用quit命令退出gdb：

```cpp
(gdb) r
Starting program: /home/eit/c_test/test 
open file:hello.txt 3
写入的长度：22
写入文本内容：helo!I'm liujiangyong 
读取长度：12
 文本内容是：helo!I'm liu
[Inferior 1 (process 20815) exited normally]
(gdb) q
root@ubuntu:/home/eit/c_test#
```

#### 8.

到此基本的使用流程就结束了，但是gdb的功能和技巧远不止于此，还需要以后多多探索。

## 2. core dump

### 关于Segment fault

这个错误在调试过程中出现的频率还是比较高的，造成这个问题的原因也有很多，我认为这个错误本质上来说就是程序访问了非法的地址.

这个错误与普通错误的明显区别是它不会告诉你是哪一行、哪个函数、哪个变量出错了，所以调试起来就更为棘手。

在这种情况下依然可以使用gdb进行调试，但是由于不知道错误的位置，所以需要一步一步地执行。如果错误出现在代码的前几行，或者代码比较短小，这种方法当然可以使用。但是如果有成千上万行代码甚至数十万上百万行代码，再使用gdb纯粹是跟自己过不去。

### 什么是core dump

当gdb无法解决上述问题时，可以考虑core文件

当程序运行的过程中异常终止或崩溃，操作系统会将程序当时的内存状态记录下来，保存在一个文件中，这种行为就叫做Core Dump（中文有的翻译成“核心转储”)。我们可以认为 core dump 是“内存快照”，但实际上，除了内存信息之外，还有些关键的程序运行状态也会同时 dump 下来，例如寄存器信息（包括程序指针、栈指针等）、内存管理信息、其他处理器和操作系统状态和信息。

core文件不仅可以帮助我们快速找出错误，还对某些无法重现的错误很有帮助，例如指针异常。

### 使用

#### 开启或关闭core文件的生成

##### 1.查看core文件是否打开：

```cpp
ulimit -c  # 如果为 0 表示coredump开关处于关闭状态
```

使用ulimit -c 0 关闭core文件生成

##### 2.打开core文件生成：

```cpp
ulimit -c 1024         # 1024个blocks,一般1block=512bytes
ulimit -c unlimited    # 取消大小限制
```

##### 3.检查core文件的选项是否打开：

```cpp
ulimit -a  # 显示当前所有limit信息
```

```cpp
命令参数      描述                                          例子
-H    设置硬资源限制，一旦设置不能增加。                      ulimit – Hs 64；限制硬资源，线程栈大小为 64K。
-S    设置软资源限制，设置后可以增加，但是不能超过硬资源设置。  ulimit – Sn 32；限制软资源，32 个文件描述符。
-a    显示当前所有的 limit 信息                             ulimit – a；显示当前所有的 limit 信息
-c    最大的 core 文件的大小， 以 blocks 为单位              ulimit – c unlimited； 对生成的 core 文件的大小不进行限制
-d    进程最大的数据段的大小，以 Kbytes 为单位                ulimit -d unlimited；对进程的数据段大小不进行限制
-f    进程可以创建文件的最大值，以 blocks 为单位              ulimit – f 2048；限制进程可以创建的最大文件大小为 2048 blocks
-l    最大可加锁内存大小，以 Kbytes 为单位                   ulimit – l 32；限制最大可加锁内存大小为 32 Kbytes
-m    最大内存大小，以 Kbytes 为单位                         ulimit – m unlimited；对最大内存不进行限制
-n    可以打开最大文件描述符的数量                           ulimit – n 128；限制最大可以使用 128 个文件描述符
-p    管道缓冲区的大小，以 Kbytes 为单位                     ulimit – p 512；限制管道缓冲区的大小为 512 Kbytes
-s    线程栈大小，以 Kbytes 为单位                          ulimit – s 512；限制线程栈的大小为 512 Kbytes
-t    最大的 CPU 占用时间，以秒为单位                        ulimit – t unlimited；对最大的 CPU 占用时间不进行限制
-u    用户最大可用的进程数                                  ulimit – u 64；限制用户最多可以使用 64 个进程
-v    进程最大可用的虚拟内存，以 Kbytes 为单位               ulimit – v 200000；限制最大可用的虚拟内存为 200000 Kbytes
```

##### 4.永久配置core：

以上配置只对当前会话起作用，下次重新登陆后，还是得重新配置。要想配置永久生效，得在/etc/profile或者/etc/security/limits.conf文件中进行配置。

有两种方法可以永久开启：如果为了防止core文件重复覆盖而给文件名加了pid、时间戳之类的，存储空间可能会很快被占满。因为调试的时候只执行一次程序就解决bug的情况只占少数，大多数时候需要多次调试，就会生成很多core文件

1. 首先打开/etc/profile文件，一般都可以在文件中找到这句语句：ulimit -S -c 0 > /dev/null 2>&1，根据上面的例子，我们只要把那个0 改为 unlimited 就ok了。然后保存退出。通过source /etc/profile 使当期设置生效。或者想配置只针对某一用户有效，则修改此用户的/.bashrc或者/.bash\_profile文件：

```cpp
limit -c unlimited
```

2. 第二种方法可以通过修改/etc/security/limits.conf文件来设置，首先以root权限登陆，然后打开/etc/security/limits.conf文件，进行配置：

```cpp
#vim /etc/security/limits.conf
<domain>    <type>    <item>        <value>
 
*          soft       core         unlimited
```

#### 设置core文件的文件名和存储位置

##### 文件名

缺省情况下，内核在coredump时所产生的core文件放在与该程序相同的目录中，并且文件名固定为core。很显然，如果有多个程序产生core文件，或者同一个程序多次崩溃，就会重复覆盖同一个core文件，因此我们有必要对不同程序生成的core文件进行分别命名。

1. /proc/sys/kernel/core\_uses\_pid可以控制core文件的文件名中是否添加pid作为扩展。文件内容为1，表示添加pid作为扩展名，生成的core文件格式为core.xxxx；为0则表示生成的core文件同一命名为core。可通过以下命令修改此文件：

```cpp
echo "1" > /proc/sys/kernel/core_uses_pid
```

2. proc/sys/kernel/core\_pattern可以控制core文件保存位置和文件名格式，可通过以下命令修改此文件：

```cpp
echo "/corefile/core-%e-%p-%t" > core_pattern # 可以将core文件统一生成到/corefile目录下，产生的文件名为core-命令名-pid-时间戳
```

参数列表：

```cpp
%% - 单个%字符
%p - 添加pid
%u - 添加当前uid
%g - 添加当前gid
%s - 添加导致产生core的信号
%t - 添加core文件生成时的unix时间
%h - 添加主机名
%e - 添加程序文件名
```

##### 存储位置

core文件默认的存储位置与对应的可执行程序在同一目录下，文件名是core，可以通过下面的命令看到core文件的存在位置：

```cpp
cat  /proc/sys/kernel/core_pattern  # 缺省值是|/usr/share/apport/apport %p %s %c %P
```

注意：这里是指在进程当前工作目录的下创建。通常与程序在相同的路径下。但如果程序中调用了chdir函数，则有可能改变了当前工作目录。这时core文件创建在chdir指定的路径下。有好多程序崩溃了，我们却找不到core文件放在什么位置。和chdir函数就有关系。当然程序崩溃了不一定都产生 core文件。

更改coredump文件的存储位置：

```cpp
echo “/data/coredump/core”> /proc/sys/kernel/core_pattern  # 把core文件生成到/data/coredump/core目录下
```

注意，这里当前用户必须具有对/proc/sys/kernel/core\_pattern的写权限。

### 用GDB调试coredump：

其实分析coredump的工具有很多，现在大部分类unix系统都提供了分析coredump文件的工具，不过，我们经常用到的工具是gdb。 这里我们以程序为例子来说明如何进行定位，使用gdb调试core文件来查找程序中出现段错误的位置时，要注意的是可执行程序在编译的时候需要加上-g编译命令选项。

#### 1.cpp文件编译运行

文件如下：

```cpp
#include<stdio.h>
 
void core_test1(){
	int i=0;
	scanf("%d",i);
	printf("%d\n",i);
}
void core_test2(){
	char *ptr = "my name is hello world";
	*ptr = 0;
}
 
int main(){
	core_test1();
	return 0;
}
```

编译：

```cpp
g++ -g core.cpp -o test
```

运行：

```cpp
./test
 
12
Segmentation fault (core dumped)   # 可以看到，当输入12的时候，系统提示段错误并且core dumped
```

#### 2.判断是否为core文件

在类unix系统下，coredump文件本身主要的格式也是ELF格式，可以通过简单的file命令进行快速判断：

```cpp
file core.xxxxx
 
输出：
core.11691: ELF 64-bit LSB core file x86-64, version 1 (SYSV), SVR4-style, from './test'
```

#### 3.使用GDB调试

##### 第一种方法（推荐）：

1. 启动gdb，进入core文件，命令格式：gdb [exec file] [core file]，用法示例：

```cpp
gdb ./test core.xxxxx
```

2. 在进入gdb后，查找段错误位置：where或者bt，用法示例：

```cpp
bt
#0  0x00007f205b7afde5 in _IO_vfscanf_internal (s=<optimized out>, format=<optimized out>, argptr=argptr@entry=0x7ffdf417be88, 
    errp=errp@entry=0x0) at vfscanf.c:1902
#1  0x00007f205b7ba87b in __scanf (format=<optimized out>) at scanf.c:33
#2  0x0000000000400589 in core_test1 () at core.cpp:5
#3  0x00000000004005bf in main () at core.cpp:15
```

##### 第二种方法：

1. 启动gdb，进入core文件，命令格式：

```cpp
gdb -c [core file]  //或 gdb --core=[core file]
```

2. 在进入gdb后，指定core文件对应的符号表，命令格式：

```cpp
(gdb) file [exec file]
```

3. 查找段错误位置：where或者bt。用法示例：

```cpp
 bt
```

## 3.打印文本

这是作为新手感觉最简单好用的方式。有很多的用法，例如：

- 添一条printf语句打印文本，能打印出来说明错误在printf语句之后，不能打印说明错误在printf语句之前。
- 打印某个变量的值看看变量是否初始化（之前遇到的Segment fault就是用这个解决的）
