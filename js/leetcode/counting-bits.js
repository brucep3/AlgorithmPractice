/**
 * [0 : n] -> n + 1个
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if (num === 0) return [0];

    // num >= 1
    const resArr = [0, 1];
    let c = 2;

    for ( ; c <= num; ) {
        let len = resArr.length;
        for (let j = 0; j < len && c <= num; ++j, ++c) {
            resArr.push(resArr[j] + 1);
        }
    }

    return resArr;
};