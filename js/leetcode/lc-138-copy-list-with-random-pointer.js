/**
 * lc-138. Copy List with Random Pointer
 * Solution: Hash Table
 * Time Complexity: O(n)
 * Space Complexity: O(n)
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
    let dummy = new Node(-1, head, null),
        dummyNew = new Node(-1, null, null);
    const oldToNew = new Map();

    for (let po = head, pn = dummyNew; po; po = po.next, pn = pn.next) {
        let cur = new Node(po.val, null, null);
        oldToNew.set(po, cur);
        pn.next = cur;
    }

    for (let pn = dummyNew.next, po = dummy.next; pn; pn = pn.next, po = po.next) {
        pn.random = oldToNew.get(po.random);
    }

    return dummyNew.next;
};