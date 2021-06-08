/**
 * 读题：如果利润为负数，返回 0
 * 数组长度 >= 1
 * 解题思路：贪心
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER,
        maxProfit = 0;

    for (const price of prices) {
        min = Math.min(price, min);
        maxProfit = Math.max(price - min, maxProfit);
    }

    return maxProfit;
};