/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 剑指Offer-06. 从尾到头打印链表
 * 解题思路：栈
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    const stk = [];

    for (let cur = head; cur; cur = cur.next) {
        stk.push(cur.val);
    }

    const resArr = [];
    for (; stk.length;) {
        resArr.push(stk.pop());
    }

    return resArr;
};