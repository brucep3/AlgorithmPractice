/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 层次遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];

    let arrRes = [], queue = [root];
    while (queue.length) {
        arrRes.push((queue[queue.length - 1]).val);
        let len = queue.length;
        for (let i = 0; i < len; ++i) {
            let curNode = queue.shift();
            curNode.left && queue.push(curNode.left);
            curNode.right && queue.push(curNode.right);
        }
    }

    return arrRes;
};