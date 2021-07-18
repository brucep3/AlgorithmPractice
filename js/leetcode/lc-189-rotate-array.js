/**
 * lc-189. Rotate Array
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    /**
     * reverse nums between [i, j)
     * @param i open
     * @param j close
     */
    const reverseArr = (i, j) => {
        for (let l = i, r = j - 1; l < r; ++l, --r) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
    };

    k = k % nums.length;
    reverseArr(nums.length - k, nums.length);
    reverseArr(0, nums.length - k);
    reverseArr(0, nums.length);
};