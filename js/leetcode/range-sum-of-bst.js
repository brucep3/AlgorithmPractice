/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 树节点个数 >= 1
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;

    const inorderTraverse = (root) => {
        if(!root) return;
        if(low <= root.val && root.val <= high) {
            inorderTraverse(root.left);
            sum += root.val;
            inorderTraverse(root.right);
        } else if(root.val > high) {
            inorderTraverse(root.left);
        } else if (root.val < low) {
            inorderTraverse(root.right);
        }
    }

    inorderTraverse(root);
    return sum;
};