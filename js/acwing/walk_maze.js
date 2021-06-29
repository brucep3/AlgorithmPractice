/**
 * @Description
 * AcWing-844. 走迷宫
 * 题目链接：https://www.acwing.com/problem/content/846/
 * @Author PAN Bruce
 * @Date 2021/6/28
 */

var fs = require('fs');
var buf = '';

process.stdin.on("readable", function () {
    var chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    const lines = buf.split("\n");
    // 输入格式
    // 第一行包含两个整数 n 和 m。
    let tokens = lines[0].split(" ").filter(s => s !== "").map(val => +val);
    let [n, m] = tokens;
    const maze = [];
    // 接下来 n 行，每行包含 m 个整数（0 或 1），表示完整的二维数组迷宫。
    for (let i = 0; i < n; ++i) {
        maze.push(lines[1 + i].split(" ").filter(s => s !== "").map(val => +val));
    }
    // 输出格式
    // 输出一个整数，表示从左上角移动至右下角的最少移动次数。
    console.log(walkMaze(maze));
});

/**
 * @param maze
 */
var walkMaze = (maze) => {
    const queue = [[0, 0]],
        dis = [], // 距离起点的距离，一开始为 -1
        moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let i = 0; i < maze.length; ++i) {
        dis.push(new Array(maze[i].length).fill(-1));
    }

    dis[0][0] = 0;
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; ++i) {
            let [curX, curY] = queue.shift();
            for (const [moveX, moveY] of moves) {
                let [nextX, nextY] = [curX + moveX, curY + moveY];
                if (nextX >= 0 && nextX < maze.length && nextY >= 0 && nextY < maze[nextX].length
                    && dis[nextX][nextY] === -1 && maze[nextX][nextY] === 0) {
                    dis[nextX][nextY] = dis[curX][curY] + 1;
                    queue.push([nextX, nextY]);
                }
            }
        }
    }

    return dis[maze.length - 1][maze[0].length - 1];
};
