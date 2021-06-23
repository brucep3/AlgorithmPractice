/**
 * lc-392. Is Subsequence
 * 解题思路：双指针（两个序列）
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sp = 0;
    for (const ch of t) {
        if (ch === s.charAt(sp)) sp++;
    }
    return sp === s.length;
};