/**
 * 数组的数值表示最长的跳跃距离
 * 数组个数 >= 1
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxDist = nums[0]; // 起点
    for(let i = 1; i <= maxDist && i <= nums.length - 1; ++i) {
        maxDist = Math.max(i + nums[i], maxDist);
    }
    return maxDist >= nums.length-1;
};
