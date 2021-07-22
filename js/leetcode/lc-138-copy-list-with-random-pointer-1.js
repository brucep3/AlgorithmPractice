/**
 * lc-138. Copy List with Random Pointer
 * Solution: Linked List (Modify Pointing)
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
    const dummy = new Node(-1, head, null);

    for (let p = dummy.next; p;) {
        let copy = new Node(p.val, p.next, null);
        p.next = copy;
        p = copy.next;
    }

    for (let po = dummy.next; po; po = po.next.next) {
        let [oldNode, newNode] = [po, po.next];
        if (oldNode.random) newNode.random = oldNode.random.next;
    }

    const dummyRes = new Node(-1, null, null);
    for (let po = dummy.next, pn = dummyRes; po; pn = pn.next, po = po.next) {
        let [, newNode] = [po, po.next];
        pn.next = newNode;
        po.next = newNode.next;
    }

    return dummyRes.next;
};