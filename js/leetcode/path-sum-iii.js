/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 树的节点个数 >= 0
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0;

    let count = 0;

    const preorderTraverse = (root, curPath) => {
        if (!root) return;
        for (let i = 0; i < curPath.length; i++) {
            curPath[i] += root.val;
            curPath[i] === targetSum && count++;
        }
        root.val === targetSum && count++;
        curPath.push(root.val);
        preorderTraverse(root.left, curPath);
        preorderTraverse(root.right, curPath);
        curPath.pop();
        for (let i = 0; i < curPath.length; i++) {
            curPath[i] -= root.val;
        }
    }

    preorderTraverse(root, []);
    return count;
};