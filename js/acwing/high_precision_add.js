/**
 * @Description AcWing-791. 高精度加法
 * 原题链接：https://www.acwing.com/problem/content/description/793/
 * @Author PAN Bruce
 * @Date 2021/6/17
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
    let B = lines[1].trim().split("").reverse();
    // 输出：共一行，包含所求的和
    let C = highPrecisionAdd(A, B);
    console.log(C.reverse().join(""));
});

/**
 * C = A + B
 * @param A
 * @param B
 */
var highPrecisionAdd = function (A, B) {
    let C = [],
        temp = 0;

    for (let i = 0; i < A.length || i < B.length; i++) {
        let a = i < A.length ? +A[i] : 0;
        let b = i < B.length ? +B[i] : 0;
        temp += a + b;
        C.push(temp % 10);
        temp = Math.floor(temp / 10);
    }

    if (temp > 0) C.push(1);

    return C;
};