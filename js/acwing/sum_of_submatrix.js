/**
 * @Description
 * AcWing-796. 子矩阵的和
 * 题目链接：https://www.acwing.com/problem/content/798/
 * @Author PAN Bruce
 * @Date 2021/6/18
 */

var fs = require('fs');
var buf = '';

process.stdin.on("readable", function () {
    var chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    const lines = buf.split("\n");
    // 第一行包含三个整数 n，m，q
    let tokens = lines[0].split(" ").filter(s => s !== "").map(val => +val);
    const n = tokens[0],
        m = tokens[1],
        q = tokens[2];

    // 接下来 [1, n] 行，每行包含 m 个整数，表示整数矩阵。
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(lines[1 + i].split(" ").filter(s => s !== "").map(val => +val));
    }

    // 计算前缀矩阵
    const sum = [];
    for (let i = 0; i <= n; i++) {
        sum.push(new Array(m + 1).fill(0));
    }

    for (let i = 0; i < n; i++) {
        // sum[i + 1][j + 1] 对应 arr[0, 0] 到 arr[i][j]
        for (let j = 0; j < m; j++) {
            sum[i + 1][j + 1] = sum[i + 1][j] + sum[i][j + 1] - sum[i][j] + arr[i][j];
        }
    }

    // 接下来 q 行，每行包含四个整数 x1,y1,x2,y2，表示一组询问。
    // [n + 1, n + q]
    for (let i = 0; i < q; i++) {
        tokens = lines[n + i + 1].split(" ").filter(s => s !== "").map(val => +val);
        let [x1, y1, x2, y2] = tokens;
        // [x, y] -> 对应下标为 [x - 1, y - 1] -> sum[l][r]
        console.log(sum[x2][y2] - sum[x1 - 1][y2] - sum[x2][y1 - 1] + sum[x1 - 1][y1 - 1]);
    }
});

