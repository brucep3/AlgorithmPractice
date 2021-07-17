/**
 * 面试题 10.02. 变位词组
 * Read the Problem: low-case letter
 * Solution: Hash Table + Counting Sort
 * Time complexity: O(n(k+Σ))
 * Space complexity: O(n(k+Σ))
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const MIN = "a".charCodeAt(0);

    const countSort = (str) => {
        const arr = new Array(26).fill(0);

        for (const ch of str) {
            arr[ch.charCodeAt(0) - MIN]++;
        }

        return arr.toString();
    };

    const map = new Map();
    strs.forEach(val => {
        let countRes = countSort(val);
        let arr = map.get(countRes) || [];
        arr.push(val);
        map.set(countRes, arr);
    });

    return Array.from(map.values());
};