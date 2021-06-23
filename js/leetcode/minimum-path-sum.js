/**
 * lc-64. Minimum Path Sum
 * 解题思路：线性 dp （二维，从上到下，从左到右）
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const dp = [];
    for (let i = 0; i <= grid.length; i++) {
        dp.push(new Array(grid[0].length + 1).fill(1e8));
    }
    dp[0][1] = 0;

    for (let i = 1; i <= grid.length; i++) {
        for (let j = 1; j <= grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }

    return dp[grid.length][grid[0].length];
};