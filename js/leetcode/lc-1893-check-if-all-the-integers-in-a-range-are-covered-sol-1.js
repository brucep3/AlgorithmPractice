/**
 * lc-1893. Check if All the Integers in a Range Are Covered
 * Solution: Simulation (For Loop)
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(1)
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    for (let i = left; i <= right; ++i) {
        let flag = false;
        for ([start, end] of ranges) {
            if (i >= start && i <= end) {
                flag = true;
                break;
            }
        }
        if (!flag) return false;
    }

    return true;
};