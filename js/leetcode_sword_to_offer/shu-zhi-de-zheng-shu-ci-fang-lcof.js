/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let sign = Math.sign(n);
    n = Math.abs(n);

    let res = 1;

    // 注意事项：使用 >>>= 无符号右移，而不是有符号右移
    for (let base = x, curN = n; curN; base *= base, curN >>>= 1) {
        if (curN & 1 === 1) res *= base;
    }

    if (sign > 0) return res;
    else return 1 / res;
};