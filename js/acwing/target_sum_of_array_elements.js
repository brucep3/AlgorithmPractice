/**
 * @Description
 * AcWing-800. 数组元素的目标和
 * 题目链接：https://www.acwing.com/problem/content/description/802/
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
    // 输入
    // 第一行包含三个整数 n,m,x，分别表示 A 的长度，B 的长度以及目标值 x。
    let tokens = lines[0].split(" ").filter(s => s !== "").map(val => +val);
    let n = tokens[0], m = tokens[1], x = tokens[2];
    // 第二行包含 n 个整数，表示数组 A。
    const A = lines[1].split(" ").filter(s => s !== "").map(val => +val);
    // 第三行包含 m 个整数，表示数组 B。
    const B = lines[2].split(" ").filter(s => s !== "").map(val => +val);
    // 输出格式
    // 共一行，包含两个整数 i 和 j。
    let res = targetSumOfArr(A, B, x);
    console.log(res.join(" "));
});

/**
 *
 * @param arr1
 * @param arr2
 * @param target
 */
var targetSumOfArr = (arr1, arr2, target) => {
    for (let l = 0, r = arr2.length - 1; l < arr1.length && r >= 0;) {
        if (arr1[l] + arr2[r] === target) {
            return [l, r];
        } else if (arr1[l] + arr2[r] < target) {
            l++;
        } else {
            // arr1[l] + arr2[r] > target
            r--;
        }
    }
};
