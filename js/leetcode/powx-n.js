/**
 * 读题：计算结果为 [-1e4, 1e4]
 * @param {number} x 取值 -100.0 < x < 100.0
 * @param {number} n 取值 2 ^ 31 - 1
 * @return {number}
 */
var myPow = function (x, n) {
    // powMap.val = x ^ ( powMap.key - 1)
    let powMap = new Map().set(0, x),
        sign = Math.sign(n),
        binN = Math.abs(n).toString(2).split("").reverse().join("");

    for (let i = 1, powRes = x; i < binN.length + 1; ++i) {
        powRes = powRes * powRes;
        powMap.set(i, powRes);
    }

    let res = 1;
    for (let i = 0; i < binN.length; ++i) {
        if (binN.charAt(i) === "1") {
            res = res * powMap.get(i);
        }
    }

    if (sign > 0) return res;
    else return 1 / res;
};

// myPow(2.00000, 10);