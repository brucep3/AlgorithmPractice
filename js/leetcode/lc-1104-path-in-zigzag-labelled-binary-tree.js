/**
 * lc-1104. Path In Zigzag Labelled Binary Tree
 * Solution: Simulation
 * Time Complexity: O(logn)
 * Space Complexity: O(logn)
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
    let i = 1; // ith line

    const rangeArr = [[0, 0]];
    for (let len = 1, start = 1; start <= label; start += len, len *= 2, ++i) {
        rangeArr.push([start, start + len - 1]);
    }

    const resArr = [--i % 2 === 0 ? rangeArr[i][0] + rangeArr[i][1] - label : label];
    for (let j = i - 1; j >= 1; --j) {
        resArr.unshift(resArr[0] >> 1);
    }

    return resArr.map((val, idx) =>
        ++idx % 2 === 0 ? rangeArr[idx][0] + rangeArr[idx][1] - val : val
    );
};