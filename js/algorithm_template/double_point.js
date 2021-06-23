// 双指针

/**
 * 双指针
 * 双指针又称为快慢指针，slow point, fast point
 * 总共17道题
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
 * 链表技巧
 * - 哨兵节点（头节点）：头节点的下一个结点是实际节点的第一个，命名为 preHead 或 dummyHead;
 */

/**
 * 双指针（单个序列快慢指针）模板
 */
var doublePointTemplateV1 = () => {
    // f(ast), s(low)
    for (let fast = 0, slow = 0; fast < n; fast++) {
        while (slow <= fast && check(fast, slow)) slow++;
    }
}

/**
 * 双指针（单个序列左右指针）模板
 */
var doublePointTemplateV2 = () => {
    // l(eft), r(ight)
}

/**
 * 双指针（两个序列）
 */
var doublePointTemplateV3 = () => {
    // p1(point1), p2(point2)
}