/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * TODO: 优化写法
 * 节点个数大于1
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left === right) return head;

    let pos = 1, cur = head, leftPre = null;
    while(pos !== left) {
        leftPre = cur;
        cur = cur.next;
        pos++;
    }

    // pos === left && cur = leftNode
    let leftNode = cur, midPre = null;
    while(pos !== right + 1) {
        let temp = cur.next;
        cur.next = midPre;
        midPre = cur;
        cur = temp;
        pos++;
    }

    // pos === right + 1 && midPre = rightNode && cur = rightNode.next
    let rightNode = midPre;
    leftNode.next = cur;

    if(left > 1) {
        leftPre.next = rightNode;
        return head;
    } else {
        return rightNode;
    }
};