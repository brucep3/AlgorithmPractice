/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 树节点个数 >= 1
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let resArr = [];

    /**
     * 保证root ！== null
     * @param root
     * @param {[]} curArr
     */
    const preorderTraverse = (root, curArr) => {
        curArr.push(root.val);
        if (!root.left && !root.right) {
            resArr.push(curArr.join("->"));
            curArr.pop();
            return ;
        }
        root.left && preorderTraverse(root.left, curArr);
        root.right && preorderTraverse(root.right, curArr);
        curArr.pop();
    };

    preorderTraverse(root, []);
    return resArr;
};