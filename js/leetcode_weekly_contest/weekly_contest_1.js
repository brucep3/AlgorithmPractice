/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let arr = s.split("").map( (val) => val.charCodeAt(0) - "a".charCodeAt(0) + 1).join("");

    for (let i = 0; i < k; i++) {
        arr = ("" + arr).split("").map(val => +val);
        arr = arr.reduce((acc, val) => acc + val, 0);
    }

    return arr;
};

getLucky("leetcode", 2);