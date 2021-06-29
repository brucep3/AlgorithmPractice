/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 剑指 Offer 32 - I. 从上到下打印二叉树
 * 解题思路：队列
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const queue = [root],
        resArr= [];

    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; ++i) {
            let cur = queue.shift();
            resArr.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }

    return resArr;
};