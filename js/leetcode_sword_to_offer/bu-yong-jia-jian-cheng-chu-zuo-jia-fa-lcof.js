/**
 * 剑指Offer-65. 不用加减乘除做加法
 * 解题思路：a + b = (a ^ b) + (a & b) << 1
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
    const calCarry = (x, y) => {
        // 位移运算优先级高于位运算
        return (x & y) << 1;
    };

    const calRemain = (x, y) => {
        return x ^ y;
    };

    let res = a;
    for (let carry = b; carry;) {
        let remain = calRemain(res, carry);
        carry = calCarry(res, carry);
        res = remain;
    }

    return res;
};