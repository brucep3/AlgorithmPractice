/**
 * AcWing-794. 高精度除法
 * 题目链接：https://www.acwing.com/problem/content/796/
 * @Author PAN Bruce
 * @Date 2021/6/18
 */

var fs = require('fs');
var buf = '';

process.stdin.on("readable", function () {
    var chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    const lines = buf.split("\n");
    // 输入：共两行，每行包含一个整数。
    let A = lines[0].trim().split("").map(val => +val).reverse();
    let b = +lines[1].trim();
    let [C, r] = div(A, b);
    // 输出：商和余数
    console.log(C.reverse().join(""));
    console.log(r);
});

/**
 * C = A / b
 * r = A % b
 * @param A
 * @param b
 */
var div = function (A, b) {
    let C = [],
        r = 0;

    for (let i = A.length - 1; i >= 0; i--) {
        r = r * 10 + (+A[i]);
        C.push(Math.floor(r / b));
        r %= b;
    }

    C.reverse();

    // 处理前导0
    while (C.length > 1 && C[C.length - 1] === 0) C.pop();

    return [C, r];
};

