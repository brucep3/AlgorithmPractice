/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 树节点个数 >= 0
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (root === null) return new TreeNode(val, null, null);

    // 至少1个节点
    const inorderTraverse = (root, val) => {
        if (!root) return;
        if (root.val > val) {
            if (root.left) {
                inorderTraverse(root.left, val);
            } else {
                root.left = new TreeNode(val, null, null);
            }
        } else {
            if (root.right) {
                inorderTraverse(root.right, val);
            } else {
                root.right = new TreeNode(val, null, null);
            }
        }
    };

    inorderTraverse(root, val);
    return root;
};