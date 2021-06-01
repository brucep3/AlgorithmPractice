/**
 * 789. 数的范围
 * https://www.acwing.com/problem/content/description/791/
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

/**
 * Solution
 * @param arr
 * @param q
 * @returns {number[]|*[]}
 */
function solution(arr, q) {

}

process.stdin.on('end', function () {
    let lines = buf.split('\n');
    // n: 数组长度, q: 询问个数
    let tokens = lines[0].split(" ");
    const n = tokens[0], q = tokens[1];
    // n 个整数，表示完整数组
    const arr = lines[1].split(" ").map(
        (val) => parseInt(val)
    );
    // q 行，每行包含一个整数 k ，表示一个询问元素
    let j = 2;
    for (let i = 0; i < q; ++i, ++j) {
        let res = solution(arr, parseInt(lines[j]));
        console.log(res[0] + " " + res[1]);
    }
});
