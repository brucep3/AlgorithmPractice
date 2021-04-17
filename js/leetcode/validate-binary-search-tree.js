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
var isValidBST = function(root) {
    let pre = Number.MIN_SAFE_INTEGER;

    const inorderTraverse = (root) => {
        if (!root) return true;
        let lefAns = inorderTraverse(root.left);
        let curAns = root.val > pre;
        pre = root.val;
        return lefAns && curAns && inorderTraverse(root.right);
    };

    return inorderTraverse(root);
};