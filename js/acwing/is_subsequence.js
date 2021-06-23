/**
 * @Description
 * AcWing-2816. 判断子序列
 * 题目链接：https://www.acwing.com/problem/content/2818/
 * @Author PAN Bruce
 * @Date 2021/6/23
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
    // 第一行包含两个整数 n,m。
    let tokens = lines[0].split(" ").filter(s => s !== "").map(val => +val);
    let n = tokens[0], m = tokens[1];
    // 第二行包含 n 个整数，表示 a1,a2,…,an。
    const arrA = lines[1].split(" ").filter(s => s !== "").map(val => +val);
    // 第三行包含 m 个整数，表示 b1,b2,…,bm。
    const arrB = lines[2].split(" ").filter(s => s !== "").map(val => +val);
    // 输出格式
    // 如果 a 序列是 b 序列的子序列，输出一行 Yes。
    // 否则，输出 No。
    if (isSubseq(arrA, arrB)) console.log("Yes");
    else console.log("No");
});

/**
 * 判断 arr1 是否为 arr2 的子序列
 * @param arr1
 * @param arr2
 */
var isSubseq = (arr1, arr2) => {
    let p1 = 0;
    for (const num of arr2) {
        if (num === arr1[p1]) p1++;
    }
    return p1 === arr1.length;
};
