/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 树节点个数 >= 2；
 * 节点值唯一；
 * LCA必存在；
 * 解题要点：后序遍历是深度最深的、
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let findP = false, findQ = false;

    const postorderTraverse = (root, p, q) => {
        if (!root) return;
        if (!findP && !findQ) {
            let leftRes = postorderTraverse(root.left, p, q);
            if (leftRes) return leftRes;
            let rightRes = postorderTraverse(root.right, p, q);
            if (rightRes) return rightRes;
            if (root === p) findP = true;
            if (root === q) findQ = true;
            if (findP && findQ) {
                return root;
            }
        }
        if (findP && findQ) return;
        // findP || findQ
        if (root === p) findP = true;
        if (root === q) findQ = true;
        postorderTraverse(root.left, p, q);
        postorderTraverse(root.right, p, q);
    };

    return postorderTraverse(root, p, q);
};