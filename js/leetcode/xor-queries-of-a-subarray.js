/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    if(arr.length < 1) return [];
    let xorRes = [0];
    // xor[i] = arr[0] ^ ... ^ arr[i-1];
    // xor[j] = arr[0] ^ ... ^ arr[j-1]
    // arr[i] ^ ... arr[j] = xor[i] ^ xor[j+1];
    for(let i = 1; i <= arr.length; ++i) {
        xorRes.push(xorRes[i-1] ^ arr[i-1]);
    }
    let res = [];
    for(let query of queries) {
        res.push(xorRes[query[0]] ^ xorRes[query[1]+1]);
    }
    return res;
};