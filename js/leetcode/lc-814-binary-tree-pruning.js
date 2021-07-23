/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * lc-814. Binary Tree Pruning
 * Solution: Postorder Traverse
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {

    const postTraverse = (root) => {
        if (!root) return null;

        root.left = postTraverse(root.left);
        root.right = postTraverse(root.right);

        return (!root.left && !root.right && root.val === 0) ? null : root;
    };

    return postTraverse(root);
};