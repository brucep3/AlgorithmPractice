/**
 * TODO: 可以优化
 * lc-518. Coin Change 2
 * 读题
 * 解题思路：线性dp（二维）
 * 状态表示：dp[i][j]
 * 集合：通过前 i 类硬币，凑成总金额 j 的硬币组合
 * 属性：amount
 * 集合划分：dp[i][j] 由 前 i 类硬币组成
 * 状态转移：dp[i][j]
 * @param {number} amount [0, 5000]
 * @param {number[]} coins 长度 [0, 500]，取值 [1, 5000]
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < coins.length; ++i) {
        for (let j = 1; j <= amount; ++j) {
            let temp = j - coins[i];
            if (temp >= 0) {
                dp[j] += dp[temp];
            }
        }
    }

    return dp[amount];
};