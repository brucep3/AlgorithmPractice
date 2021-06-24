/**
 * @Description AcWing-792. 高精度减法
 * 题目链接：https://www.acwing.com/problem/content/794/
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
    let B = lines[1].trim().split("").reverse();
    let C;
    if (cmp(A, B)) {
        C = sub(A, B);
    } else {
        C = sub(B, A);
        C.push("-");
    }
    // 输出：共一行，包含所求的和
    console.log(C.reverse().join(""));
});

/**
 * C = A - B
 * 保证 A >= B
 * @param A
 * @param B
 */
var sub = function (A, B) {
    let C = [];

    for (let i = 0, temp = 0; i < A.length; i++) {
        temp = A[i] - temp;
        if (i < B.length) temp -= B[i];
        C.push((temp + 10) % 10);
        if (temp < 0) temp = 1;
        else temp = 0;
    }

    // 处理前导0
    while (C.length > 1 && C[C.length - 1] === 0) C.pop();

    return C;
};

/**
 * A >= B 是否成立
 * @param A
 * @param B
 */
var cmp = function (A, B) {
    if (A.length !== B.length) return A.length > B.length;

    // A>length === B.length
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i] !== B[i]) return A[i] > B[i];
    }

    return true;
}