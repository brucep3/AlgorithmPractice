/**
 * lc-209. Minimum Size Subarray Sum (长度最小的子数组)
 * 解题思路1：双指针（单序列快慢指针），时间复杂度为 O(n)
 * 解题思路2：前缀和 + 二分查找，时间复杂度为 O(n * logn)
 * @param {number} target 正整数, 取值 >= 1
 * @param {number[]} nums 正整数
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let curSum = 0, min = 1e7;
    // num[slow : fast] >= target
    for (let slow = 0, fast = 0; fast < nums.length; fast++) {
        curSum += nums[fast];
        while (curSum - nums[slow] >= target) curSum -= nums[slow++];
        if (curSum >= target) min = Math.min(min, fast - slow + 1);
    }

    return min === 1e7 ? 0 : min;
};
