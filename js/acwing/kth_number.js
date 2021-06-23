/**
 * @Description AcWing-786. 第k个数
 * 原题链接：https://www.acwing.com/problem/content/788/
 * @Author PAN Bruce
 * @Date 2021/6/17
 */

var fs = require('fs');
var buf = '';

process.stdin.on("readable", function () {
    var chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    const lines = buf.split("\n");
    // 第一行包含两个整数 n 和 k。
    let tokens = lines[0].split(" ");
    const n = +tokens[0],
        k = +tokens[1];
    // 第二行包含 n 个整数（所有整数均在 1∼109 范围内），表示整数数列。
    const arr = lines[1].split(" ").filter(s => s !== "").map(x => +x);
    quickSort(arr, 0, arr.length - 1);
    console.log(arr[k - 1]);
});

var quickSort = function (q, l, r) {
    if (l >= r) return;
    let x = q[l + r >> 1],
        i = l - 1,
        j = r + 1;

    while (i < j) {
        while (q[++i] < x) ;
        while (q[--j] > x) ;
        if (i < j) {
            let temp = q[i];
            q[i] = q[j];
            q[j] = temp;
        }
    }

    // 考虑两个元素的情况 [1, 2] -> i = 0, j = 0
    // [2, 1] ->  i = 0, j = 1 -> [1, 2] -> i = 0, j = 0
    quickSort(q, l, j);
    quickSort(q, j + 1, r);
};