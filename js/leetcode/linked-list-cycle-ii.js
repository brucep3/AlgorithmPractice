/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head, slow = head, hasCycle = false;
    for (; slow && fast && fast.next;) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) {
        return null;
    }
    let res = head;
    while (res !== slow) {
        res = res.next;
        slow = slow.next;
    }
    return res;
};