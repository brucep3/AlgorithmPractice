/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1305. All Elements in Two Binary Search Trees (1305. 两棵二叉搜索树中的所有元素)
 * Solution: Inorder Traverse + Double Point
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    const getArr = (root, arr) => {
        if (!root) return;
        if (root.left) getArr(root.left, arr);
        arr.push(root.val);
        if (root.right) getArr(root.right, arr);
    };

    const arr1 = [];
    getArr(root1, arr1);
    const arr2 = [];
    getArr(root2, arr2);

    const resArr = [];
    let i = 0, j = 0;
    for (; i < arr1.length && j < arr2.length;) {
        if (arr1[i] <= arr2[j]) resArr.push(arr1[i++]);
        else resArr.push(arr2[j++]);
    }
    while (i < arr1.length) resArr.push(arr1[i++]);
    while (j < arr2.length) resArr.push(arr2[i++]);

    return resArr;
};