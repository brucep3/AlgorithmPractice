/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(!B) return false;

    const traverse = (root1, root2) => {
        if (!root2) return true
        if (!root1) return false;
        if (root1 && root2 && root1.val === root2.val) {
            let leftRes = traverse(root1.left, root2.left);
            let rightRes = traverse(root1.right, root2.right);
            if (leftRes && rightRes) return true;
        }
        if (root1.left) {
            let leftRes = traverse(root1.left, B);
            if (leftRes) return leftRes;
        }
        if (root1.right) {
            let rightRes = traverse(root1.right, B);
            if (rightRes) return rightRes;
        }
        return false;
    };

    return traverse(A, B);
};