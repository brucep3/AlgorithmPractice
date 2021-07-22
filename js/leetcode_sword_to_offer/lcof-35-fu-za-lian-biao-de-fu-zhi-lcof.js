/**
 * 剑指 Offer 35. 复杂链表的复制
 * Solution: Linked List (Modifying Pointing)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    const dummyOrig = new Node(-1, head, null);

    for (let po = dummyOrig.next; po; po = po.next) {
        let copy = new Node(po.val, po.next, null);
        po.next = copy;
        po = copy;
    }

    for (let po = dummyOrig.next; po; po = po.next.next) {
        let [orig, copy] = [po, po.next];
        if (orig.random) copy.random = orig.random.next;
    }

    const dummyCopy = new Node(-1, null, null);
    for (let po = dummyOrig.next, pc = dummyCopy; po; po = po.next, pc = pc.next) {
        let [, copy] = [po, po.next];
        po.next = copy.next
        pc.next = copy;
    }

    return dummyCopy.next;
};