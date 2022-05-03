/**
 * 908. Smallest Range I (908. 最小差值 I)
 * Solution: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
    for (const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    if (max - min <= k * 2) return 0;
    else return (max - k) - (min + k);
};