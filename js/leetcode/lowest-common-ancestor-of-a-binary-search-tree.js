/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 树节点个数 >= 2；
 * 值唯一
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let min = Math.min(p.val, q.val),
        max = Math.max(p.val, q.val);

    const postorderTraverse = (root) => {
        if (root.val >= min && root.val <= max) return root;
        if (root.val < min) return postorderTraverse(root.right);
        if (root.val > max) return postorderTraverse(root.left);
    };

    return postorderTraverse(root);
};