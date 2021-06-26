/**
 * 剑指Offer-09. 用两个栈实现队列
 * 解题思路：
 * 需要在序列的头尾都能操作，所以将两个栈顶作为序列两端
 * [ 栈顶 -> 栈底] , [ 栈底 <- 栈顶 ]
 * 时间复杂度： 插入操作和删除操作都是 O(1)，其中删除操作对于每个数据最多操作 2 次
 */

var CQueue = function () {
    this.popStack = [];
    this.pushStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.pushStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.popStack.length === 0) {
        while (this.pushStack.length) this.popStack.push(this.pushStack.pop());
    }
    if (this.popStack.length) return this.popStack.pop();
    else return -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */