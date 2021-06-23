/**
 * lc-125. Valid Palindrome
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const tokens = [];
    for (let ch of s.toLocaleLowerCase()) {
        if ((ch >= "a" && ch <= "z") || (ch !== " " && !isNaN(ch))) tokens.push(ch);
    }

    for (let l = 0, r = tokens.length - 1; l < r;) {
        if (tokens[l] === tokens[r]) l++, r--;
        else {
            return false;
        }
    }

    return true;
};
