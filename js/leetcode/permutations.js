/**
 * lc-46. Permutations
 * 全排列为 A(n, n) = n * (n - 1) * (n - 2) * .. * 2 * 1
 * 解题思路：模拟全排列，将 n 个 数字 一个一个插入当前结果
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let resArr = [[]];

    for (const num of nums) {
        let len = resArr.length;
        for (let i = 0; i < len; i++) {
            let res = resArr.shift();
            for (let j = 0; j <= res.length; j++) {
                let cur = res.slice(0, j);
                cur.push(num);
                cur = cur.concat(res.slice(j, res.length));
                resArr.push(cur);
            }
        }
    }

    return resArr;
};