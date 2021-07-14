/**
 * lc-1846. Maximum Element After Decreasing and Rearranging (1846. 减小和重新排列数组后的最大元素)
 * Solution: Greedy
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort( (a, b) => a - b);

    let res = 1;
    for (let i = 1; i < arr.length; ++i) {
        res = Math.min(res, arr[i]);
    }

    return res;
};