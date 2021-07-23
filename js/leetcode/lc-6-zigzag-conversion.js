/**
 * lc-6. ZigZag Conversion
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const rows = new Array(numRows).fill(null).map(() => []);

    for (let i = 0, j = 0, isUp = true; j < s.length; ++j) {
        rows[i].push(s.charAt(j));

        if (i === numRows - 1) isUp = false;
        if (i === 0) isUp = true;

        if (isUp) i++;
        else i--;
    }

    return rows.map(val => val.join("")).join("");
};