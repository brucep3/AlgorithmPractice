/**
 * Coin Change(lc-322)
 * 背包类 dp
 * @param {number[]} coins [1, 12]
 * @param {number} amount  [0, 1e4]
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = new Array(1e4 + 1).fill(Number.POSITIVE_INFINITY);
    dp[0] = 0;

    for (let cur = 1; cur <= amount; ++cur) {
        for (const coin of coins) {
            let temp = cur - coin;
            if (temp >= 0 && Number.isFinite(dp[temp])) {
                dp[cur] = Math.min(dp[temp] + 1, dp[cur]);
            }
        }
    }

    return Number.isFinite(dp[amount]) ? dp[amount] : -1;
};