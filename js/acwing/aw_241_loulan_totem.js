/**
 * @Description
 * AcWing-241. 楼兰图腾
 * 题目链接：https://www.acwing.com/problem/content/243/
 * @Author PAN Bruce
 * @Date 2021/7/19
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
    // 第一行一个数 n。
    let n = +lines[0].trim();
    // 第二行是 n 个数，分别代表 y1，y2,…,yn。
    const arr = lines[1].trim().split(" ").filter(s => s !== "").map(val => +val);
    // 输出格式
    // 两个数，中间用空格隔开，依次为 V 的个数和 ∧ 的个数。
    console.log(loulanTotem(arr).join(" "));
});

// noinspection DuplicatedCode
class TreeArr {

    /**
     * 树状数组
     * [1, n]
     * @param n
     */
    constructor(n) {
        this.tr = new Array(n + 1).fill(0);
    }

    /**
     * 修改原数组元素
     * arr[x] += c
     * @param x
     * @param c
     */
    add(x, c) {
        for (let i = x; i; i += this.constructor.lowbit(i)) this.tr[i] += c;
    }

    /**
     * 查询前缀和
     * sum[0 : x] or sum[1 : x + 1]
     * @param x
     */
    sum(x) {
        let res = 0;
        for (let i = x; i; i -= this.constructor.lowbit(i)) {
            res += this.tr[i];
        }
        return res;
    }

    /**
     * sum[l, r]
     * @param l
     * @param r
     * @returns {number}
     */
    intervalSum(l, r) {
        return this.sum(r) - this.sum(l - 1);
    }

    static lowbit(x) {
        return x & -x;
    }

}

var loulanTotem = (arr) => {
    const n = arr.length;
    let tr = new TreeArr(n);

    arr.unshift(1);
    const greater = new Array(n + 1).fill(0),
        lower = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; ++i) {
        let y = arr[i];
        greater[i] = tr.intervalSum(y + 1, n);
        lower[i] = tr.sum(y - 1);
        tr.add(y, 1);
    }

    tr = new TreeArr(n);
    let res1 = 0, // V
        res2 = 0; // ^
    for (let i = n; i >= 1; --i) {
        let y = arr[i];
        res1 += greater[i] * tr.intervalSum(y + 1, n);
        res2 += lower[i] * tr.sum(y - 1);
        tr.add(y, 1);
    }

    return [res1, res2];
};