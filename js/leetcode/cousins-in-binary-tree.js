/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if(!root) return false;

    let findX = false, findY = false,
        xParent = null, yParent = null,
        xDepth = null, yDepth = null,
        queue = [root], curDepth = 0;

    const updateByChildNode = (node, nodeParent, curDepth) => {
        if(node.val === x) {
            findX = true;
            xParent = nodeParent;
            xDepth = curDepth;
        }
        if(node.val === y) {
            findY = true;
            yParent = nodeParent;
            yDepth = curDepth;
        }
    }

    while(queue.length && !(findX && findY)) {
        let len = queue.length;
        for(let i = 0; i < len; ++i) {
            let curNode = queue.shift();
            if(curNode.left) {
                queue.push(curNode.left);
                updateByChildNode(curNode.left, curNode, curDepth + 1);
            }
            if(curNode.right) {
                queue.push(curNode.right);
                updateByChildNode(curNode.right, curNode, curDepth + 1);
            }
        }
        curDepth++;
    }

    return findX && findY && (xParent !== yParent) && xDepth === yDepth;
};