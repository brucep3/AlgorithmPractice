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
 * @return {number}
 */
var maxDepth = function(root) {
    const postOrderTraverse = (root) => {
        if (!root) return 0;
        const leftAns = postOrderTraverse(root.left);
        const rightAns = postOrderTraverse(root.right);
        return Math.max(leftAns, rightAns) + 1;
    }

    return postOrderTraverse(root);
};
