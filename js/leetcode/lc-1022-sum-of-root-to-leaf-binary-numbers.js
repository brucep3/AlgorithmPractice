/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Solution: Tree Traversal
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    let sum = 0;

    const dfs = (root, cur) => {
        if (!root) return;
        cur = (cur << 1) + root.val;
        if (!root.left && !root.right) sum += cur;
        dfs(root.left, cur);
        dfs(root.right, cur);
        cur >>= 1;
    };

    dfs(root);
    return sum;
};