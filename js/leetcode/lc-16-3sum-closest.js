/**
 * lc-16. 3Sum Closest
 * 读题：解有且唯一
 * 解题思路：双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = 1e5,
        min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let l = i + 1, r = nums.length - 1; l < r;) {
            let curSum = nums[i] + nums[l] + nums[r];
            let curMin = Math.abs(curSum - target);
            if (curMin <= min) {
                min = curMin;
                res = curSum;
            }
            if (curSum === target) {
                return res;
            } else if (curSum < target) {
                l++;
            } else {
                // curSum > target
                r--;
            }
        }
    }

    return res;
};