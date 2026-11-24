---
title: "git笔记"
published: 2020-05-20T22:01:00+08:00
description: "\"官方中文手册\" @ \"TOC\" 版本控制 什么是版本控制 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 除了项目源代码，你可以对任何类型的文件进行版本控制。 为什么要版本控制 有了它你"
category: "旧文档案"
tags: ["旧文"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12926605.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12926605.html) · 原文发布于 `2020-05-20 22:01:00`（UTC+8）
> 旧文归档，保留当时的记录。

@

## 版本控制

### 什么是版本控制

版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 除了项目源代码，你可以对任何类型的文件进行版本控制。

### 为什么要版本控制

有了它你就可以将某个文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。

### 本地版本控制系统

许多人习惯用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。 这么做唯一的好处就是简单，但是特别容易犯错。 有时候会混淆所在的工作目录，一不小心会写错文件或者覆盖意想外的文件。

为了解决这个问题，人们很久以前就开发了许多种本地版本控制系统，大多都是采用某种简单的数据库来记录文件的历次更新差异。

![原文配图](./legacy-assets/legacy-cnblogs-12926605/01.png)

### 集中化的版本控制系统

接下来人们又遇到一个问题，如何让在不同系统上的开发者协同工作？ 于是，集中化的版本控制系统（Centralized Version Control Systems，简称 CVCS）应运而生。

集中化的版本控制系统都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。  
![原文配图](./legacy-assets/legacy-cnblogs-12926605/02.png)  
这么做虽然解决了本地版本控制系统无法让在不同系统上的开发者协同工作的诟病，但也还是存在下面的问题：

- 单点故障：  
  中央服务器宕机，则其他人无法使用；如果中心数据库磁盘损坏有没有进行备份，你将丢失所有数据。本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。
- 必须联网才能工作： 受网络状况、带宽影响。

### 分布式版本控制系统

于是分布式版本控制系统（Distributed Version Control System，简称 DVCS）面世了。 Git 就是一个典型的分布式版本控制系统。  
![原文配图](./legacy-assets/legacy-cnblogs-12926605/03.png)

这类系统，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。  
分布式版本控制系统可以不用联网就可以工作，因为每个人的电脑上都是完整的版本库，当你修改了某个文件后，你只需要将自己的修改推送给别人就可以了。但是，在实际使用分布式版本控制系统的时候，很少会直接进行推送修改，而是使用一台充当“中央服务器”的东西。这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。  
git的运行方式：  
![原文配图](./legacy-assets/legacy-cnblogs-12926605/04.png)

分布式版本控制系统的优势不单是不必联网这么简单，后面我们还会看到 Git 极其强大的分支管理等功能。

## 运行方式

### 集中式和分布式

这两种方式上面已经说过了。  
CVS及SVN都是集中式的版本控制系统，而Git是分布式版本控制  
分布式相较于集中式的优点：

- 不需要联网。集中式版本控制系统最大的弊端就是必须联网才能工作，如果在局域网内还好，速度够快，可如果在互联网上，遇到网速慢的话，可 能提交个10M的文件就需要5分钟。
- 和集中式版本控制系统相比，分布式版本控制系统的安全性要好很多，因为每个电脑里都有完整的版本库，某个人的电脑坏掉了不要紧，而集中式版本控制 系统的中央服务器要是出了问题，所有人都没法干活了

### 工作区和暂存区

Git和其他版本控制系统如SVN的一个不同之处就是有暂存区的概念

工作区（Working Directory）：就是你在电脑⾥能看到的目录，

版本库（Repository）：工作区有个隐藏目录“.git”，这个不算工作区，而是Git的版本  
库，Git的版本库存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还  
有Git为我们主动创建的第一个分支master，以及指向master的一个指针叫HEAD。

我们把文件往Git版本库中添加的时候，是分两步执行的：

1. 用“git add”把文件添加进去，实际上就是把文件修改添加到暂存区；
2. 用“git commit”提交更改，实际上就是把暂存区的所有内容提交到当前分支。因为我们创建Git版本库时，Git主动为我们创建了唯一一个master分支，所以，现在commit就是往master分支上提交更改。你可以简单理解为，需要提交的⽂件修改通 通放到暂存区，然后，一次性提交暂存区的所有修改

## 常用Git服务器

1.github==全球最大的开源网站

2.码云==免费的，国内的

3.coding==国内的

## 安装Git

### Linux系统安装Git

方法一：yum安装

yum search Git===查看是否有git如果有就下载

Git --version====查版本

下最新版本官网：git-scm.com

注意：默认yum install git 安装的为git 1.7.1版本  
coding上面让要使用的git版本为1.8.0以上，而且这个版本clone的时候有错，所以需要手动安装git  
方法二：手动安装git

```java
在这里插入代码片
	1、安装git依赖包
		yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker
	2、删除已有的git
		yum remove git
	3、下载git源码
		wget https://www.kernel.org/pub/software/scm/git/git-2.8.3.tar.gz 
		tar -zxvf git-2.8.3.tar.gz
		cd git-2.8.3
		./configure prefix=/usr/local/git/
		make && make install
	4、将git指令添加到bash中,添加到环境变量中
		vi /etc/bashrc
		在最后一行介入
		export PATH=$PATH:/usr/local/git/bin
		source /etc/bashrc  即可
		git --version   git已经安装好，可以查看git版本
```

### window中安装

这个不再赘述  
记录一下如何检查是否安装是否成功。

```java
方法一：桌面右击鼠标出现git bash here

在界面中输入git --version显示版本

方法二：运行cmd中输入git --version显示版本
```

## git的操作

### 注册并登录Github网站

很常规的操作。注意：如果没有邮箱认证无法创建项目

### Github上创建仓库

#### 1.新建一个仓库（Repositories），填写项目名和项目说明，创建成功会生成一个网址

![List item](./legacy-assets/legacy-cnblogs-12926605/05.png)

#### 2.

![原文配图](./legacy-assets/legacy-cnblogs-12926605/06.png)

#### 3.获取项目—从服务器（云端）获取项目到本地

本地找一个文件夹存放文件，然后右键打开git执行下面代码，可将自己或者别人项目拿到本地

![原文配图](./legacy-assets/legacy-cnblogs-12926605/07.png)

```java
git clone https地址====将仓库克隆到本地
```

注意：【创建ssh密钥】也可以在之前创建

创建的目的是为了保证安全性，只有具有密钥的管理员才可上传，其他人只可以下载

git中输入指令可以生成密钥===ssh-keygen，生成私钥id\_rsa和公钥id\_rsa.pub  
(连续按4次回车即可，如果想指定文件夹可以在第一次回车后面添加存秘钥的路径）  
**过程：**、

```java
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/.ssh/id_rsa):          // 回车，或添加路径
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/.ssh/id_rsa.
Your public key has been saved in /c/Users/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:M3bSS3AJiXSEBSs9/bVFYFRjUu3DnsONXR0 
The key's randomart image is:
+---[RSA 2048]----+
|  oo+o++. .+++  |
|  oo  o... +.o E |
|   o    . o.o + .|
|  .      +o  o o |
|   . .  O . +  |
|    . ...O * . o |
|       +  o . . .|
|      . .  .  .+.|
|            .oo..|
+----[SHA256]-----+
```

此时在本地用户下面的.ssh文件夹下（默认路径）会生成公钥和私钥文件，私钥id\_rsa和公钥id\_rsa.pub  
![原文配图](./legacy-assets/legacy-cnblogs-12926605/08.png)  
将公钥粘贴到github账户中的setting下’'SSH and GPG keys ”  
![原文配图](./legacy-assets/legacy-cnblogs-12926605/12.png)  
![原文配图](./legacy-assets/legacy-cnblogs-12926605/13.png)  
![原文配图](./legacy-assets/legacy-cnblogs-12926605/14.png)  
![原文配图](./legacy-assets/legacy-cnblogs-12926605/15.png)  
生成之后也可以删除，再重新从本地生成。

将远端仓库添加到本地：

```java
git remote add origin +url地址**======关联远端仓库(origin是默认的)
```

#### 4.下拉项目更新本地

在本地看到服务器最新的代码（更新修改情况）

```java
git pull    ====  从服务器更新代码
```

#### 5.本地推送到服务器

先在本地实施版本控制，即创建版本库，又叫仓库（repository）

1. 创建仓库（版本库),选择一个合适的位置创建一个空目录

```java
cd e:/gitfile          # 切换到指定文件夹下
mkdir +文件名     #文件名和路用英文，文件编辑可用notepad++
cd 文件名
```

2. 进入目标文件夹（想推送的文件所在文件夹）

```java
git init    初始化Git仓库，将这个目录可以变为仓库
git add +文件名    添加指定文件
（或者git add .     添加所有文件）

git status  查看当前状态
```

![原文配图](./legacy-assets/legacy-cnblogs-12926605/09.png)

3.提交文件

```java
git  commit  -m  "我写的内容原因"   
(注意：提交原因必须写，否则不能推送)
```

![原文配图](./legacy-assets/legacy-cnblogs-12926605/10.png)

```java
git push +仓库url 
或者git push origin  master          // origin是项目默认名字
例如：git push https://github.com/code369/git-test
```

如果出现push报错：  
![原文配图](./legacy-assets/legacy-cnblogs-12926605/11.png)可使用下列语句：

```java
git pull origin master --allow-unrelated-histories
```

4. 推送文件到服务器

### 配置免密码推送

在网站上创建项目的时候会有两种方式https和ssh

#### 1、Linux中免密码push和pull（使用https方式）

```java
1、cd ~
2、vi .git-credentials
		在里面写入  https://{username}:{password}@github.net
3、git config --global credential.helper store
```

#### 2、windows系统中设置免密码

```java
windows下面的 ~ 就是这个目录  C:\Users\用户名
【注】在windows下面创建以点 开头的文件，需要使用gitbash
打开gitbash
然后和上面的操作一模一样，完成后只有第一次需要输入密码
```

#### 3、使用ssh方式免密码登录

```java
1、使用 ssh-keygen 生成公钥和私钥，直接按3个回车即可
2、在  ~/.ssh/id_rsa.pub 里面的内容复制到coding上面的个人设置公钥中
3、git clone git@git.coding.net:phpmonkey/hehe.git  即可
```

## 冲突解决

a和b同时修改同一个文件的同一行代码就会产生冲突，如果a先push，那么b在push的时候就会报错。所以，为了保险起见，只要想向服务端push内容，首先需要pull内容，pull下来之后就会将服务端的代码和本地的代码进行合并，如果有冲突，就会显示冲突(git diff)，如果没有冲突，那就合并成功，然后再push上去即可，如果有冲突，商量解决冲突即可

```java
git pull    下拉文件
git diff    查看冲突
```

## 关于分支

```java
主分支：master，默认分支
新建分支： git branch 分支名
查看分支： git branch
切换分支： git checkout 分支名
（实际项目中，每个人都要在自己的分支上工作，最后再合并到如果要在master
上面合并分支，需要先切回到master（master是默认的主目录）

合并分支： git merge +分支名字
删除分支：git branch -d +分支名
（如果分支没有合并不能删除）
强制删除: git branch  -D +分支名字
（如果分支没有合并要删除可以使用）
```

## 开发步骤

一个master，一个dev

```java
（1）新建一个dev
（2）切换到dev进行开发
（3）在dev添加文件并且提交文件
（4）切换到master分支
（5）将dev分支合并到master分支
            git merge dev
（6）推送master到服务端
（7）继续切换到dev进行开发
```

## git常用操作

```java
 git init    =====  建仓库， 初始化Git仓库

git add 说明.txt  =====     把文件（这里指“说明.txt")纳入暂存区(还没有真正纳入版本控制，需要再一步确认)

git status =======查看暂存区状态

git commit  -m '...'  提交纳入仓库（要写原因所以要加 -m）====git commit  -m  "说明内容"

注意：第一次提交需要先提交姓名和邮箱，否则会报错

git log  ===== 查看提交日志

git  checkout  - -  ====删除文件还原：

git reset  -- hard     =====版本号码（至少写五位)       回到历史版本号版本

git reflog    =======   回到删除的未来版本（过去将来时）
```
