/**
 * 至少1家
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length <= 2) {
        return Math.max(...nums);
    }
    // nums.length >= 3
    let last = Math.max(nums[0], nums[1]), secLast = nums[0], cur;
    for (let i = 2; i < nums.length; ++i) {
        cur = Math.max(last, secLast + nums[i]);
        secLast = last;
        last = cur;
    }
    return cur;
};
