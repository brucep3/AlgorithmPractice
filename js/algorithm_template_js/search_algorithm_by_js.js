// 二分查找


/**
 * 二分查找
 * 针对有序数列进行查找时，优先考虑二分；
 * 总共10道题；
 * Find Minimum in Rotated Sorted Array I, II(lc-153, 154, 与剑指Offer-11相同),
 * 在排序数组中查找数字(剑指Offer-53-I),
 * 缺失的数字(剑指Offer-53-II),
 * Longest Increasing Subsequence(lc-300),
 * Search a 2D Matrix I, II(lc-74, 240),
 * Pow(x, n) (lc-50), Intersection of Two Arrays I, II (lc-349, 350),
 */

/**
 * 二分查找：有序数组查找某个值
 * @param nums
 * @param target
 */

/**
 * 二分查找 V1：区间 [l, r] 被划分为 [l, mid] 和 [mid + 1, r]
 * @param nums
 * @param target
 * @returns {number}
 */
var binarySearchV1 = function (nums, target) {
    // 数组为空
    if (nums.length < 1) return -1;
    // 查找
    let low = 0, high = nums.length - 1, mid;
    while (low <= high) {
        // 溢出；向下取整
        mid = Math.floor(low + (high - low) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else if (target > nums[mid]) {
            low = mid + 1;
        }
    }
    return -1;
};

/**
 * 二分查找 V1：区间 [l, r] 被划分为 [l, mid - 1] 和 [mid, r]
 * @param nums
 * @param target
 */
var binarySearchV2 = function (nums, target) {

}

/**
 * 检查 x 是否满足某种性质
 * @param x
 */
function check(x) {

}

