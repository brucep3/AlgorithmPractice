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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let resArr = [];
    if (root === null) return resArr;

    /**
     * 保证root ！== null
     * @param root
     * @param curSum
     * @param {[]} curArr
     */
    const preorderTraverse = (root, curSum, curArr) => {
        curSum += root.val;
        curArr.push(root.val);
        if (!root.left && !root.right) {
            if (targetSum === curSum) {
                resArr.push(Array.from(curArr));
            }
            curArr.pop();
            return;
        }
        root.left && preorderTraverse(root.left, curSum, curArr);
        root.right && preorderTraverse(root.right, curSum, curArr);
        curArr.pop();
    };

    preorderTraverse(root, 0, []);
    return resArr;
};