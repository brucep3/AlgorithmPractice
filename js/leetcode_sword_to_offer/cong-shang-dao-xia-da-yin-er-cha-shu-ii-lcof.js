/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 剑指Offer-32-II. 从上到下打印二叉树 II
 * 解题思路：层次遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let queue = [], ans = [], tempAns;

    const visit = (root) => {
        tempAns.push(root.val);
    };

    if (!root) return ans;
    // root
    queue.push(root);
    while (queue.length) {
        tempAns = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let curNode = queue.shift();
            visit(curNode);
            curNode.left && queue.push(curNode.left);
            curNode.right && queue.push(curNode.right);
        }
        ans.push(tempAns);
    }

    return ans;
};