/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * lc-863. All Nodes Distance K in Binary Tree
 * Read the Problem:
 * Solution: DFS + BFS
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {TreeNode} root 0 <= node.val <= 500
 * @param {TreeNode} target
 * @param {number} k 0 <= K <= 1000
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    const doubleLink = function dfs(root) {
        if (root.left) {
            root.left.father = root;
            dfs(root.left);
        }

        if (root.right) {
            root.right.father = root;
            dfs(root.right);
        }
    };

    doubleLink(root);

    const queue = [target];
    for (let visit = new Set().add(target), count = 0; queue.length && count < k; ++count) {
        let len = queue.length;
        for (let i = 0; i < len; ++i) {
            let cur = queue.shift();
            ["left", "right", "father"].forEach(
                (key) => {
                    if (cur[key] && !visit.has(cur[key])) {
                        queue.push(cur[key]);
                        visit.add(cur[key]);
                    }
                }
            );
        }
    }

    return queue.map(node => node.val);
};