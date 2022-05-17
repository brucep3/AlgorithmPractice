/**
 * Solution: 原地哈希
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let slow = 0, fast = 0
    for (; fast < nums.length; fast++) {
        while (nums[fast] !== fast + 1) {
            let temp = nums[fast];
            if (temp > 0 && temp <= nums.length && nums[temp - 1] !== temp) {
                nums[fast] = nums[temp - 1];
                nums[temp - 1] = temp;
            } else {
                break;
            }
        }
    }
    while (slow < nums.length && nums[slow] === slow + 1) slow++;
    return slow + 1;
};