// 双指针

/**
 * 双指针
 * 17道题
 * n数字之和：Two Sum(lc-1), 3Sum(lc-15), 3Sum Closest(lc-16)，4Sum(lc-18);
 * 雨水、容器类问题：Container With Most Water(lc-11),
 * Trapping Rain Water I, II(lc-42, 407),
 * Minimum Size Subarray Sum(lc-209)；
 * 链表类：Remove Nth Node From End of List(lc-19),
 * Palindrome Linked List(lc-234),
 * Linked List Cycle I, II(lc-141, 142),
 * 链表中倒数第k个节点(剑指Offer-22),
 * Merge Two Sorted Lists(lc-21, 与 剑指Offer-25 相同),
 * Intersection of Two Linked Lists(lc-160, 与 剑指Offer-52 相同)
 * 字符串类：Valid Palindrome I, II(lc-125)
 */

/**
 * 双指针模板分类
 * - 一个序列的快慢指针
 * - 一个序列的左右指针
 * - 两个序列的左右指针
 * - 两个序列的同向指针
 */

/**
 * 双指针（一个序列的快慢指针）模板
 * 快指针 fast 先移动，慢指针 slow 根据条件再移动
 * @param arr
 */
var doublePointTemplateV1 = (arr) => {
    let n = arr.length; // 序列长度
    // [f(ast), s(low)]
    for (let fast = 0, slow = 0; fast < n; fast++) {
        // slow 根据情况移动
        while (slow <= fast && check(fast, slow)) slow++;
    }

    const check = (x, y) => {
    };
}

/**
 * 双指针（一个序列左右指针）模板
 * 左指针 l 向 右移动，右指针 r 向左移动
 * @param arr
 */
var doublePointTemplateV2 = (arr) => {
    let n = arr.length; // 序列长度

    let l = 0, // l(eft)
        r = n - 1; // r(ight)

    for (; l < r;) {
        // l, r 根据情况移动
        if (check(l, r)) {
            l++;
        } else {
            r--;
        }
    }

    const check = (x, y) => {
    };
}

/**
 * 双指针（两个序列左右指针）模板：与单个序列的类似
 * @param arr1
 * @param arr2
 */
var doublePointTemplateV3 = (arr1, arr2) => {
    // 序列长度
    let n1 = arr1.length,
        n2 = arr2.length;

    let l = 0, // left
        r = n2 - 1; // right

    for (; l < n1 && r >= 0;) {
        // l, r 根据情况移动
        if (check(l, r)) {
            l++;
        } else {
            r--;
        }
    }

    const check = (x, y) => {
    };
}