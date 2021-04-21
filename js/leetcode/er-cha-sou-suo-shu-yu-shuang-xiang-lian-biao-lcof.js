/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */

/**
 * 循环双向循环链表
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(!root) return root;

    let pre = null, // 当前节点的前1个节点，递归结束后指向最后1个节点
        head = null;

    const inorderTraverse = (root) => {
        if(!root) return null;
        inorderTraverse(root.left);
        if(!pre) {
            head = root;
        } else {
            pre.right = root;
            root.left = pre;
        }
        pre = root;
        inorderTraverse(root.right);
    };

    inorderTraverse(root);
    pre.right = head;
    head.left = pre;
    return head;
};