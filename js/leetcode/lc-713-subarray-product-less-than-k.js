/**
 * 713. Subarray Product Less Than K
 * Solution: Double Point (Fast and Slow Pointers of One Array)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let count = 0;
    // [slow, fast]
    for (let slow = 0, fast = 0, product = 1; fast < nums.length; ++fast) {
        product *= nums[fast];
        while (slow <= fast && product >= k) product /= nums[slow++];
        count += fast - slow + 1;
    }
    return count;
};