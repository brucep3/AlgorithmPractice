/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * 解题思路：一个序列左右指针
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    for (let l = -1, r = nums.length; l < r;) {
        while (nums[++l] % 2 === 1) {
        }
        while (nums[--r] % 2 === 0) {
        }
        if (l < r) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
    }
    return nums;
};