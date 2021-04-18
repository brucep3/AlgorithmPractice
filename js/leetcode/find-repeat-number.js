/**
 * 剑指 Offer 03. 数组中重复的数字
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; ++i) {
        if (set.has(nums[i])) {
            return nums[i];
        } else {
            set.add(nums[i]);
        }
    }
};
