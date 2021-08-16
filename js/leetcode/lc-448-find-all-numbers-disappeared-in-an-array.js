/**
 * lc-448. Find All Numbers Disappeared in an Array
 * Read the Problem: nums[i] = i + 1
 * Solution: Swap
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const resArr = [];

    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    for (let i = 0; i < nums.length; ) {
        if (nums[i] === i + 1 || nums[nums[i] - 1] === nums[i]) {
            ++i;
            continue;
        }
        // nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]
        swap(nums, i, nums[i] - 1);
    }

    nums.forEach((val, idx) => {
        if (val !== idx + 1) resArr.push(idx + 1);
    });

    return resArr;
};