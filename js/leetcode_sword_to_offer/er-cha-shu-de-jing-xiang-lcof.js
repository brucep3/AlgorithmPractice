/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    const inorderTraverse = (root) => {
        if (!root) return;
        let node = root.left;
        root.left = root.right;
        root.right = node;
        inorderTraverse(root.left);
        inorderTraverse(root.right);
    };

    inorderTraverse(root);
    return root;
};