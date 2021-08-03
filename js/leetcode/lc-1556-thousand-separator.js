/**
 * lc-1556. Thousand Separator
 * Solution: Simulation
 * Time Complexity: O(logn)
 * Space Complexity: O(logn)
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    if (n === 0) return "0";

    const arr = [];
    for (let t = n; t; t = ~~(t / 10)) {
        arr.push(t % 10);
    }

    const res = [];
    for (let i = 0; i < arr.length; i += 3) {
        res.push(".", arr[i], arr[i + 1], arr[i + 2]);
    }

    return res.slice(1, res.length).reverse().join("");
};