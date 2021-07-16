/**
 * lc-371. Sum of Two Integers (371. 两整数之和)
 * Solution: Bit Operation
 * @param {number} a remain
 * @param {number} b carry
 * @return {number}
 */
var getSum = function(a, b) {
    let remain = a, carry = b;

    for (; carry; ) {
        let remainTemp = remain ^ carry;
        carry = (remain & carry) << 1;
        remain = remainTemp;
    }

    return remain;
};