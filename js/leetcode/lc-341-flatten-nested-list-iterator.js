/**
 * lc-341. Flatten Nested List Iterator (341. 扁平化嵌套列表迭代器)
 * Solution:
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

/**
 * 重复调用 next 直到 hasNext 返回 false
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stk = [nestedList];
};


/**
 * 重复调用 next 直到 hasNext 返回 false
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.stk.length > 0 && this.stk[this.stk.length - 1].length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    let cur = this.stk.pop();

    for (; cur instanceof Array;) {
        let first = cur.pop();
        if (cur.length) this.stk.push(cur);
        cur = first;
    }

    return cur;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

var nestedList =
    [[1, 1], 2, [1, 1]];
var i = new NestedIterator(nestedList), a = [];
while (i.hasNext()) a.push(i.next());