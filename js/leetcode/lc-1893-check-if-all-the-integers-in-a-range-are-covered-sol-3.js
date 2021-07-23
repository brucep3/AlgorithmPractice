// noinspection DuplicatedCode

/**
 * lc-1893. Check if All the Integers in a Range Are Covered
 * Solution: Double Point (Fast Slow Point of Two Array)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    ranges.sort((a, b) => a[0] - b[0]);

    let p1 = 0, p2 = left;
    for (; p1 < ranges.length && p2 <= right; p2++) {
        if (p2 < ranges[p1][0] || p2 > ranges[p1][1]) {
            while (p1 < ranges.length && (p2 < ranges[p1][0] || p2 > ranges[p1][1])) {
                p1++;
            }
        }
    }

    return p2 > right && p1 < ranges.length;
};