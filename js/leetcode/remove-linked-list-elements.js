/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let dump = new ListNode(-1, head),
        pre = dump,
        cur = head;

    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next;
        } else {
            pre = cur;
        }
        cur = cur.next;
    }

    return dump.next;
};