/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * lc-987. Vertical Order Traversal of a Binary Tree
 * Solution: Sort
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(n)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    const nodeArr = [];

    const getNodeArr = function dfs(root, i, j) {
        if (!root) return;

        nodeArr.push([i, j, root.val]);
        dfs(root.left, i + 1, j - 1);
        dfs(root.right, i + 1, j + 1);
    };

    getNodeArr(root, 0, 0);

    nodeArr.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[2] - b[2];
    });

    const resArr = [];
    let lastCol = -1010; // -1000 <= col <= 1000
    for (let i = 0; i < nodeArr.length; ++i) {
        let curCol = nodeArr[i][1];
        if (curCol !== lastCol) {
            lastCol = curCol;
            resArr.push([]);
        }
        resArr[resArr.length - 1].push(nodeArr[i][2]);
    }

    return resArr;
};