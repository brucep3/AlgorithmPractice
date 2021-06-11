/**
 * lc-279. Perfect Squares
 * @param {number} n [1, 100]
 * @return {number}
 */
var numSquares = function (n) {
    const squareNums = [];
    for (let i = 1; i * i <= n; ++i) {
        squareNums.push(i * i);
    }

    const dp = new Array(n + 1).fill(n + 1);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < squareNums.length && i - squareNums[j] >= 0; j++) {
            dp[i] = Math.min(dp[i - squareNums[j]] + 1, dp[i]);
        }
    }

    // 必然有解
    return dp[n];
};