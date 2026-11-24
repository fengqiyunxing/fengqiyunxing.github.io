---
title: "Code Review Best Practices"
published: 2020-09-23T08:51:00+08:00
description: "Code Review Best Practices -- 代码审查最佳实践 AtWiredrive, we do a fair amount of code reviews. I had never done one "
category: "旧文档案"
tags: ["旧文"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/13716219.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/13716219.html) · 原文发布于 `2020-09-23 08:51:00`（UTC+8）
> 旧文归档，保留当时的记录。

Code Review Best Practices -- 代码审查最佳实践  
AtWiredrive, we do a fair amount of code reviews. I had never done one before I started here so it was a new experience for me. I think it’s a good idea to crystalize some of the things I look for when I’m doing code reviews and talk about the best way I’ve found to approach them.

Briefly, a code review is a discussion between two or more developers about changes to the code to address an issue. Many articles talk about the benefits of code reviews, including knowledge sharing, code quality, and developer growth. I’ve found fewer that talk about what to look for in a review and how to discuss code under review.

在Wiredirve, 我们做了大量的代码审查。在我在这儿开始前我一次也没有做过，所以它对我是个新体验。我想这是个好主意：总结一下我在做代码审查时所寻求的事情并且谈谈我在完成代码审查时发现的好方法。

简言之，代码审查是这样一件事：在两个或更多程序员建讨论关于代码的改变，意在指出一个问题。很多文章谈论了代码审查的好处，例如知识分享，代码质量，开发者的成长等。但我发现少有文章谈论代码审查时该追求什么，以及在审查时怎样讨论代码。

What I look for during a review – 在审查时我准求什么

Architecture / Design – 架构、设计  
Single Responsibility Principle:The idea that a class should have one-and-only-one responsibility. Harder than one might expect. I usually apply this to methods too. If we have to use “and” to finish describing what a method is capable of doing, it might be at the wrong level of abstraction.

Open/Closed Principle:If the language is object-oriented, are the objects open for extension but closed for modification? What happens if we need to add another one ofx?

Code duplication:I go by the“three strikes”rule. If code is copied once, it’s usually okay although I don’t like it. If it’s copied again, it should be refactored so that the common functionality is split out.

Squint-test offenses:If I squint my eyes, does the shape of this code look identical to other shapes? Are there patterns that might indicate other problems in the code’s structure?

Code left in a better state than found:If I’m changing an area of the code that’s messy, it’s tempting to add in a few lines and leave. I recommend going one step further and leaving the code nicer than it was found.

Potential bugs:Are there off-by-one errors? Will the loops terminate in the way we expect? Will they terminate at all?

Error handling:Are errors handled gracefully and explicitly where necessary? Have custom errors been added? If so, are they useful?

Efficiency:If there’s an algorithm in the code, is it using an efficient implementation? For example, iterating over a list of keys in a dictionary is an inefficient way to locate a desired value.

--

单一职责原则：意指一个类应当有且只有一个职责。比你想象的要难。我通常也使用这个方法。如果我必须用“和”来完整描述一个方法能做什么，它通常意味着抽象水平有误。

开闭原则：如果你使用面向对象语言，代码中的对象是否对扩展开放，但对修改封闭？如果我们需要加另一个x会发生什么？

代码重复：我通常用“三击”原则。如果代码被拷贝了一次，尽管我不喜欢但通常没啥大问题。如果再次拷贝，那么应该把它重构以分离出其中的通用功能。

斜视测试攻击：如果我斜眼看，代码的形状是否和其它（代码）形状一样？在代码结构中是否有意味着其它问题的模式？

让代码处在比刚发现时更好的状态：如果我更改一段混乱的代码，我可能会添加几行然后离开。我建议更进一步，让代码比你开始弄时更好些。

潜在的bug：是否有差一错误？循环是否会以我们期待的方式结束？是否肯定会结束？

错误处理：在必要的时候，错误是否被优雅的显式的处理了？是否增加了自定义错误？如果有，他们有用吗？

效率：如果代码中有段运算，是否使用了高效的实现？例如，通过在字典的键列表中做迭代来查找需要的值就是一个低效的操作。

Style – 风格  
Method names:Naming things is one of the hard problems in computer science. If a method is namedget\_message\_queue\_nameand it is actually doing something completely different like sanitizing HTML from the input, then that’s an inaccurate method name. And probably a misleading function.

Variable names:fooorbarare probably not useful names for data structures.eis similarly not useful when compared toexception. Be as verbose as you need (depending on the language). Expressive variable names make it easier to understand code when we have to revisit it later.

Function length:My rule of thumb is that a function should be less than 20 or so lines. If I see a method above 50, I feel it’s best that it be cut into smaller pieces.

Class length:I think classes should be under about 300 lines total and ideally less than 100. It’s likely that large classes can be split into separate objects, which makes it easier to understand what the class is supposed to do.

File length:For Python files, I think around 1000 lines of code is about the most we should have in one file. Anything above that is a good sign that it should be split into smaller, more focused files. As the size of a file goes up, discoverability goes down.

Docstrings:For complex methods or those with longer lists of arguments, is there a docstring explaining what each of the arguments does, if it’s not obvious?

Commented code:Good idea to remove any commented out lines.

Number of method arguments:For the methods and functions, do they have 3 or fewer arguments? Greater than 3 is probably a sign that it could be grouped in a different way.

Readability:Is the code easy to understand? Do I have to pause frequently during the review to decipher it?

--

方法名称：在计算机科学里命名事物是一个难题。如果一个方法名字是get\_message\_queue\_name但实际上做完全不相关的事像是无害化HTML输入，那么这就是个不精确的方法名。并且是个容易误解的函数。

变量名称：foo或者bar对数据结构来说可能不是有用的名字。类似的e相比exception来说也不够有效。请为了需要尽量详尽（看你用什么语言）。表达清楚的变量名会让我们在以后不得不再次阅读代码时更容易理解代码。

函数长度：我的经验法则是函数应该不超过20左右行。如果方法超过50行，我觉得最好把它分割成更小的方法。

类长度：我认为类应该不超过300行，理想大小是小于100行。通常大的类可以被分割成独立的对象，使得它更容易被人理解它到底是干吗的。

文件长度：对于Python文件，我想一个文件1000行代码大概是极限了。如果大于它，那就是个很好的信号：他应该被分成更小的文件，更内聚的文件。随着文件尺寸的增长，可发现性就下降。

文档字符串：对于复杂方法或者有长长的参数列表的，是否有文档字符串解释每个参数的作用，如果不是那么一望即知？

被注释掉的代码：通常移除被注释掉的代码是个好主意。

方法参数数量：对于方法和函数，他们是否有三个或者更少的参数？超过三个可能就是个信号：参数可以以其它的方式组织；

可读性：代码是否容易理解？在审查中我是否需要经常暂停以解读代码？

Testing – 测试  
Test coverage:I like to see tests for new features. Are the tests thoughtful? Do they cover the failure conditions? Are they easy to read? How fragile are they? How big are the tests? Are they slow?

Testing at the right level:When I review tests I’m also making sure that we’re testing them at the right level. In other words, are we as low a level as we need to be to check the expected functionality? Gary Bernhardt recommends a ratio of 95% unit tests, 5% integration tests. I find that particularly with Django projects, it’s easy to test at a high level by accident and create a slow test suite so it’s important to be vigilant.

Number of Mocks:Mocking is great. Mocking everything is not great. I use a rule of thumb where if there’s more than 3 mocks in a test, it should be revisited. Either the test is testing too broadly or the function is too large. Maybe it doesn’t need to be tested at a unit test level and would suffice as an integration test. Either way, it’s something to discuss.

Meets requirements:Usually as part of the end of a review, I’ll take a look at the requirements of the story, task, or bug which the work was filed against. If it doesn’t meet one of the criteria, it’s better to bounce it back before it goes to QA.

--

测试覆盖度：我喜欢看对新功能的测试。测试是否考虑周到？是否覆盖了失败条件？是否简单明了？是否脆弱？是否很庞大？是否很慢？

适当的测试级别：当我审查测试的事后我要确定我们以合适的级别来测试。换句话说，我们是否以足够低的级别来检查期望的功能？Gary Bernhardt 推荐95%的单元测试，5%的集成测试。我发现尤其是对Django项目，很容易不小心以很高的级别创建慢测试套件，所用一定要警惕；

Mock的数量：模拟是有用的。然而模拟所有的事情就不好了。我的经验法则是，如果一个测试中有超过三个mock，那么他应该被重新审视一下。或者是这个测试太宽泛了，或者是功能太大了。或许他不应该在单元测试级别上被测试，而是应该放到集成测试上。不管怎样，值得讨论下；

达到需求：通常作为审核的最后部分，我会看一看需求故事，任务，或当前工作解决的问题。如果它不符合其中一个标准，最好打回重来，不去QA。

Review your own code first – 首先审查你自己的代码  
Before submitting my code, I will often do agit addfor the affected files / directories and then run agit diff --stagedto examine the changes I have not yet committed. Usually I’m looking for things like:

Did I leave a comment or TODO in?

Does that variable name make sense?

…and anything else that I’ve brought up above.

I want to make sure that I would pass my own code review first before I subject other people to it. It also stings less to get notes from yourself than from others :p

在提交代码前，我经常先做 git add 来添加相关文件、目录，然后运行 git diff --staged 来检查我所做的尚未commit的更改。通常我检查这些事项：

我是否留了个注释或者TODO？

变量名是否合适？

以及其它我上面提到的

我想确认我先通过我自己的代码审查然后再呈献到其他人面前。这通常会使你少受刺激--自己批评自己好过别人批评自己

How to handle code reviews – 怎样处理代码审查  
I find that the human parts of the code review offer as many challenges as reviewing the code. I’m still learning how to handle this part too. Here are some approaches that have worked for me when discussing code:

Ask questions:How does this method work? If this requirement changes, what else would have to change? How could we make this more maintainable?

Compliment / reinforce good practices:One of the most important parts of the code review is to reward developers for growth and effort. Few things feel better than getting praise from a peer. I try to offer as many positive comments as possible.

Discuss in person for more detailed points:On occasion, a recommended architectural change might be large enough that it’s easier to discuss it in person rather than in the comments. Similarly, if I’m discussing a point and it goes back and forth, I’ll often pick it up in person and finish out the discussion.

Explain reasoning:I find it’s best both to ask if there’s a better alternative and justify why I think it’s worth fixing. Sometimes it can feel like the changes suggested can seem nit-picky without context or explanation.

Make it about the code:It’s easy to take notes from code reviews personally, especially if we take pride in our work. It’s best, I find, to make discussions about the code than about the developer. It lowers resistance and it’s not about the developer anyway, it’s about improving the quality of the code.

Suggest importance of fixes:I tend to offer many suggestions, not all of which need to be acted upon. Clarifying if an item is important to fix before it can be considered done is useful both for the reviewer and the reviewee. It makes the results of a review clear and actionable.

我发现在代码审查时人的方面的挑战通常和审查代码的挑战一样多。我仍然在学习如何处理人多部分。这里有一些对我有用的方法用于讨论代码：

问问题：这个方法是怎么工作的？如果需求有变动，代码需要怎样改动？怎样让他更可维护？

称赞、强调好的实践：代码审核最重要的部分是赞赏开发者的成长和努力。很少有事情比获得同事的赞扬更美好。我尽力提供尽可能多的积极建议。

对于细节点单独讨论：有些情况下，推荐的架构变化会太大，与人讨论会更容易些，而不是写注释。同时，如果我反复讨论一个点，我会亲自来处理以结束争论。

解释原因（给出理由）：我发现最好既问是否有更好的办法，也给出我为什么认为它值得修改的判断。有时候建议的更改感觉像是吹毛求疵，如果不带着上下文或者解释。

只谈论代码：亲自做代码审核很容易做笔记，尤其是如果我们对自己的工作很自豪。最好，我发现，讨论代码而不是讨论开发者。这会降低阻力并且不会触犯开发者，只是关注提高代码质量。

给出修复的重要性的建议：我倾向于给出很多建议，不是每一个都需要采取行动。在思考是否做之前弄清楚是否一个问题是重要的需修改的是有益的，无论对于审核者还是被审核者。它会让审核结果清晰而可行。

On mindset – 时刻留意  
As developers, we are responsible for making both working and maintainable code. It can be easy to defer the second part because of pressure to deliver working code. Refactoring does not change functionality by design, so don’t let suggested changes discourage you. Improving the maintainability of the code can be just as important as fixing the line of code that caused the bug.

In addition, please keep an open mind during code reviews. This is something I think everyone struggles with. I can get defensive in code reviews too, because it can feel personal when someone says code you wrote could be better.

If the reviewer makes a suggestion, and I don’t have a clear answer as to why the suggestion should not be implemented, I’ll usually make the change. If the reviewer is asking a question about a line of code, it may mean that it would confuse others in the future. In addition, making the changes can help reveal larger architectural issues or bugs.

(Thanks to Zach Schipono for recommending this section be added)

作为开发者，我们有责任写出既工作又可维护的代码。我们很停车忘记第二点尤其是在有压力生产工作的代码的时候。重构代码不改变设定的功能，所以别对建议的改变泄气。提高代码的可维护性和修复引起问题的代码一样重要。

此外，在做代码审核时保持思想开放。这一点我认为每个人都会争辩。在代码审核时我也会得到反抗，因为你可以感觉到，当有人说你可以将代码写得更好。

如果审核时给出了一些建议，并且我没有一个准确的回答说，为什么建议不应该被实现，我通常会（遵照建议）做改变。如果审核者针对一行代码问问题，他可能意味着代码可能会在将来让后来者迷惑。另外，做出改变可以帮助发现更大的结构问题或者bug。

（感谢Zach Schipono建议增加这一段）

Addressing suggested changes – 寻找建议的更改  
We typically leave comments on a per-line basis with some thinking behind them. Usually I will look at the review notes in Stash and, at the same time, have the code pulled up to make the suggested changes. I find that I forget what items I am supposed to address if I do not handle them right away.

我们通常会在行尾留下单行注释，写下我们的一些思考。通常我会看一下隐藏的审核标注，并且同时，根据建议对代码做更改。我发现如果我不立刻处理他们，我们忘记那些条目我应当加以修改。

Additional References – 其它参考  
There’s a number of books on the art of creating clean code. I’ve read through fewer of these than I might like (and I’m working to change that). Here’s a few books on my list:

Clean Code

Refactoring

Some useful, related talksI’m a big fan of talks so here’s a few that I thought of while writing this:

All the Small Things by Sandi Metz: Covers the topic well, particularly from a perspective of writing clean, reusable code.

How to Design a Good API and Why it Matters: API, in this sense, meaning the way in which the application is constructed and how we interact with it. Many of the points in the video talk about similar themes to those discussed here.

原文地址：<http://kevinlondon.com/2015/05/05/code-review-best-practices.html>
