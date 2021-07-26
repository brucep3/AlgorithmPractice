/**
 * lc-300. Longest Increasing Subsequence
 * Solution: DP (Linear, One-Dimensional)
 * State representations: dp[i]
 * Set: all LIS ending with nums[i]
 * Property: Max
 * State compute: dp[i] = max(f[j] + 1), j = 0, 1, 2, ..., i - 1
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(n)
 * @param {number[]} nums nums.length >= 1
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; ++i) {
        for (let j = i - 1; j >= 0; --j) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};