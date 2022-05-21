/**
 * Solution: Binary Search
 * Time Complexity: O(n * logn)
 * Space Complexity: O(n)
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    const idxMap = new Map(intervals.map((interval, idx) => [interval[0], idx]));
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    // 二分查找 - 后半段的左边界: intervals[m][0] >= v
    const bisectLeft = (l, r, v) => {
        while (l < r) {
            let m = l + r >> 1;
            if (intervals[m][0] >= v) r = m;
            else l = m + 1;
        }
        return intervals[l][0] >= v ? l : -1;
    };

    const resArr = new Array(intervals.length).fill(0);
    intervals.forEach(
        (interval, idx) => {
            const [l, r] = interval;
            const res = bisectLeft(idx, intervals.length - 1, r);
            resArr[idxMap.get(l)] = res === -1 ? -1 : idxMap.get(intervals[res][0]);
        }
    );

    return resArr;
};
