/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 至少1个节点
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let min = root.val, secMin = Number.MAX_SAFE_INTEGER;

    const traverse = (root) => {
        if (!root) return;
        if (root.val > min && root.val < secMin) {
            secMin = Math.min(root.val, secMin);
        }
        traverse(root.left);
        traverse(root.right);
    };

    traverse(root);
    return secMin === Number.MAX_SAFE_INTEGER ? -1 : secMin;
};