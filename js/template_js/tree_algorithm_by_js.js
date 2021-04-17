/**
 * @Description 二叉树常见问题和答案模板
 * @Author PAN Bruce
 * @Date 2021/4/13
 */

/**
 * Definition for a binary tree node.
 * @param val
 * @param left
 * @param right
 * @constructor
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 */
function visit(root) {
    console.log(root.val);
}

// 二叉树遍历：前中后层次遍历（递归和非递归）
/**
 * 前序遍历（递归）
 * @param {TreeNode} root
 */
var preorderTraverse = function (root) {
    if (!root) return;
    visit(root);
    preorderTraverse(root.left);
    preorderTraverse(root.right);
};

/**
 * 前序遍历（非递归）：使用1个栈实现 -> 根据前序遍历的顺序，右子树先压栈，左子树后压栈
 * @param {TreeNode} root
 */
var preorderTraverseNonrecursive = function (root) {
    let stack = [], curNode;
    if (root === null) {
        return;
    }
    stack.push(root);
    while (stack.length > 0) {
        curNode = stack.pop();
        visit(curNode);
        if (curNode.right) {
            stack.push(curNode.right);
        }
        if (curNode.left) {
            stack.push(curNode.left);
        }
    }
};

/**
 * 前序遍历（非递归）：我的实现
 * @param {TreeNode} root
 */
var myPreorderTraverseNonrecursive = function (root) {
    let stack = [], curNode = root;
    while (stack.length > 0 || curNode) {
        if (!curNode) {
            curNode = stack.pop().right;
        }
        visit(curNode);
        if (curNode.right) {
            stack.push(curNode);
        }
        curNode = curNode.left;
    }
};

/**
 * 中序遍历（递归）
 * @param {TreeNode} root
 */
var inorderTraverse = function (root) {
    if (!root) return;
    inorderTraverse(root.left);
    visit(root);
    inorderTraverse(root.right);
};

/**
 * 中序遍历（非递归）:使用1个栈实现
 * @param {TreeNode} root
 */
var inorderTraverseNonrecursive = function (root) {
    let stack = [], curNode = root;
    while (stack.length > 0 || curNode) {
        if (curNode) {
            stack.push(curNode);
            curNode = curNode.left;
        } else {
            curNode = stack.pop();
            visit(curNode);
            curNode = curNode.right;
        }
    }
};

/**
 * 后续遍历（递归）
 * @param {TreeNode} root
 */
var postorderTraverse = function (root) {
    if (!root) return;
    postorderTraverse(root.left);
    postorderTraverse(root.right);
    visit(root);
};

/**
 * 后续遍历（迭代）：: 模拟递归遍历，使用1个栈+1个前置节点；
 * 后续遍历的特点是，最后一个访问的节点必然是当前节点的左或右子节点
 * @param {TreeNode} root
 */
var postorderTraverseNonrecursive = function (root) {
    let stack1 = [root],
        curNode = root,
        preNode = null; // preNode表示刚访问过的节点，用来判断当前节点是左还是右
    while (stack1.length || curNode) {
        if (curNode) {
            // 最左
            while (curNode.left) {
                stack1.push(curNode);
                curNode = curNode.left;
            }
            // 右边
            if (curNode.right) {
                stack1.push(curNode);
                curNode = curNode.right;
            }
            stack1.push(curNode);
        } else {
            // curNode === null，从栈中取
            curNode = stack1[stack1.length-1];
            if ((curNode.left === null && curNode.right === null) || curNode.right === preNode) {
                visit(curNode);
                preNode = stack1.pop();
                curNode = null;
                continue;
            }
            if (curNode.left === preNode) {
                curNode = curNode.right;
            }
        }
    }
};

/**
 * 层序遍历：使用队列
 * @param {TreeNode} root
 */
var levelOrderTraverse = function (root) {
    if (!root) return;
    // root
    const queue = [root];
    while (queue.length) {
        let curNode = queue.shift();
        visit(curNode);
        curNode.left && queue.push(curNode.left);
        curNode.right && queue.push(curNode.right);
    }
};

// 二叉树构造：二叉树序列化与反序列化(lc-297) / 从（前序和中序/中序和后序/前序和后序）遍历序列构造二叉树（递归/迭代）

// 以下来自：https://juejin.cn/post/6844904175562653710#heading-99
/**
 * 已知二叉树求值：二叉树深度（lc-107）、二叉树最近公共祖先(lc-236)、二叉树直径长度、根到叶子节点数字之和(lc-112)；
 * 二叉树的判断和操作：判断对称二叉树(lc-101)、判断二叉搜索树(lc-98)、翻转二叉树（）、将二叉搜索树转换为累加树（）、合并二叉树、
 * 输入两颗二叉树A，B，判断B是不是A的子结构（）、操作给定二叉树，将其变换为源二叉树的镜像、判断平衡二叉树
 * 二叉树路径(lc-112, lc-113, lc-437)：路径和为某一值、最大路径和；
 * 二叉树其他：左视图/右视图、不同二叉索引树的个数、根据js的依赖关系树，输出合理的打包顺序数组（阿里面试题）、二叉树展开为链表；
 * 二叉搜索树：二叉搜索树中第K小的元素(lc-230)、输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。
 * 假设输入的数组的任意两个数字都互不相同、二叉搜索树转换成排序的双向链表；
 */

