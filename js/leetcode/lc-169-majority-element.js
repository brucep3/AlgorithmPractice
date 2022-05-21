/**
 * Solution: Boyer-Moore Majority Vote Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let cand = 0, count = 0;
    for (const num of nums) {
        if (count === 0) {
            cand = num;
            count++;
            continue;
        }
        if (num === cand) count++;
        else count--;
    }
    return cand;
};