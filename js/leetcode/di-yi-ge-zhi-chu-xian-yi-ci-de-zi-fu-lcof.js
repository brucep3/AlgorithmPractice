/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let countMap = new Map();
    for (const c of s) {
        countMap.set(c, countMap.get(c) + 1 || 1);
    }
    for (const e of countMap) {
        if (e[1] === 1) {
            return e[0];
        }
    }
    return " ";
};
