/**
 * lc-930. Binary Subarrays With Sum (930. 和相同的二元子数组)
 * 读题：连续序列和
 * 解题思路：前缀和 + 哈希表
 * 时间复杂度： O(n)
 * 空间复杂度： O(n)
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    const preSum = [0]; // sum[i, j] = preSum[j + 1] - preSum[i]
    for (const num of nums) preSum.push(preSum[preSum.length - 1] + num);

    let count = 0;
    const preSumCount = new Map().set(0, 1);

    for (let i = 0; i < nums.length; ++i) {
        // goal = preSum[i + 1] - preSum[prev] -> preSum[prev] = preSum[i + 1] - goal
        count += (preSumCount.get(preSum[i + 1] - goal) || 0);
        preSumCount.set(preSum[i + 1], (preSumCount.get(preSum[i + 1]) || 0) + 1);
    }

    return count;
};