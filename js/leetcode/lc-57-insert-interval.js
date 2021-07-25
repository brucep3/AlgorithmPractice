// noinspection DuplicatedCode

/**
 * TODO: 优化解法
 * lc-57. Insert Interval
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
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