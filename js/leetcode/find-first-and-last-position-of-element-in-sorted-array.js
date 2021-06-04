/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let max = -1,
        min = Number.MAX_SAFE_INTEGER;

    /**
     * [l, r] -> [1, m - 1] , m, [m + 1, r]
     */
    function bSearch(q, l, r) {
        if (l > r) {
            return;
        }
        let m = l + r >> 1;
        if (q[m] < target) {
            bSearch(q, m + 1, r);
        } else if (q[m] > target) {
            bSearch(q, l, m - 1);
        } else {
            // q[m] === target
            [min, max] = [Math.min(min, m), Math.max(max, m)];
            bSearch(q, l, m - 1);
            bSearch(q, m + 1, r);
        }
    }

    bSearch(nums, 0, nums.length - 1);

    return max === -1 ? [-1, -1] : [min, max];
};