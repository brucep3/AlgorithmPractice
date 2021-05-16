/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    // strs.length >= 2
    for(let i = 0; ; ++i) {
        let curBench = strs[0].charAt(i);
        for(let j = 0; j < strs.length; ++j) {
            let curChar = strs[j].charAt(i);
            // 当前字符串已经到末尾
            if(curChar === "") {
                return strs[j];
            }
            if(curChar !== curBench) {
                return strs[j].slice(0, i);
            }
        }
    }
    return strs[0];
};