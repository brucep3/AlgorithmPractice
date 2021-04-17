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
var diameterOfBinaryTree = function(root) {
    let ans = 0;

    const postorderTraverse = (root) => {
        if (!root) return 0;
        let leftRes = postorderTraverse(root.left);
        let rightRes = postorderTraverse(root.right);
        ans = Math.max(ans, leftRes + rightRes + 1);
        return Math.max(leftRes, rightRes) + 1;
    }

    return postorderTraverse(root);
};