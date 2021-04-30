/**
 * TODO: 完善
 * rotate 1次就是将最后位置的数字放在第1个位置；
 * nums.length >= 1；
 * 数字是唯一的；
 * 注意：存在mid就是最小值的情况，不能直接舍去
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1, mid;
    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        // 只有2个值
        if (nums[mid] === nums[low]) {
            return Math.min(nums[low], nums[high]);
        }
        // 最小值为左边值
        if (nums[mid] > nums[low] && nums[mid] < nums[high]) {
            return nums[low];
        }
        // 最小值为右边值
        if (nums[mid] < nums[low] && nums[mid] > nums[high]) {
            return nums[high] + 1;
        }
        // 最小值在中点右边
        if (nums[mid] > nums[low] && nums[mid] > nums[high]) {
            low = mid ;
        }
        // 最小值在中点左边
        if (nums[mid] < nums[low] && nums[mid] < nums[high]) {
            high = mid;
        }
    }
};
