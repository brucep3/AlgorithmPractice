/**
 * 前缀和 和 差分
 */


// 差分数组
const diff = [];
const insert = (l, r, c) => {
    diff[l] += c;
    diff[r + 1] -= c;
};




