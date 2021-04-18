/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {

    // 新建树
    // const preorderTraverse = (root1, root2) => {
    //     if (!root1 && !root2) {
    //         return null;
    //     } else if (root1 && root2) {
    //         return new TreeNode(root1.val + root2.val, preorderTraverse(root1.left, root2.left)
    //             , preorderTraverse(root1.right, root2.right));
    //     } else if (root1 && !root2) {
    //         return new TreeNode(root1.val, preorderTraverse(root1.left, null)
    //             , preorderTraverse(root1.right, null));
    //     } else if (!root1 && root2) {
    //         return new TreeNode(root2.val, preorderTraverse(null, root2.left)
    //             , preorderTraverse(null, root2.right));
    //     }
    // };

    // 原地：root1上修改
    const preorderTraverse = (root1, root2) => {
        if (root1 && root2) {
            root1.val += root2.val;
            root1.left = preorderTraverse(root1.left, root2.left);
            root1.right = preorderTraverse(root1.right, root2.right);
            return root1;
        }
        if (root1 || root2) return root1 || root2;
        return null;
    };

    return preorderTraverse(root1, root2);
};