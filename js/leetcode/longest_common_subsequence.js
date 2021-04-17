
/**
 * 二维DP，从左上角到右下角
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    if (text1.length < 1 || text2.length < 1) return 0;
    var s1 = text1, s2 = text2;
    var dp = [];
    for (let i = 0; i <= s1.length; ++i) {
        dp[i] = new Array(s2.length);
        for (let j = 0; j <= s2.length; ++j) {
            dp[i][j] = 0;
        }
    }
    for (let i = 1; i <= s1.length; ++i) {
        for (let j = 1; j <= s2.length; ++j) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], s1[i-1] === s2[j-1] ? dp[i-1][j-1] + 1: dp[i-1][j-1]);
        }
    }
    return dp[s1.length][s2.length];
};
