/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
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