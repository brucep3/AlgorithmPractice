/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * lc-671. Second Minimum Node In a Binary Tree
 * Solution: DFS (Preorder Traverse of Binary Tree)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    const MIN = root.val;
    let res = Number.MAX_SAFE_INTEGER;

    const preorderTraverse = function dfs(root) {
        if (!root) return;

        if (root.val > MIN) res = Math.min(root.val, res);
        dfs(root.left);
        dfs(root.right);

    };

    preorderTraverse(root);

    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};