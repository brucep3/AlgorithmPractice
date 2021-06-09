/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    // n <= 3 -> n-1
    if (n <= 3) return n - 1;
    let n1 = 1, // 差3
        n2 = 2, // 差2
        n3 = 3; // 差1
    for (let i = 4; i <= n; ++i) {
        let cur = Math.max(n1 * 3, n2 * 2);
        n1 = n2;
        n2 = n3;
        n3 = cur;
    }
    return n3;
};