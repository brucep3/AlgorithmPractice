/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 589. N-ary Tree Preorder Traversal (589. N 叉树的前序遍历)
 * Solution: DFS
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const res = [];

    const dfs = (root) => {
        if (!root) return;
        res.push(root.val);
        for (const child of root.children) {
            dfs(child);
        }
    }

    dfs(root);
    return res;
};