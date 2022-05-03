/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * 427. Construct Quad Tree (427. 建立四叉树)
 * Solution: Recursion + Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
    const isSameVal = (grid, i, j, len) => {
        for (let ii = 0; ii < len; ++ii) {
            for (let jj = 0; jj < len; ++jj) {
                if (grid[i][j] !== grid[i + ii][j + jj]) return false;
            }
        }

        return true;
    };

    const getNode = (grid, i, j, len) => {
        if (len === 1) return new Node(grid[i][j], true, null, null, null, null);
        if (isSameVal(grid, i, j, len)) {
            return new Node(grid[i][j], true, null, null, null, null);
        }
        return new Node(grid[i][j], false
            , getNode(grid, i, j, len / 2)
            , getNode(grid, i, j + len / 2, len / 2)
            , getNode(grid, i + len / 2, j, len / 2)
            , getNode(grid, i + len / 2, j + len / 2, len / 2)
        );
    };

    return getNode(grid, 0, 0, grid.length);
};