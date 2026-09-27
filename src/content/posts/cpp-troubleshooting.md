---
title: C++ 问题排查笔记
published: 2021-04-01
description: '整理自小林coding《C++面试题》的C++问题排查笔记，涵盖高频考点。'
image: ''
tags: [C++, 面试, 笔记]
category: 'C++笔记'
draft: false
lang: 'zh-CN'
slug: cpp-troubleshooting
---

> 本笔记整理自小林coding《C++面试题》（https://xiaolincoding.com/interview/cpp.html），用于个人复习与分享，如涉侵权请联系删除。

# C++问题排查 笔记

本类覆盖 Linux 下程序崩溃的定位手段、core dump 栈里到底有什么，以及内存泄漏的避免、检测与修复思路。这一类问题考查的是工程实践能力，回答时要把工具、命令和判断依据都说清楚。

### linux程序崩溃怎么定位问题？

- 如果开启了 core dump 文件的转存，那么程序崩溃之后就会生成 core dump 文件，这里面会有程序运行时的堆栈信息，然后我们可以用 gdb 工具去分析 core dump 文件。
- 用 gdb 分析 core dump 文件的命令如下。

```
gdb myapp core
```

- 在 GDB 中，使用 bt（backtrace）命令可以查看程序崩溃时的调用栈。

```
(gdb) bt
```

- 如果程序崩溃问题可以重现，也可以使用 GDB 直接调试程序，在编译程序时使用 -g 选项添加调试信息，例如：

```
gcc -g -o myapp myapp.c
```

- 使用 GDB 启动程序并运行，当程序崩溃时 GDB 会停在崩溃的位置。

```
gdb myapp
(gdb) run
```

- 程序崩溃后，使用 bt 命令查看调用栈，找出问题所在的函数和代码行。
- 有些程序会在崩溃时输出错误信息到标准错误输出（stderr），那么这时候直接去看错误日志就行了，查看错误日志的命令如下。

```
cat error.log
```

### 内存泄露怎么避免？

- 可以使用智能指针，C++ 提供了智能指针（如 std::shared_ptr、std::unique_ptr 等），可以自动管理动态分配的内存。
- 智能指针利用了 RAII（资源获取即初始化）的原则，在对象生命周期结束时自动释放内存，避免了显式调用 delete 的繁琐以及容易遗漏释放的问题。
- 也可以使用内存泄漏检测工具（如 Valgrind 等）来分析程序，在程序运行过程中检测内存泄漏，并及时修复。

### 如果遇到内存泄漏这种问题，你一般是怎么去解决？

- 最先采用的做法是打断点定位，然后做针对性的处理，先把泄漏点的位置确定下来。
- 在程序中加入必要的错误处理代码，避免程序因为异常情况而导致内存泄漏。
- 使用智能指针等 RAII 机制，自动管理内存，避免手动管理内存的麻烦和出错风险。
- 使用内存分析工具，检测程序中的内存泄漏，并进行相应的修复。

### 内存泄露怎么检测？

- 可以用 Valgrind 工具来检测内存泄漏，首先看一段 C 程序示例，比如：

```
#include <stdlib.h>
int main()
{
    int *array = malloc(sizeof(int));
    return 0;
}
```

- 编译程序时需要加上 -g 选项打开调试信息，使用 IDE 的可以用 Debug 模式编译，编译命令如下。

```
gcc -g -o main main.c
```

- 使用 Valgrind 检测内存使用情况的命令如下。

```
valgrind --tool=memcheck --leak-check=full ./main
```

- 检测结果如下。

```
==31416== Memcheck, a memory error detector
==31416== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.
==31416== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info
==31416== Command: ./main_c
==31416==
==31416==
==31416== HEAP SUMMARY:
==31416==     in use at exit: 4 bytes in 1 blocks
==31416==   total heap usage: 1 allocs, 0 frees, 4 bytes allocated
==31416==
==31416== 4 bytes in 1 blocks are definitely lost in loss record 1 of 1
==31416==    at 0x4C2DBF6: malloc (vg_replace_malloc.c:299)
==31416==    by 0x400537: main (main.c:5)
==31416==
==31416== LEAK SUMMARY:
==31416==    definitely lost: 4 bytes in 1 blocks
==31416==    indirectly lost: 0 bytes in 0 blocks
==31416==      possibly lost: 0 bytes in 0 blocks
==31416==    still reachable: 0 bytes in 0 blocks
==31416==         suppressed: 0 bytes in 0 blocks
==31416==
==31416== For counts of detected and suppressed errors, rerun with: -v
==31416== ERROR SUMMARY: 1 errors from 1 contexts (suppressed: 0 from 0)
```

- 先看看输出信息中的 HEAP SUMMARY，它表示程序在堆上分配内存的情况，其中的 1 allocs 表示程序分配了 1 次内存，0 frees 表示程序释放了 0 次内存，4 bytes allocated 表示分配了 4 个字节的内存。
- 另外，Valgrind 也会报告程序是在哪个位置发生内存泄漏，例如从下面的信息可以看到，程序发生了一次内存泄漏，位置是 main.c 文件的第 5 行。

```
==31416== 4 bytes in 1 blocks are definitely lost in loss record 1 of 1
==31416==    at 0x4C2DBF6: malloc (vg_replace_malloc.c:299)
==31416==    by 0x400537: main (main.c:5)
```

### C++代码异常core dump会生成一个栈，里面内容是什么？

- 栈内容就是程序崩溃前的“现场录像”，能帮你顺着调用链找到哪里出了问题，以及当时的变量状态。
- 函数调用链：从崩溃的那个函数开始，一层层往上列所有调用它的函数，比如 A 调用 B，B 调用 C，C 崩溃了，栈里就会显示 C → B → A 的顺序，能看出崩溃是从哪个入口一步步走到这里的。
- 每个函数的地址：记录每个函数在内存中的具体地址（比如 0x400520），结合编译时的符号表（如果没被 strip 掉），就能对应到具体是哪个函数（比如 main()、func()）。
- 函数的参数和局部变量：每个函数调用时传入的参数值，以及函数内部定义的临时变量（比如 `int a=5` 中的 a），会按栈的顺序保存，这能帮你排查是不是参数传错了，以及变量值是不是异常了。
- 栈指针位置：记录崩溃时栈顶的位置，告诉你当前栈用到了哪里，有没有溢出（比如栈被写满了）。

## 速记要点

1. 程序崩溃定位的第一步是看有没有生成 core dump 文件，用 `gdb myapp core` 加载后执行 `(gdb) bt` 查看崩溃时的调用栈。
2. 崩溃问题可以重现时，用 `gcc -g -o myapp myapp.c` 带上调试信息重新编译，再用 `gdb myapp` 启动、`(gdb) run` 运行，崩溃后同样用 bt 查看调用栈。
3. 程序把错误信息输出到标准错误输出（stderr）时，直接查看错误日志即可，常用命令是 `cat error.log`。
4. 避免内存泄漏的首选手段是使用智能指针，它利用 RAII（资源获取即初始化）原则，在对象生命周期结束时自动释放内存，避免手动调用 delete 时遗漏。
5. 解决内存泄漏的系统思路是三步：先打断点定位泄漏点，再补充错误处理代码避免异常路径泄漏，最后用智能指针等 RAII 机制重构并用内存分析工具复查。
6. 用 Valgrind 检测内存泄漏的命令是 `valgrind --tool=memcheck --leak-check=full ./main`，编译时要加 -g 选项保留调试信息，否则报告中看不到行号。
7. Valgrind 报告里的 HEAP SUMMARY 描述堆上分配的整体情况，其中 allocs 是分配次数、frees 是释放次数、bytes allocated 是分配的总字节数，分配次数与释放次数不相等就说明有泄漏。
8. Valgrind 会直接指出泄漏发生的位置，格式是 `at 0x4C2DBF6: malloc` 加 `by 0x400537: main (main.c:5)`，据此可以定位到具体文件和行号。
9. LEAK SUMMARY 把泄漏分为 definitely lost、indirectly lost、possibly lost 和 still reachable 四类，其中 definitely lost 是确定发生且必须修复的泄漏。
10. core dump 栈里主要包含四类信息：函数调用链、每个函数的地址、函数的参数与局部变量，以及崩溃时的栈指针位置，结合符号表就能还原崩溃现场。
