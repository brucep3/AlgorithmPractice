/**
 * lc-680. Valid Palindrome II
 * 解题思路：双指针
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    if (s.length < 3) return true;

    let skipCount = 0;
    const check = (l, r) => {
        for (; l < r;) {
            if (s.charAt(l) === s.charAt(r)) l++, r--;
            else {
                if (skipCount === 1) return false;
                skipCount++;
                let res1 = check(l + 1, r);
                let res2 = check(l, r - 1);
                return (res1 || res2);
            }
        }
        return true;
    };

    // s.length >= 3
    return check(0, s.length - 1);
};