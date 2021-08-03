/**
 * lc-1013. Partition Array Into Three Parts With Equal Sum
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
    let total = arr.reduce((acc, val) => acc + val, 0),
        count = 0,
        curSum = 0;

    for (const num of arr) {
        curSum += num;
        if (curSum === total / 3) count++, curSum = 0;
    }

    return count >= 3;
};


