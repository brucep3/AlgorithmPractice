/**
 * TODO：法(1) 按位 mod；法(2) DFA；
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let m = new Map();
    for (let n of nums) {
        if (m.has(n)) {
            m.set(n, m.get(n) + 1);
        } else {
            m.set(n, 1);
        }
    }
    for (let [k, v] of m) {
        if (v === 1) return k;
    }
    return -1;
};