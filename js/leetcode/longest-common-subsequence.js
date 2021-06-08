/**
 * 状态表示：dp[i][j] <- 两个序列
 * 集合：所有在 第一个序列的前 i 个字母中出现，且在第二个序列的前 j 个字母 构成的公共子序列
 * 属性：子序列长度的最大值 -> Max -> 因为求的是最大值，所以状态划分可以重叠，不可以漏
 * 状态计算（状态划分）：a[i], b[j]是否包含在子序列中作为划分依据：[0, 0], [0, 1], [1, 0], [1, 1]，0 表示这个位置的值不出现。 1 表示这个位置的值出现，
 * 分别通过 dp[i - 1][j - 1], dp[i - 1][j]（包含）, dp[i][j - 1]（包含）, dp[i-1][j-1] + 1 表示
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // text1.length 行， text2.length 列
    const dp = [];
    for (let i = 0; i <= text1.length; ++i) {
        dp.push(new Array(text2.length + 1).fill(0));
    }

    // dp[i][j] = Max{ dp[i-1][j], dp[i][j-1], d[i-1][j-1] + 1 }
    for (let i = 1; i < dp.length; ++i) {
        // 比较 text1[i-1], text2[j-1] 
        for (let j = 1; j < dp[i].length; ++j) {
            dp[i][j] = Math.max(
                dp[i - 1][j],
                dp[i][j - 1],
                text1[i - 1] === text2[j - 1] ? dp[i - 1][j - 1] + 1 : dp[i - 1][j - 1]
            );
        }
    }

    return dp[text1.length][text2.length];
};