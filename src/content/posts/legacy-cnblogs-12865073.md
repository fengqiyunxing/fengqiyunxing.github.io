---
title: "leetcode刷题记录——字符串"
published: 2020-05-10T22:33:00+08:00
description: "242.有效地字母异位词 由于本题的字符串只包含 26 个小写字符，因此可以使用长度为 26 的整型数组对字符串出现的字符进行统计，并对比字母出现的次数是否一致。不再使用 HashMap。 toCharArray（）的用"
category: "旧文档案"
tags: ["旧文", "数据结构与算法"]
lang: "zh-CN"
sourceLink: "https://www.cnblogs.com/xiuzhublog/p/12865073.html"
archived: true
---

> 迁移来源 [博客园原文](https://www.cnblogs.com/xiuzhublog/p/12865073.html) · 原文发布于 `2020-05-10 22:33:00`（UTC+8）
> 旧文归档，保留当时的记录。

## 242.有效地字母异位词

由于本题的字符串只包含 26 个小写字符，因此可以使用长度为 26 的整型数组对字符串出现的字符进行统计，并对比字母出现的次数是否一致。不再使用 HashMap。

[toCharArray（）的用法](https://www.cnblogs.com/yangyi9343/p/5074690.html)

[java中的foreach的用法](https://blog.csdn.net/swtesting/article/details/81661538)

```
class Solution {
    public boolean isAnagram(String s, String t) {
    int[] cnts = new int[26];
    for (char c : s.toCharArray()) {
        cnts[c - 'a']++;
    }
    for (char c : t.toCharArray()) {
        cnts[c - 'a']--;
    }
    for (int cnt : cnts) {
        if (cnt != 0) {
            return false;
        }
    }
    return true;
    }
}
```

进阶，由于整个Uniocde的字符范围较大，可以使用哈希表映射而不是固定大小的计数器。

## 409.最长回文串

使用长度为 256 的整型数组来统计每个字符出现的个数，每个字符有偶数个可以用来构成回文字符串。

因为回文字符串最中间的那个字符可以单独出现，所以如果有单独的字符就把它放到最中间。

```
public int longestPalindrome(String s) {  
//使用ASCII表示大小写英文字母只要到128就够用了。
    int[] cnts = new int[128];
    for (char c : s.toCharArray()) {
        cnts[c]++;
    }
    int palindrome = 0;
    for (int cnt : cnts) {
        palindrome += (cnt / 2) * 2;
    }
    if (palindrome < s.length()) {
        palindrome++;   // 这个条件下 s 中一定有单个未使用的字符存在，可以把这个字符放到回文的最中间
    }
    return palindrome;
}
```

更新：在一个回文字符串中，最多只能有一个出现一次的字母（aaa可以理解为有一个出现了一次的a），只需要统计有多少个字母只出现了一次，用字符串的长度减去出现一次的字母数再加一，就是最长字符串的长度。两种方法本质上都是将只出现一次的字母去除，运行结果基本上也没有差异。但是第二种更方便理解。

```
class Solution {
   public int longestPalindrome(String s) {
        int[] arr = new int[128];
        for(char c : s.toCharArray()) {
            arr[c]++;
        }
        int count = 0;
        for (int i : arr) {
            count += (i % 2);
        }
        return count == 0 ? s.length() : (s.length() - count + 1);
    }
}
```

## 205.同构字符串

记录一个字符上次出现的位置，如果两个字符串中的字符上次出现的位置一样，那么就属于同构。

```
class Solution {
    public boolean isIsomorphic(String s, String t) {
    int[] preIndexOfS = new int[256];
    int[] preIndexOfT = new int[256];
    for (int i = 0; i < s.length(); i++) {
        char sc = s.charAt(i), tc = t.charAt(i);
        if (preIndexOfS[sc] != preIndexOfT[tc]) {
            return false;
        }
        preIndexOfS[sc] = i + 1;
        preIndexOfT[tc] = i + 1;
    }
    return true;
    }
}
```

## 647.回文子串

```
从字符串的某一位开始，尝试着去扩展子字符串。
```

```
private int cnt = 0;

public int countSubstrings(String s) {
    for (int i = 0; i < s.length(); i++) {
        extendSubstrings(s, i, i);     // 奇数长度
        extendSubstrings(s, i, i + 1); // 偶数长度
    }
    return cnt;
}

private void extendSubstrings(String s, int start, int end) {
    while (start >= 0 && end < s.length() && s.charAt(start) == s.charAt(end)) {
        start--;
        end++;
        cnt++;
    }
}
```

## 9.回文数

```
class Solution {
    public boolean isPalindrome(int x) {
    if (x == 0) {
        return true;
    }
    if (x < 0 || x % 10 == 0) {
        return false;
    }
    int right = 0;
    while (x > right) {
        right = right * 10 + x % 10;
        x /= 10;
    }
    return x == right || x == right / 10;
    }
}
```

## 696.计数二进制子串

```
class Solution {
   public int countBinarySubstrings(String s) {
    int preLen = 0, curLen = 1, count = 0;
    for (int i = 1; i < s.length(); i++) {
        if (s.charAt(i) == s.charAt(i - 1)) {
            curLen++;
        } else {
            preLen = curLen;
            curLen = 1;
        }

        if (preLen >= curLen) {
            count++;
        }
    }
    return count;
    }
}
```

```
 
```
