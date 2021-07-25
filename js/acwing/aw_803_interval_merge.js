/**
 * @Description
 * AcWing-803. 区间合并
 * 题目链接: https://www.acwing.com/problem/content/805/
 * @Author PAN Bruce
 * @Date 2021/7/25
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
    // 第一行包含整数 n。
    let n = +lines[0].trim();
    // 接下来 n 行，每行包含两个整数 l 和 r。
    const segArr = [];
    for (let i = 1; i <= n; ++i) {
        segArr.push(lines[i].trim().split(" ").filter(s => s !== "").map(val => +val));
    }
    // 输出格式
    const res = mergeInterval(segArr);
    console.log(res.length);
});

/**
 * 合并区间
 * @param segArr
 */
const mergeInterval = (segArr) => {
    segArr.sort((a, b) => a[0] - b[0]);

    const resArr = [];

    let st = Number.MIN_SAFE_INTEGER,
        ed = Number.MIN_SAFE_INTEGER;

    for (const [l, r] of segArr) {
        if (ed < l) {
            if (st !== Number.MIN_SAFE_INTEGER) resArr.push([st, ed]);
            st = l, ed = r;
        } else ed = Math.max(ed, r);
    }

    if (st !== Number.MIN_SAFE_INTEGER) resArr.push([st, ed]);

    return resArr;
};