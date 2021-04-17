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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let stack = [], curNode, arr = [];

    const visit = (root) => {
        arr.push(root.val);
    };

    if(root === null) {
        return arr;
    }
    stack.push(root);
    while (stack.length > 0) {
        curNode = stack.pop();
        visit(curNode);
        if (curNode.right) {
            stack.push(curNode.right);
        }
        if (curNode.left) {
            stack.push(curNode.left);
        }
    }

    return arr;
};