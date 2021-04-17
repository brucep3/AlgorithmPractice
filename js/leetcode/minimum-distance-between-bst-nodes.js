/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 节点个数大于2个；取值[0, 10^5]
 * 相邻数字的差 -> 中序遍历；
 * 保存数组 -> 只需要保存前1个数字，计算完即可
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let ans = Number.MAX_SAFE_INTEGER, preVal = -1;
    const inorderTraverse = (root) => {
        if(!root) {
            return;
        }
        inorderTraverse(root.left);
        if(preVal !== -1) {
            ans = Math.min(root.val - preVal, ans);
            preVal = root.val;
        } else {
            preVal = root.val;
        }
        inorderTraverse(root.right);
    }
    inorderTraverse(root);
    return ans;
};
