---
title: C++ 新特性笔记
published: 2021-04-01
description: '整理自小林coding《C++面试题》的C++新特性笔记，涵盖高频考点。'
image: ''
tags: [C++, 面试, 笔记]
category: 'C++笔记'
draft: false
lang: 'zh-CN'
slug: cpp-new-features
---

> 本笔记整理自小林coding《C++面试题》（https://xiaolincoding.com/interview/cpp.html），用于个人复习与分享，如涉侵权请联系删除。

# C++新特性 笔记

本类聚焦 C++11 的核心新特性：auto 与 decltype 类型推导、右值引用与移动语义、智能指针、lambda 表达式、nullptr，以及 =default 与 =delete。C++11 是面试区分度很高的分水岭，既考用法也考原理。

### 说说你了解的C++11相关特性

- C++11 在类型推导与语法简化方面引入了 auto 与范围 for 循环。
  - 自动类型推断（auto）：引入了 auto 关键字，可以根据变量初始化表达式的类型自动推断变量的类型，使得代码更具灵活性和可读性。
  - 范围 for 循环：通过 `for (element : container)` 语法，允许直接遍历容器中的每个元素，简化了迭代操作，减少了代码量。
- C++11 在性能方面引入了移动语义与右值引用。
  - 移动语义和右值引用：通过引入右值引用（&&）和移动构造函数，减少了资源管理时的不必要拷贝操作，提高了性能。
- C++11 在内存管理方面引入了智能指针。
  - 智能指针：std::shared_ptr 和 std::unique_ptr 等智能指针类的引入，帮助管理动态分配的内存，避免内存泄漏和悬挂指针等问题。
- C++11 在函数对象方面引入了 lambda 表达式。
  - Lambda 表达式：引入了匿名函数的 Lambda 表达式语法，能够更方便地定义和使用函数对象，减少了冗余代码。
- C++11 用 nullptr 取代传统的 NULL 来表示空指针。
  - nullptr 空指针：引入了 nullptr 关键字，用于表示空指针，替代了传统的 NULL，避免了空指针常量与整数之间的模糊问题。
- C++11 还统一了初始化语法，并补充了默认函数控制、强类型枚举、多线程支持和编译期计算等能力。
  - 初始化列表：通过使用花括号 `{}` 来对对象初始化，统一了初始化语法，提供了更安全、简洁的初始化方式。
  - 默认和删除成员函数：引入了 =default 和 =delete 来指明默认构造函数、拷贝构造函数等的生成和禁止。
  - 强类型枚举：引入了枚举类（enum class），解决了传统枚举类型带来的全局命名空间和类型安全问题。
  - 多线程支持：引入了 std::thread、std::mutex 等多线程支持库，使得并发编程更加方便和安全。
  - 泛型编程优化：引入了 constexpr 关键字，允许在编译时计算表达式，提高了程序的性能。

### C++11 新特性了解哪些内容？

- 类型推导与简化语法。
  - auto 关键字：自动推导变量类型，简化复杂类型声明（如迭代器），示例是 `auto x = 42;` 推导为 `int x`。
  - decltype：推导表达式类型，保留 const 和引用属性，适用于模板编程，示例是 `int i=1; decltype(i) j = i;` 推导为 `int j`。
- 右值引用与移动语义。
  - 右值引用（&&）：区分左值与右值，支持资源高效转移（如临时对象），示例是 `std::vector<int> v2 = std::move(v1);`。
  - 移动构造函数与移动赋值运算符：减少深拷贝开销，通过资源转移提升性能，类中定义为 `ClassName(ClassName&& other) noexcept;`。
  - 完美转发（std::forward）：保持参数原始类型，避免多次拷贝，模板中使用 `std::forward<T>(arg)`。
- 智能指针。
  - std::unique_ptr：独占所有权，不可复制但可移动，替代 auto_ptr，示例是 `std::unique_ptr<int> ptr = std::make_unique<int>(10);`。
  - std::shared_ptr：共享所有权，引用计数管理资源，线程安全，示例是 `std::shared_ptr<int> ptr = std::make_shared<int>(10);`。
  - std::weak_ptr：解决 shared_ptr 循环引用问题，示例是 `std::weak_ptr<int> w_ptr = s_ptr;`。
- 函数与模板增强。
  - Lambda 表达式：匿名函数，支持捕获外部变量，简化回调和算法，示例是 `std::sort(vec.begin(), vec.end(), [](int a, int b) { return a < b; });`。
  - 变长参数模板：支持任意数量和任意类型的模板参数，用于元编程和容器设计，写法是 `template<typename... Args> void func(Args... args);`。
  - constexpr 常量表达式：编译时求值，优化性能，允许函数在编译期执行，例如 `constexpr int factorial(int n) { return n <=1 ? 1 : n*factorial(n-1); }`。
- 并发编程支持。
  - std::thread：原生多线程支持，结合互斥锁和原子操作实现同步，示例是 `std::thread t(func); t.join();`。
  - std::async 和 std::future：简化异步任务管理，获取异步操作结果，示例是 `auto future = std::async(func); int result = future.get();`。

### auto 类型推导的原理是什么？

- auto 类型推导的原理是编译器根据初始值来推算变量的类型，因此要求用 auto 定义变量时必须有初始值。
- 编译器推断出来的 auto 类型有时和初始值类型并不完全一样，编译器会适当改变结果类型，使其更符合初始化规则。

### lambda表达式的原理是什么？

- 从本质上讲，Lambda 表达式是编译器自动生成的一个匿名的函数对象，也称为仿函数。
- 当我们编写一个 Lambda 表达式时，编译器会创建一个未命名的类，这个类重载了函数调用运算符 `operator()`。

我们编写的 Lambda 表达式示例如下：

```
#include <iostream>

int main() {
    auto lambda = [](int a, int b) { return a + b; };
    int result = lambda(3, 4);
    std::cout << "Result: " << result << std::endl;
    return 0;
}
```

编译器会将上述 Lambda 表达式转换为类似下面的代码：

```
#include <iostream>

// 编译器生成的未命名类
class __lambda_4_13 {
public:
    __lambda_4_13() = default;
    inline int operator()(int a, int b) const {
        return a + b;
    }
};

int main() {
    __lambda_4_13 lambda;
    int result = lambda(3, 4);
    std::cout << "Result: " << result << std::endl;
    return 0;
}
```

### delete 函数和 default 函数的区别是什么？

- delete 函数：`= delete` 表示该函数不能被调用。
- default 函数：`= default` 表示让编译器生成默认的函数，例如生成默认的构造函数和默认的析构函数。

```
#include <iostream>
using namespace std;

class A
{
public:
	A() = default; // 表示使用默认的构造函数
	~A() = default;	// 表示使用默认的析构函数
	A(const A &) = delete; // 表示类的对象禁止拷贝构造
	A &operator=(const A &) = delete; // 表示类的对象禁止拷贝赋值
};
int main()
{
	A ex1;
	A ex2 = ex1; // error: use of deleted function 'A::A(const A&)'
	A ex3;
	ex3 = ex1; // error: use of deleted function 'A& A::operator=(const A&)'
	return 0;
}
```

### C++ 11 nullptr 比 NULL 优势是什么？

- 两者的区别在于，NULL 是预处理变量，是一个宏，它的值是 0，定义在头文件中，即 `#define NULL 0`，而 nullptr 是 C++11 中的关键字，是一种特殊类型的字面值，可以被转换成任意其他类型。
- nullptr 的第一个优势是有类型，类型是 `typedef decltype(nullptr) nullptr_t;`，使用 nullptr 可以提高代码的健壮性。
- nullptr 的第二个优势体现在函数重载上，因为 NULL 本质上是 0，在函数调用过程中若出现函数重载并且传递的实参是 NULL，可能会出现不知和哪一个函数匹配的情况，但是传递实参 nullptr 就不会出现这种情况。

```
#include <iostream>
#include <cstring>
using namespace std;

void fun(char const *p) {
    cout << "fun(char const *p)" << endl;
}

void fun(int tmp) {
    cout << "fun(int tmp)" << endl;
}

int main() {
    fun(nullptr); // fun(char const *p)
    /*
    fun(NULL); // error: call of overloaded 'fun(NULL)' is ambiguous
    */
    return 0;
}
```

## 速记要点

1. C++11 常考特性可以概括为十条：auto 与 decltype 类型推导、范围 for 循环、右值引用与移动语义、智能指针、lambda 表达式、nullptr、初始化列表、=default 与 =delete、enum class 强类型枚举，以及 std::thread 等多线程支持。
2. auto 的原理是编译器根据初始值来推算变量类型，因此用 auto 定义变量时必须有初始值，且推导结果可能与初始值类型并不完全一致，编译器会按初始化规则做适当调整。
3. 移动语义靠右值引用（&&）和移动构造函数落地，用 std::move 把资源从一个对象转移到另一个对象，从而减少深拷贝的开销。
4. std::forward 用于完美转发，在模板中保持参数的原始类型，避免不必要的多次拷贝。
5. 三种智能指针各有分工，std::unique_ptr 独占所有权但可移动，std::shared_ptr 用引用计数共享所有权，std::weak_ptr 用来解决 shared_ptr 的循环引用问题。
6. lambda 表达式的本质是编译器自动生成的一个匿名函数对象，编译器会创建一个未命名的类，并在其中重载函数调用运算符 `operator()`。
7. `=default` 表示让编译器生成默认实现，例如默认构造函数和默认析构函数，`=delete` 表示该函数不能被调用，例如禁止拷贝构造和拷贝赋值。
8. NULL 是值为 0 的预处理宏，nullptr 是 C++11 关键字，类型是 `nullptr_t`，可以被转换成任意其他指针类型。
9. nullptr 在函数重载时不会出现二义性，而传入 NULL 可能因为 NULL 本质是 0 而匹配到整型版本的重载，导致编译报错。
10. constexpr 允许在编译时计算表达式，把计算从运行期提前到编译期，从而提升程序性能。
