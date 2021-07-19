/**
 * lc-118. Pascal's Triangle
 * Solution: Simulation
 * Time complexity: O(n ^ 2)
 * Space complexity: O(1)
 * @param {number} numRows >= 0
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (!numRows) return [];
    if (numRows === 1) return [[1]];

    let resArr = [[1]];
    for (let iRow = 2; iRow <= numRows; ++iRow) {
        // [0, 1)
        let curArr = [1],
            prevRow = resArr[resArr.length - 1];
        // [1, iRow - 1)
        for (let i = 1; i < iRow - 1; ++i) {
            curArr.push(prevRow[i - 1] + prevRow[i]);
        }
        // [iRow - 1, iRow)
        curArr.push(1);
        resArr.push(curArr);
    }

    return resArr;
};