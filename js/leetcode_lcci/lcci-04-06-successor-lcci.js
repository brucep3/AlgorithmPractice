/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Solution: Inorder Traversal of Tree
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    const inorderTraverse = (root) => {
        if (!root) return null;
        if (root.val > p.val) {
            let leftRes = inorderTraverse(root.left);
            if (leftRes) return leftRes;
            else return root;
        }
        return inorderTraverse(root.right);
    };
    return inorderTraverse(root);
};