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
var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;

    const postorderTraverse = (root) => {
        if (!root) return Number.MIN_SAFE_INTEGER;
        let leftRes = postorderTraverse(root.left);
        let rightRes = postorderTraverse(root.right);
        let curMax = Math.max(leftRes, rightRes);
        curMax = Math.max(curMax + root.val, root.val);
        max = Math.max(max, root.val + leftRes + rightRes, curMax, root.val, leftRes, rightRes);
        return curMax;
    };

    postorderTraverse(root);
    return max;
};