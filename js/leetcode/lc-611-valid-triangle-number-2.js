/**
 * lc-611. Valid Triangle Number
 * Solution: Sort + Double Point (Fast Slow Point of One Array)
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < nums.length - 2; ++i) {
        for (let fast = i + 2, slow = i + 1; fast < nums.length; ++fast) {
            if (nums[slow] + nums[i] <= nums[fast]) {
                while (slow < fast && nums[i] + nums[slow] <= nums[fast]) ++slow;
            }
            count += fast - slow;
        }
    }

    return count;
};