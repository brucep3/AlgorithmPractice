/**
 * 剑指 Offer 42. 连续子数组的最大和
 * Solution: Greedy
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = Number.MIN_SAFE_INTEGER,
        sum = -1;

    for (const num of nums) {
        sum = sum > 0 ? sum + num : num;
        max = Math.max(sum, max);
    }

    return max;
};