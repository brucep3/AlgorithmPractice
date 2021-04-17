/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 先序遍历
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;

    /**
     * 保证root ！== null
     * @param root
     * @param curSum
     */
    const preorderTraverse = (root, curSum) => {
        curSum += root.val;
        if (!root.left && !root.right) {
            return targetSum === curSum;
        }
        if (root.left && preorderTraverse(root.left, curSum)) {
            return true;
        }
        if (root.right && preorderTraverse(root.right, curSum)) {
            return true;
        }
        return false;
    };

    return preorderTraverse(root, 0);
};