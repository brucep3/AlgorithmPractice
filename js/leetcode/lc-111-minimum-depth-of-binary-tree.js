/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 111. Minimum Depth of Binary Tree
 * Solution: DFS
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;

    let min = Number.MAX_SAFE_INTEGER,
        depth = 0;
    const dfs = root => {
        if (!root) return;
        depth++;
        if (!root.left && !root.right) min = Math.min(depth, min);
        dfs(root.left);
        dfs(root.right);
        depth--;
    };

    dfs(root);
    return min;
};