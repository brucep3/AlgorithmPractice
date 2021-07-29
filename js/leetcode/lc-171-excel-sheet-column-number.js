/**
 * lc-171. Excel Sheet Column Number
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let res = 0;
    for (const ch of columnTitle) {
        res = res * 26 + ch.charCodeAt(0) - "A".charCodeAt(0) + 1;
    }

    return res;
};