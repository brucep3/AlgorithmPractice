/**
 * lc-36. Valid Sudoku
 * Solution: Simulation
 * Time complexity: O(1)
 * Space complexity: O(1)
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const col = new Array(9).fill(0).map( () => new Array(10).fill(false) ),
        ss = new Array(3).fill(0).map( () =>
            new Array(3).fill(0).map( () =>
                new Array(10).fill(false)
            )
        );

    const getSsIdx = (x, y) => {
        return [ Math.floor(x / 3), Math.floor( y / 3) ];
    };

    for (let i = 0; i < board.length; ++i) {
        const row = new Array(10).fill(false);
        for (let j = 0; j < board[i].length; ++j) {
            const num = +board[i][j];
            if (num) {
                const [ssX, ssY] = getSsIdx(i, j);
                if (row[num] || col[j][num] || ss[ssX][ssY][num]) return false;
                row[num] = col[j][num] = ss[ssX][ssY][num] = true;
            }
        }
    }

    return true;
};