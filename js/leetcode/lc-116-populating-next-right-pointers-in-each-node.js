/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * lc-116. Populating Next Right Pointers in Each Node
 * Solution: BFS
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return null;

    const queue = [root];
    while (queue.length) {
        let len = queue.length;

        let cur = queue.shift();
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);

        for (let i = 1; i < len; ++i) {
            cur.next = queue.shift();
            cur = cur.next;
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        cur.next = null;
    }

    return root;
};