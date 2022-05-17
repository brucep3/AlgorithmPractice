/**
 * 442. Find All Duplicates in an Array
 * Solution: Simulation (Finding Patterns)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const res = [];
    for (let i = 0; i < nums.length; ++i) {
        while (nums[i] !== i + 1 && nums[i]) {
            if (nums[nums[i] - 1] === nums[i]) {
                res.push(nums[i]);
                nums[i] = 0;
            } else {
                const temp = nums[i];
                nums[i] = nums[temp - 1];
                nums[temp - 1] = temp;
            }
        }
    }
    return res;
};