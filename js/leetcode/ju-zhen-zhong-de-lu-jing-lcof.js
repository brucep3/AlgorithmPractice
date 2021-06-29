/**
 * 剑指 Offer 12. 矩阵中的路径
 * 解题思路：回溯法
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const visitTag = "-";

    const backTrack = function dfs(i, j, wordIdx) {
        if(wordIdx === word.length) return true;

        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) return false;

        if (board[i][j] === visitTag || board[i][j] !== word.charAt(wordIdx)) return false;

        // dfs
        let temp = board[i][j];
        board[i][j] = visitTag;
        let res = dfs(i - 1, j, wordIdx + 1) || dfs(i + 1, j, wordIdx + 1)
            || dfs(i, j - 1, wordIdx + 1) || dfs(i, j + 1, wordIdx + 1);
        board[i][j] = temp;

        return res;
    };

    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
            if (backTrack(i, j, 0)) return true;
        }
    }

    return false;
};