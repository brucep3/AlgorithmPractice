/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    // n === 4 ^ x === 2 ^ 2x -> 2个0，4个0，6个0
    const c = 0b10101010101010101010101010101010101;
    return n > 0 && (n & n - 1) === 0 && (n & c) !== 0;
};