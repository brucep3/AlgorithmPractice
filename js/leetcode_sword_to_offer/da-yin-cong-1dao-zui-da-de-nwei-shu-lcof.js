/**
 * @param {number} n 正整数， n >= 1
 * @return {number[]}
 */
var printNumbers = function (n) {
    let resArr = [];
    for (let i = 1; i <= 9; ++i) {
        resArr.push(i);
    }

    for (let i = 1, start = ""; i < n; ++i, start += "9") {
        let end = resArr.length;
        for (let j = Number(start); j < end; ++j) {
            for (let k = 0; k <= 9; ++k) {
                resArr.push("" + resArr[j] + k);
            }
        }
    }

    return resArr;
};