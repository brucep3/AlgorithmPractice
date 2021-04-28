/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 传到当前节点：子节点最大值，子节点的子节点最大值
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    let max = Number.MIN_SAFE_INTEGER;

    const postorder = (root) => {
        if (!root) return [0, 0];
        let l = postorder(root.left);
        let r = postorder(root.right);
        let selCur = l[1] + root.val + r[1],
            noSelCur = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
        max = Math.max(max, selCur, noSelCur);
        return [selCur, noSelCur];
    };

    postorder(root);
    return max;
};
