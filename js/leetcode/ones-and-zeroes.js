/**
 * lc-474. Ones and Zeroes
 * 读题
 * 解题思路：01背包问题
 * 状态表示：dp[i][j]
 * 状态集合：dp[i][j][k] 分别表示 只从 前 i 个字符串组成的集合里选，最多 j 个 0 和 k 个1 的子集 的集合
 * 属性： count
 * 状态计算
 * 集合划分：dp[i][j][k] -> 600 * 100 * 100
 * 状态转移：对于当前 i，要么继承 i - 1，要么考虑加入当前元素
 * @param {string[]} strs 元素个数为 [1, 600]，字符串长度为 [1, 100]
 * @param {number} m [1, 100]
 * @param {number} n [1, 100]
 * @return {number} 集合的最大数量
 */
var findMaxForm = function (strs, m, n) {

    const countArr = strs.map(
        val => {
            let [countZero, countOne] = [0, 0]
            for (const ch of val) {
                if (ch === "0") {
                    countZero++;
                } else {
                    countOne++;
                }
            }
            return [countZero, countOne];
        }
    );

    const firstMat = [];
    for (let i = 0; i <= m; i++) {
        firstMat.push(new Array(n + 1).fill(0));
    }

    let preMat = firstMat;
    for (let i = 0, curMat = []; i < strs.length; i++, preMat = curMat, curMat = []) {
        for (let j = 0, curLine = []; j <= m; j++, curMat.push(curLine), curLine = []) {
            for (let k = 0; k <= n; k++) {
                // Add cur
                let [remainZero, remainOne] = [
                    j - countArr[i][0],
                    k - countArr[i][1]
                ];
                if (remainZero >= 0 && remainOne >= 0) {
                    curLine.push(Math.max(preMat[j][k], preMat[remainZero][remainOne] + 1));
                } else {
                    curLine.push(preMat[j][k]);
                }
            }
        }
    }

    return preMat[m][n];
};