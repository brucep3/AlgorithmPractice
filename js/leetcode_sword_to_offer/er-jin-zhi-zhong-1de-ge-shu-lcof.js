/**
 * n & (n-1) 能去掉n最末尾的1个一
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n) {
        n &= n-1;
        count++;
    }
    return count;
};