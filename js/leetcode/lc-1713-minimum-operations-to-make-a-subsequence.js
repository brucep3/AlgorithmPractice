// noinspection DuplicatedCode

/**
 * lc-1713. Minimum Operations to Make a Subsequence
 * Read the Problem: LCS
 * Solution: Hash Table + LIS (Greedy + Binary Search)
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function (target, arr) {
    const lengthOfLIS = function (nums) {
        const q = new Array(nums.length + 1).fill(0);

        q[0] = Number.MIN_SAFE_INTEGER;
        let len = 0;
        for (const num of nums) {
            let [l, r] = [0, len];
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

    const m = new Map();
    target.forEach((val, idx) => {
        m.set(val, idx);
    });

    const newArr = arr.map((val) => m.has(val) ? m.get(val) : -1).filter(val => val !== -1);

    return target.length - lengthOfLIS(newArr);
};