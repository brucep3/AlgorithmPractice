/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 剑指 Offer 37. 序列化二叉树
 * 解题思路：BFS
 * 注意对 null 的处理
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return "null";

    // root !== null
    let queue = [root];
    // resArr[i] 表示树的第 i 层 序列化
    let resArr = [];

    while (queue.length) {
        let len = queue.length,
            curLine = [];

        for (let i = 0; i < len; ++i) {
            let cur = queue.shift();
            curLine.push(cur !== null ? cur.val : "null");
            // 左右指针为 null 也需要入队
            if (cur) queue.push(cur.left, cur.right);
        }

        resArr.push(curLine.join(","));
    }

    return resArr.join("\n");
};

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const lines = data.split("\n");

    if (lines.length === 1 && lines[0] === "null") return null;

    let dummyHead = new TreeNode(-1),
        preLine = [dummyHead];

    for (let i = 0; i < lines.length; ++i) {
        let curLine = lines[i].split(",").map(
            val => {
                if (val === "null") return null;
                else return new TreeNode(+val);
            });

        for (let slow = 0, fast = 0; slow < preLine.length && fast < curLine.length; ++fast) {
            if (fast % 2 === 0) {
                preLine[slow].left = curLine[fast];
            } else if (fast % 2 === 1) {
                preLine[slow++].right = curLine[fast];
            }
        }

        preLine = curLine.filter(node => node !== null);
    }

    return dummyHead.left;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */