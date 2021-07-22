/**
 * lc-1094. Car Pooling
 * Solution: 差分
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[][]} trips 0 <= trips[i][1] < trips[i][2] <= 1000
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    const diff = new Array(1002).fill(0);

    const insert = (l, r, c) => {
        diff[l] += c;
        diff[r + 1] -= c;
    };

    for (const [num, start, end] of trips) {
        insert(start, end - 1, num);
    }

    for (let i = 0, sum = 0; i < diff.length; ++i) {
        sum += diff[i];
        if (sum > capacity) {
            return false;
        }
    }

    return true;
};