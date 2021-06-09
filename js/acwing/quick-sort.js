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

// noinspection DuplicatedCode
/**
 * 快排
 * 思想：取一个基准值 x， 调整区间，使得左半边的值全部 <= x ，右半边的值全部 >= x
 * 具体做法：双指针
 * @param {Array} q
 * @param {Number} l
 * @param {Number} r
 */
function quickSort(q, l, r) {
    // 递归退出条件，不要写成 l === r, 可能会出现 l > r 的情况
    if (l >= r) return;

    const swap = (q, i, j) => {
        let temp = q[i];
        q[i] = q[j];
        q[j] = temp;
    };

    let x = q[l + (r - l >> 1)],
        i = l - 1,
        j = r + 1;

    while (i < j) {
        do i++; while (q[i] < x);
        do j--; while (q[j] > x);
        if (i < j) swap(q, i, j);
    }

    quickSort(q, l, j);
    quickSort(q, j + 1, r);
}

process.stdin.on('end', function () {
    let lines = buf.split('\n');
    // n: 数组长度
    let n = +lines[0];
    // 乱序数组
    let arr = lines[1].split(" ").filter(s => s !== "").map(x => +x);
    quickSort(arr, 0, n - 1);
    console.log(arr.join(" "));
});
