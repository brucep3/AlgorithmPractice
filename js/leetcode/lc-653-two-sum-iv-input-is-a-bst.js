/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 653. Two Sum IV - Input is a BST (653. 两数之和 IV - 输入 BST)
 * Read the Problem: Two Sum + Binary Tree Traverse
 * Solution: HashTable
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const map = new Map();

    const preOrderTraverse = (root) => {
        if (!root) return false;

        if (map.has(k - root.val)) return true;
        map.set(root.val, true);

        if (preOrderTraverse(root.left, k)) return true;
        return preOrderTraverse(root.right, k);

    };

    return preOrderTraverse(root, k);
};