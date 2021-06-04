/**
 * 前缀和 + 同余定理
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    const sum = [0];
    for (const num of nums) {
        sum.push(sum[sum.length - 1] + num);
    }

    const s = new Set();
    // nums[i : j] = sum[j+1] - sum[i] = n * k -> sum[j+1] % k = sum[i] % k
    // j >= i + 1
    let curRemain = -1,
        preRemain = -2;
    for (let i = 0; i < sum.length; ++i) {
        preRemain = curRemain;
        curRemain = sum[i] % k;
        if (s.has(curRemain)) return true;
        s.add(preRemain);
    }
    return false;
};