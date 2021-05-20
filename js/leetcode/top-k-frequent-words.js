/**
 * 解题思路：
 * 法1：哈希表 + 排序
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    if(k === 0 || words.length === 0) return [];
    // k >= 1 && words.length >= 1
    let m = new Map();
    for(const word of words) {
        m.set(word, (m.get(word) || 0) + 1);
    }

    let arr = Array.from(m.entries());
    arr.sort((a, b) => {
        return a[1] === b[1] ? a[0].localeCompare(b[0]): b[1] - a[1];
    });

    return arr.slice(0, k).map(
        val => val[0]
    );
};