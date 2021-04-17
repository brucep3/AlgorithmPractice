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
 * @return {boolean}
 */
var isSymmetric = function (root) {

    const preOrderTraverse = (root1, root2) => {
        if (!root1 && !root2) {
            return true;
        }
        if (!root1 || !root2) {
            return false;
        }
        // root1 && root2
        return (root1.val === root2.val) && preOrderTraverse(root1.left, root2.right)
            && preOrderTraverse(root1.right, root2.left);
    };

    return preOrderTraverse(root, root);
};