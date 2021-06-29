/**
 * @Description
 * AcWing-843. n-皇后问题
 * 题目链接：https://www.acwing.com/problem/content/845/
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
    // 共一行，包含一个整数 n。
    let n = +lines[0].trim();
    // 输出格式
    // 每个解决方案占 n 行，每行输出一个长度为 n 的字符串，用来表示完整的棋盘状态。
    // 其中 . 表示某一个位置的方格状态为空，Q 表示某一个位置的方格上摆着皇后。
    // 每个方案输出完成后，输出一个空行。
    // 注意：行末不能有多余空格。
    // 输出方案的顺序任意，只要不重复且没有遗漏即可。
    nQueens(n);
});

/**
 * @param n
 */
var nQueens = n =>{
    const col = new Array(n).fill(false),
        mdg = new Array(n).fill(false), // 主对角线 , y = -x + b -> b = x + y
        adg = new Array(n).fill(false), // 副对角线 , y = x + b -> b = y - x -> b1 = y - x + n
        grid = [];

    for (let i = 0; i < n; ++i) {
        grid.push(new Array(n).fill("."));
    }

    const printRes = (g) => {
        for (const line of g) {
            console.log(line.join(""));
        }
        console.log("");
    };

    const dfs = function dfs(cur) {
        if (cur === n) {
            printRes(grid);
            return;
        }

        for (let i = 0; i < n; ++i) {
            if (!col[i] && !mdg[cur + i] && !adg[i - cur + n]) {
                grid[cur][i] = "Q";
                col[i] = mdg[cur + i] = adg[i - cur + n] = true;
                dfs(cur + 1);
                col[i] = mdg[cur + i] = adg[i - cur + n] = false;
                grid[cur][i] = ".";
            }
        }
    };

    dfs(0);
};
