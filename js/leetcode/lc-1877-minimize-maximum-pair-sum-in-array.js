/**
 * lc-1877. Minimize Maximum Pair Sum in Array
 * Solution: Sort + Greedy + Double Point (Left Right Points of One Array)
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = 0;

    for (let l = 0, r = nums.length - 1; l < r; l++, r--)  {
        res = Math.max(res, nums[l] + nums[r]);
    }

    return res;
};