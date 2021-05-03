/**
 * js的Number不符合题目限制，不适合
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = +("" + Math.abs(x)).split("").reverse().join("") * Math.sign(x);
    return res < -1 * 2 ** 31 || res > 2 ** 31 - 1 ? 0 : res;
};