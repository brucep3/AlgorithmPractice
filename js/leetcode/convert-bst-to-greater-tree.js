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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;

    const postorderTraverse = (root) => {
        if(!root) return;
        postorderTraverse(root.right);
        root.val += sum;
        sum = root.val;
        postorderTraverse(root.left);
    };

    postorderTraverse(root);
    return root;
};