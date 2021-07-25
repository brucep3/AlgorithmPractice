// noinspection DuplicatedCode

/**
 * lc-56. Merge Intervals
 * Solution: Sort
 * Time Complexity: O(nlogn)
 * Space Complexity: O(logn)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const resArr = [];
    let [st, ed] = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

    for (const [l, r] of intervals) {
        if (l > ed) {
            if (st !== Number.MIN_SAFE_INTEGER) resArr.push([st, ed]);
            [st, ed] = [l, r];
        } else ed = Math.max(ed, r);
    }

    if (st !== Number.MIN_SAFE_INTEGER) resArr.push([st, ed]);

    return resArr;
};