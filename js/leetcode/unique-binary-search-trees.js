/**
 * 卡特兰数
 * 1 -> 1, 2 -> 2
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let resArr = [1, 1];
    for (let i = 2; i <= n; ++i) {
        let cur = 0;
        for (let j = 0; j < resArr.length; ++j) {
            cur += resArr[j]*resArr[resArr.length-1-j];
        }
        resArr.push(cur);
    }
    return resArr[resArr.length-1];
};