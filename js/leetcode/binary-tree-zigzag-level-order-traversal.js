/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 节点数量 [0, 2000]
 * 从左到右
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let ans = levelOrder(root);
    let isReverse = false;
    for (let i = 0; i < ans.length; ++i) {
        if (isReverse) {
            ans[i].reverse();
        }
        isReverse = !isReverse;
    }
    return ans;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
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