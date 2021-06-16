/**
 * lc-560. Subarray Sum Equals K
 * 读题：数组中元素存在负数；同一个数字在不同位置也是解
 * 解题思路：前缀和 + HashMap
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const sums = [0];
    for (const num of nums) {
        sums.push(sums[sums.length - 1] + num);
    }

    const sumCount = new Map().set(0, 1);
    let res = 0;

    // nums[i : j] = sum[j + 1] - sum[i]
    // 题目约束：i <= j，i 和 j 取值为 [0, nums.length]
    // sum[j + 1] - sum[i] = k -> sum[i] = sum[j + 1] - k

    for (let i = 0; i < nums.length; i++) {
        res += sumCount.get(sums[i + 1] - k) || 0;
        sumCount.set(sums[i + 1], (sumCount.get(sums[i + 1]) || 0) + 1);
    }

    return res;
};