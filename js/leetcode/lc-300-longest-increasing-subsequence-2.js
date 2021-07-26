/**
 * lc-300. Longest Increasing Subsequence
 * Solution: Greedy + Binary Search
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * @param {number[]} nums nums.length >= 1
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const q = new Array(nums.length + 1).fill(0);

    q[0] = Number.MIN_SAFE_INTEGER;
    let len = 0;
    for (const num of nums) {
        let l = 0, r = len;
        while (l < r) {
            let mid = l + r + 1 >> 1;
            if (q[mid] < num) l = mid;
            else r = mid - 1;
        }

        len = Math.max(len, r + 1);
        q[r + 1] = num;
    }

    return len;
};