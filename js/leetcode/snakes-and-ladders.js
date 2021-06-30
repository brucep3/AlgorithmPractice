/**
 * lc-909. Snakes and Ladders (909. 蛇梯棋)
 * 解题思路 : BFS
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    let n = board.length;

    /**
     * 通过编号 u 求下标 [x, y]
     * x = n - (u / n) , 除法向上取整
     * y 从左到右（u / n 为奇数） , y = (u - 1) % n
     * y 从右到左（u / n 为偶数） , y = n - 1 - (u - 1) % n
     * @param u
     * @returns {[number, number]}
     */
    const getCoord = (u) => {
        let q = Math.ceil(u / n),
            x = n - q,
            y;
        if (q % 2 === 1) y = (u - 1) % n;
        else if (q % 2 === 0) y = n - 1 - (u - 1) % n;

        return [x, y];
    };

    const minSteps = new Array(n * n + 1).fill(-1), // 到编号 i 的最少移动次数为 minSteps[i]
        dxs = [1, 2, 3, 4, 5, 6], // 移动距离
        queue = [];

    queue.push(1);
    minSteps[1] = 0;

    while (queue.length) {
        let len = queue.length;

        for (let i = 0; i < len; ++i) {
            let cur = queue.shift();
            for (const dx of dxs) {
                let next = cur + dx;
                if (next > n * n) break;

                let [nx, ny] = getCoord(next);
                // 当前不是梯子和蛇
                if (board[nx][ny] === -1 && minSteps[next] === -1) {
                    minSteps[next] = minSteps[cur] + 1;
                    queue.push(next);
                    continue;
                }
                // 当前是梯子和蛇 && (next 没有访问过 || next 的 next 没有访问过)
                if (board[nx][ny] !== -1) {
                    if (minSteps[next] === -1) minSteps[next] = minSteps[cur] + 1;
                    let nextJump = board[nx][ny];
                    if (minSteps[nextJump] === -1) {
                        minSteps[nextJump] = minSteps[cur] + 1;
                        queue.push(nextJump);
                    }
                }
            }
        }
    }

    return minSteps[n * n];
};
