/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let sqrtC = Math.ceil(Math.sqrt(c));
    for(let i = 0; i <= sqrtC; ++i) {
        if(Number.isInteger(Math.sqrt(c- i ** 2))) {
            return true;
        }
    }
    return false;
};