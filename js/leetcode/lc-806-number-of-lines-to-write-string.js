/**
 * 806. Number of Lines To Write String (806. 写字符串需要的行数)
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    return s.split("").reduce(
        (prev, cur) => {
            let curWid = widths[cur.charCodeAt(0) - "a".charCodeAt(0)];
            if (prev[1] + curWid > 100) {
                prev[0]++;
                prev[1] = curWid;
            } else {
                prev[1] += curWid;
            }
            return prev;
        },
        [1, 0]);
};