/**
 * 读题：价格数组长度 >= 1
 * 解题思路：贪心 -> 先用 线性 dp
 * 状态表示：dp[i]
 * 集合：表示第 i 天获取的利润
 * 属性：最大值
 * 状态划分：第 i 天卖了：dp[i]， 第 i 天没有卖（包含） dp[i-1]
 * 状态转移：dp[i] = dp[i-1] + ( prices[i] - prices[i-1] )
 * 利润值最大： prices[i] - prices[i-1] >= 0
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; ++i) {
        let priceDiff = prices[i] - prices[i - 1];
        profit = Math.max(profit, profit + priceDiff);
    }

    return profit;
};