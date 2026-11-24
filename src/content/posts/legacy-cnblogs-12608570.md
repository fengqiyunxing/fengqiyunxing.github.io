---
title: "JavaSwing关于GridBagLayout（网格袋布局）的使用"
published: 2019-10-30T21:35:00+08:00
description: "保留旧站《JavaSwing关于GridBagLayout（网格袋布局）的使用》的历史记录。"
category: "旧文档案"
tags: ["旧文", "Java"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608570.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608570.html) · 原文发布于 `2019-10-30 21:35:00`（UTC+8）
> 旧文归档，保留当时的记录。

下面的链接有初步的介绍：

<https://blog.csdn.net/xietansheng/article/details/72814552>

关于GridBagConstraints：

[GridBagConstraints详解](https://www.cnblogs.com/fancongcong/p/4977636.html)

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **名称** | **作用** | **默认值** | **常量** | **位置** |
| gridx | 行(x)的第一个单元格 | 0并且为非负数 | RELATIVE(相对的) | 紧跟前一个组件的后面 |
| gridy | 列(y)的第一个单元格 | 0并且为非负数 | RELATIVE | 紧跟前一个组件的下面 |
|  |  |  |  |  |
| gridwidth | 某一行中单元格的数量 | 非负数 默认为1 | REMAINDER(最后的) | 该行的最后一个单元格 |
|  |  |  | RELATIVE | 该行的倒数第二个单元格 |
| gridheight | 某一列中单元格的数量 | 非负数 默认为1 | REMAINDER | 该列的最后一个单元格 |
|  |  |  | RELATIVE | 该列的倒数第二个单元格 |
| weightx(权重值) | 如何分布额外的水平空间 | 0/应为非负数 |  | 不会得到额外空间且居中 |
| weighty | 如何分布额外的垂直空间 | 0/应为非负数 |  | 不会得到额外空间且居中 |
|  |  |  |  |  |
| anchor(锚) | 当组件空间大于组件本身时，要将组建置于何处。 | CENTER | 相对于方向的值 | 下表详解 |
|  |  |  | 相对于基线的值 |  |
|  |  |  | 绝对值 |  |
|  |  |  |  |  |
| fill | 当"显示区域"大于"组件"的时候,如何调整组件 | NONE |  | 不调整组件大小 |
|  |  | HORIZONTAL |  | 加宽组件 |
|  |  | VERTICAL |  | 加高组件 |
|  |  | BOTH |  | 组件完全填满显示区域 |
|  |  |  |  |  |
| insets | 组件的外部填充(组件之间彼此的间距) | new insets(0,0,0,0); | top | 上 |
|  |  |  | bottom | 下 |
|  |  |  | lift | 左 |
|  |  |  | rigth | 右 |
|  |  |  |  |  |
| ipadx | 组件的内部填充,最小宽度(x)添加多大空间 | 0 |  |  |
| ipady | 组件的内部填充,最小高度(y)添加多大空间 | 0 |  |  |

　　注：设置"权重值"之后要使设置生效应使用setConstraints()函数一次

GridBagConstraints.anchor(锚)：当"组件空间"大于组件本身时，要将组件置于何处,"组件"在"显示区域"什么位置

　　1.绝对值：

GridBagConstraints.NORTH 北  
　　　　　　　　　　SOUTH 南  
　　　　　　　　　　WEST 西  
　　　　　　　　　　EAST 东  
　　　　　　　　　　NORTHWEST 西北  
　　　　　　　　　　NORTHEAST 东北  
　　　　　　　　　　SOUTHWEST 西南  
　　　　　　　　　　SOUTHEAST 东南  
　　　　　　　　　　CENTER 中心

 　2.相对于方向的值(相对于容器的 ComponentOrientation 属性)

GridBagConstraints.PAGE\_START 页的开始  
　　　　　　　　　　 PAGE\_END 页的借书  
 　　　　　　　　　　LINE\_START 线的开始  
　　　　　　　　　　 LINE\_END 线的结束  
　　　　　　　　　　 FIRST\_LINE\_START 第一的线的开始  
　　　　　　　　　　 FIRST\_LINE\_END 第一的线的结束  
　　　　　　　　　　 LAST\_LINE\_START 末尾的线的开始  
　　　　　　　　　　 LAST\_LINE\_END 末尾的线的结束

  3.相对于基线的值

GridBagConstraints.BASELINE 基线   
                           BASELINE\_LEADING 基线-前列的  
　　　　　　　　　　BASELINE\_TRAILING 基线-后列的  
  
　　　　　　　　　　ABOVE\_BASELINE 在上面-基线  
　　　　　　　　　　ABOVE\_BASELINE\_LEADING 在上面-基线-重要的  
　　　　　　　　　　ABOVE\_BASELINE\_TRAILING 在上面-基线-末尾的  
  
　　　　　　　　　　BELOW\_BASELINE 在下面-基线  
　　　　　　　　　　BELOW\_BASELINE\_LEADING 在下面-基线-重要的  
　　　　　　　　　　BELOW\_BASELINE\_TRAILING 在下面-基线-末尾的
