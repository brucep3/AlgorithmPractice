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
 * Solution: Simulation (Hash Table)
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(n)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    const map = new Map();

    const getIdx = function dfs(root, i, j) {
        if (!root) return;

        if (!map.has(j)) map.set(j, new Map());
        if (!map.get(j).has(i)) map.get(j).set(i, []);
        map.get(j).get(i).push(root.val);

        dfs(root.left, i + 1, j - 1);
        dfs(root.right, i + 1, j + 1);
    };

    getIdx(root, 0, 0);

    const MAX = 1000,
        resArr = [];
    for (let i = -MAX; i <= MAX && resArr.length <= map.size; ++i) {
        if (!map.has(i)) continue;

        resArr.push([]);
        for (let j = -MAX, curM = map.get(i); j <= MAX; ++j) {
            if (curM.has(j)) {
                resArr[resArr.length - 1].push(...curM.get(j).sort((a, b) => a - b));
            }
        }
    }

    return resArr;
};