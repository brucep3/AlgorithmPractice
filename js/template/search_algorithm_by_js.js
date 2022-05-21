/**
 * 二分查找：单调或者部分单调序列中查找元素
 * @Description
 * @Author PAN Bruce
 * @Date 2021/6/1
 */

/**
 * 二分查找
 * 总共10道题；
 * Find Minimum in Rotated Sorted Array I, II(lc-153, 154, 与剑指Offer-11相同),
 * 在排序数组中查找数字(剑指Offer-53-I),
 * 缺失的数字(剑指Offer-53-II),
 * Longest Increasing Subsequence(lc-300),
 * Search a 2D Matrix I, II(lc-74, 240),
 * Pow(x, n) (lc-50),
 * Intersection of Two Arrays I, II (lc-349, 350),
 */

/**
 * 二分查找维基百科版本
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
        mid = low + (high - low >> 1);
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
 * 整数二分查找算法模板V1
 * 用于查找后半段的左边界
 * 区间[l, r]被划分成[l, mid]和[mid + 1, r]时使用
 * check 检查后半段性质
 * @param {number} l
 * @param {number} r
 * @returns {number} l
 */
var bisectLeft = function (l, r) {
    while (l < r) {
        let m = l + r >> 1;
        if (check(m)) r = m;
        else l = m + 1;
    }
    return l;
}

/**
 * 整数二分查找算法模板V2
 * 用于查找前半段的右边界
 * 区间[l, r]被划分成[l, mid - 1]和[mid, r]时使用
 * check 检查前半段性质
 * @param {number} l
 * @param {number} r
 * @returns {number}
 */
var bisectRight = function (l, r) {
    while (l < r) {
        let m = l + r + 1 >> 1;
        if (check(m)) l = m;
        else r = m - 1;
    }
    return l;
}

/**
 * 浮点数二分算法模板
 * 用于计算
 * @param l
 * @param r
 * @returns {*}
 */
var bSearchFloat = function (l, r) {
    const eps = 1e-6;
    while (r - l > eps) {
        let mid = (l + r) / 2;
        if (check(mid)) r = mid;
        else l = mid;
    }
    return l;
}

// 浮点二分法：次数迭代

/**
 * 检查 x 是否满足某种性质
 * @param {number} x
 */
function check(x) {
}

