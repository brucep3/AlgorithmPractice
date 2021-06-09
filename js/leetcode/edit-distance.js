/**
 * TODO: TODO
 * 读题：
 * 插入
 * 删除
 * 替换
 * 解题思路：线性 dp
 * 状态表示： dp[i][j]
 * 集合：a 前 i 个字母 变换为 b 的前 j 个字母的次数
 * 属性：最小次数
 * 状态划分： dp[i][j]
 * 状态转移：
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // | word1.length - word2.length |
    // -> 最长公共子序列
    // dp[i][j] 表示
};