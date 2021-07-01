/**
 * LCP 07. 传递信息
 * 读题：从 0 到 n - 1
 * 解题思路：DP
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
    let dp = new Array(n).fill(0);
    dp[0] = 1;

    for (let i = 0; i < k; ++i) {
        let next = new Array(n).fill(0);
        for (const [from, to] of relation) {
            next[to] += dp[from];
        }
        dp = next;
    }

    return dp[n - 1];
}