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
var getMinimumDifference = function(root) {
    let ans = Number.MAX_SAFE_INTEGER, preVal = -1;
    const inorderTraverse = (root) => {
        if (!root) return;
        inorderTraverse(root.left);
        if (preVal !== -1) {
            ans = Math.min(ans, root.val - preVal);
        }
        preVal = root.val;
        inorderTraverse(root.right);
    };
    inorderTraverse(root);
    return ans;
};