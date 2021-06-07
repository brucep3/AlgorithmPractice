/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const dp = [];
    for (let i = 0; i < obstacleGrid.length; ++i) {
        dp.push(new Array(obstacleGrid[i].length).fill(0));
    }

    let i = 0;
    for (; i < dp.length && obstacleGrid[i][0] === 0; ++i) {
        dp[i][0] = 1;
    }

    for (; i < dp.length; ++i) {
        dp[i][0] = 0;
    }

    for (i = 0; i < dp[0].length && obstacleGrid[0][i] === 0; ++i) {
        dp[0][i] = 1;
    }

    for (; i < dp[0].length; ++i) {
        dp[0][i] = 0;
    }

    for (i = 1; i < dp.length; ++i) {
        for (let j = 1; j < dp[i].length; ++j) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[dp.length - 1][dp[dp.length - 1].length - 1];
};