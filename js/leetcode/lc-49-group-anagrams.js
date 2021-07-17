/**
 * 49. Group Anagrams
 * Solution: Hash Table + Sort
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const rearrange = (str) => str.split("").sort().join("");

    let map = new Map();
    strs.forEach((val) => {
        let reStr = rearrange(val);
        let arr = map.get(reStr) || [];
        arr.push(val);
        map.set(reStr, arr);
    });

    return Array.from(map.values());
};