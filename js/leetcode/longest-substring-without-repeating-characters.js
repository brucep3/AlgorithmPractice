/**
 * lc-3. Longest Substring Without Repeating Characters
 * 双指针 + 重复判断
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const val2Idx = new Map();
    let max = 0;

    // j 为快指针， i 为慢指针
    for (let i = 0, j = 0; j < s.length; j++) {
        while (j < s.length
        && (val2Idx.has(s.charAt(j)) ? val2Idx.get(s.charAt(j)) : -1) < i) {
            val2Idx.set(s.charAt(j), j);
            j++;
        }
        // 到达末尾 || 有重复
        max = Math.max(j - i, max);
        // 有重复：重新设立无重复子串的起点
        if (j < s.length) {
            i = val2Idx.get(s.charAt(j)) + 1;
            val2Idx.set(s.charAt(j), j);
        }
    }

    return max;
};