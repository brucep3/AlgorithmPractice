/**
 * lc-347. Top K Frequent Elements
 * Solution: Hash Table + Counting Sort
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const numCount = new Map();
    nums.forEach((val) => {
        numCount.set(val, (numCount.get(val) || 0) + 1);
    });

    const countSortArr = new Array(nums.length + 1).fill(0).map(() => []);
    for (const [key, val] of numCount.entries()) {
        countSortArr[val].push(key);
    }

    const resArr = [];
    for (let i = countSortArr.length - 1, j = 0; i >= 0 && j < k; --i) {
        while (countSortArr[i].length) {
            resArr.push(countSortArr[i].pop());
            ++j;
        }
    }

    return resArr;
};