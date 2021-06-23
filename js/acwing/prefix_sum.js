/**
 * @Description
 * AcWing-795. 前缀和
 * 题目链接：https://www.acwing.com/problem/content/797/
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
    //    第一行包含两个整数 n 和 m。
    let tokens = lines[0].split(" ").filter(s => s !== "").map(val => +val);
    const n = tokens[0],
        m = tokens[1];
    //    第二行包含 n 个整数，表示整数数列。
    const arr = lines[1].split(" ").filter(s => s !== "").map(val => +val);
    const sum = [0];
    for (let i = 0; i < arr.length; i++) {
        sum.push(sum[sum.length - 1] + arr[i]);
    }
    //    接下来 m 行，每行包含两个整数 l 和 r，表示一个询问的区间范围。
    for (let i = 0; i < m; i++) {
        tokens = lines[2 + i].split(" ").filter(s => s !== "").map(val => +val);
        let l = tokens[0],
            r = tokens[1];
        console.log(sum[r] - sum[l - 1]);
    }
});

