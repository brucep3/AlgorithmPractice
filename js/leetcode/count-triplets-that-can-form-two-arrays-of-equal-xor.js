/**
 * 读题：i < j <= k -> a 和 b 可以是数组中的一个元素
 * 解题思路：解为 (i, j, k) 取值个数, i < j <= k
 * 要点1：先确定起点 i ，再确定终点 k ，根据 i 和 k 的值，确定 j 取值为 k - i
 * 要点2：a === b -> [i : j-1] ^ [j : k] === 0
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let result = 0;
    for(let i = 0; i < arr.length - 1; ++i) {
        let temp = arr[i];
        for(let j = i + 1; j < arr.length; ++j) {
            temp ^= arr[j];
            if(temp === 0) result += (j - i);
        }
    }
    return result;
};