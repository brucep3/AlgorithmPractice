/**
 * lc-1893. Check if All the Integers in a Range Are Covered
 * Solution: 差分
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    const diff = new Array(52).fill(0);

    /**
     * every number of interval [l, r] plus c
     */
    const insert = (l, r, c) => {
        diff[l] += c;
        diff[r + 1] -= c;
    };

    for (const [start, end] of ranges) {
        insert(start, end, 1);
    }

    for (let i = 1, sum = diff[0]; i <= right; ++i) {
        sum += diff[i];
        if (sum < 1 && i >= left) {
            return false;
        }
    }

    return true;
};