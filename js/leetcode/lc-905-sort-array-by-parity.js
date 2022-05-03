/**
 * 905. Sort Array By Parity (905. 按奇偶排序数组)
 * Solution: Double Point
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    for (let l = 0, r = nums.length - 1; l < r;) {
        if (nums[l] % 2 === 0) l++;
        else if (nums[r] % 2 === 1) r--;
        else if (l < r) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
    }
    return nums;
};