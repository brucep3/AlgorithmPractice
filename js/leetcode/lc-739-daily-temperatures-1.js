/**
 * lc-739. Daily Temperatures
 * Solution: Brute Force
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(n)
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const maxArr = new Array(temperatures.length).fill(0);
    for (let i = maxArr.length - 1, max = Number.MIN_SAFE_INTEGER; i >= 0; --i) {
        max = Math.max(temperatures[i], max);
        maxArr[i] = max;
    }

    const resArr = [];
    for (let i = 0; i < temperatures.length; ++i) {
        if (maxArr[i] > temperatures[i]) {
            let j = i + 1;
            for (; j < temperatures.length && temperatures[j] <= temperatures[i];
                   ++j) {
            }
            resArr.push(j - i);
        } else resArr.push(0);
    }

    return resArr;
};