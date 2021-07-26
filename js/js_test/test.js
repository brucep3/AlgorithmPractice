/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function (target, arr) {
    var longestCommonSubsequence = function (text1, text2) {
        // text1. length 行， text2.length 列
        const dp = [];
        for (let i = 0; i <= text1.length; ++i) {
            dp.push(new Array(text2.length + 1).fill(0));
        }

        // dp[i][j] = Max{ dp[i-1][j], dp[i][j-1], d[i-1][j-1] + 1 }
        for (let i = 1; i < dp.length; ++i) {
            // 比较 text1[i-1], text2[j-1]
            for (let j = 1; j < dp[i].length; ++j) {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    text1[i - 1] === text2[j - 1] ? dp[i - 1][j - 1] + 1 : dp[i - 1][j - 1]
                );
            }
        }

        return dp[text1.length][text2.length];
    };

    const m = new Map();
    target.forEach((val, idx) => {
        m.set(val, idx);
    });

    const newArr = arr.filter(val => m.has(val));

    return target.length - longestCommonSubsequence(target, newArr);
};

minOperations(
    [5, 1, 3],
    [9, 4, 2, 3, 4])