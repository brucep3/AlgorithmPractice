/**
 * 读题：数组长度 >= 1
 * 存在正序，不存在倒序
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    // 消除最后一个数字的非单调性
    let newEnd = nums.length - 1;
    for (; newEnd >= 0 && nums[newEnd] === nums[0]; --newEnd) {
    }

    if (newEnd < 0) return nums[nums.length - 1];

    /**
     * 后半段性质：< nums[0]
     * 单调递增数组将返回最后一个数字
     */
    const bs = (q, l, r) => {
        while (l < r) {
            let mid = l + r >> 1;
            if (q[mid] < q[0]) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    };

    let ans = nums[bs(nums, 0, newEnd)];
    return Math.min(ans, nums[0]);
};