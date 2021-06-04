/**
 * 前缀和
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    // sum[n + 1] : sum[i + 1] 表示 nums[0 : i ] 里 1 的个数减去 0 的个数
    // sum[j] === sum[i] 表示 nums[i+1 : j] 0 和 1 个数相等，长度为 j - i
    const sum = [0];
    nums.forEach(
        val => {
            if (val === 0) {
                sum.push(sum[sum.length - 1] - 1);
            } else {
                sum.push(sum[sum.length - 1] + 1);
            }
        }
    );

    let countMap = new Map(), max = 0;
    sum.forEach(
        (val, idx) => {
            if (countMap.has(val)) max = Math.max(max, idx - countMap.get(val));
            if (!countMap.has(sum[idx])) countMap.set(val, idx);
        }
    );

    return max;
};