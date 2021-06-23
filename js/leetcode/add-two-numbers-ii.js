/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * lc-445. Add Two Numbers II
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const stk1 = [], stk2 = [];

    for (let t = l1; t; t = t.next) {
        stk1.push(t);
    }

    for (let t = l2; t; t = t.next) {
        stk2.push(t);
    }

    let cur = null,
        carry = 0;

    for (; stk1.length || stk2.length;) {
        let val1 = stk1.length ? stk1.pop().val : 0;
        let val2 = stk2.length ? stk2.pop().val : 0;
        carry += val1 + val2;

        cur = new ListNode(carry % 10, cur);
        carry = Math.floor(carry / 10);
    }

    if (carry === 1) {
        cur = new ListNode(1, cur);
    }

    return cur;
};