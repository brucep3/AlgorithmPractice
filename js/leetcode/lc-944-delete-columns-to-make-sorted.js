/**
 * Solution: Simulation
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(1)
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let count = 0;
    for (let j = 0; j < strs[0].length; ++j) {
        for (let i = 1; i < strs.length; ++i) {
            if (strs[i][j].localeCompare(strs[i - 1][j]) < 0) {
                count++;
                break;
            }
        }
    }
    return count;
};