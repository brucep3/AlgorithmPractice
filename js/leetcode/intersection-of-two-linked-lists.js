/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * TODO: Optimize
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    let arrA = [], arrB = [], aIter = headA, bIter = headB;
    while(aIter) {
        arrA.push(aIter);
        aIter = aIter.next;
    }
    while(bIter) {
        arrB.push(bIter);
        bIter = bIter.next;
    }
    let result = null;
    while(arrA.length && arrB.length) {
        let temp = arrA.pop();
        if(temp === arrB.pop()) {
            result = temp;
        } else{
            break;
        }
    }
    return result;
};