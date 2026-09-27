---
title: C++ 智能指针笔记
published: 2021-04-01
description: '整理自小林coding《C++面试题》的C++智能指针笔记，涵盖高频考点。'
image: ''
tags: [C++, 面试, 笔记]
category: 'C++笔记'
draft: false
lang: 'zh-CN'
slug: cpp-smart-pointer
---

> 本笔记整理自小林coding《C++面试题》（https://xiaolincoding.com/interview/cpp.html），用于个人复习与分享，如涉侵权请联系删除。

# C++ 智能指针笔记

本类梳理 unique_ptr、shared_ptr、weak_ptr 三种智能指针的所有权语义与适用场景，重点讲清 shared_ptr 的引用计数机制、weak_ptr 如何打破循环引用，以及智能指针自身仍会导致内存泄漏的原因与解法。

### 介绍一下智能指针？

- **总览**：在 C++ 中，有三种常用的智能指针，分别是 `std::unique_ptr`、`std::shared_ptr` 和 `std::weak_ptr`。
- **std::unique_ptr 的定位**：`std::unique_ptr` 是一种独占所有权的智能指针。
- **std::unique_ptr 的管理方式**：它通过使用独占所有权的方式来管理资源，只能有一个 `std::unique_ptr` 指向同一个对象或数组。
- **std::unique_ptr 的释放时机**：当 `std::unique_ptr` 超出作用域或被显式释放时，它会自动删除所管理的对象或数组。
- **std::unique_ptr 的典型用途**：它通常用于表示独占的资源所有权，如动态分配的单个对象或数组。
- **std::shared_ptr 的定位**：`std::shared_ptr` 是一种共享所有权的智能指针。
- **std::shared_ptr 的管理方式**：它可以有多个 `std::shared_ptr` 指向同一个对象，通过引用计数来管理资源的生命周期。
- **std::shared_ptr 的释放时机**：只有当最后一个 `std::shared_ptr` 超出作用域或被显式释放时，资源才会被删除。
- **std::shared_ptr 的典型用途**：`std::shared_ptr` 允许多个指针共享对同一资源的访问，通常用于表示共享的资源所有权。
- **std::weak_ptr 的定位**：`std::weak_ptr` 是一种弱引用的智能指针。
- **std::weak_ptr 的管理方式**：它可以指向由 `std::shared_ptr` 管理的对象，但不会增加引用计数。
- **std::weak_ptr 的典型用途**：`std::weak_ptr` 主要用于解决 `std::shared_ptr` 的循环引用问题，通过 `std::weak_ptr.lock()` 方法可以获取一个有效的 `std::shared_ptr` 来访问被管理的对象。

### 在哪些场景下会应用智能指针？

- **核心场景**：在动态内存管理中会应用智能指针。
- **应用收益**：使用智能指针可以避免手动管理内存的麻烦和出错风险。

### shared_ptr 的作用是什么？

- **传统写法的问题**：在传统的 C++ 编程中，使用 `new` 操作符分配的内存需要手动使用 `delete` 操作符释放。
- **泄漏的两个来源**：若忘记释放或者在异常情况下无法执行 `delete` 操作，就会造成内存泄漏。
- **作用一（自动释放）**：`std::shared_ptr` 可以自动处理内存的释放，当不再有 `std::shared_ptr` 指向该对象时，对象的内存会被自动释放。
- **作用二（共享所有权）**：`std::shared_ptr` 支持多个 `std::shared_ptr` 实例共享同一个对象的所有权。
- **引用计数机制**：它通过引用计数机制来实现这一点，每个 `std::shared_ptr` 都会维护一个引用计数，记录有多少个 `std::shared_ptr` 共享同一个对象。
- **归零释放**：当引用计数变为 0 时，对象的内存会被释放。

```
#include <iostream>
#include <memory>

class MyClass {
public:
    MyClass() { std::cout << "MyClass constructor" << std::endl; }
    ~MyClass() { std::cout << "MyClass destructor" << std::endl; }
};

int main() {
    std::shared_ptr<MyClass> ptr1 = std::make_shared<MyClass>();
    std::shared_ptr<MyClass> ptr2 = ptr1; // 共享所有权
    std::cout << "Use count: " << ptr1.use_count() << std::endl; // 输出 2
    ptr2.reset(); // 释放 ptr2 的所有权
    std::cout << "Use count: " << ptr1.use_count() << std::endl; // 输出 1
    // 当 ptr1 离开作用域时，MyClass 对象的内存会被释放
    return 0;
}

```

- **代码解读（共享）**：例子中 ptr1 和 ptr2 共享同一个 MyClass 对象的所有权，引用计数变为 2。
- **代码解读（reset）**：当调用 `ptr2.reset()` 时，ptr2 释放了对对象的所有权，引用计数减为 1。
- **代码解读（最终释放）**：当 ptr1 离开作用域时，引用计数变为 0，MyClass 对象的内存会被释放。

### weak_ptr 的作用是什么？如何和 shared_ptr 结合使用？

- **总体定位**：`std::weak_ptr` 主要用于辅助 `std::shared_ptr` 进行内存管理。
- **作用一（解决循环引用）**：它可以解决 `std::shared_ptr` 可能存在的循环引用问题。
- **作用二（观察生命周期）**：它还可以用于观察 `std::shared_ptr` 所管理对象的生命周期。
- **循环引用的危害**：当两个或多个 `std::shared_ptr` 相互引用形成循环时，会导致引用计数永远不会降为 0，从而造成内存泄漏。
- **为何 weak_ptr 能打破循环**：`std::weak_ptr` 不会增加所指向对象的引用计数，因此可以打破这种循环引用。
- **结合用法（打破循环）**：在类 A 中持有 `std::shared_ptr<B> b_ptr;`，在类 B 中改为持有 `std::weak_ptr<A> a_ptr;`。

```
#include <iostream>
#include <memory>

class B;

class A {
public:
    std::shared_ptr<B> b_ptr;
    ~A() { std::cout << "A destructor" << std::endl; }
};

class B {
public:
    std::weak_ptr<A> a_ptr;  // 使用 std::weak_ptr 打破循环引用
    ~B() { std::cout << "B destructor" << std::endl; }
};

int main() {
    std::shared_ptr<A> a = std::make_shared<A>();
    std::shared_ptr<B> b = std::make_shared<B>();
    a->b_ptr = b;
    b->a_ptr = a;
    return 0;
}

```

- **代码解读（错误做法）**：在上述代码中，如果 B 类中的 a_ptr 也使用 `std::shared_ptr`，就会形成循环引用，导致 A 和 B 对象的内存无法释放。
- **代码解读（正确做法）**：使用 `std::weak_ptr` 后，`b->a_ptr` 不会增加 A 对象的引用计数，当 main 函数结束时，a 和 b 的引用计数降为 0，A 和 B 对象的内存会被正确释放。
- **结合用法（观察生命周期）**：通过 `std::weak_ptr` 的 `expired()` 方法可以检查所指向的对象是否已经被释放。

```
#include <iostream>
#include <memory>

int main() {
    std::shared_ptr<int> shared = std::make_shared<int>(42);
    std::weak_ptr<int> weak = shared;

    if (!weak.expired()) {
        std::cout << "Object is still alive." << std::endl;
    }

    shared.reset();
    if (weak.expired()) {
        std::cout << "Object has been destroyed." << std::endl;
    }

    return 0;
}

```

- **expired() 解读**：在这个例子中，weak 观察 shared 所管理的对象，当 shared 释放对象后，`weak.expired()` 返回 true，表示对象已经被销毁。

### 智能指针会造成内存泄漏吗？

- **结论**：会的。
- **泄漏场景**：比如循环引用场景，在多个 `shared_ptr` 形成循环引用，资源将无法释放。
- **std::shared_ptr 的共享语义**：多个 `shared_ptr` 对象可以共享同一个资源的所有权，它们会维护一个引用计数。
- **归零才释放**：只有当引用计数为零时，才会释放资源。
- **自动管理的价值**：这种智能指针的内存管理是自动的，因此可以帮助我们避免显式地释放内存或出现内存泄漏的情况。

```
std::shared_ptr<int> sharedPtr1 = std::make_shared<int>(10);
std::shared_ptr<int> sharedPtr2 = sharedPtr1;
sharedPtr1.reset();  // 不会导致内存泄漏，资源仍由sharedPtr2管理
sharedPtr2.reset();  // 资源被释放

```

- **正常路径解读**：`sharedPtr1.reset();` 不会导致内存泄漏，资源仍由 sharedPtr2 管理，`sharedPtr2.reset();` 之后资源被释放。
- **循环引用风险（注意事项）**：在使用 `std::shared_ptr` 时，需要注意循环引用的情况。
- **循环引用的后果**：如果两个或多个 `shared_ptr` 对象相互引用，形成循环依赖，它们的引用计数永远不会达到零，资源将无法释放，从而导致内存泄漏。
- **解法一（weak_ptr）**：针对这个问题，可以使用 weak_ptr 弱引用来解决。
- **weak_ptr 的旁观者定位**：weak_ptr 用来监视 `shared_ptr` 的生命周期，它不管理 `shared_ptr` 内部的指针，它的拷贝和析构都不会影响引用计数，纯粹是作为一个旁观者监视 `shared_ptr` 中管理的资源是否存在。
- **weak_ptr 的主要用途**：主要用于解决循环引用问题。
- **解法二（enable_shared_from_this）**：另外配合 `std::enable_shared_from_this`，可以在成员函数内部安全地返回指向 this 的 `shared_ptr`。

### 一个 unique_ptr 怎么赋值给另一个 unique_ptr 对象？

- **方案一（std::move）**：借助 `std::move()` 可以实现将一个 `unique_ptr` 对象赋值给另一个 `unique_ptr` 对象。
- **方案一的目的**：其目的是实现所有权的转移。
- **方案二（release）**：也可以让当前 `unique_ptr` 调用 `release` 释放对 ptr 控制权，然后在另一个 `unique_ptr` 获取控制权。

```
// A 作为一个类 
std::unique_ptr<A> ptr1(new A());
std::unique_ptr<A> ptr2 = std::move(ptr1);
std::unique_ptr<A> ptr3(ptr2.release());

```


### 使用智能指针会出现什么问题？怎么解决？

- **问题（循环引用）**：在如下例子中定义了两个类 Parent、Child，在两个类中分别定义另一个类的对象的共享指针。
- **问题的成因**：由于在程序结束后，两个指针相互指向对方的内存空间，导致内存无法释放。

```
#include <iostream>
#include <memory>

using namespace std;

class Child;
class Parent;

class Parent {
private:
    shared_ptr<Child> ChildPtr;
public:
    void setChild(shared_ptr<Child> child) {
        this->ChildPtr = child;
    }

    void doSomething() {
        if (this->ChildPtr.use_count()) {

        }
    }

    ~Parent() {
    }
};

class Child {
private:
    shared_ptr<Parent> ParentPtr;
public:
    void setPartent(shared_ptr<Parent> parent) {
        this->ParentPtr = parent;
    }
    void doSomething() {
        if (this->ParentPtr.use_count()) {

        }
    }
    ~Child() {
    }
};

int main() {
    weak_ptr<Parent> wpp;
    weak_ptr<Child> wpc;
    {
        shared_ptr<Parent> p(new Parent);
        shared_ptr<Child> c(new Child);
        p->setChild(c);
        c->setPartent(p);
        wpp = p;
        wpc = c;
        cout << p.use_count() << endl; // 2
        cout << c.use_count() << endl; // 2
    }
    cout << wpp.use_count() << endl;  // 1
    cout << wpc.use_count() << endl;  // 1
    return 0;
}

```

- **现象（析构函数未被调用）**：该被调用的析构函数没有被调用，从而出现了内存泄漏。
- **weak_ptr 的性质**：weak_ptr 对被 `shared_ptr` 管理的对象存在非拥有性（弱）引用，在访问所引用的对象前必须先转化为 `shared_ptr`。
- **weak_ptr 用途一（打断环）**：weak_ptr 用来打断 `shared_ptr` 所管理对象的循环引用问题。
- **环被孤立的后果**：若这种环被孤立（没有指向环中的外部共享指针），`shared_ptr` 引用计数无法抵达 0，内存被泄露。
- **打断环的做法**：令环中的指针之一为弱指针可以避免该情况。
- **weak_ptr 用途二（临时所有权）**：weak_ptr 用来表达临时所有权的概念，当某个对象只有存在时才需要被访问，而且随时可能被他人删除，可以用 weak_ptr 跟踪该对象。
- **weak_ptr 用途三（延长生命期）**：需要获得所有权时将其转化为 `shared_ptr`，此时如果原来的 `shared_ptr` 被销毁，则该对象的生命期被延长至这个临时的 `shared_ptr` 同样被销毁。
- **改造方式（改成员类型）**：把 Parent 中的 `shared_ptr<Child> ChildPtr;` 改为 `weak_ptr<Child> ChildPtr;`。
- **改造方式（访问时提升）**：访问时用 `this->ChildPtr.lock()` 生成一个临时的 `shared_ptr`。

```
#include <iostream>
#include <memory>

using namespace std;

class Child;
class Parent;

class Parent {
private:
    //shared_ptr<Child> ChildPtr;
    weak_ptr<Child> ChildPtr;
public:
    void setChild(shared_ptr<Child> child) {
        this->ChildPtr = child;
    }

    void doSomething() {
        //new shared_ptr
        if (this->ChildPtr.lock()) {

        }
    }

    ~Parent() {
    }
};

class Child {
private:
    shared_ptr<Parent> ParentPtr;
public:
    void setPartent(shared_ptr<Parent> parent) {
        this->ParentPtr = parent;
    }
    void doSomething() {
        if (this->ParentPtr.use_count()) {

        }
    }
    ~Child() {
    }
};

int main() {
    weak_ptr<Parent> wpp;
    weak_ptr<Child> wpc;
    {
        shared_ptr<Parent> p(new Parent);
        shared_ptr<Child> c(new Child);
        p->setChild(c);
        c->setPartent(p);
        wpp = p;
        wpc = c;
        cout << p.use_count() << endl; // 2
        cout << c.use_count() << endl; // 1
    }
    cout << wpp.use_count() << endl;  // 0
    cout << wpc.use_count() << endl;  // 0
    return 0;
}

```

- **改造效果**：改造后 `p.use_count()` 输出 2、`c.use_count()` 输出 1，离开作用域后 `wpp.use_count()` 与 `wpc.use_count()` 都输出 0，两个对象都被正确析构。

## 速记要点

1. C++ 常用三种智能指针：`unique_ptr` 独占所有权、`shared_ptr` 共享所有权、`weak_ptr` 弱引用且不增加引用计数。
2. `unique_ptr` 只能有一个指针指向同一对象或数组，超出作用域或被显式释放时自动删除所管理的资源，适合表达独占所有权。
3. `shared_ptr` 通过引用计数管理生命周期，多个 `shared_ptr` 共享同一对象，只有引用计数归零时才释放资源。
4. 传统 C++ 中 `new` 出来的内存必须手动 `delete`，忘记释放或异常路径下执行不到 `delete` 就会内存泄漏，这正是 `shared_ptr` 要解决的问题。
5. `weak_ptr` 不管理 `shared_ptr` 内部的指针，拷贝和析构都不影响引用计数，纯粹作为旁观者监视资源是否存在。
6. 循环引用是智能指针最典型的内存泄漏场景，两个对象互相持有对方的 `shared_ptr` 时引用计数永远无法归零，析构函数不会被调用。
7. 打破循环引用的标准做法是把环上的其中一个指针改成 `weak_ptr`，改造后引用计数能降到 0，对象可以正确释放。
8. 需要临时获得所有权时把 `weak_ptr` 转成 `shared_ptr`，若原 `shared_ptr` 已销毁，对象生命期会延长到这个临时 `shared_ptr` 也被销毁为止。
9. 在成员函数内部要安全返回指向 this 的 `shared_ptr`，应配合 `std::enable_shared_from_this`。
10. `unique_ptr` 禁止拷贝，赋值只能借助 `std::move` 转移所有权，或让源指针调用 `release()` 交出控制权、由另一个 `unique_ptr` 接管。
