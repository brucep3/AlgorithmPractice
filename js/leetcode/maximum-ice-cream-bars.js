/**
 * lc-1833. Maximum Ice Cream Bars (1833. 雪糕的最大数量)
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b);

    let count = sum = 0;
    for (const cost of costs) {
        sum += cost;
        count++;
        if (sum > coins) {
            return count - 1;
        }
    }
    return count;
};