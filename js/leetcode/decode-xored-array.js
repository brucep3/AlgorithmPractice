/**
 * @解题思路
 * if a ^ b = c
 * then b = a ^ c and a = b ^ c
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let res = [first];
    for (let i = 0; i < encoded.length; i++) {
        res.push(res[i] ^ encoded[i]);
    }
    return res;
};

// decode([1, 2, 3], 1);
