/**
 * 剑指Offer-10- I. 斐波那契数列
 * 解题思路：线性 DP （一维从左到右）
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0 || n === 1) return n;
    let res = 0, n1 = 0, n2 = 1;
    for (let i = 2; i <= n; ++i) {
        res = (n1 + n2) % (1e9 + 7);
        n1 = n2;
        n2 = res;
    }
    return res;
};

