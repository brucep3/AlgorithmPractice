// 二分查找
/**
 * 二分查找：有序数组查找某个值
 * @param nums
 * @param target
 */
var binarySearch = function(nums, target) {
    // 数组为空
    if (nums.length < 1) return -1;
    // 查找
    let low = 0, high = nums.length - 1, mid;
    while (low <= high) {
        mid = getMid(low, high);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else if (target > nums[mid]) {
            low = mid + 1;
        }
    }
    return -1;

    /**
     * 注意：计算中间点，mid = low + (high - low) / 2；需要向下取整
     * @param low
     * @param high
     * @returns {number}
     */
    function getMid(low, high) {
        return Math.floor(low + (high - low) / 2);
    }
};

function testBinarySearch() {
    console.info("testBinarySearch");
    var nums = [1, 2, 3, 4, 5, 6];
    console.log(binarySearch(nums, 4));
    nums = [1, 2, 3, 4, 5, 6, 7];
    console.log(binarySearch(nums, 2));
    nums = [1];
    console.log(binarySearch(nums, 4));
    nums = [1];
    console.log(binarySearch(nums, 1));
}

// testBinarySearch();

/**
 * 10 problems totally
 * 针对有序数列进行查找时，优先考虑二分；
 * Find Minimum in Rotated Sorted Array I, II(lc-153, 154, 与剑指Offer-11相同), 在排序数组中查找数字(剑指Offer-53-I),
 * 缺失的数字(剑指Offer-53-II), Longest Increasing Subsequence(lc-300), Search a 2D Matrix I, II(lc-74, 240),
 * Pow(x, n) (lc-50), Intersection of Two Arrays I, II (lc-349, 350),
 */