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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let arr1 = [], arr2 = []

    const preorderTraverse = (root, arr) => {
        if(!root) {
            return;
        }
        if(!root.left && !root.right) {
            arr.push(root.val);
        }
        preorderTraverse(root.left, arr);
        preorderTraverse(root.right, arr);
    };

    preorderTraverse(root1, arr1);
    preorderTraverse(root2, arr2);

    if(arr1.length === arr2.length) {
        for(let i = 0; i < arr1.length; ++i) {
            if(arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
};