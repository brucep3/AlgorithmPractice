/**
 * Solution: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let gap = 1; gap < 4 && i - gap >= 0; gap++) {
            if (nums[i] === nums[i - gap]) return nums[i];
        }
    }
    return -1;
};