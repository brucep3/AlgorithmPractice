/**
 * lc-451. Sort Characters By Frequency (451. 根据字符出现频率排序)
 * 解题思路：哈希表 + 排序
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const chCountMap = new Map();
    for (const ch of s) {
        chCountMap.set(ch, (chCountMap.get(ch) || 0) + 1);
    }

    const chCountArr = Array.from(chCountMap.entries()).sort((a, b) => b[1] - a[1]);

    const resArr = [];
    for (const [ch, count] of chCountArr) {
        for (let i = 0; i < count; ++i) resArr.push(ch);
    }

    return resArr.join("");
};