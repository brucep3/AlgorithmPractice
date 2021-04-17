/**
 * 大于1家
 * 圆环形打劫；
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 从nums[1:len-2]
    if (nums.length <= 3) return Math.max(...nums);
    // nums.length >= 4
    // 从左到右
    let last = Math.max(nums[1], nums[2]), secLast = nums[1], cur;
    for (let i = 3; i <= nums.length - 2; ++i) {
        cur = Math.max(last, secLast + nums[i]);
        secLast = last;
        last = cur;
    }
    let ans = Math.max(secLast + nums[nums.length - 1], last);
    // 从右到左
    last = Math.max(nums[nums.length - 2], nums[nums.length - 3]);
    secLast = nums[nums.length - 2];
    for (let i = nums.length - 4; i >= 1; --i) {
        cur = Math.max(last, secLast + nums[i]);
        secLast = last;
        last = cur;
    }
    return Math.max(ans, secLast + nums[0], last);
};