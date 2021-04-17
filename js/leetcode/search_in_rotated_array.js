/**
 * TODO: 时间复杂度位logn，二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length < 1) return -1;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === target) {
            return i;
        }
    }
    return  - 1;
};

