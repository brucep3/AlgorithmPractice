/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    return Array.from(s1).sort().join("") === Array.from(s2).sort().join("");
};