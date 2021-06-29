/**
 * lc-168. Excel Sheet Column Title (168. Excel表列名称)
 * 解题思路：每个位置取值为 [1, 26], 意味着第 1 个 26 是不进位的
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    /**
     * @param num 取值为 [1, 26]
     * @returns {string}
     */
    const getChar = (num) => {
        return String.fromCharCode(64 + num);
    };

    // 结果倒排
    let resArr = [];
    for (let cur; columnNumber > 0; columnNumber = Math.floor((columnNumber - cur) / 26)) {
        cur = columnNumber % 26 || 26;
        resArr.push(getChar(cur));
    }

    return resArr.reverse().join("");
};