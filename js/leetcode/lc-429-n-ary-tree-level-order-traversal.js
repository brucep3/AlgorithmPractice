/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 429. N-ary Tree Level Order Traversal (429. N 叉树的层序遍历)
 * Solution: BFS
 * Time Complexity: O(n)
 * Spece Complexity: O(n)
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const queue = [root],
        res = [];
    while (queue.length) {
        const curLvl = [];
        let len = queue.length;

        for (let i = 0; i < len; ++i) {
            const cur = queue.shift();
            curLvl.push(cur.val);
            for (const ch of cur.children) queue.push(ch);
        }

        res.push(curLvl);
    }

    return res;
};