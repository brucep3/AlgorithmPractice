/**
 * @Description
 * AcWing-801. 二进制中1的个数
 * 题目链接：https://www.acwing.com/problem/content/803/
 * @Author PAN Bruce
 * @Date 2021/6/24
 */

var fs = require('fs');
var buf = '';

process.stdin.on("readable", function () {
    var chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    const lines = buf.split("\n");
    // 输入格式
    // 第一行包含整数 n。
    const n = +lines[0].trim();
    // 第二行包含 n 个整数，表示整个数列。
    const nums = lines[1].trim().split(" ").filter(s => s !== "").map(val => +val);
    // 输出格式
    // 共一行，包含 n 个整数，其中的第 i 个数表示数列中的第 i 个数的二进制表示中 1 的个数。
    const resArr = [];
    for (const num of nums) {
        resArr.push(numberOfOnes(num));
    }
    console.log(resArr.join(" "));
});

/**
 * 数的二进制表示中 1 的个数
 * @param n
 * @returns {number}
 */
var numberOfOnes = n => {
    let count = 0;
    for (; n;) {
        n -= lowbit(n);
        count++;
    }
    return count;
};

/**
 * 返回 n 的最后一位 1
 * n - lowbit(n) 就是去除最后一位 1
 * @param n
 * @returns {number}
 */
var lowbit = n => {
    return n & -n;
};