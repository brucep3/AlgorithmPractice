/**
 * 1. A + B
 * https://www.acwing.com/problem/content/description/1/
 * @Description
 * @Author PAN Bruce
 * @Date 2021/5/31
 */

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

// 调用函数
function add(a, b) {
    return a + b;
}

process.stdin.on('end', function () {
    buf.split('\n').forEach(function (line) {
        var tokens = line.split(' ').map(function (x) {
            return parseInt(x);
        });
        if (tokens.length !== 2) return;

        console.log(tokens.reduce(add));
    });
});
