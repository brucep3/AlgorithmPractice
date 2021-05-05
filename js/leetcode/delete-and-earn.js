/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let arr = new Array(10000+1).fill(0);
    for(n of nums) {
        arr[n]++;
    }
    let sum0 = 0,
        sum1 = arr[1] * 1;
    for(let i = 2; i < arr.length; ++i) {
        let temp = Math.max(sum0 + arr[i] * i, sum1);
        sum0 = sum1;
        sum1 = temp;
    }
    return sum1;
};