/**
 * lc-1051. Height Checker
 * Solution: Counting Sort
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const expected = new Array(101).fill(0);
    for (const height of heights) expected[height]++;

    let count = 0, k = 0;
    for (let i = 0; i < expected.length; i++) {
        for (let j = 0; j < expected[i]; j++) {
            if (i !== heights[k++]) count++;
        }
    }

    return count;
};