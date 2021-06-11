/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * lc-2. Add Two Numbers
 * 读题：两个数字相加，数字的表示为逆序
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(-1, null),
        cur = dummyHead,
        carry = 0;

    for (;
        l1 || l2;
        cur = cur.next, l1 = l1 ? l1.next : l1, l2 = l2 ? l2.next : l2) {
        let sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        if (sum >= 10) carry = 1;
        else carry = 0;
        sum = sum % 10;
        cur.next = new ListNode(sum, null);
    }

    if (carry) {
        cur.next = new ListNode(1, null);
    }

    return dummyHead.next;
};