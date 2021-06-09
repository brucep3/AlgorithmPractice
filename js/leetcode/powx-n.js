/**
 * 读题：计算结果为 [-1e4, 1e4]
 * @param {number} x 取值 -100.0 < x < 100.0
 * @param {number} n 取值 2 ^ 31 - 1
 * @return {number}
 */
var myPow = function (x, n) {
    let sign = Math.sign(n);
    n = Math.abs(n);

    let res = 1;

    // 注意事项：使用 >>>= 无符号右移，而不是有符号右移
    for (let base = x, curN = n; curN; base *= base, curN >>>= 1) if (curN & 1 === 1) {
        res *= base;
    }

    if (sign > 0) return res;
    else return 1 / res;
};