/**
 * lc-35. Search Insert Position
 * Read the Problem: the last number < target
 * Solution: Binary Search
 * Time Complexity: O(logn)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const bSearch = (nums, target) => {
        let l = 0, r = nums.length - 1;

        while (l < r) {
            let mid = l + r + 1 >> 1;
            if (nums[mid] < target) l = mid;
            else r = mid - 1;
        }

        return l;
    };

    let idx = bSearch(nums, target);

    return nums[idx] < target ? idx + 1 : 0;
};