/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    const inorderTraverse = (root) => {
        if (!root) return;
        let node = root.left;
        root.left = root.right;
        root.right = node;
        inorderTraverse(root.left);
        inorderTraverse(root.right);
    };

    inorderTraverse(root);
    return root;
};