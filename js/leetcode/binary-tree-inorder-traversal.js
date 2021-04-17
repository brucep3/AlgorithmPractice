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
var inorderTraversal = function(root) {
    let arr = [], stack = [], curNode = root;

    const visit = (root) => {
        arr.push(root.val);
    };

    while (stack.length > 0 || curNode) {
        if (curNode) {
            stack.push(curNode);
            curNode = curNode.left;
        } else {
            curNode = stack.pop();
            visit(curNode);
            curNode = curNode.right;
        }
    }

    return arr;
};