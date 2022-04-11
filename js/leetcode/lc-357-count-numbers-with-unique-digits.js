/**
 * 357. Count Numbers with Unique Digits (357. 统计各位数字都不同的数字个数)
 * Read
 * Solution: DP
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) return 1;
    if (n === 1) return 10;

    let last = [1, 9],
        count = last[0] + last[1];
    for (let i = 2; i <= n; ++i) {
        // [有 0（出现在第二位到最后一位）， 没有 0]
        last = [last[1] * (i - 1), last[1] * (10 - i)];
        count += last[0] + last[1];
    }

    return count;
};