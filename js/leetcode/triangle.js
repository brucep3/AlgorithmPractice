/**
 * 读题：三角形至少 1 行 1列
 * 解题思路：线性 dp，二维 dp，可以优化成一维
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let dp = [triangle[0][0]];

    for (let i = 1; i < triangle.length; ++i) {
        let curDp = [dp[0] + triangle[i][0]];
        for (let j = 1; j < triangle[i].length - 1; ++j) {
            curDp.push(Math.min(dp[j], dp[j - 1]) + triangle[i][j]);
        }
        curDp.push(dp[dp.length - 1] + triangle[i][triangle[i].length - 1]);
        dp = curDp;
    }

    return Math.min(...dp);
};

// minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);