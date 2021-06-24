/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    const postOrderTraverse = (root) => {
        if (!root) return 0;
        return Math.max(postOrderTraverse(root.left), postOrderTraverse(root.right)) + 1;
    }

    return postOrderTraverse(root);

};