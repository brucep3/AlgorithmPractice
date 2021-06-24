/**
 * 剑指Offer-48. 最长不含重复字符的子字符串
 * 解题思路：双指针（1个序列快慢指针）+ 哈希表判重
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    const idxMap = new Map();

    // (slow, fast]
    for (let slow = -1, fast = 0; fast < s.length; fast++) {
        // 重复：重新设置 slow
        if (idxMap.has(s.charAt(fast)) && idxMap.get(s.charAt(fast)) > slow) {
            slow = idxMap.get(s.charAt(fast));
        } else {
            // 没重复：更新 max
            max = Math.max(max, fast - slow);
        }

        idxMap.set(s.charAt(fast), fast);
    }

    return max;
};