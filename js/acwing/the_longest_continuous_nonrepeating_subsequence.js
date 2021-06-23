/**
 * @Description
 * AcWing-799. 最长连续不重复子序列
 * 题目链接：https://www.acwing.com/problem/content/801/
 * @Author PAN Bruce
 * @Date 2021/6/23
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
    // 第二行包含 n 个整数（均在 0 ∼ 10^5 范围内），表示整数序列。
    let n = +lines[0].trim();
    let nums = lines[1].trim().split(" ").filter(s => s !== "").map(val => +val);
    // 输出格式
    // 共一行，包含一个整数，表示最长的不包含重复的数的连续区间的长度。
    console.log(maxLenOfNonRepeatSubseq(nums));
});

var maxLenOfNonRepeatSubseq = function (nums) {

};