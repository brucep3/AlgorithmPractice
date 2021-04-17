/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 树的节点个数大于1个
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    // 遍历数组，根据前序遍历顺序，使用1个栈
    let stack = [new TreeNode(preorder[0], null, null)],
        i = 1,
        root = stack[0], // 返回
        cur = root,
        node;
    for (let i = 1; i <preorder.length; ++i) {
        node = new TreeNode(preorder[i], null, null);
        if (preorder[i] < cur.val) {
            stack.push(node);
            cur.left = node;
            cur = cur.left;
        } else if (preorder[i] > cur.val) {
            cur = stack.pop();
            while (stack.length && stack[stack.length - 1].val < preorder[i]) {
                cur = stack.pop();
            }
            stack.push(node);
            cur.right = node;
            cur = cur.right;
        }
    }
    return root;
};

// let root = bstFromPreorder([8,5,1,7,10,12]);
// console.log(root.left, root.right);
