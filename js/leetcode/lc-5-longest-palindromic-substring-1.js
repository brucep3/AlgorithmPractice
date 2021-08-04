/**
 * lc-5. Longest Palindromic Substring
 * Solution: DP
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(n ^ 2)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const N = s.length;
    const dp = new Array(N).fill(null).map(() => new Array(N).fill(true));

    let max = 1, res = s[0];
    for (let b = 1, len = dp.length - 1; b < dp.length; ++b, len--) {
        // y = x + b
        for (let x = 0; x < len; ++x) {
            let y = x + b;
            if (s.charAt(x) === s.charAt(y)) {
                if (y - x === 1) dp[x][y] = true;
                else dp[x][y] = dp[x + 1][y - 1];
                if (dp[x][y] && y - x + 1 > max) res = s.slice(x, y + 1), max = y - x + 1;
            } else {
                dp[x][y] = false;
            }
        }
    }

    return res;
};
