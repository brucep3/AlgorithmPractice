/**
 * lc-1743. Restore the Array From Adjacent Pairs
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
    const m = new Map();
    for (const [num1, num2] of adjacentPairs) {
        m.set(num1, (m.get(num1) || new Set()).add(num2));
        m.set(num2, (m.get(num2) || new Set()).add(num1));
    }

    let start = null;
    m.forEach((val, key) => {
        if (val.size === 1) start = key;
    });

    const resArr = [start];
    for (let i = 0, filterVal = null; i < adjacentPairs.length; ++i) {
        let last = resArr[resArr.length - 1];

        for (const val of m.get(last)) {
            if (val !== filterVal) resArr.push(val);
        }

        filterVal = last;
    }

    return resArr;
};