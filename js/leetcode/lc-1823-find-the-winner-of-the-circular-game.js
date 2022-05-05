/**
 * 1823. Find the Winner of the Circular Game
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number} n
 * @param {number} k : k <= n
 * @return {number}
 */
var findTheWinner = function (n, k) {
    let arr = new Array(n).fill(0).map((_, idx) => idx + 1);

    let curIdx = 0;
    while (arr.length > 1) {
        curIdx = (curIdx + k - 1) % arr.length;
        arr.splice(curIdx, 1);
    }
    return arr[0];
};
