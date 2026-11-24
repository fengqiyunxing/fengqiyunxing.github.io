---
title: "（趣味哈哈镜）图像处理算法的实现"
published: 2019-12-10T17:23:00+08:00
description: "归档早期图像处理项目，保留用 Java 和 JMF 实现的变形与组合特效。"
category: "图像处理"
tags: ["Java", "JMF", "项目"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12608565.html"
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12608565.html) · 原文发布于 `2019-12-10 17:23:00`（UTC+8）
> 同文另见 [CSDN版本](https://blog.csdn.net/hide_on_rush/article/details/103479293)。
> 旧文归档，文中的依赖和运行环境以当年版本为准。

## 鬼影特效：

```java
package functions;

import javax.media.*;
import javax.media.Effect;
import javax.media.format.*;
import javax.media.Buffer;
import javax.media.ResourceUnavailableException;

public class NegativeEffect implements Effect {
	private static String EffectName = "NegativeEffect"; // 类名
	protected RGBFormat inputFormat; // 输入的RGB 色彩格式
	protected RGBFormat outputFormat; // 输出的RGB 色彩格式
	protected Format[] supportedInputFormats; // 所有支持的输入格式
	protected Format[] supportedOutputFormats; // 所有支持的输出格式
	// 构造方法，实例化所有支持的输入输出色彩为RGB 色彩格式

	public NegativeEffect() {
		supportedInputFormats = new Format[] { new RGBFormat() };
		supportedOutputFormats = new Format[] { new RGBFormat() };
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输入格式
	public Format[] getSupportedInputFormats() {
		/** @todo Implement this javax.media.Codec method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getSupportedInputFormats() not yet implemented.");
		System.out.println("getSupportedInputFormats");
		return supportedInputFormats;
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输出格式
	public Format[] getSupportedOutputFormats(Format parm1) {
		/** @todo Implement this javax.media.Codec method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getSupportedOutputFormats() not yet implemented.");
		System.out.println("getSupportedOutputFormats [in = " + parm1 + "]");
		// 如果传入的Format 对象parm1 不是GRBFormat 实例，则返回默认的RGBFormat 格式对象
		if (parm1 == null)
			return supportedOutputFormats;
		if (!(parm1 instanceof RGBFormat))
			return new Format[0];
		// 如果是，根据该格式返回一个对象引用
		RGBFormat irf = (RGBFormat) parm1;
		RGBFormat orf = (RGBFormat) parm1.clone();
		return new Format[] { orf };
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setInputFormat(Format parm1) {
		/** @todo Implement this javax.media.Codec method */
		// throw new java.lang.UnsupportedOperationException("Method
		// setInputFormat() not yet implemented.");
		System.out.println("setInputFormat [input = " + parm1 + "]");
		inputFormat = (RGBFormat) parm1;
		return (Format) inputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setOutputFormat(Format parm1) {
		/** @todo Implement this javax.media.Codec method */
		// throw new java.lang.UnsupportedOperationException("Method
		// setOutputFormat() not yet implemented.");
		System.out.println("setOutputFormat [ output = " + parm1 + "]");
		outputFormat = (RGBFormat) parm1;
		return (Format) outputFormat;
	}

	// 不一定要实现的两个方法，仅仅满足getXXX，setXXX 的对称性
	public Format getInputFormat() {
		System.out.println("getInputFormat");
		return inputFormat;
	}

	public Format getOutputFormat() {
		System.out.println("getOutputFormat");
		return outputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，处理输入的媒体数据parm1，得到经处理的输出的媒体数据parm2
	// 该方法完成本类的效用，处理媒体数据，达到使色彩反色输出的处理效果
	// 是本类的核心方法
	public int process(Buffer parm1, Buffer parm2) {
		/** @todo Implement this javax.media.Codec method */
		// throw new java.lang.UnsupportedOperationException("Method process()
		// not yet implemented.");
		Object o1 = parm1.getData(); // 获得输入的数据对象的引用
		int inLength = parm1.getLength(); // 输入的数据的长度
		int inOffset = parm1.getOffset(); // 偏移量
		// 如果输入输出的媒体数据非合法的short[] int[]形式，返回出错信息
		if (!(o1 instanceof short[]) && !(o1 instanceof int[])&& !(o1 instanceof byte[]))
			return this.BUFFER_PROCESSED_FAILED;
		Object o2 = parm2.getData();
		if (o2 != null) {
			if (!(o2 instanceof short[]) && !(o2 instanceof int[])&& !(o1 instanceof byte[]))
				return this.BUFFER_PROCESSED_FAILED;
		} else {
			// 根据输入的数据长度，设置输出的数据长度
			if (o1 instanceof short[])
				parm2.setData(new short[inLength]);
			else if (o1 instanceof int[])
				parm2.setData(new int[inLength]);
			else
				parm2.setData(new byte[inLength]);
			o2 = parm2.getData();
		}
		// 根据输入的数据偏移量，设置输出的数据偏移量
		int outOffset = parm2.getOffset();
		if (o1 instanceof short[]) {
			short[] inData = (short[]) o1;
			short[] outData = (short[]) o2;
			// 处理输入的媒体数据，似的色彩反色，并将数据放入输出的媒体数据对象中
			for (int i = 0; i < inLength; i++)
				outData[outOffset++] = (short) ~inData[inOffset++];
		} else if (o1 instanceof int[]){
			int[] inData = (int[]) o1;
			int[] outData = (int[]) o2;
			for (int i = 0; i < inLength; i++)
				outData[outOffset++] = ~inData[inOffset++];
		}else {
			byte[] inData = (byte[]) o1;
			byte[] outData = (byte[]) o2;
			for (int i = 0; i < inLength; i++)
				outData[outOffset++] = (byte)~inData[inOffset++];
		}
		// 设置输出媒体数据的格式
		parm2.setFormat(outputFormat);
		// 设置输出媒体数据的长度和偏移
		parm2.setLength(inLength);
		parm2.setOffset(0);
		// 返回数据处理成功完成信息
		return this.BUFFER_PROCESSED_OK;
	}

	// 返回类名
	public String getName() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method getName()
		// not yet implemented.");
		System.out.println("getName");
		return EffectName;
	}

	// 以下的方法不一定要求实现，这些方法是Effect 接口的父类的上层类
	// 如javax.media.Controls、javax.media.PlugIn 的方法
	public void open() throws javax.media.ResourceUnavailableException {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method open() not
		// yet implemented.");
		System.out.println("open");
	}

	public void close() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method close() not
		// yet implemented.");
		System.out.println("close");
	}

	public void reset() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method reset() not
		// yet implemented.");
		System.out.println("reset");
	}

	public Object[] getControls() {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControls() not yet implemented.");
		System.out.println("getControls");
		return new Controls[0];
	}

	public Object getControl(String parm1) {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControl() not yet implemented.");
		System.out.println("getControl [controlType = " + parm1 + "]");
		try {
			Class cls = Class.forName(parm1);
			Object[] cs = this.getControls();
			for (int i = 0; i < cs.length; i++) {
				if (cls.isInstance(cs[i])) {
					return cs[i];
				}
			}
			return null;
		} catch (Exception err) {
			return null;
		}
	}
}
```

## 中心内凹特效：

```java
package functions;

import java.awt.Dimension;

import javax.media.*;
import javax.media.format.*;
/**
 * 
 * @author hp
 * 只支持RGB，每个分量用一个8位字节
 * 视频流是byte数组
 */
public class HahajingEffect implements Effect {
	private static String EffectName = "HahajingEffect"; // 类名
	protected RGBFormat inputFormat; // 输入的色彩格式
	protected RGBFormat outputFormat; // 输出的色彩格式
	protected Format[] supportedInputFormats; // 所有支持的输入格式
	protected Format[] supportedOutputFormats; // 所有支持的输出格式
	// 构造方法，实例化所有支持的输入输出色彩为RGB 色彩格式

	public HahajingEffect() {
		supportedInputFormats = new Format[] { new RGBFormat()};
		supportedOutputFormats = new Format[] { new RGBFormat() };
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输入格式
	public Format[] getSupportedInputFormats() {
		return supportedInputFormats;
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输出格式
	public Format[] getSupportedOutputFormats(Format parm1) {
		if (parm1 == null)
			return supportedOutputFormats;
		if (!(parm1 instanceof RGBFormat))
			return new Format[0];
		// 如果是，根据该格式返回一个对象引用
		RGBFormat orf = (RGBFormat) parm1.clone();
		return new Format[] { orf };
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setInputFormat(Format parm1) {
		System.out.println("setInputFormat [input = " + parm1 + "]");
		inputFormat = (RGBFormat) parm1;
		return (Format) inputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setOutputFormat(Format parm1) {
		/** @todo Implement this javax.media.Codec method */
		// throw new java.lang.UnsupportedOperationException("Method
		// setOutputFormat() not yet implemented.");
		System.out.println("setOutputFormat [ output = " + parm1 + "]");
		outputFormat = (RGBFormat) parm1;
		return (Format) outputFormat;
	}

	// 不一定要实现的两个方法，仅仅满足getXXX，setXXX 的对称性
	public Format getInputFormat() {
		System.out.println("getInputFormat");
		return inputFormat;
	}

	public Format getOutputFormat() {
		System.out.println("getOutputFormat");
		return outputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，处理输入的媒体数据parm1，得到经处理的输出的媒体数据parm2
	// 该方法完成本类的效用，处理媒体数据，
	// 是本类的核心方法
	public int process(Buffer parm1, Buffer parm2) {
		// this.setInputFormat(parm1.getFormat()); // 设置输入格式
		// this.setOutputFormat(parm1.getFormat());
		// 获取输入格式的视频分辨率
		Dimension size = ((VideoFormat) parm1.getFormat()).getSize();
		int inWidth = size.width;
		int inHeight = size.height;
		Object srcData = parm1.getData(); // 获得输入的数据对象的引用
		// System.out.println(srcData.getClass().toString());
		// 如果输入输出的媒体数据非合法的short[] int[]形式，返回出错信息
		if (!(srcData instanceof byte[]))
			return this.BUFFER_PROCESSED_FAILED;
		Object outputData = null; // parm2.getData();
		if (outputData != null) {
			if (!(srcData instanceof byte[]))
				return this.BUFFER_PROCESSED_FAILED;
		}
		outputData = this.hahajingMirror((byte[]) srcData, 0.0, inWidth, inHeight, inWidth / 2, inHeight / 2);
		
		parm2.setData(outputData);
		int inLength = parm1.getLength(); // 输入的数据的长度
		int inOffset = parm1.getOffset(); // 偏移量
		// 设置输出媒体数据的格式
		parm2.setFormat(parm1.getFormat());
		// 设置输出媒体数据的长度和偏移
		parm2.setLength(inLength);
		parm2.setOffset(inOffset);
		// 返回数据处理成功完成信息
		return this.BUFFER_PROCESSED_OK;
	}

	// 返回类名
	public String getName() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method getName()
		// not yet implemented.");
		System.out.println("getName");
		return EffectName;
	}

	// 以下的方法不一定要求实现，这些方法是Effect 接口的父类的上层类
	// 如javax.media.Controls、javax.media.PlugIn 的方法
	public void open() throws javax.media.ResourceUnavailableException {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method open() not
		// yet implemented.");
		System.out.println("open");
	}

	public void close() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method close() not
		// yet implemented.");
		System.out.println("close");
	}

	public void reset() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method reset() not
		// yet implemented.");
		System.out.println("reset");
	}

	public Object[] getControls() {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControls() not yet implemented.");
		System.out.println("getControls");
		return new Controls[0];
	}

	public Object getControl(String parm1) {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControl() not yet implemented.");
		System.out.println("getControl [controlType = " + parm1 + "]");
		try {
			Class cls = Class.forName(parm1);
			Object[] cs = this.getControls();
			for (int i = 0; i < cs.length; i++) {
				if (cls.isInstance(cs[i])) {
					return cs[i];
				}
			}
			return null;
		} catch (Exception err) {
			return null;
		}
	}

	private byte[] hahajingMirror(byte[] srcData, double factor, int w, int h, int x, int y) {
		int cenX = x;
		int cenY = y;
		int newX = 0;//新坐标
		int newY = 0;
		int offsetX = 0;
		int offsetY = 0;
		int radius = 0;
		double theta = 0;
		byte[] tempData = (byte[]) srcData.clone();
		int length = srcData.length;
		for (int j = 0; j < h; j++) {
			for (int i = 0; i < w; i++) {
				int tX = i - cenX;
				int tY = j - cenY;
				theta = Math.atan2((double) tY, (double) tX);
				radius = (int) Math.sqrt((double) (tX * tX + tY * tY));
				int newR = (int) (Math.sqrt((double) radius) * 12);
				newX = cenX + (int) (newR * Math.cos(theta));
				newY = cenY + (int) (newR * Math.sin(theta));
				if (newX > 0 && newX < w) {
					offsetX = newX;
				} else {
					newX = 0;
				}
				if (newY > 0 && newY < h) {
					offsetY = newY;
				} else {
					newY = 0;
				}
				int tempLocation1 = i * 3 + j * w * 3;
				int tempLocation2 = i * 3 + 1 + j * w * 3;
				int tempLocation3 = i * 3 + 2 + j * w * 3;
				int srcLocation1 = newX * 3 + newY * w * 3;
				int srcLocation2 = newX * 3 + 1 + newY * w * 3;
				int srcLocation3 = newX * 3 + 2 + newY * w * 3;
				if ((tempLocation1 <= length)&& (tempLocation2 <= length) && (tempLocation3 <= length)
						&& (srcLocation1 <= length) && (srcLocation2 <= length) && (srcLocation3 <= length)) {				
					tempData[tempLocation1] = srcData[srcLocation1];
					tempData[tempLocation2] = srcData[srcLocation2];
					tempData[tempLocation3] = srcData[srcLocation3];
				}
			}
		}

		return tempData;

	}
	
}
```

## 纵向拉长特效：

```java
package functions;
import java.awt.Dimension;

import javax.media.*;
import javax.media.format.*;
/**
 * 
 * @author hp
 * 只支持RGB，每个分量用一个8位字节
 * 视频流是byte数组
 */
public class HahajingEffect2 implements Effect  {

	private static String EffectName = "HahajingEffect"; // 类名
	protected RGBFormat inputFormat; // 输入的色彩格式
	protected RGBFormat outputFormat; // 输出的色彩格式
	protected Format[] supportedInputFormats; // 所有支持的输入格式
	protected Format[] supportedOutputFormats; // 所有支持的输出格式
	// 构造方法，实例化所有支持的输入输出色彩为RGB 色彩格式

	public HahajingEffect2() {
		supportedInputFormats = new Format[] { new RGBFormat()};
		supportedOutputFormats = new Format[] { new RGBFormat() };
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输入格式
	public Format[] getSupportedInputFormats() {
		return supportedInputFormats;
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输出格式
	public Format[] getSupportedOutputFormats(Format parm1) {
		if (parm1 == null)
			return supportedOutputFormats;
		if (!(parm1 instanceof RGBFormat))
			return new Format[0];
		// 如果是，根据该格式返回一个对象引用
		RGBFormat orf = (RGBFormat) parm1.clone();
		return new Format[] { orf };
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setInputFormat(Format parm1) {
		System.out.println("setInputFormat [input = " + parm1 + "]");
		inputFormat = (RGBFormat) parm1;
		return (Format) inputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setOutputFormat(Format parm1) {
		/** @todo Implement this javax.media.Codec method */
		// throw new java.lang.UnsupportedOperationException("Method
		// setOutputFormat() not yet implemented.");
		System.out.println("setOutputFormat [ output = " + parm1 + "]");
		outputFormat = (RGBFormat) parm1;
		return (Format) outputFormat;
	}

	// 不一定要实现的两个方法，仅仅满足getXXX，setXXX 的对称性
	public Format getInputFormat() {
		System.out.println("getInputFormat");
		return inputFormat;
	}

	public Format getOutputFormat() {
		System.out.println("getOutputFormat");
		return outputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，处理输入的媒体数据parm1，得到经处理的输出的媒体数据parm2
	// 该方法完成本类的效用，处理媒体数据，
	// 是本类的核心方法
	public int process(Buffer parm1, Buffer parm2) {
		// this.setInputFormat(parm1.getFormat()); // 设置输入格式
		// this.setOutputFormat(parm1.getFormat());
		// 获取输入格式的视频分辨率
		Dimension size = ((VideoFormat) parm1.getFormat()).getSize();
		int inWidth = size.width;
		int inHeight = size.height;
		Object srcData = parm1.getData(); // 获得输入的数据对象的引用
		// System.out.println(srcData.getClass().toString());
		// 如果输入输出的媒体数据非合法的short[] int[]形式，返回出错信息
		if (!(srcData instanceof byte[]))
			return this.BUFFER_PROCESSED_FAILED;
		Object outputData = null; // parm2.getData();
		if (outputData != null) {
			if (!(srcData instanceof byte[]))
				return this.BUFFER_PROCESSED_FAILED;
		}
		outputData = this.hahajingMirror((byte[]) srcData, inWidth, inHeight);
		
		parm2.setData(outputData);
		int inLength = parm1.getLength(); // 输入的数据的长度
		int inOffset = parm1.getOffset(); // 偏移量
		// 设置输出媒体数据的格式
		parm2.setFormat(parm1.getFormat());
		// 设置输出媒体数据的长度和偏移
		parm2.setLength(inLength);
		parm2.setOffset(inOffset);
		// 返回数据处理成功完成信息
		return this.BUFFER_PROCESSED_OK;
	}

	// 返回类名
	public String getName() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method getName()
		// not yet implemented.");
		System.out.println("getName");
		return EffectName;
	}

	// 以下的方法不一定要求实现，这些方法是Effect 接口的父类的上层类
	// 如javax.media.Controls、javax.media.PlugIn 的方法
	public void open() throws javax.media.ResourceUnavailableException {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method open() not
		// yet implemented.");
		System.out.println("open");
	}

	public void close() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method close() not
		// yet implemented.");
		System.out.println("close");
	}

	public void reset() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method reset() not
		// yet implemented.");
		System.out.println("reset");
	}

	public Object[] getControls() {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControls() not yet implemented.");
		System.out.println("getControls");
		return new Controls[0];
	}

	public Object getControl(String parm1) {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControl() not yet implemented.");
		System.out.println("getControl [controlType = " + parm1 + "]");
		try {
			Class cls = Class.forName(parm1);
			Object[] cs = this.getControls();
			for (int i = 0; i < cs.length; i++) {
				if (cls.isInstance(cs[i])) {
					return cs[i];
				}
			}
			return null;
		} catch (Exception err) {
			return null;
		}
	}

	private byte[] hahajingMirror(byte[] srcData, int w, int h) {
		int oldX = 0;
		int oldY = 0;
		byte[] tempData = (byte[]) srcData.clone();
		int length = srcData.length;
		for (int j = 0; j < h; j++) {
			for (int i = 0; i < w; i++) {
				oldX = i;//x坐标不变
				oldY = j/6;//旧的坐标是新y坐标的1/6
				int tempLocation1 = i * 3 + j * w * 3;
				int tempLocation2 = i * 3 + 1 + j * w * 3;
				int tempLocation3 = i * 3 + 2 + j * w * 3;
				int srcLocation1 = oldX * 3 + oldY * w * 3;
				int srcLocation2 = oldX * 3 + 1 + oldY * w * 3;
				int srcLocation3 = oldX * 3 + 2 + oldY * w * 3;
				if ((tempLocation1 <= length)&& (tempLocation2 <= length) && (tempLocation3 <= length)
						&& (srcLocation1 <= length) && (srcLocation2 <= length) && (srcLocation3 <= length)) {				
					tempData[tempLocation1] = srcData[srcLocation1];
					tempData[tempLocation2] = srcData[srcLocation2];
					tempData[tempLocation3] = srcData[srcLocation3];
				}
			}
		}

		return tempData;

	}
}
```

## 中轴外凸特效：

```java
package functions;

import java.awt.Dimension;

import javax.media.*;
import javax.media.format.*;
/**
 * 
 * @author hp
 * 只支持RGB，每个分量用一个8位字节
 * 视频流是byte数组
 */
public class HahajingEffect3 implements Effect {
	private static String EffectName = "HahajingEffect"; // 类名
	protected RGBFormat inputFormat; // 输入的色彩格式
	protected RGBFormat outputFormat; // 输出的色彩格式
	protected Format[] supportedInputFormats; // 所有支持的输入格式
	protected Format[] supportedOutputFormats; // 所有支持的输出格式
	// 构造方法，实例化所有支持的输入输出色彩为RGB 色彩格式

	public HahajingEffect3() {
		supportedInputFormats = new Format[] { new RGBFormat()};
		supportedOutputFormats = new Format[] { new RGBFormat() };
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输入格式
	public Format[] getSupportedInputFormats() {
		return supportedInputFormats;
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输出格式
	public Format[] getSupportedOutputFormats(Format parm1) {
		if (parm1 == null)
			return supportedOutputFormats;
		if (!(parm1 instanceof RGBFormat))
			return new Format[0];
		// 如果是，根据该格式返回一个对象引用
		RGBFormat orf = (RGBFormat) parm1.clone();
		return new Format[] { orf };
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setInputFormat(Format parm1) {
		System.out.println("setInputFormat [input = " + parm1 + "]");
		inputFormat = (RGBFormat) parm1;
		return (Format) inputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setOutputFormat(Format parm1) {
		/** @todo Implement this javax.media.Codec method */
		// throw new java.lang.UnsupportedOperationException("Method
		// setOutputFormat() not yet implemented.");
		System.out.println("setOutputFormat [ output = " + parm1 + "]");
		outputFormat = (RGBFormat) parm1;
		return (Format) outputFormat;
	}

	// 不一定要实现的两个方法，仅仅满足getXXX，setXXX 的对称性
	public Format getInputFormat() {
		System.out.println("getInputFormat");
		return inputFormat;
	}

	public Format getOutputFormat() {
		System.out.println("getOutputFormat");
		return outputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，处理输入的媒体数据parm1，得到经处理的输出的媒体数据parm2
	// 该方法完成本类的效用，处理媒体数据，
	// 是本类的核心方法
	public int process(Buffer parm1, Buffer parm2) {
		// this.setInputFormat(parm1.getFormat()); // 设置输入格式
		// this.setOutputFormat(parm1.getFormat());
		// 获取输入格式的视频分辨率
		Dimension size = ((VideoFormat) parm1.getFormat()).getSize();
		int inWidth = size.width;
		int inHeight = size.height;
		Object srcData = parm1.getData(); // 获得输入的数据对象的引用
		// System.out.println(srcData.getClass().toString());
		// 如果输入输出的媒体数据非合法的short[] int[]形式，返回出错信息
		if (!(srcData instanceof byte[]))
			return this.BUFFER_PROCESSED_FAILED;
		Object outputData = null; // parm2.getData();
		if (outputData != null) {
			if (!(srcData instanceof byte[]))
				return this.BUFFER_PROCESSED_FAILED;
		}
		outputData = this.hahajingMirror((byte[]) srcData, 0.0, inWidth, inHeight, inWidth / 2, inHeight / 2);
		
		parm2.setData(outputData);
		int inLength = parm1.getLength(); // 输入的数据的长度
		int inOffset = parm1.getOffset(); // 偏移量
		// 设置输出媒体数据的格式
		parm2.setFormat(parm1.getFormat());
		// 设置输出媒体数据的长度和偏移
		parm2.setLength(inLength);
		parm2.setOffset(inOffset);
		// 返回数据处理成功完成信息
		return this.BUFFER_PROCESSED_OK;
	}

	// 返回类名
	public String getName() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method getName()
		// not yet implemented.");
		System.out.println("getName");
		return EffectName;
	}

	// 以下的方法不一定要求实现，这些方法是Effect 接口的父类的上层类
	// 如javax.media.Controls、javax.media.PlugIn 的方法
	public void open() throws javax.media.ResourceUnavailableException {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method open() not
		// yet implemented.");
		System.out.println("open");
	}

	public void close() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method close() not
		// yet implemented.");
		System.out.println("close");
	}

	public void reset() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method reset() not
		// yet implemented.");
		System.out.println("reset");
	}

	public Object[] getControls() {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControls() not yet implemented.");
		System.out.println("getControls");
		return new Controls[0];
	}

	public Object getControl(String parm1) {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControl() not yet implemented.");
		System.out.println("getControl [controlType = " + parm1 + "]");
		try {
			Class cls = Class.forName(parm1);
			Object[] cs = this.getControls();
			for (int i = 0; i < cs.length; i++) {
				if (cls.isInstance(cs[i])) {
					return cs[i];
				}
			}
			return null;
		} catch (Exception err) {
			return null;
		}
	}

	private byte[] hahajingMirror(byte[] srcData, double factor, int w, int h, int x, int y) {
		int cenX = x;
		int cenY = y;
		int newX = 0;
		int newY = 0;
        int R=(int) (Math.sqrt(h*h+w*w)/2);
		int radius = 0;
		byte[] tempData = (byte[]) srcData.clone();
		int length = srcData.length;
		for (int j = 0; j < h; j++) {
			for (int i = 0; i < w; i++) {
				int tX = i - cenX;
				int tY = j - cenY;
				radius = (int) Math.sqrt((double) (tX * tX +tY*tY ));
				if(radius<R) {
					newX=cenX+tX*radius/R;
					 newY=cenY+tY*radius/R;
				}

				int tempLocation1 = i * 3 + j * w * 3;
				int tempLocation2 = i * 3 + 1 + j * w * 3;
				int tempLocation3 = i * 3 + 2 + j * w * 3;
				int srcLocation1 = newX * 3 + newY * w * 3;
				int srcLocation2 = newX * 3 + 1 + newY * w * 3;
				int srcLocation3 = newX * 3 + 2 + newY * w * 3;
				if ((tempLocation1 <= length)&& (tempLocation2 <= length) && (tempLocation3 <= length)
						&& (srcLocation1 <= length) && (srcLocation2 <= length) && (srcLocation3 <= length)) {				
					tempData[tempLocation1] = srcData[srcLocation1];
					tempData[tempLocation2] = srcData[srcLocation2];
					tempData[tempLocation3] = srcData[srcLocation3];
				}
			}
		}

		return tempData;

	}
	
}
```

## 复合特效：

```java
package functions;

import java.awt.Dimension;

import javax.media.*;
import javax.media.format.*;
/**
 * 
 * @author hp
 * 只支持RGB，每个分量用一个8位字节
 * 视频流是byte数组
 */
public class HahajingEffect4 implements Effect {
	private static String EffectName = "HahajingEffect"; // 类名
	protected RGBFormat inputFormat; // 输入的色彩格式
	protected RGBFormat outputFormat; // 输出的色彩格式
	protected Format[] supportedInputFormats; // 所有支持的输入格式
	protected Format[] supportedOutputFormats; // 所有支持的输出格式
	// 构造方法，实例化所有支持的输入输出色彩为RGB 色彩格式

	public HahajingEffect4() {
		supportedInputFormats = new Format[] { new RGBFormat()};
		supportedOutputFormats = new Format[] { new RGBFormat() };
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输入格式
	public Format[] getSupportedInputFormats() {
		return supportedInputFormats;
	}

	// 实现Effect 接口继承自Codec 的方法，返回所有支持的输出格式
	public Format[] getSupportedOutputFormats(Format parm1) {
		if (parm1 == null)
			return supportedOutputFormats;
		if (!(parm1 instanceof RGBFormat))
			return new Format[0];
		// 如果是，根据该格式返回一个对象引用
		RGBFormat orf = (RGBFormat) parm1.clone();
		return new Format[] { orf };
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setInputFormat(Format parm1) {
		System.out.println("setInputFormat [input = " + parm1 + "]");
		inputFormat = (RGBFormat) parm1;
		return (Format) inputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，返回传入的数据格式
	public Format setOutputFormat(Format parm1) {
		/** @todo Implement this javax.media.Codec method */
		// throw new java.lang.UnsupportedOperationException("Method
		// setOutputFormat() not yet implemented.");
		System.out.println("setOutputFormat [ output = " + parm1 + "]");
		outputFormat = (RGBFormat) parm1;
		return (Format) outputFormat;
	}

	// 不一定要实现的两个方法，仅仅满足getXXX，setXXX 的对称性
	public Format getInputFormat() {
		System.out.println("getInputFormat");
		return inputFormat;
	}

	public Format getOutputFormat() {
		System.out.println("getOutputFormat");
		return outputFormat;
	}

	// 实现Effect 接口继承自Codec 的方法，处理输入的媒体数据parm1，得到经处理的输出的媒体数据parm2
	// 该方法完成本类的效用，处理媒体数据，
	// 是本类的核心方法
	public int process(Buffer parm1, Buffer parm2) {
		// this.setInputFormat(parm1.getFormat()); // 设置输入格式
		// this.setOutputFormat(parm1.getFormat());
		// 获取输入格式的视频分辨率
		Dimension size = ((VideoFormat) parm1.getFormat()).getSize();
		int inWidth = size.width;
		int inHeight = size.height;
		Object srcData = parm1.getData(); // 获得输入的数据对象的引用
		// System.out.println(srcData.getClass().toString());
		// 如果输入输出的媒体数据非合法的short[] int[]形式，返回出错信息
		if (!(srcData instanceof byte[]))
			return this.BUFFER_PROCESSED_FAILED;
		Object outputData = null; // parm2.getData();
		if (outputData != null) {
			if (!(srcData instanceof byte[]))
				return this.BUFFER_PROCESSED_FAILED;
		}
		outputData = this.hahajingMirror((byte[]) srcData, 0.0, inWidth, inHeight, inWidth / 2, inHeight / 2);
		
		parm2.setData(outputData);
		int inLength = parm1.getLength(); // 输入的数据的长度
		int inOffset = parm1.getOffset(); // 偏移量
		// 设置输出媒体数据的格式
		parm2.setFormat(parm1.getFormat());
		// 设置输出媒体数据的长度和偏移
		parm2.setLength(inLength);
		parm2.setOffset(inOffset);
		// 返回数据处理成功完成信息
		return this.BUFFER_PROCESSED_OK;
	}

	// 返回类名
	public String getName() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method getName()
		// not yet implemented.");
		System.out.println("getName");
		return EffectName;
	}

	// 以下的方法不一定要求实现，这些方法是Effect 接口的父类的上层类
	// 如javax.media.Controls、javax.media.PlugIn 的方法
	public void open() throws javax.media.ResourceUnavailableException {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method open() not
		// yet implemented.");
		System.out.println("open");
	}

	public void close() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method close() not
		// yet implemented.");
		System.out.println("close");
	}

	public void reset() {
		/** @todo Implement this javax.media.PlugIn method */
		// throw new java.lang.UnsupportedOperationException("Method reset() not
		// yet implemented.");
		System.out.println("reset");
	}

	public Object[] getControls() {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControls() not yet implemented.");
		System.out.println("getControls");
		return new Controls[0];
	}

	public Object getControl(String parm1) {
		/** @todo Implement this javax.media.Controls method */
		// throw new java.lang.UnsupportedOperationException("Method
		// getControl() not yet implemented.");
		System.out.println("getControl [controlType = " + parm1 + "]");
		try {
			Class cls = Class.forName(parm1);
			Object[] cs = this.getControls();
			for (int i = 0; i < cs.length; i++) {
				if (cls.isInstance(cs[i])) {
					return cs[i];
				}
			}
			return null;
		} catch (Exception err) {
			return null;
		}
	}

	private byte[] hahajingMirror(byte[] srcData, double factor, int w, int h, int x, int y) {
		int cenX = x;
		int cenY = y;
		int newX = 0;
		int newY = 0;
		int R=(int) (Math.sqrt(h*h+w*w)/2);
		int offsetX = 0;
		int offsetY = 0;
		int radius = 0;
		double theta = 0;
		byte[] tempData = (byte[]) srcData.clone();
		int length = srcData.length;
		for (int j = 0; j < h; j++) {
			for (int i = 0; i < w/2; i++) {
				int tX = i - cenX;
				int tY = j - cenY;
				theta = Math.atan2((double) tY, (double) tX);
				radius = (int) Math.sqrt((double) (tX * tX + tY * tY));
				int newR = (int) (Math.sqrt((double) radius) * 12);
				newX = cenX + (int) (newR * Math.cos(theta));
				newY = cenY + (int) (newR * Math.sin(theta));
				if (newX > 0 && newX < w) {
					offsetX = newX;
				} else {
					newX = 0;
				}
				if (newY > 0 && newY < h) {
					offsetY = newY;
				} else {
					newY = 0;
				}
				int tempLocation1 = i * 3 + j * w * 3;
				int tempLocation2 = i * 3 + 1 + j * w * 3;
				int tempLocation3 = i * 3 + 2 + j * w * 3;
				int srcLocation1 = newX * 3 + newY * w * 3;
				int srcLocation2 = newX * 3 + 1 + newY * w * 3;
				int srcLocation3 = newX * 3 + 2 + newY * w * 3;
				if ((tempLocation1 <= length)&& (tempLocation2 <= length) && (tempLocation3 <= length)
						&& (srcLocation1 <= length) && (srcLocation2 <= length) && (srcLocation3 <= length)) {				
					tempData[tempLocation1] = srcData[srcLocation1];
					tempData[tempLocation2] = srcData[srcLocation2];
					tempData[tempLocation3] = srcData[srcLocation3];
				}
			}
		}
		for (int j = 0; j < h; j++) {
			for (int i = w/2; i < w; i++) {
				int tX = i - cenX;
				int tY = j - cenY;
				radius = (int) Math.sqrt((double) (tX * tX +tY*tY ));
				if(radius<R) {
					newX=cenX+tX*radius/R;
					 newY=cenY+tY*radius/R;
				}

				int tempLocation1 = i * 3 + j * w * 3;
				int tempLocation2 = i * 3 + 1 + j * w * 3;
				int tempLocation3 = i * 3 + 2 + j * w * 3;
				int srcLocation1 = newX * 3 + newY * w * 3;
				int srcLocation2 = newX * 3 + 1 + newY * w * 3;
				int srcLocation3 = newX * 3 + 2 + newY * w * 3;
				if ((tempLocation1 <= length)&& (tempLocation2 <= length) && (tempLocation3 <= length)
						&& (srcLocation1 <= length) && (srcLocation2 <= length) && (srcLocation3 <= length)) {				
					tempData[tempLocation1] = srcData[srcLocation1];
					tempData[tempLocation2] = srcData[srcLocation2];
					tempData[tempLocation3] = srcData[srcLocation3];
				}
			}
		}

		return tempData;
	}
//	private byte[] hahajingMirror(byte[] srcData, double factor, int w, int h, int x, int y) {
//		int cenX = x;
//		int cenY = y;
//		int newX = 0;
//		int newY = 0;
//        int R=(int) (Math.sqrt(h*h+w*w)/2);
//		int radius = 0;
//		byte[] tempData = (byte[]) srcData.clone();
//		int length = srcData.length;
//		for (int j = 0; j < h; j++) {
//			for (int i = 0; i < w; i++) {
//				int tX = i - cenX;
//				int tY = j - cenY;
//				radius = (int) Math.sqrt((double) (tX * tX +tY*tY ));
//				if(radius<R) {
//					newX=cenX+tX*radius/R;
//					 newY=cenY+tY*radius/R;
//				}
//
//				int tempLocation1 = i * 3 + j * w * 3;
//				int tempLocation2 = i * 3 + 1 + j * w * 3;
//				int tempLocation3 = i * 3 + 2 + j * w * 3;
//				int srcLocation1 = newX * 3 + newY * w * 3;
//				int srcLocation2 = newX * 3 + 1 + newY * w * 3;
//				int srcLocation3 = newX * 3 + 2 + newY * w * 3;
//				if ((tempLocation1 <= length)&& (tempLocation2 <= length) && (tempLocation3 <= length)
//						&& (srcLocation1 <= length) && (srcLocation2 <= length) && (srcLocation3 <= length)) {				
//					tempData[tempLocation1] = srcData[srcLocation1];
//					tempData[tempLocation2] = srcData[srcLocation2];
//					tempData[tempLocation3] = srcData[srcLocation3];
//				}
//			}
//		}
//
//		return tempData;
//
//	}
//	
}
```

由于时间紧，复合特效就简单的把两种特效一边一半显示，感兴趣可以自己修改。
