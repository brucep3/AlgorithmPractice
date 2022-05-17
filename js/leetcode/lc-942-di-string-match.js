/**
 * Solution: Finding Patterns (Greedy)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    const res = [];
    let [min, max] = [0, s.length];
    for (const c of s) {
        if (c === "I") {
            res.push(min++);
        } else if (c === "D") {
            res.push(max--);
        }
    }
    res.push(min);
    return res;
};