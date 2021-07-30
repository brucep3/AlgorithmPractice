/**
 * TODO: 优化快慢指针解和数学解
 * lc-202. Happy Number
 * Solution: Hash Table
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    const handleN = (n) => {
        let res = 0;
        for (; n; n = ~~(n / 10)) {
            let cur = n % 10;
            res += cur * cur;
        }

        return res;
    };

    const m = new Set();
    for (; !m.has(n);) {
        m.add(n);
        n = handleN(n);
        if (n === 1) return true;
    }

    return false;
};