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
var postorderTraversal = function (root) {
    let arr = [];
    if (!root) return arr;

    const visit = (root) => {
        arr.push(root.val);
    };

    let stack1 = [root],
        curNode = root,
        preNode = null; // preNode表示刚访问过的节点，用来判断当前节点是左还是右
    while (stack1.length || curNode) {
        if (curNode) {
            // 最左
            while (curNode.left) {
                stack1.push(curNode);
                curNode = curNode.left;
            }
            // 右边
            if (curNode.right) {
                stack1.push(curNode);
                curNode = curNode.right;
            }
            stack1.push(curNode);
        } else {
            // curNode === null，从栈中取
            curNode = stack1[stack1.length-1];
            if ((curNode.left === null && curNode.right === null) || curNode.right === preNode) {
                visit(curNode);
                preNode = stack1.pop();
                curNode = null;
                continue;
            }
            if (curNode.left === preNode) {
                curNode = curNode.right;
            }
        }
    }

    return arr;
};

