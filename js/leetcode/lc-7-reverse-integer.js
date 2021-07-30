/**
 * lc-7. Reverse Integer
 * Solution: Simulation
 * Time Complexity: O(logx)
 * Space Complexity: O(1)
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = 0,
        sign = Math.sign(x);

    x = Math.abs(x);
    for (const MAX = Math.pow(2, 31) - 1, MIN = -Math.pow(2, 31);
         x; x = ~~(x / 10)) {
        res = res * 10 + x % 10;
        if (sign * res > MAX || sign * res < MIN) return 0;
    }

    return sign * res;
};