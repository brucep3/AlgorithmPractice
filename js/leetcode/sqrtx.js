/**
 * lc-69. Sqrt(x)
 * 解题思路：整数二分（前半段的右边界）
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) return 0

    let l = 1, r = x >>> 1;
    // 前半段： a * a <= x
    // 后半段： a * a > x
    // 需要得到前半段的右边界
    while (l < r) {
        let mid = l + r + 1 >>> 1;
        if (mid * mid <= x) l = mid;
        else r = mid - 1;
    }

    return l;
};