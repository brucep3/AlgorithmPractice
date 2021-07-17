/**
 * 剑指 Offer 42. 连续子数组的最大和
 * Solution: Greedy (Kadane's algorithm)
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums nums.length >= 1
 * @return {number}
 */
var maxSubArray = function (nums) {
    let bestSum = Number.MIN_SAFE_INTEGER,
        curSum = 0;

    for (const num of nums) {
        curSum = Math.max(curSum + num, num);
        bestSum = Math.max(curSum, bestSum);
    }

    return bestSum;
};