/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let preHead = new ListNode(-1), head = preHead;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            // l1.val >= l2.val
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    if(l1) head.next = l1;
    if(l2) head.next = l2;
    return preHead.next;
};