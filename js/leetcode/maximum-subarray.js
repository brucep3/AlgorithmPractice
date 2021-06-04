/**
 * 解题思路：贪心
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0, max = Number.MIN_SAFE_INTEGER;
    for (const num of nums) {
        sum += num;
        max = Math.max(sum, max);
        if (sum < 0) sum = 0;
    }
    return max;
};