/**
 * lc-88 Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 交换排序
    for (let i = 0; i < nums2.length; ++i) {
        let nums1Left = i; // [
        let nums1Right = i + m; // )
        for (let j = nums1Left; j < nums1Right; ++j) {
            if (nums2[i] < nums1[j]) {
                swap(nums1, j, nums2, i);
            }
        }
        nums1[nums1Right] = nums2[i];
    }
};

function swap(nums1, i, nums2, j) {
    let temp = nums1[i];
    nums1[i] = nums2[j];
    nums2[j] = temp;
}