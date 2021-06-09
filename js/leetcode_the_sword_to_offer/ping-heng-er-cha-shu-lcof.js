/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 树节点
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    // 深度
    const postorderTraverse = (root) => {
        if (!root) return 0;
        let leftDep = postorderTraverse(root.left);
        if (leftDep === -1) return -1;
        let rightDep = postorderTraverse(root.right);
        if (rightDep === -1) return -1;
        if (Math.abs(leftDep - rightDep) > 1) {
            return -1;
        }
        return Math.max(leftDep, rightDep) + 1;
    };

    return !(postorderTraverse(root) === -1);
};