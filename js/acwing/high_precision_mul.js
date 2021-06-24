/**
 * @Description AcWing-793. 高精度乘法
 * 题目链接：https://www.acwing.com/problem/content/795/
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
    let A = lines[0].trim().split("").reverse();
    let b = +lines[1].trim();
    let C = mul(A, b);
    // 输出：共一行
    console.log(C.reverse().join(""));
});

/**
 * C = A * b
 * @param A
 * @param b
 */
var mul = function (A, b) {
    let C = [];

    for (let i = 0, temp = 0; i < A.length || temp; i++) {
        if (i < A.length) temp = b * A[i] + temp;
        C.push(temp % 10);
        temp = Math.floor(temp / 10);
    }

    // 处理前导0
    while (C.length > 1 && C[C.length - 1] === 0) C.pop();

    return C;
};
