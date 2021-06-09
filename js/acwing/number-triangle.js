// 898. 数字三角形

// TODO: TODO
var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

function maxPathSum(nums) {
    const dp = [];

}

process.stdin.on('end', function () {
    let lines = buf.split('\n');
    // n: 数组长度
    let n = +lines[0];
    // 乱序数组
    const nums = [];
    for (let i = 0; i < n; ++i) {
        const tokens = lines[i + 1].split(" ")
            .filter(s => s !== "")
            .map(val => +val);
        nums.push(tokens);
    }
    const ans = maxPathSum(nums);
    console.log(ans);
});
