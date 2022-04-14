
/**
 * 1672. Richest Customer Wealth (1672. 最富有客户的资产总量)
 * Solution: Simulation
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;

    accounts.forEach(arr => {
        let sum = arr.reduce((prevRes, cur) => prevRes + cur, 0);
        max = Math.max(max, sum);
    });

    return max;
};