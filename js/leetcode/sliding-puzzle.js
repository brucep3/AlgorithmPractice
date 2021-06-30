/**
 * lc-773. Sliding Puzzle
 * 解题思路：BFS
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
    /**
     * 迷板序列化
     */
    const getBordStr = (board) => {
        return board[0].join("") + board[1].join("");
    };

    /**
     * 迷板的深拷贝
     */
    const getBoardCopy = (board) => {
        return [board[0].slice(), board[1].slice()];
    };

    /**
     * 迷板 0 的位置
     */
    const getZeroCoord = (board) => {
        for (let i = 0; i < board.length; ++i) {
            for (let j = 0; j < board[i].length; ++j) {
                if (board[i][j] === 0) {
                    return [i, j];
                }
            }
        }
    }

    const RESSTR = "123450";

    const minSteps = new Map(), // 映射：迷板状态 -> 到当前迷板状态的最少移动次数
        dxys = [[-1, 0], [1, 0], [0, -1], [0, 1]],
        queue = [];

    // 初始化
    queue.push(getBoardCopy(board));
    minSteps.set(getBordStr(board), 0);

    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; ++i) {
            let cur = queue.shift(),
                curBoardStr = getBordStr(cur);
            if (curBoardStr === RESSTR) return minSteps.get(RESSTR);
            let [x, y] = getZeroCoord(cur);
            for (const [dx, dy] of dxys) {
                let nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx <= 1 && ny >= 0 && ny <= 2) {
                    cur[x][y] = cur[nx][ny];
                    cur[nx][ny] = 0;
                    let boardStr = getBordStr(cur);
                    if (!minSteps.has(boardStr)) {
                        minSteps.set(boardStr, minSteps.get(curBoardStr) + 1);
                        queue.push(getBoardCopy(cur));
                    }
                    // 恢复现场
                    cur[nx][ny] = cur[x][y];
                    cur[x][y] = 0;
                }
            }
        }
    }

    return -1;
};
