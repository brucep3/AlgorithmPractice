/**
 * lc-852. Peak Index in a Mountain Array
 * 解题思路：二分查找，查找后半段的左边界
 * @param {number[]} arr 长度 >= 3
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {

    /**
     * 前半段: arr[i] > arr[i - 1]
     * 后半段：arr[i] > arr[i + 1]
     * 查找后半段的左边界： [l, r] -> [l, mid] + [mid + 1, r]
     * mid = l + r >> 1 , 不需要 + 1
     * check(q[mid]) { q[mid] > q[mid + 1] }
     */
    const bs = function (q, l, r) {
        while (l < r) {
            let mid = l + r >> 1;
            if (q[mid] > q[mid + 1]) r = mid;
            else l = mid + 1;
        }

        return l;
    }

    return bs(arr, 0, arr.length - 1);
};