/**
 * lc-611. Valid Triangle Number
 * Solution: Sort + Binary Search
 * Time Complexity: O(n ^ 2 logn)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < nums.length - 2; ++i) {
        for (let j = i + 1; j < nums.length - 1; ++j) {
            // nums[k] < nums[i] + nums[j]
            let l = j + 1, r = nums.length - 1;
            while (l < r) {
                let mid = l + r + 1 >> 1;
                if (nums[mid] < nums[i] + nums[j]) l = mid;
                else r = mid - 1;
            }
            count += nums[l] < nums[i] + nums[j] ? (l - j) : 0;
        }
    }

    return count;
};