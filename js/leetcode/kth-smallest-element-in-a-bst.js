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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [0];

    const inorderTraverse = (root) => {
        if (!root) return;
        inorderTraverse(root.left);
        arr.push(root.val);
        inorderTraverse(root.right);
    };

    inorderTraverse(root);
    return arr[k];
};