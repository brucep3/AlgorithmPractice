/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 树节点个数 >= 1；
 * 节点的值唯一；
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    const preorderTraverse = (il, ir, pl, pr) => {
        if (pl > pr || il > ir) return null;
        // Left subtree
        let i;
        for (i = il; i <= ir; ++i) {
            if (inorder[i] === postorder[pr]) {
                break;
            }
        }
        let leftSub = preorderTraverse(il, i-1, pl, pl+(i-1-il));
        let rightSub = preorderTraverse(i+1, ir, pr-1-(ir-i-1), pr-1)
        return new TreeNode(postorder[pr], leftSub, rightSub);
    };

    return preorderTraverse(0, inorder.length-1, 0, postorder.length-1);

};


/**
 * Definition for a binary tree node.
 * @param val
 * @param left
 * @param right
 * @constructor
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

buildTree([9,3,15,20,7], [9,15,7,20,3]);