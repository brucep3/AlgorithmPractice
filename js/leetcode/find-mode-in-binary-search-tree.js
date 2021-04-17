/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 节点大于1个
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let count = 0, pre = Number.MAX_SAFE_INTEGER, maxResArr = [], maxCount = 1;

    const visit = (root) => {
        if (root.val === pre) {
            count++;
        } else {
            count = 1;
        }
        if (count === maxCount) {
            maxResArr.push(root.val);
        } else if (count > maxCount) {
            maxResArr = [root.val];
            maxCount = count;
        }
        pre = root.val;
    };

    const inorderTraverse = (root) => {
        if ( !root ) return;
        inorderTraverse(root.left);
        visit(root);
        inorderTraverse(root.right);
    };

    inorderTraverse(root);
    return maxResArr;
};