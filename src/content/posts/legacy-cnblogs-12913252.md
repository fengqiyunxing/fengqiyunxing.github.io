---
title: "eclipse及idea使用问题记录（为了方便github同步，重新用Markdown写了一篇）"
published: 2020-05-18T22:02:00+08:00
description: "使用eclipse或idea的时候会遇到各式各样的小问题，解决方案其实网上也大都搜得到，但是下次遇到的时候总是想不起来如何解决，还要花费时间再次查资料。所以以后把遇到的问题都记录一下。 @ \"TOC\" Eclipse 1"
category: "旧文档案"
tags: ["旧文"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12913252.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12913252.html) · 原文发布于 `2020-05-18 22:02:00`（UTC+8）
> 旧文归档，保留当时的记录。

使用eclipse或idea的时候会遇到各式各样的小问题，解决方案其实网上也大都搜得到，但是下次遇到的时候总是想不起来如何解决，还要花费时间再次查资料。所以以后把遇到的问题都记录一下。

## Eclipse

### 1.乱码

解决方法  
【Window】-->【Preferences】-->【General】-->【Workspace】-->【Text file encoding】  
![原文配图](./legacy-assets/legacy-cnblogs-12913252/01.png)

### 2.经常卡顿未响应

eclipse.ini配置文件主要参数介绍

-vmargs：说明后面是VM的参数  
-Xms512m：虚拟机占用系统的最小内存，初始分配  
-Xmx2048m：虚拟机占用系统的最大内存，按需分配  
-XX:PermSize=256M：最小堆大小。一般报内存不足时,都是说这个太小, 堆空间剩余小于5%就会警告,建议把这个稍微设大一点,不过要视自己电脑内存大小来设置，但不能超过MaxPermSize。  
-XX:MaxPermSize=1024M：最大堆大小。这个也适当大些所以若出现问题，首先请调整Xms512m将其设置的小一些，就可以解决问题。

打开eclipse.ini文件 更改一下虚拟机的最小内存和最大内存，我的之前是Xms256m和Xmx1024m 然后更改成了 Xms512m和Xmx2048m，可以正常启动，并且也没有再出现未响应现象。

```java
-startup
plugins/org.eclipse.equinox.launcher_1.4.0.v20161219-1356.jar
--launcher.library
C:\Users\lenovo\.p2\pool\plugins\org.eclipse.equinox.launcher.win32.win32.x86_64_1.1.551.v20171108-1834
-product
org.eclipse.epp.package.jee.product
-showsplash
org.eclipse.epp.package.common
--launcher.defaultAction
openFile
--launcher.appendVmargs
-vm
C:/Program Files/Java/jdk1.8.0_60/bin
-vmargs
-Dosgi.requiredJavaVersion=1.8
-Dosgi.instance.area.default=@user.home/eclipse-workspace
-XX:+UseG1GC
-XX:+UseStringDeduplication
--add-modules=ALL-SYSTEM
-Dosgi.requiredJavaVersion=1.8
---------------------修改部分-----------------------
-Xms512m
-Xmx2048m
----------------------------------------------------
--add-modules=ALL-SYSTEM
-Declipse.p2.max.threads=10
-Doomph.update.url=http://download.eclipse.org/oomph/updates/milestone/latest
-Doomph.redirection.index.redirection=index:/->http://git.eclipse.org/c/oomph/org.eclipse.oomph.git/plain/setups/
```

### 3.Eclipse打开报错，The Eclipse executable launcher was unable to locate its companion shared library.

这是由于多次卸载重装Eclipse后的配置错误，也可能是更换eclipse路径，导致配置文件与eclipse更换后的路径不符。

这种错误的解决方法如下：

首先，打开Eclipse安装目录下的配置文件eclipse.ini文件

Eclipse.ini文件内容如下：  
![原文配图](./legacy-assets/legacy-cnblogs-12913252/02.png)  
画圈的两个修改为自己的本地地址

### 4.Eclipse启动错误：A Java Runtime Environment(JRE) or Java Development Kit(JDK) must be available……

![原文配图](./legacy-assets/legacy-cnblogs-12913252/03.png)  
画圈的地方修改为本地地址

### 5.Referenced file contains errors (<http://www.springframework.org/schema/context/spring-context-3.0.xsd>). For more information, right click on the message in the

Problems View and select "Show Details..."  
解决：  
project-》clean

## idea

### 1.全局搜索替换

<https://blog.csdn.net/gnail_oug/article/details/78281354>

### 2.No archetype found in remote catalog. Defaulting to internal catalog

在远程目录中找不到原型。 默认为内部目录

maven新项目创建时候报错  
因为使用了maven模版构建项目，要从网上获取模版，然后没有找到这个模版或者网络慢，导致获取失败

不用太在意，关闭项目重新打开就没事了
