/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    const countOne = new Array(32).fill(0);
    for (let num of nums) {
        let cInx = 0;
        while (num) {
            if (num & 1 === 1) countOne[cInx]++;
            num >>= 1;
            cInx++;
        }
    }
    return countOne.reduce(
        (acc, curVal) => acc + (nums.length - curVal) * curVal,
        0);
};