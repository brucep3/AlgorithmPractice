/**
 * 1 <= num <= 3999
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let i2RMap = [
        [1, "I"],
        [4, "IV"],
        [5, "V"],
        [9, "IX"],
        [10, "X"],
        [40, "XL"],
        [50, "L"],
        [90, "XC"],
        [100, "C"],
        [400, "CD"],
        [500, "D"],
        [900, "CM"],
        [1000, "M"]
    ];
    let res = [];
    for (let i = i2RMap.length - 1; i >= 0 && num > 0; --i) {
        let count = Math.floor(num / i2RMap[i][0]);
        for (let j = 0; j < count; ++j) {
            res.push(i2RMap[i][1]);
            num -= i2RMap[i][0];
        }
    }
    return res.join("");
};

// intToRoman(2000);
