/**
 * @Description
 * AcWing-842. 排列数字
 * 题目链接：https://www.acwing.com/problem/content/844/
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
    // 按字典序输出所有排列方案，每个方案占一行。
    numberPermuation(n);
});

var numberPermuation = n => {
    const st = new Array(n + 1).fill(false);

    const printRes = (arr) => {
        console.log(arr.join(" "));
    };

    const dfs = function dfs(curRes) {
        if (curRes.length === n) {
            printRes(curRes);
            return;
        }

        for (let i = 1; i <= n; ++i) {
            if (!st[i]) {
                curRes.push(i);
                st[i] = true;
                dfs(curRes);
                // 恢复现场
                st[i] = false;
                curRes.pop();
            }
        }
    };

    dfs([]);
};