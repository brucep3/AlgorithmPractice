/**
 * lc-75. Sort Colors (75. 颜色分类)
 * Solution: Double Point
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l = 0, r = nums.length - 1;

    const swap = (i, j) => {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };

    for (let i = 0; i <= r; ++i) {
        while (i <= r && nums[i] === 2) {
            swap(i, r--);
        }

        if (nums[i] === 0) {
            swap(i, l++);
        }
    }
};