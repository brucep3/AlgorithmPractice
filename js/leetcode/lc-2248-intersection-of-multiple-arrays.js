/**
 * 2248. Intersection of Multiple Arrays
 * Solution: Counting Sort
 * Time Complexity: O(n)
 * Space Complecity: O(n)
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    const counts = new Array(1000 + 10).fill(0);
    for (const numArr of nums) {
        for (const num of numArr) {
            counts[num]++;
        }
    }
    return counts.map(
        (val, idx) => val === nums.length ? idx : 0
    ).filter(val => val !== 0);
};