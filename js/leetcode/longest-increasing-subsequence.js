/**
 * 读题：数组长度 >= 1
 * 解题思路：线性 DP
 * 如何优化
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // 状态表示： 一维dp dp[i]
    // 集合：所有以第 i 个数结尾的上升子序列
    // 属性：集合里面每个上升子序列的最大值
    // 状态计算：dp[i] = max(f[j] + 1), j = 0, 1, 2, ..., i - 1
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