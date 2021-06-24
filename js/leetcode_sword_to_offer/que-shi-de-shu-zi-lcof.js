/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    /**
     * 性质：nums[i] > i
     * 后半段的左边界 => [l, r] = [l, mid] and [mid + 1, r]
     */
    const bs = (q, l, r) => {
        while (l < r) {
            let mid = l + r >> 1;
            if (q[mid] > mid) {
                r = mid;
            } else {
                // q[mid] === mid
                l = mid + 1;
            }
        }
        return l;
    };

    return bs(nums, 0, nums.length);
};