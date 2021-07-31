/**
 * lc-1337. The K Weakest Rows in a Matrix
 * Solution: Simulation
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(n)
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    return new Array(mat.length).fill(null).map(
        (val, idx) => {
            let l = 0, r = mat[idx].length - 1;
            while (l < r) {
                let m = l + r + 1 >> 1;
                if (mat[idx][m] === 1) l = m;
                else r = m - 1;
            }
            return [idx, mat[idx][l] === 1 ? l + 1 : 0];
        }
    ).sort(
        (a, b) => {
            if (a[1] < b[1]) return a[1] - b[1];
            return a[0] - b[0];
        }
    ).splice(0, k).map(
        val => val[0]
    );

};