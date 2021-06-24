/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * lc-19. Remove Nth Node From End of List
 * 解题思路：双指针（一个序列快慢指针）
 * @param {ListNode} head 链表长度 >= 1
 * @param {number} n 保证合法
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 有 k 个，倒数第 k 个为 fast = null，slow = head，fast 从 dummy -> null，slow 从 dummy 到 tail
    let dummyHead = new ListNode(-1, head);

    // 删除倒数第 n 个，找到倒数第 n + 1个
    let fast = dummyHead;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    let slow = dummyHead;
    for (; fast; fast = fast.next, slow = slow.next) {
    }

    slow.next = slow.next.next;

    return dummyHead.next;

};