/**
 * lc-51. N-Queens (51. N 皇后)
 * 解题思路： DFS
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const col = new Array(n).fill(false),
        // 主对角线： y = - x + b -> b = x + y
        mdg = new Array(2 * n).fill(false),
        // 副对角线： y = x + b -> b = y - x -> b1 = y - x + n
        adg = new Array(2 * n).fill(false),
        resArr = [],
        mat = new Array(n).fill(0).map(() => new Array(n).fill("."));

    /**
     * DFS
     * @param curRow [0, n]
     */
    const dfs = function dfs(curRow) {
        if (curRow === n) {
            const res = [];
            for (const vec of mat) res.push(vec.join(""));
            resArr.push(res);
        }

        // curRow < n
        for (let curCol = 0; curCol < n; ++curCol) {
            if (!col[curCol] && !mdg[curRow + curCol] && !adg[curCol - curRow + n]) {
                col[curCol] = mdg[curRow + curCol] = adg[curCol - curRow + n] = true;
                mat[curRow][curCol] = "Q";
                dfs(curRow + 1);
                mat[curRow][curCol] = ".";
                col[curCol] = mdg[curRow + curCol] = adg[curCol - curRow + n] = false;
            }
        }
    };

    dfs(0);

    return resArr;
};