/**
 * 解题思路：异或 + 计算二进制表示 1 的个数
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let d = (x ^ y), c = 0;
    while (d !== 0) {
        d &= d - 1;
        c++;
    }
    return c;
};