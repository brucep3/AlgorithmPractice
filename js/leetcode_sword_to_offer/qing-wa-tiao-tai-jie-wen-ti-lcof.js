/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n <= 1) return 1;
    let n1 = 1, n2 = 1;
    for (let i = 2; i <= n; ++i) {
        let cur = (n2 + n1) % 1000000007;
        n1 = n2;
        n2 = cur;
    }
    return n2;
};