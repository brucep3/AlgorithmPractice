/**
 * 剑指 Offer 53 - I. 在排序数组中查找数字 I
 * Solution: Binary Search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0,
        r = nums.length - 1;

    // left boundary of 2nd half : nums[m] >= target
    while (l < r) {
        let m = l + r >> 1;
        if (nums[m] >= target) r = m;
        else l = m + 1;
    }

    if (nums[l] !== target) return 0;
    else var min = l;

    // right boundary of 1st half : nums[m] <= target
    l = 0;
    r = nums.length - 1;
    while (l < r) {
        let m = l + r + 1 >> 1;
        if (nums[m] <= target) l = m;
        else r = m - 1;
    }

    let max = l;

    return max - min + 1;
};
